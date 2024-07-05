import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {

  return (
    <div className="h-full overflow-hidden bg-zinc-600 font-mono">
			<Navbar/>
			<div>
				<Home/>
			</div>
    </div>

  )
}

export default App
