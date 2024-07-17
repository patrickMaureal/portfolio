import Hero from "../components/sections/hero/Hero"
import Projects from "../components/sections/projects/Projects"

const Home = () => {

	return (
		<div className="divide-y divide-gray-500 divide-y-2">
			<Hero />
			<Projects />
		</div>
	)
}

export default Home