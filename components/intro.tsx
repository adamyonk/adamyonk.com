const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        ✌🏻
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        I’m Adam Jahnke. I am currently building things at{" "}
        <a title="Hotpot's website" href="https://hotpot.works">
          Hotpot
        </a>
        . I live in Springfield, Missouri with my wonderful wife{" "}
        <a title="Olivia's website" href="https://olivetheartist.com">
          Olivia
        </a>
        . We{" "}
        <a title="Jahnke's blog" href="https://jahnke.blog">
          write
        </a>{" "}
        together occasionally.
      </h4>
    </section>
  );
};

export default Intro;
