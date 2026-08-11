import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "../data/experience";

const Timeline = ({ data, title, Icon, color }) => {
  const isBlue = color === "blue";

  return (
    <div>
      <div className="mb-10 flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            isBlue ? "bg-blue-100" : "bg-violet-100"
          }`}
        >
          <Icon
            size={24}
            className={isBlue ? "text-blue-600" : "text-violet-600"}
          />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {title}
        </h3>
      </div>

      <div className="relative ml-5 border-l-2 border-slate-200">
        {data.map((item, index) => (
          <div
            key={`${item.title}-${item.year}`}
            className={`relative pb-10 pl-8 ${
              index === data.length - 1 ? "pb-0" : ""
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[10px] top-2 h-5 w-5 rounded-full border-4 border-white ${
                isBlue ? "bg-blue-600" : "bg-violet-600"
              }`}
            />

            <span
              className={`mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium ${
                isBlue
                  ? "bg-blue-100 text-blue-700"
                  : "bg-violet-100 text-violet-700"
              }`}
            >
              {item.year}
            </span>

            <h4 className="text-xl font-semibold leading-snug text-slate-900">
              {item.title}
            </h4>

            <p className="mt-1 font-medium text-blue-600">
              {item.company}
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Experience & Education
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">
            My professional journey, internships, and educational background,
            highlighting the experiences that continue to shape my skills.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Timeline
            data={experience}
            title="Experience"
            Icon={Briefcase}
            color="blue"
          />

          <Timeline
            data={education}
            title="Education"
            Icon={GraduationCap}
            color="violet"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;