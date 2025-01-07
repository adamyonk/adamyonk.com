//import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
  options?: Intl.DateTimeFormatOptions;
};

const DateFormatter = ({ dateString, options = {
  year: "numeric",
  month: "long",
  day: "numeric",
} }: Props) => {
  //const date = format(parseISO(dateString), "LLLL d, yyyy");
  const date = new Intl.DateTimeFormat(
    "en-US",
    options,
  ).format(
    new Date(dateString)
  )

  return <time dateTime={dateString}>{date}</time>;
};

export default DateFormatter;
