import About from "../components/sections/about/About"
import Hero from "../components/sections/hero/Hero"
import Projects from "../components/sections/projects/Projects"

const Home = () => {

	return (
		<div className="divide-gray-500 divide-y-2">
			<Hero />
			<Projects />
			<About/>
		</div>
	)
}

export default Home