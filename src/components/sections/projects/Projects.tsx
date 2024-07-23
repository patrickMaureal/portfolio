import ProjectCards from "../../ui/ProjectCards";

const Projects = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8 md:px-10 md:py-12 lg:px-28 lg:py-10 space-y-20 lg:space-x-52 lg:space-y-0">
      <div>
        <h1 className="font-bebas font-bold text-3xl text-white">
          Feature Projects
        </h1>
        <p className="text-subtitle">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>

				<ProjectCards />
				<ProjectCards />
				<ProjectCards />
				
      </div>
    </div>
  );
};

export default Projects;
