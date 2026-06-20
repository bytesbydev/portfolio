import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "../data/experience";

const Timeline = ({ data, title, Icon, color }) => {
  return (
    <div>
      {/* Heading */}

      <div className="flex items-center gap-3 mb-10">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            color === "blue" ? "bg-blue-100" : "bg-violet-100"
          }`}
        >
          <Icon
            size={24}
            className={
              color === "blue"
                ? "text-blue-600"
                : "text-violet-600"
            }
          />
        </div>

        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-5">
        {data.map((item, index) => (
          <div key={index} className="relative pl-8 pb-12">
            {/* Dot */}

            <span
              className={`absolute -left-[10px] top-2 w-5 h-5 rounded-full border-4 border-white ${
                color === "blue"
                  ? "bg-blue-600"
                  : "bg-violet-600"
              }`}
            />

            {/* Year */}

            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                color === "blue"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-violet-100 text-violet-700"
              }`}
            >
              {item.year}
            </span>

            <h3 className="text-xl font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="text-blue-600 font-medium mt-1">
              {item.company}
            </p>

            <p className="mt-4 text-slate-600 leading-7">
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
    <section
      id="experience"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Experience & Education
          </h2>

          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            My professional journey, internships, and educational background.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
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