import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMD, getMDBySlug } from "lib/api";
import PostBody from "components/post-body";
import type { Page } from "app/types";

export default async function Page(props: Page) {
  const params = await props.params;
  if (!params?.slug || typeof params.slug !== "string") {
    notFound();
  }
  const post = await getMDBySlug("_pages", `${params.slug}.md`);
  return (
    <>
      <article>
        <PostBody content={post.html} />
      </article>
    </>
  );
}

export async function generateMetadata(props: Page): Promise<Metadata> {
  const params = await props.params;
  if (!params?.slug || typeof params.slug !== "string") {
    notFound();
  }
  const post = await getMDBySlug("_pages", `${params.slug}.md`);

  let metadata: Metadata = {
    title: post.title,
  };

  if (post.coverImage) {
    metadata = {
      ...metadata,
      ...{
        openGraph: {
          images: [post.coverImage],
        },
      },
    };
  }

  return metadata;
}

export const dynamicParams = false;
export async function generateStaticParams() {
  return getMD("_pages");
}
