import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import aboutImg from "../../../assets/profile/profile.png";
import ResumeButton from "../../ui/ResumeButton";

const AboutMe = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="section-label">Profile</p>
          <h1 className="mt-4 font-bebas text-5xl text-primary md:text-7xl lg:text-8xl">
            About me
          </h1>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-primary md:text-4xl">
            I build clean, thoughtful web experiences that help products feel clear, useful, and trustworthy.
          </h2>
          <p className="text-base leading-8 text-subtitle md:text-lg">
            I&apos;m a web developer based in Cebu, Philippines, focused on crafting modern interfaces that balance strong user experience, accessibility, and business goals. I enjoy turning ideas into polished digital experiences that are easy to understand and a pleasure to use.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <ResumeButton />
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/janpatrickmaureal/"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-panel text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInLogoIcon height={20} width={20} />
              </a>
              <a
                href="https://github.com/patrickMaureal"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-panel text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubLogoIcon height={20} width={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <img
          src={aboutImg}
          alt="Patrick Maureal"
          className="w-full rounded-[28px] border border-border object-cover md:h-[420px] lg:hidden"
        />
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <h1 className="font-bebas text-5xl text-primary md:text-6xl">
          My capabilities
        </h1>
        <div>
          <p className="text-base leading-8 text-subtitle md:text-lg">
            I&apos;m continuously expanding my skill set across web development, UI systems, and product thinking. I enjoy learning by building, improving my craft through real projects, and collaborating with teams that care about quality, clarity, and thoughtful execution.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'Figma'].map((item) => (
              <div key={item} className="rounded-full border border-border bg-panel px-3 py-2 text-center text-xs font-medium uppercase tracking-[0.14em] text-primary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
