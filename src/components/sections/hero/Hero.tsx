import myProfile from '../../../assets/profile/profile.png'
const Hero = () => {
	return (
		<div className='flex flex-row justify-between items-center px-80'>
			<div>
				<h1 className='text-6xl font-bold'>Hi, I'm <span className='text-white'>Patrick</span></h1>
				<p className='text-3xl'>I'm a <span className='text-white'>Web</span> developer</p>
			</div>
			<img src={myProfile} alt="" />
		</div>
	)
}

export default Hero