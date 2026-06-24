import githubIcon from "../assets/icons/github.svg";
import externalIcon from "../assets/icons/external-link.svg";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Some of my recent projects showcasing frontend development,
            UI/UX, and full-stack capabilities.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}

              <div className="overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}

              <div className="p-7">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-7">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

              <div className="flex gap-4">
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
  >
    <img
      src={externalIcon}
      alt="External Link"
      className="w-5 h-5"
    />
    Live Demo
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 text-slate-700 hover:text-black"
  >
    <img
      src={githubIcon}
      alt="GitHub"
      className="w-5 h-5"
    />
    Source Code
  </a>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;