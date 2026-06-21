import {
  Mail,
  Heart,
} from "lucide-react";

import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from  "../assets/icons/linkedin.svg";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Devendra Rawat
            </h2>

            <p className="mt-2 text-slate-400 max-w-sm">
              Frontend Developer • Cloud & AI Enthusiast
              building modern, fast and responsive web
              applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a
              href="https://github.com/bytesbydev"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-5 h-5"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/devendra-rawat-15a52b293/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>

            <a
              href="mailto:devendrarawat9876@gmail.com"
              className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition"
            >
              <Mail size={20} />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p>
            © {new Date().getFullYear()} Devendra Rawat. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with
            <Heart
              size={16}
              className="text-red-500 fill-red-500"
            />
            using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;