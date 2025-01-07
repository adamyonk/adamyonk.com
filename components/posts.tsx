import PostPreview from "./post-preview";
import styles from "./posts.module.css";
import type { Post } from "lib/api";

type Props = {
  posts: Post[];
  title?: string;
};

const Posts = ({ posts, title }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        {title ?? "Posts"}
      </h2>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
