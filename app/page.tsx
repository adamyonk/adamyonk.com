import { getMD } from "lib/api";
import Posts from "../components/posts";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import type { Page } from "app/types";

export default async function Index({}: Page) {
  const allPosts = await getMD("_posts");

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Intro />
      {heroPost && <HeroPost {...heroPost} />}
      {morePosts.length > 0 && <Posts posts={morePosts} />}
    </>
  );
}
