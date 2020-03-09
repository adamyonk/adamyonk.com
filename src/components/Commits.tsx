import React from "react"
import Commit, { GitCommit } from "../components/Commit"

interface Props {
  commits: {
    all: GitCommit[]
  }
}

const Commits: React.FC<Props> = ({ commits }) => (
  <>
    {commits.all.length && (
      <details>
        <summary>History</summary>
        {commits.all.map(( commit: GitCommit ) => (
          <Commit commit={commit} key={commit.hash} />
        ))}
      </details>
    )}
  </>
)
Commits.displayName = "Commits"
export default Commits
