import Link from "next/link"

const Intro = () => {
  return (
    <section>
      <p>
        ✌🏻 I’m Adam Jahnke. I am currently building things at{" "}
        <Link title="Hotpot's website" href="https://hotpot.works">
          Hotpot
        </Link>
        . I live in Springfield, Missouri with my wife{" "}
        <Link title="Olivia's website" href="https://olivetheartist.com">
          Olivia
        </Link>
        . We{" "}
        <Link title="Jahnke's blog" href="https://jahnke.blog">
          write
        </Link>{" "}
        together occasionally.
      </p>
    </section>
  );
};

export default Intro;
