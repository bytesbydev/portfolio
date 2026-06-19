import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from  "../assets/icons/linkedin.svg";
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid lg:grid-cols-5">

            {/* Left Side */}
            <div className="lg:col-span-2 bg-blue-600 text-white p-10 relative overflow-hidden">

              <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">
                  Let's Connect
                </h2>

                <p className="text-blue-100 mb-10 leading-relaxed">
                  I'm currently looking for new opportunities.
                  Whether you have a project or simply want to say
                  hello, I'd love to hear from you.
                </p>

                <div className="space-y-6">

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail size={20} />
                    </div>

                    <span>
                      devendrarawat9876@gmail.com
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>

                    <span>India</span>
                  </div>

                </div>

                <div className="mt-14 pt-8 border-t border-white/20">
                  <p className="mb-4 font-medium">
                    Follow Me
                  </p>

                  <div className="flex gap-4">

                    <a
                      href="https://www.linkedin.com/in/devendra-rawat-15a52b293/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                    >
                      <img
                        src={linkedinIcon}
                        alt="LinkedIn"
                        className="w-5 h-5"
                      />
                    </a>

                    <a
                      href="https://github.com/bytesbydev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                    >
                      <img
                        src={githubIcon}
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </a>

                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="lg:col-span-3 p-10">

              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block mb-2 font-medium text-slate-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-slate-700">
                      Your Email
                    </label>

                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can I help you?"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;