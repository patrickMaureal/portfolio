const Experience = () => {
	return (
		<div className="flex flex-col md:flex-row justify-between items-start px-4 py-20 space-y-20 md:px-10 md:py-12 md:space-x-20 lg:px-32 lg:py-32 lg:space-x-28 lg:space-y-0">
			<div className="flex flex-col space-y-6 self-center">
				<div className="flex flex-col space-y-8">
					<h1 className="font-bebas font-normal text-6xl md:text-7xl lg:text-9xl text-white ">My Experience</h1>
					<div className='flex flex-col space-y-3'>
						<div className='flex flex-col space-y-3'>
							<div>
								<h4 className='text-white font-manrope text-xl font-medium tracking-tight '>IT Specialist</h4>
								<p className='text-subtitle font-manrope text-base'>August 2023 - Present</p>
							</div>

							<h4 className='text-primary font-manrope text-base font-semibold'>CVISNET FOUNDATION INC.</h4>
							
						</div>
						<p className="font-manrope text-subtitle text-base font-normal lg:text-2xl font-normal">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience