import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
interface ProjectInfo {
	year: string;
	role: string;
}
interface Project {
	projectImg: string;
	projectName: string;
	projectDesc: string;
}

interface ProjectSource {
	live?: string;
	github?: string;
}

type Props = {
	Project	: Project;
	ProjectInfo: ProjectInfo;
	projectSource: ProjectSource;
};

const ProjectCards = ( { Project, ProjectInfo, projectSource }: Props) => {
  return (
    <article className="minimal-card overflow-hidden rounded-[28px] p-4 sm:p-6">
      <div className="grid items-center gap-6 md:grid-cols-[1.05fr_1fr]">
        <div className="overflow-hidden rounded-[20px] border border-border bg-background p-3">
          <img src={Project.projectImg} alt={Project.projectName} className="h-full w-full rounded-[14px] object-cover" />
        </div>

        <div className="flex flex-col gap-5 px-1 py-2">
          <div className="space-y-3">
            <h3 className="text-2xl font-medium text-primary md:text-3xl">{Project.projectName}</h3>
            <p className="text-base leading-7 text-subtitle">{Project.projectDesc}</p>
          </div>

          <div className="space-y-3 border-y border-border py-4">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">Project info</p>
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-primary">Year</span>
              <span className="text-subtitle">{ProjectInfo.year}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-primary">Role</span>
              <span className="text-subtitle">{ProjectInfo.role}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm uppercase tracking-[0.16em] text-primary">
            {projectSource.live && (
              <a href={projectSource.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary">
                Live demo <ArrowTopRightIcon height={14} width={14} />
              </a>
            )}
            {projectSource.github && (
              <a href={projectSource.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary">
                GitHub <GitHubLogoIcon height={14} width={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCards;