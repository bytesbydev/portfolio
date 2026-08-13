import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">
            Explore my projects showcasing frontend development, thoughtful
            UI design, and full-stack web application development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-52 overflow-hidden bg-slate-100 sm:h-60">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex h-full flex-col p-6 sm:p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-100 pt-5">
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="inline-flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-700"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title}`}
                      className="inline-flex items-center gap-2 font-medium text-slate-700 transition-colors hover:text-black"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;