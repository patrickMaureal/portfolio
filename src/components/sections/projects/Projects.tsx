import { projects } from "../../../types/Projects";
import ProjectCards from "../../ui/ProjectCards";

const Projects = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-label">Selected work</p>
          <h2 className="mt-3 font-bebas text-4xl text-primary md:text-5xl">Featured projects</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-subtitle md:text-base">
          A focused selection of work spanning product interfaces, business portals, and marketing experiences.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCards
            key={index}
            Project={project.Project}
            ProjectInfo={project.ProjectInfo}
            projectSource={project.projectSource}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
