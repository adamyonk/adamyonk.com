import markdownToHtml from "lib/markdownToHtml";
import { getMDBySlug, getMD } from "lib/api";
import PostBody from "components/post-body";
import PostHeader from "components/post-header";

export const dynamicParams = false;
export async function generateStaticParams() {
  return getMD('_posts', ["slug"]);
}

export default async function Post({ params }) {
  const post = getMDBySlug('_posts', params.slug, [
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
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      />
      <PostBody content={content} />
    </article>
  );
}
