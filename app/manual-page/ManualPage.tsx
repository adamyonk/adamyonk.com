"use client";
import Intro from "components/intro";

export default function ManualPage() {
  const now = new Date();
  const birthday = new Date(1991, 4, 5);
  const years = now.getFullYear() - birthday.getFullYear();
  const months = now.getMonth() - birthday.getMonth();
  const days = now.getDate() - birthday.getDate();

  return (
    <>
      <Intro />
      <h1>Name</h1>

      <p>
        adamjahnke v{years}.{months}.{days} - Software Programmer
      </p>

      <h1>Synopsis</h1>

      <p>
        I love to build things that help people. I love the idea of tackling
        something complex one time so that others can do something complex later
        without the burden of that complexity.
      </p>

      <h1>Description</h1>

      <p>
        I&apos;ve been writing software since 2006, and I love it. I especially
        enjoy working on tooling and interfaces, the things that humans are
        regularly interacting with. I&apos;ve spent a lot of time working with
        designers to hone interfaces.
      </p>

      <h1>Usage</h1>

      <p>
        Though I have worked remotely for nearly the entirety of my career, I
        really love to work with people. I don&apos;t think distance needs to be
        a hindrance to that. I do well developing trust with my colleagues and I
        value humility.
      </p>

      <p>
        I see new people, environments, and challenges as opportunities to
        learn. I sincerely value feedback, even if it&apos;s negative; I want to
        be better.
      </p>

      <p>
        I don&apos;t shy away from difficult problems, and I am not afraid to be
        the team&apos;s &quot;fixer&quot;. I&apos;ll take the hard bugs.
      </p>

      <h1>Caveats</h1>

      <p>
        I tend to want to make people happy, so sometimes I struggle to give
        constructive negative feedback. I am working on trying to communicate
        more clearly, even when I don&apos;t get to be the bearer of good news.
      </p>

      <h1>Examples</h1>

      <p>
        I have experience with Ruby and JavaScript. I&apos;m quite familiar with
        the landscape of JavaScript tooling and architecture. I have dabbled in
        PHP, Lua, and Go.
      </p>

      <h1>Exit Status</h1>

      <p>0 on success, any other positive value otherwise.</p>

      <h1>Bugs</h1>

      <p>
        I have been known to have bugs. I welcome feedback and honestly desire
        to improve!
      </p>
    </>
  );
}
