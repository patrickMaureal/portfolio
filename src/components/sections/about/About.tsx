import aboutImg from "../../../assets/profile/profile.png"

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8 md:px-10 md:py-12 md:space-x-20 lg:px-56 lg:py-10 lg:space-x-52 lg:space-y-0">
			<div>
				<h1 className="font-bebas font-normal md:text-7xl text-9xl text-white">About Me</h1>
			</div>
			<div className="flex flex-col space-y-6 self-center">
				<p className="font-manrope text-subtitle text-lg font-normal">I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. </p>
				<a href="#" className="underline underline-offset-4 uppercase text-primary font-manrope text-sm"> More About Me</a>
			</div>
			<div className="md:hidden">
				<img src={aboutImg} alt="" className="rounded-lg" />
			</div>
		</div>
  );
};

export default About;
