import Container from "./container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="max-w-2xl mx-auto py-6 flex flex-col lg:flex-row items-center">
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
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
