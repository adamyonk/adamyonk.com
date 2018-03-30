import React from "react"
import Link from "gatsby-link"

const Tag = ({ name }) => (
  <React.Fragment>
    <a className="tag" href={`/tags/${name}`}>
      {name}
    </a>
  </React.Fragment>
)

export default ({ tags = [] }) => (
  <React.Fragment>
    {tags.slice(0, -1).map((tag, i) => (
      <React.Fragment key={tag}>
        {i !== 0 && ", "}
        <Tag name={tag} />
      </React.Fragment>
    ))}
    {tags.length > 1 && " and "}
    {tags.slice(-1).map(tag => <Tag key={tag} name={tag} />)}
  </React.Fragment>
)
