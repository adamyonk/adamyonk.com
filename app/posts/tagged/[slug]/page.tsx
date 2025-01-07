import { notFound } from "next/navigation";
import { getMDByFn } from "lib/api";
import Posts from "../../../../components/posts";
import type { Page } from "app/types";

export default async function Index(props: Page) {
  const params = await props.params;
  if (!params?.slug || typeof params.slug !== "string") {
    notFound();
  }

  const allPosts = await getMDByFn("_posts", (post) => post.tags.includes(params.slug));

  return (
    <>
      {allPosts.length > 0 && <Posts title={`Posts tagged «${params.slug}»`} posts={allPosts} />}
    </>
  );
}
