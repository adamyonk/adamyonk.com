import type { Metadata } from "next";
import { getMDBySlug, getMD } from "lib/api";
import PostBody from "components/post-body";
import PostHeader from "components/post-header";
import { notFound } from "next/navigation";
import type { Page } from "app/types";

export default async function Page(props: Page) {
  const params = await props.params;
  if (!params?.slug || typeof params.slug !== "string") {
    notFound();
  }
  const post = await getMDBySlug("_posts", `${params.slug}.md`);

  return (
    <>
      <article className="max-w-2xl mx-auto mb-32">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          tags={post.tags}
        />
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
  const post = await getMDBySlug("_posts", `${params.slug}.md`);

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
  return await getMD("_posts");
}
