//import { parseISO, format } from "date-fns";

type Props = {
  date: Date;
  options?: Intl.DateTimeFormatOptions;
};

const DateFormatter = ({ date, options = {
  year: "numeric",
  month: "long",
  day: "numeric",
} }: Props) => {
  //const date = format(parseISO(dateString), "LLLL d, yyyy");
  const dateString = new Intl.DateTimeFormat(
    "en-US",
    options,
  ).format(
    date
  )

  return <time dateTime={date.toLocaleString()}>{dateString}</time>;
};

export default DateFormatter;
