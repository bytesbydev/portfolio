import {
  ArrowRight,
  Code2,
  Cloud,
  ChevronDown,
} from "lucide-react";

import profileImage from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] scroll-mt-20 items-center overflow-hidden bg-slate-50"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-200/50 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-200/50 blur-[120px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 py-24 lg:flex-row lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <span className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Available for opportunities
          </span>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Hi, I'm
            <br />

            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Devendra Rawat
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
            Frontend Developer • Cloud Computing Enthusiast • AI Learner.
            I build modern, responsive, and user-friendly web applications
            using React and Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 font-medium text-white shadow-lg transition-colors hover:bg-blue-700"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 font-medium text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-600"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-[420px] md:w-[420px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-pulse rounded-full bg-blue-300/30 blur-3xl"
            />

            <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl">
              <img
                src={profileImage}
                alt="Portrait of Devendra Rawat"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute right-0 top-4 rounded-xl bg-white p-3 shadow-lg sm:right-2"
            >
              <Code2 className="text-blue-600" size={28} />
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-8 left-0 rounded-xl bg-white p-3 shadow-lg sm:bottom-10 sm:left-2"
            >
              <Cloud className="text-violet-600" size={28} />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About Me"
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center text-slate-500 transition-colors hover:text-blue-600 sm:bottom-8"
      >
        <span className="text-sm">Scroll</span>
        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;