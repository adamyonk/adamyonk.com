import React from "react"
import Date from "./Date"
import Meta from "./Meta"

export interface GitCommit {
  hash: string
  date: string
  message: string
}

interface Props {
  className?: string
  commit: GitCommit
}

const Commit: React.FC<Props> = ({ commit: { date, hash, message } }) => (
  <>
    <Meta key={hash}>
      <a href={`https://github.com/adamyonk/adamyonk.com/commit/${hash}`}>
        <Date date={date} />
      </a>
      <br />
      {message}
    </Meta>
  </>
)
Commit.displayName = "Commit"
export default Commit
