import React from "react"

export default ({ children }) => (
  <React.Fragment>
    <div className="post-meta">{children}</div>
    <style jsx>{`
      .post-meta {
        font-size: 0.8em;
      }
    `}</style>
  </React.Fragment>
)
