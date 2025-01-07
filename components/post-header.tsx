//import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Tags from "./tags";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  author: Author;
  tags: string[];
};

const PostHeader = ({ title, tags, coverImage, date, author }: Props) => {
  return (
    <header>
      <h1 className="text-3xl font-bold tracking-tighter leading-tight">
        {title}
      </h1>
      {/*<div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>*/}
      {coverImage && (
        <div className="mb-8">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
        {tags &&
          <> | Tagged: <Tags tags={tags} /></>
        }
      </div>
    </header>
  );
};

export default PostHeader;
