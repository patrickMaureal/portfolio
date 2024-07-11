import myProfile from '../../../assets/profile/profile.png'
import { Button } from '@chakra-ui/react'
const Hero = () => {
	return (
		<div className='flex flex-row justify-between items-center px-80 pt-52'>
			<div className='self-start'>
				<h1 className='text-6xl font-bold text-gray-800'>Hi, I'm <span className='text-white'>Patrick</span></h1>
				<p className='text-3xl text-gray-800'>I'm a <span className='text-white'>Web</span> developer</p>
				<Button variant='outline' className='mt-6'>
					<span>Download Resume</span>
				</Button>
			</div>
			<img src={myProfile} alt="" />
		</div>
	)
}

export default Hero