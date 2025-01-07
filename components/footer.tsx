import Link from "next/link";
import Logo from "./logo";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      &nbsp;|&nbsp;
      <Link rel="me" href="https://adamyonk.com/feed.xml">
        RSS
      </Link>
      &nbsp;|&nbsp;
      <Link rel="me" href="https://github.com/adamyonk">
        GitHub
      </Link>
      &nbsp;|&nbsp;
      <Link rel="me" href="https://bsky.app/profile/adamyonk">
        Bluesky
      </Link>
      &nbsp;|&nbsp;
      <Link rel="me" href="https://hachyderm.io/@adamyonk">
        Mastodon
      </Link>
      &nbsp;|&nbsp;
      <Link rel="me" href="https://reddit.com/u/adamyonk">
        Reddit
      </Link>
    </footer>
  );
};

export default Footer;
