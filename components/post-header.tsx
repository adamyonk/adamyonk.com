//import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
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
    <>
      <PostTitle>{title}</PostTitle>
      {/*<div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>*/}
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}
      <div className="">
        <div className="mb-6 text-lg">
          Posted: <DateFormatter dateString={date} />
          {tags && <> | Tagged: {new Intl.ListFormat('en', {
            style: 'long',
            type: 'conjunction',
          }).format(tags)}</>}
        </div>
      </div>
    </>
  );
};

export default PostHeader;
