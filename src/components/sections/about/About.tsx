import aboutImg from "../../../assets/profile/profile.png"

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8 space-y-20 md:px-10 md:py-12 md:space-x-20 lg:px-12 lg:py-32 lg:space-x-28 lg:space-y-0">
			<div className="hidden md:block">
				<h1 className="font-bebas font-normal md:text-7xl lg:text-9xl text-white ">About Me</h1>
			</div>
			<div className="flex flex-col space-y-6 self-center">
				<h4 className="font-manrope font-medium text-3xl text-white">I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h4>
				<p className="font-manrope text-subtitle text-lg lg:text-2xl font-normal">I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
				<a href="#" className="underline underline-offset-4 uppercase text-primary font-manrope text-sm"> More About Me</a>
			</div>
			<div className="md:hidden">
				<img src={aboutImg} alt="" className="rounded-lg" />
			</div>
		</div>
  );
};

export default About;
