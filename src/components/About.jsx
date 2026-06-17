const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Glass Card */}
        <div className="relative">
          {/* Background Blur Effects */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>

          {/* Card */}
          <div className="relative z-10 rounded-3xl border border-white/50 bg-white/70 backdrop-blur-xl shadow-2xl p-8 md:p-14">
            <div className="max-w-4xl mx-auto text-center">
              {/* Quote Icon */}
              <div className="text-6xl text-blue-600/20 mb-6">
                ❝
              </div>

              {/* Heading */}
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
                I don't just write code; I{" "}
                <span className="text-blue-600">
                  architect digital experiences
                </span>{" "}
                that bridge the gap between human needs and technical
                possibilities.
              </h3>

              {/* Description */}
              <div className="space-y-6 text-lg text-slate-600 leading-8">
                <p>
                  My journey as a Frontend Developer is fueled by a relentless
                  curiosity for the intersection of Cloud infrastructure and
                  Artificial Intelligence. I believe the most powerful digital
                  products are the ones that feel effortless—fast, intuitive,
                  and enjoyable to use.
                </p>

                <p>
                  With a strong foundation in modern web technologies and a keen
                  eye for clean UI, I transform complex ideas into elegant,
                  responsive, and high-performance web applications. Every
                  project is an opportunity to learn, innovate, and create
                  meaningful user experiences.
                </p>
              </div>

              {/* Bottom Info */}
              <div className="mt-14 flex flex-wrap justify-center gap-12">
                <div>
                  <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">
                    Based In
                  </p>

                  <h4 className="text-xl font-semibold text-slate-900">
                    India
                  </h4>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">
                    Let's Talk
                  </p>

                  <a
                    href="mailto:hello@devchauhan.com"
                    className="text-xl font-semibold text-blue-600 hover:underline"
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