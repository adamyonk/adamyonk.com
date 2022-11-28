import { getPostBySlug } from "lib/api";
import DefaultTags from "app/DefaultTags";

export default async function Head({ params }) {
  const post = getPostBySlug(params.slug, ["title", "ogImage"]);
  return (
    <>
      <title>{post.title} | adamyonk</title>
      {post?.ogImage?.url && (
        <meta property="og:image" content={post.ogImage.url} />
      )}
      <DefaultTags />
    </>
  );
}
