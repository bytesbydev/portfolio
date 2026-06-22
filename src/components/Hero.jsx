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
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50"
    >
      {/* Background Blur */}

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-200 blur-[120px] opacity-50" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-violet-200 blur-[120px] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-24 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 relative z-10">

        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            🚀 Available for opportunities
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
            Hi, I'm
            <br />

            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Devendra Rawat
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 max-w-xl">
            Frontend Developer • Cloud Computing Enthusiast • AI Learner

            <br />

            I build responsive, modern and high-performance web applications
            with React and Tailwind CSS.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg"
            >
              View Projects

              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right */}

        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            {/* Blur */}

            <div className="absolute inset-0 rounded-full bg-blue-300 blur-3xl opacity-30 animate-pulse" />

            {/* Image */}

            <div className="relative z-10 w-full h-full rounded-full bg-white shadow-2xl border-4 border-white overflow-hidden">
              <img
                src={profileImage}
                alt="Dev"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute top-4 right-0 bg-white rounded-xl shadow-lg p-3 animate-bounce">
              <Code2 className="text-blue-600" size={28} />
            </div>

            <div className="absolute bottom-10 left-0 bg-white rounded-xl shadow-lg p-3 animate-bounce delay-300">
              <Cloud className="text-violet-600" size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
       <span className="text-sm text-slate-500 mb-2">
    Scroll
  </span>
        <ChevronDown
          className="text-slate-500"
          size={30}
        />
      </div>
    </section>
  );
};

export default Hero;