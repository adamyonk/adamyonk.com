import React from "react"
import Link from "gatsby-link"
import Date from "./Date"
import Tags from "./Tags"

export default ({ posts }) => (
  <ul className="posts">
    {posts.map(({ node: p }) => (
      <li key={p.id}>
        <div className="date">
          <Date date={p.frontmatter.date} />
        </div>
        <Link to={p.frontmatter.path}>{p.frontmatter.title}</Link>
        <div className="tags">
          <Tags tags={p.frontmatter.tags} />
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
