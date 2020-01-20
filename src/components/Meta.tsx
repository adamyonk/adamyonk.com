import React from "react"
import cx from "classnames/dedupe"

interface Props {
  className?: string;
}

const Meta: React.FC<Props> = ({ children, className, ...props }) => (
  <>
    <div className={cx([className, "post-meta"])} {...props}>
      {children}
    </div>
    <style jsx>{`
      .post-meta {
        font-size: 0.8em;
      }
    `}</style>
  </>
)
Meta.displayName = "Meta"
export default Meta
