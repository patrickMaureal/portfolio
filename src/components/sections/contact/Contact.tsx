import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import ContactForm from "../../ui/ContactForm"

const Contact = () => {
	return (
		<div className="flex flex-col md:flex-row justify-between items-start p-8 md:px-20 md:py-12 md:space-x-20 md:space-y-0 lg:px-28 lg:py-10 space-y-20 lg:space-x-28 lg:space-y-0">
			<div className="md:space-y-10">
				<div className="space-y-4 ">
						<h1 className="font-bebas text-5xl font-normal text-white">
						Let’s connect        
					</h1>
					<p className="text-subtitle">
						Say hello at janpatrickmaureal@gmail.com
					</p>
					<p className="text-subtitle font-manrope text-base font-normal">
					For more info, here’s my resume
					</p>
				</div>
				<div className="flex flex-row space-x-6 text-primary">
					<LinkedInLogoIcon height={26} width={26} />
					<GitHubLogoIcon height={26} width={26} />
					<TwitterLogoIcon height={26} width={26} />
					<InstagramLogoIcon height={26} width={26} />
				</div>
			</div>

			<ContactForm />
		</div>
	)
}

export default Contact