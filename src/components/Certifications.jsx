import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "IBM SkillsBuild – AI & Cloud Computing",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "#",
  },
  {
    title: "AICTE Virtual Internship",
    issuer: "AICTE",
    date: "2025",
    link: "#",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "#",
  },
  {
    title: "Make Agentic AI Work for You",
    issuer: "IBM SkillsBuild",
    date: "2025",
    link: "#",
  },
  {
    title: "Frontend Web Development",
    issuer: "Self Learning",
    date: "2024",
    link: "#",
  },
  {
    title: "Git & GitHub Essentials",
    issuer: "GitHub",
    date: "2024",
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Certifications
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">
            Certifications and learning experiences that reflect my interest
            in web development, cloud computing, and artificial intelligence.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <Award className="text-blue-600" size={28} />
              </div>

              <h3 className="text-xl font-semibold leading-snug text-slate-900">
                {cert.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {cert.issuer}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Issued: {cert.date}
              </p>

              <div className="mt-auto pt-6">
                {cert.link !== "#" ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-700"
                  >
                    View Credential
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                    Credential link unavailable
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;