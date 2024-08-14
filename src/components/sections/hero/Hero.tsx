import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import myProfile from '../../../assets/profile/profile.png'
import ResumeButton from '../../ui/ResumeButton'
const Hero = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center p-8 md:px-10 md:py-12 lg:px-28 lg:py-10 space-y-20 md:space-y-0 lg:space-x-20 md:space-x-12'>
			<div>
				<h1 className='text-7xl font-bebas text-white md'>Hi, I am </h1>
				<h1 className='text-7xl font-bebas text-white'>Patrick Maureal</h1>
				<p className='text-lg text-subtitle font-normal'>A Cebu based web developer passionate about building accessible and user friendly websites.</p>
				<div className='flex items-center space-x-2 md:space-x-4'>
					<ResumeButton />
					<a href='https://www.linkedin.com/in/janpatrickmaureal/' className='mt-8 rounded-full bg-[#222222] py-4 px-4'>
						<LinkedInLogoIcon height={26} width={26} color='#D3E97A'/> 
					</a>
					<a href='https://github.com/patrickMaureal' className='mt-8 rounded-full bg-[#222222] py-4 px-4'>
						<GitHubLogoIcon height={26} width={26} color='#D3E97A'/>
					</a>
				</div>
				
			</div>
			<img src={myProfile} alt="" className='rounded-2xl md:h-96'/>
		</div>
	)
}

export default Hero