import React, { FC } from "react"
import Link from "gatsby-link"
import Date from "./Date"
import Tags from "./Tags"
import { formatPath } from "../util/formatPath"

interface Post {
  node: {
    id: string;
    fileAbsolutePath: string;
    frontmatter: {
      date: string;
      price: string;
      title: string;
      tags: string[];
      updated: string;
    };
  };
}

interface Props {
  posts: Post[];
}

const PostList: FC<Props> = ({ posts }) => (
  <ul className="posts">
    {posts.map(
      ({
        node: {
          id,
          fileAbsolutePath,
          frontmatter: { date, price, title, tags, updated },
        },
      }) => (
        <li key={id}>
          {(updated || date) && (
            <div className="date">
              <Date date={updated || date} />
            </div>
          )}
          <Link to={formatPath(fileAbsolutePath)}>{title}</Link>
          {price && (
            <div className="tags">
              {parseFloat(price).toLocaleString("en-US", {
                currency: "USD",
                style: "currency",
              })}
            </div>
          )}
          <div className="tags">
            <Tags tags={tags} />
          </div>
        </li>
      ),
    )}
    <style jsx>{`
      ul {
        padding: 0;
      }
      li {
        margin-bottom: 1em;
      }
      .tags,
      .date {
        font-size: 0.8em;
      }
      .tags,
      .tags :global(a) {
        color: var(--base01) !important;
      }
    `}</style>
  </ul>
)
PostList.displayName = "PostList"
export default PostList
