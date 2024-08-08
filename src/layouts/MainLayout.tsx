import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	return (
		<div className="h-full overflow-hidden bg-background">
			<Navbar/>
			<div>
				<Outlet/>
			</div>
			<Footer/>
    </div>
	)
}

export default MainLayout