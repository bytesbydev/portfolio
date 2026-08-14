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

const SkillCard = ({ title, icon, children }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-8">
      <div className="mb-8 flex items-center gap-3">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl"
        >
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      {children}
    </div>
  );
};

const SkillBars = ({ skills }) => {
  return (
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-slate-700 sm:text-base">
              {skill.name}
            </span>

            <span className="text-sm font-semibold text-blue-600">
              {skill.level}%
            </span>
          </div>

          <div
            className="h-2 overflow-hidden rounded-full bg-slate-200"
            role="progressbar"
            aria-label={skill.name}
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Technical Skills
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">
            An overview of the technologies, platforms, and tools I use
            to develop modern web applications and explore cloud computing.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <SkillCard title="Frontend" icon="🌐">
            <SkillBars skills={frontendSkills} />
          </SkillCard>

          <SkillCard title="Backend" icon="💻">
            <SkillBars skills={backendSkills} />
          </SkillCard>

          <SkillCard title="Cloud & Deployment" icon="☁️">
            <div className="flex flex-wrap gap-2">
              {cloudTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-600">
              Cloud platforms, containerization, and deployment workflows
              for building and delivering web applications.
            </p>
          </SkillCard>

          <SkillCard title="Tools" icon="🛠️">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="flex min-w-0 flex-col items-center gap-2 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl transition-colors hover:bg-blue-50">
                    ⚙️
                  </div>

                  <span className="break-words text-xs font-semibold text-slate-500">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;