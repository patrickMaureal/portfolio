import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Contact from '../components/sections/contact/Contact'

const MainLayout = () => {
	return (
		<div className="h-full overflow-hidden bg-background">
			<Navbar/>
			<div className='divide-gray-500 divide-y-2'>
				<Outlet/>
				<Contact/>
			</div>
			<Footer/>
    </div>
	)
}

export default MainLayout