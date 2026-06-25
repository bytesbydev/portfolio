const frontendSkills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 98 },
];

const backendSkills = [
  { name: "Node.js", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Python", level: 70 },
];

const cloudTools = [
  "AWS",
  "Docker",
  "Vercel",
  "CI/CD",
  "Firebase",
];

const tools = [
  "Git",
  "Figma",
  "VS Code",
  "Postman",
  "Lighthouse",
  "Jira",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Technical Skills
          </h2>

          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600">
            A curated look at my technical ecosystem and the tools I use to
            build modern web applications.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Frontend */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                🌐
              </div>

              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>

            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-semibold text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                💻
              </div>

              <h3 className="text-xl font-semibold">Backend</h3>
            </div>

            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-semibold text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                ☁️
              </div>

              <h3 className="text-xl font-semibold">Cloud</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cloudTools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-2 rounded-xl bg-slate-100 text-sm font-medium text-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-slate-600 leading-6">
              Architecting scalable cloud infrastructure and automated
              deployment pipelines.
            </p>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                🛠️
              </div>

              <h3 className="text-xl font-semibold">Tools</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl hover:bg-blue-50 transition">
                    ⚙️
                  </div>

                  <span className="text-xs font-semibold text-slate-500 uppercase text-center">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;