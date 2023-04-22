import type { Metadata } from "next";
import { notFound } from "next/navigation";
import markdownToHtml from "lib/markdownToHtml";
import { getMD, getMDBySlug } from "lib/api";
import PostBody from "components/post-body";
import type { Page } from "app/types";

export default async function Page({ params }: Page) {
  if (!params?.slug || typeof params.slug !== "string") {
    notFound();
  }
  const post = await getMDBySlug("_pages", `${params.slug}.md`);
  const content = await markdownToHtml(post.content || "");
  return (
    <article className="mb-32">
      <PostBody content={content} />
    </article>
  );
}

export async function generateMetadata({ params }: Page): Promise<Metadata> {
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
