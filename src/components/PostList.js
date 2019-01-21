import React from "react"
import Link from "gatsby-link"
import Date from "./Date"
import Tags from "./Tags"

export default ({ posts }) => (
  <ul className="posts">
    {posts.map(({ node: { id, frontmatter: { date, path, title, tags } } }) => (
      <li key={id}>
        {date && (
          <div className="date">
            <Date date={date} />
          </div>
        )}
        <Link to={path}>{title}</Link>
        <div className="tags">
          <Tags tags={tags} />
        </div>
      </li>
    ))}
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
