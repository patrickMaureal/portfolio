import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const Contact = () => {
	return (
		<div className="flex flex-col md:flex-row justify-between items-start p-8 md:px-10 md:py-12 md:space-x-20 md:space-y-0 lg:px-28 lg:py-10 space-y-16 lg:space-x-28 lg:space-y-0">
			<div className="space-y-10">
				<div className="space-y-4 ">
						<h1 className="font-bebas text-5xl font-normal text-white">
						Let’s connect        
					</h1>
					<p className="text-subtitle">
						Say hello at janpatrickmaureal@gmail.com
					</p>
				</div>
				<div className="flex flex-row space-x-6 text-primary">
					
					<a href="https://www.linkedin.com/in/janpatrickmaureal/" target="_blank" rel="noopener noreferrer"><LinkedInLogoIcon height={26} width={26} /></a>
					<a href="https://github.com/patrickMaureal" target="_blank" rel="noopener noreferrer"><GitHubLogoIcon height={26} width={26} /></a>
					
				</div>
			</div>
		</div>
	)
}

export default Contact