import About from "../components/sections/about/About"
import Hero from "../components/sections/hero/Hero"

const Home = () => {

	return (
		<div className="divide-y divide-gray-500 divide-y-2">
			<Hero />
			<About />
		</div>
	)
}

export default Home