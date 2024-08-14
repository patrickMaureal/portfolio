import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import aboutImg from "../../../assets/profile/profile.png";
import ResumeButton from "../../ui/ResumeButton";

const AboutMe = () => {
  return (
    <div className="flex flex-col px-4 py-20 space-y-20 md:px-10 md:py-12 lg:px-28 lg:py-32 lg:space-x-0 lg:space-y-32">
      <div className="flex flex-col space-y-6 self-center">
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-80">
          <h1 className="font-bebas font-normal text-6xl md:text-9xl text-white ">
            About Me
          </h1>
          <div>
            <h4 className="font-manrope font-medium text-3xl text-white">
              I am a web developer based in Cebu, Philippines.{" "}
            </h4>
            <p className="font-manrope text-subtitle text-lg lg:text-2xl font-normal">
              I am a web developer based in Cebu looking for exciting
              opportunities. Likes to focus on accessibility when developing.
              Passionate and curious about solving problems. Currently, I’m
              exploring Reactjs, Typescript and a bit of Designing. While I am
              not programming, I enjoy playing basketball and cosplaying.
              Learning more to improve skill.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6">
              <ResumeButton />
              <div className="flex items-center space-x-3">
                <a href="https://www.linkedin.com/in/janpatrickmaureal/" className="mt-8 rounded-full bg-[#222222] py-3 px-3">
                  <LinkedInLogoIcon height={26} width={26} color="#D3E97A" />
                </a>
                <a href="https://github.com/patrickMaureal" className="mt-8 rounded-full bg-[#222222] py-3 px-3">
                  <GitHubLogoIcon height={26} width={26} color="#D3E97A" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={aboutImg} alt="" className="rounded-lg md:w-screen lg:hidden" />
      </div>
      <div className="lg:flex lg:flex-row lg:space-x-72 ">
        <h1 className="font-bebas font-normal text-5xl md:text-7xl text-white ">
          My Capabilities
        </h1>
				<div>
					<p className="font-manrope text-subtitle text-base lg:text-2xl font-normal">
						I am always looking to add more skills.Morbi egestas neque eu blandit
						fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus
						faucibus tristique ut et dolor.{" "}
					</p>
					<div className="grid grid-cols-3 items-center justify-center gap-4 mt-8 uppercase text-white font-bold font-manrope text-sm">
						<h4 className="border border-[#484848] rounded-full p-2">HTML</h4>
						<h4 className="border border-[#484848] rounded-full p-2">CSS</h4>
						<h4 className="border border-[#484848] rounded-full p-2">
							Javascript
						</h4>
						<h4 className="border border-[#484848] rounded-full p-2">JQuery</h4>
						<h4 className="border border-[#484848] rounded-full p-2 col-span-2">
							Accesibility
						</h4>
						<h4 className="border border-[#484848] rounded-full p-2">Figma</h4>
						<h4 className="border border-[#484848] rounded-full p-2 col-span-2">
							Tailwind CSS
						</h4>
					</div>
				</div>
        
      </div>
    </div>
  );
};

export default AboutMe;
