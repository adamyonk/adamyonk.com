import { getMDBySlug } from "lib/api";
import DefaultTags from "app/DefaultTags";

export default async function Head({ params }) {
  const post = getMDBySlug('_posts', params.slug, ["title", "ogImage"]);
  return (
    <>
      <title>{post.title} | adamyonk</title>
      {post?.ogImage?.url && (
        <meta property="og:image" content={post.ogImage.url} />
      )}
      <link
        rel="preload"
        href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
        as="script"
      />
      <DefaultTags />
    </>
  );
}
