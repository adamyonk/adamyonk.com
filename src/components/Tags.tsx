import React from "react"

const Tag = ({ name }) => (
  <>
    <a className="tag" href={`/tags/${name}`}>
      {name}
    </a>
  </>
)
Tag.displayName = "Tag"

const Tags = ({ tags = [] }) => (
  <>
    {tags.slice(0, -1).map((tag, i) => (
      <React.Fragment key={tag}>
        {i !== 0 && ", "}
        <Tag name={tag} />
      </React.Fragment>
    ))}
    {tags.length > 1 && " and "}
    {tags.slice(-1).map(tag => (
      <Tag key={tag} name={tag} />
    ))}
  </>
)
Tags.displayName = "Tags"
export default Tags
