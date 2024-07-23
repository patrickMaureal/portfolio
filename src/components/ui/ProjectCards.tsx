import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import ProjectImg from "../../assets/projects/sample.png";
const ProjectCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between space-y-4 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="md:flex justify-center items-center">
					<div className="bg-[#1A1A1A] px-2 py-4 md:flex justify-center items-center">
						<img src={ProjectImg} alt="" className="rounded-3xl" />
					</div>
				</div>
        
        <div>
          <div className="mt-10 space-y-4">
            <h1 className="text-white text-2xl md:text-3xl font-medium font-manrope">
              Promotional landing page for our favorite show
            </h1>
            <p className="text-subtitle font-manrope font-normal">
              Teamed up with a designer to breathe life into a promotional
              webpage for our beloved show, Adventure Time. Delivered a fully
              responsive design with dynamic content capabilities, seamlessly
              integrating a newsletter feature to keep fans updated with the
              latest adventures.
            </p>
          </div>
          <div className="mt-8 divide-y divide-gray-500 divide-y-1 space-y-2">
            <h3 className="text-base text-manrope font-semibold uppercase text-white">
              Project Info
            </h3>
            <div className="flex flex-row justify-between items-center py-2">
              <h5 className="text-white text-base font-medium font-manrope">
                Year
              </h5>
              <h5 className="text-[#C7C7C7] text-base font-medium font-manrope">
                2023
              </h5>
            </div>
            <div className="flex flex-row justify-between items-center py-2">
              <h5 className="text-white text-base font-medium font-manrope">
                Role
              </h5>
              <h5 className="text-[#C7C7C7] text-base font-medium font-manrope">
                Front-end Developer
              </h5>
            </div>
            <div></div>
          </div>
          <div className="mt-10 flex text-primary space-x-4 underline underline-offset-4 ">
            <div className="flex flex-row justify-between items-center">
              <a
                href="#"
                className="uppercase font-manrope font-bold text-sm mr-1"
              >
                Live Demo
              </a>
              <ArrowTopRightIcon height={16} width={16} />
            </div>
            <div className="flex flex-row justify-between items-center3">
              <a
                href="#"
                className="uppercase font-manrope font-bold text-sm mr-1"
              >
                See on Github
              </a>
              <GitHubLogoIcon height={16} width={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
