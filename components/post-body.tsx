import markdownStyles from "./markdown-styles.module.css";
import PrismLoader from "./prism";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <PrismLoader />
    </div>
  );
};

export default PostBody;
