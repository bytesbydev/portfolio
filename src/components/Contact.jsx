import { Mail, MapPin, Send } from "lucide-react";

import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid lg:grid-cols-5">
            <div className="relative overflow-hidden bg-blue-600 p-8 text-white sm:p-10 lg:col-span-2">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="relative z-10">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                  Let's Connect
                </h2>

                <p className="mb-10 leading-relaxed text-blue-100">
                  I'm open to new opportunities, collaborations, and
                  interesting projects. Feel free to reach out if you'd
                  like to connect or work together.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Mail size={20} />
                    </div>

                    <div className="min-w-0 pt-2">
                      <p className="mb-1 text-sm text-blue-100">Email</p>
                      <a
                        href="mailto:devendrarawat9876@gmail.com"
                        className="break-all font-medium transition-colors hover:text-blue-200"
                      >
                        devendrarawat9876@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <p className="mb-1 text-sm text-blue-100">Location</p>
                      <p className="font-medium">India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 border-t border-white/20 pt-8 sm:mt-14">
                  <p className="mb-4 font-medium">Follow Me</p>

                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/devendra-rawat-15a52b293/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit LinkedIn profile"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                    >
                      <img
                        src={linkedinIcon}
                        alt=""
                        className="h-5 w-5"
                      />
                    </a>

                    <a
                      href="https://github.com/bytesbydev"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit GitHub profile"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                    >
                      <img
                        src={githubIcon}
                        alt=""
                        className="h-5 w-5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10 lg:col-span-3">
              <form
                action="mailto:devendrarawat9876@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block font-medium text-slate-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Full name"
                      autoComplete="name"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block font-medium text-slate-700"
                    >
                      Your Email
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      autoComplete="email"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block font-medium text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="How can I help you?"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-medium text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    required
                    className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  <Send size={18} />
                  Send Message
                </button>

                <p className="text-sm leading-6 text-slate-500">
                  Submitting this form may open your default email application.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;