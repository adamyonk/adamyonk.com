// import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Tags from "./tags";
import type { Post } from "lib/api";

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  tags,
  // author,
  slug,
}: Post) => {
  return (
    <div>
      {coverImage && (
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      )}
      <small>
        <DateFormatter dateString={date} />
      </small>
      <h3 className="text-3xl leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <small>
        <Tags tags={tags} />
      </small>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {/*<Avatar name={author.name} picture={author.picture} />*/}
    </div>
  );
};

export default PostPreview;
