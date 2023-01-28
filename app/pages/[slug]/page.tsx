import markdownToHtml from "lib/markdownToHtml";
import { getMD, getMDBySlug } from "lib/api";
import PostBody from "components/post-body";

export const dynamicParams = false;
export async function generateStaticParams() {
  return getMD('_pages', ["slug"]);
}

export default async function Page({ params }) {
  const post = getMDBySlug('_pages', params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  return (
    <article className="mb-32">
      <PostBody content={content} />
    </article>
  );
}
