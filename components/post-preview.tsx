import DateFormatter from "./date-formatter";
import Link from "next/link";
import Tags from "./tags";
import type { Post } from "lib/api";

const PostPreview = ({
  title,
  // coverImage,
  date,
  excerpt,
  tags,
  // author,
  slug,
}: Post) => {
  return (
    <div>
      <small>
        <DateFormatter dateString={date} />
      </small>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </h3>
      <small>
        <Tags tags={tags} />
      </small>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostPreview;
