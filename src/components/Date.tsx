import React from "react"
import { format, parseISO } from "date-fns"

interface Props {
  date?: string
}

const Date: React.FC<Props> = ({ date }) => (
  <>{format(parseISO(date), "MMM d, yyyy")}</>
)
Date.displayName = "Date"
export default Date
