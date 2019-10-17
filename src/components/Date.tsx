import { format, parseISO } from "date-fns"

export default ({ date }) => format(parseISO(date), "MMM d, yyyy")
