import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import aboutImg from "../../../assets/profile/profile.png"
import downloadImg from "../../../assets/about/download-icon.png"

const AboutMe = () => {
	return (
    <div className="flex flex-col md:flex-row justify-between items-start px-4 py-20 space-y-20 md:px-10 md:py-12 md:space-x-20 lg:px-32 lg:py-32 lg:space-x-28 lg:space-y-0">
			
			<div className="flex flex-col space-y-6 self-center">
				<div className="flex flex-col space-y-4">
					<h1 className="font-bebas font-normal text-6xl md:text-7xl lg:text-9xl text-white ">About Me</h1>
					<h4 className="font-manrope font-medium text-3xl text-white">I am a web developer based in Cebu, Philippines. </h4>
					<p className="font-manrope text-subtitle text-lg lg:text-2xl font-normal">I am a web developer based in Cebu looking for exciting opportunities. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Typescript and a bit of Designing. While I am not programming, I enjoy playing basketball and cosplaying. Learning more to improve skill.</p>
				</div>
				<div className='flex items-center space-x-4 md:space-x-6'>
					<button className='flex items-center justify-center space-x-4 mt-8 rounded-full bg-primary py-1 px-2 md:py-4 md:px-8 '>
						<span className='font-manrope font-bold text-sm md:text-xl'>DOWNLOAD RESUME </span>
						<img src={downloadImg} className="w-10 h-10" alt="" />
					</button>
					<div className="flex items-center space-x-3">
						<button className='mt-8 rounded-full bg-[#222222] py-3 px-3'>
							<LinkedInLogoIcon height={26} width={26} color='#D3E97A'/> 
						</button>
						<button className='mt-8 rounded-full bg-[#222222] py-3 px-3'>
							<GitHubLogoIcon height={26} width={26} color='#D3E97A'/>
						</button>
					</div>
				</div>
			</div>
			<div>
				<img src={aboutImg} alt="" className="rounded-lg" />
			</div>
			<div>
				<h1 className="font-bebas font-normal text-5xl md:text-7xl lg:text-9xl text-white ">My Capabilities</h1>
				<p className="font-manrope text-subtitle text-base lg:text-2xl font-normal">I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
				<div className="grid grid-cols-3 items-center justify-center gap-4 mt-8 uppercase text-white font-bold font-manrope text-sm">
					<h4 className="border border-[#484848] rounded-full p-2">HTML</h4>
					<h4 className="border border-[#484848] rounded-full p-2">CSS</h4>
					<h4 className="border border-[#484848] rounded-full p-2">Javascript</h4>
					<h4 className="border border-[#484848] rounded-full p-2">JQuery</h4>
					<h4 className="border border-[#484848] rounded-full p-2 col-span-2">Accesibility</h4>
					<h4 className="border border-[#484848] rounded-full p-2">Figma</h4>
					<h4 className="border border-[#484848] rounded-full p-2 col-span-2">Tailwind CSS</h4>
				</div>
			</div>
		</div>
  );
}

export default AboutMe