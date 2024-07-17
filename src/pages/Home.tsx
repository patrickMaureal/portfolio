import About from "../components/sections/about/About"
import Contact from "../components/sections/contact/Contact"
import Hero from "../components/sections/hero/Hero"
import Projects from "../components/sections/projects/Projects"

const Home = () => {

	return (
		<div className="divide-y divide-gray-500 divide-y-2">
			<Hero />
			<Projects />
			<About/>
			<Contact/>
		</div>
	)
}

export default Home