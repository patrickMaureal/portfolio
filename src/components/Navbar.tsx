import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { useState } from "react"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header>
			<nav className="flex justify-between items-center h-16 py-2 px-10 text-white m-4 text-lg font-bold">
				<div className="hidden lg:block">
					<h1>Navbar</h1>

					<ul className="flex">
						<li className="p-6">Home</li>
						<li className="p-6">About</li>
						<li className="p-6">Contact</li>
					</ul>

					<button className="border p-3 rounded-3xl border-white hover:bg-white hover:text-black">Go to Projects</button>
				</div>
				

				<button>
					<HamburgerMenuIcon height={24} width={24}/>
				</button>
			</nav>
		</header>
	)
}

export default Navbar