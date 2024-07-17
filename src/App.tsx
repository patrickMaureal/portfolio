import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {

  return (
    <div className="h-full overflow-hidden bg-background">
			<Navbar/>
			<div>
				<Home/>
			</div>
			<Footer/>
    </div>
  )
}

export default App
