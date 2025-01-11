import Link from "next/link";
import Logo from "./logo";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <Link rel="me" href="https://adamyonk.com/feed.xml">
        RSS
      </Link>
      <Link rel="me" href="https://github.com/adamyonk">
        GitHub
      </Link>
      <Link rel="me" href="https://bsky.app/profile/adamyonk.com">
        Bluesky
      </Link>
      <Link rel="me" href="https://hachyderm.io/@adamyonk">
        Mastodon
      </Link>
      <Link rel="me" href="https://reddit.com/u/adamyonk">
        Reddit
      </Link>
      {/*<Link href="/colophon">
        Colophon
      </Link>*/}
    </footer>
  );
};

export default Footer;
