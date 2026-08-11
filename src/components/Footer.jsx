import { Mail, Heart } from "lucide-react";

import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-10 text-slate-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Devendra Rawat
            </h2>

            <p className="mt-2 max-w-sm leading-7 text-slate-400">
              Frontend Developer • Cloud & AI Enthusiast building
              modern, responsive, and user-friendly web applications.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm"
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Certifications", "#certifications"],
              ["Contact", "#contact"],
            ].map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="transition-colors hover:text-blue-400"
              >
                {name}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href="https://github.com/bytesbydev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-blue-600"
            >
              <img src={githubIcon} alt="" className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/devendra-rawat-15a52b293/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-blue-600"
            >
              <img src={linkedinIcon} alt="" className="h-5 w-5" />
            </a>

            <a
              href="mailto:devendrarawat9876@gmail.com"
              aria-label="Send an email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-blue-600"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-6 text-center text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} Devendra Rawat. All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-2">
            Made with
            <Heart
              size={16}
              aria-label="love"
              className="fill-red-500 text-red-500"
            />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;