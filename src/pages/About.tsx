import AboutMe from "../components/sections/about-me/AboutMe"
import Experience from "../components/sections/about-me/Experience"

const About = () => {
	return (
		<div className="divide-gray-500 divide-y-2">
			<AboutMe />
			<Experience/>
		</div>
	)
}

export default About