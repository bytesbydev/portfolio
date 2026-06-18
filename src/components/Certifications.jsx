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
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Certifications
          </h2>

          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-4" />

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Certifications and professional learning that strengthen my
            knowledge in Web Development, Cloud Computing and Artificial
            Intelligence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                <Award className="text-blue-600" size={28} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {cert.title}
              </h3>

              <p className="text-slate-600 mt-2">
                {cert.issuer}
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Issued: {cert.date}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-blue-600 hover:text-blue-700 font-medium"
              >
                View Credential
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;