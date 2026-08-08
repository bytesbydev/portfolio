const About = () => {
  return (
    <section id="about" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600"></div>
        </div>

        <div className="relative">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"></div>

          <div className="relative z-10 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-2xl backdrop-blur-xl md:p-14">
            <div className="mx-auto max-w-4xl text-center">
              <div
                className="mb-6 text-6xl text-blue-600/20"
                aria-hidden="true"
              >
                ❝
              </div>

              <h3 className="mb-8 text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
                I don't just write code; I{" "}
                <span className="text-blue-600">
                  build meaningful digital experiences
                </span>{" "}
                that connect human needs with technology.
              </h3>

              <div className="space-y-6 text-base leading-8 text-slate-600 md:text-lg">
                <p>
                  I'm a frontend developer passionate about building intuitive,
                  responsive, and user-friendly web applications. My curiosity
                  extends to cloud computing and artificial intelligence, where
                  I'm continually exploring new ways to turn ideas into
                  practical solutions.
                </p>

                <p>
                  With a focus on modern web technologies, clean code, and
                  thoughtful UI design, I aim to create applications that are
                  accessible, efficient, and enjoyable to use. Every project
                  gives me an opportunity to learn, solve problems, and build
                  something useful.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 md:mt-14 md:gap-12">
                <div>
                  <p className="mb-2 text-sm uppercase tracking-widest text-slate-500">
                    Based In
                  </p>
                  <h4 className="text-xl font-semibold text-slate-900">
                    India
                  </h4>
                </div>

                <div>
                  <p className="mb-2 text-sm uppercase tracking-widest text-slate-500">
                    Let's Talk
                  </p>
                  <a
                    href="mailto:devendrarawat9876@gmail.com"
                    className="break-all text-lg font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline md:text-xl"
                  >
                    devendrarawat9876@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;