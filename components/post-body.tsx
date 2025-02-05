type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
