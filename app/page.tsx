import { getMD } from "lib/api";
import Posts from "../components/posts";
import Intro from "../components/intro";
import type { Page } from "app/types";

export default async function Index({}: Page) {
  const allPosts = await getMD("_posts");

  return (
    <>
      <Intro />
      {allPosts.length > 0 && <Posts posts={allPosts} />}
    </>
  );
}
