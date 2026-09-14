import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const Contact = () => {
	return (
		<section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
			<div className="flex flex-col gap-8 border border-border bg-panel p-6 shadow-soft md:p-10">
				<div className="space-y-4">
					<p className="section-label">Let’s connect</p>
					<h2 className="font-bebas text-4xl text-primary sm:text-5xl">Let’s build something clear, useful, and memorable.</h2>
					<a href="mailto:janpatrickmaureal@gmail.com" className="inline-block text-base text-subtitle underline decoration-black/20 underline-offset-8 hover:text-primary">
						janpatrickmaureal@gmail.com
					</a>
				</div>
				<div className="flex items-center gap-4 text-primary">
					<a href="https://www.linkedin.com/in/janpatrickmaureal/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
						<LinkedInLogoIcon height={20} width={20} />
					</a>
					<a href="https://github.com/patrickMaureal" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
						<GitHubLogoIcon height={20} width={20} />
					</a>
				</div>
			</div>
		</section>
	)
}

export default Contact