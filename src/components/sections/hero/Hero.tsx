import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import myProfile from '../../../assets/profile/profile.png'
const Hero = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center p-8 md:px-40 md:py-12 lg:px-80 lg:py-24 space-y-20 lg:space-x-52'>
			<div>
				<h1 className='text-7xl font-bebas text-white'>Hi, I'm </h1>
				<h1 className='text-7xl font-bebas text-white'>Patrick Maureal</h1>
				<p className='text-lg text-subtitle'>A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
				<div className='flex items-center space-x-2 md:space-x-4'>
					<button className='mt-8 rounded-full bg-primary py-4 px-4 md:py-4 md:px-8 '>
						<span className='font-manrope font-extrabold md:font-bold text-sm md:text-xl'>DOWNLOAD RESUME</span>
					</button>
					<button className='mt-8 rounded-full bg-[#222222] py-4 px-4'>
						<LinkedInLogoIcon height={26} width={26} color='#D3E97A'/> 
					</button>
					<button className='mt-8 rounded-full bg-[#222222] py-4 px-4'>
						<GitHubLogoIcon height={26} width={26} color='#D3E97A'/>
					</button>
				</div>
				
			</div>
			<img src={myProfile} alt="" className='rounded-2xl'/>
		</div>
	)
}

export default Hero