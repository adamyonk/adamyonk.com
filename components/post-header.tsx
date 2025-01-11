import DateFormatter from "./date-formatter";
import Tags from "./tags";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage?: string;
  date: Date;
  author: Author;
  tags: string[];
};

const PostHeader = ({ title, tags, coverImage, date, author }: Props) => {
  return (
    <header>
      <h1>{title}</h1>
      <div>
        <DateFormatter date={date} />
        {tags &&
          <> | Tagged: <Tags tags={tags} /></>
        }
      </div>
    </header>
  );
};

export default PostHeader;
