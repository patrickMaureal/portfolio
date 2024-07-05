import myProfile from '../../../assets/profile/profile.png'
const Hero = () => {
	return (
		<div className='flex flex-row justify-between items-center px-80'>
			<h1>Hero</h1>
			<img src={myProfile} alt="" />
		</div>
	)
}

export default Hero