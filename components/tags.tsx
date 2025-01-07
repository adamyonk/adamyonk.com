import Link from "next/link";
import styles from "./tags.module.css";

type Props = {
  tags: string[];
}

const Tags = ({ tags }: Props) => {
  return tags && <span className={styles.tags}>
    {new Intl.ListFormat('en', {
      style: 'long',
      type: 'conjunction',
    }).formatToParts(tags).map(({ type, value }) => {
      switch (type) {
        case "literal":
          return value
        case "element":
          return <Link className={styles.tag} key={value} href={`/tags/${value}`}>{value}</Link>
      }
    })}
  </span>
}

export default Tags;
