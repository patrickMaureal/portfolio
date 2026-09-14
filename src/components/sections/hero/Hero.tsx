import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import myProfile from '../../../assets/profile/profile.png'
import ResumeButton from '../../ui/ResumeButton'

const Hero = () => {
	return (
		<section className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-4 py-12 sm:px-6 md:flex-row md:gap-14 md:py-20 lg:px-8'>
			<div className='max-w-xl'>
				<p className='section-label mb-5'>Available for freelance & full-time work</p>
				<h1 className='font-bebas text-5xl leading-none text-primary sm:text-6xl md:text-7xl lg:text-[6rem]'>Hi, I&apos;m Patrick Maureal</h1>
				<p className='mt-4 max-w-lg text-base leading-7 text-subtitle md:text-lg'>
					I build clean, accessible, and conversion-focused web experiences for brands and businesses that want stronger digital presence and clearer user journeys.
				</p>

				<div className='mt-8 flex flex-wrap items-center gap-4'>
					<ResumeButton />
					<a href='https://www.linkedin.com/in/janpatrickmaureal/' target='_blank' rel='noreferrer' className='flex h-12 w-12 items-center justify-center rounded-full border border-border bg-panel text-primary'>
						<LinkedInLogoIcon height={20} width={20} />
					</a>
					<a href='https://github.com/patrickMaureal' target='_blank' rel='noreferrer' className='flex h-12 w-12 items-center justify-center rounded-full border border-border bg-panel text-primary'>
						<GitHubLogoIcon height={20} width={20} />
					</a>
				</div>

				<div className='mt-10 flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.2em] text-subtitle'>
					<span className='rounded-full border border-border bg-panel px-3 py-2'>React</span>
					<span className='rounded-full border border-border bg-panel px-3 py-2'>TypeScript</span>
					<span className='rounded-full border border-border bg-panel px-3 py-2'>UI Design</span>
				</div>
			</div>

			<div className='relative w-full max-w-md'>
				<div className='absolute -inset-4 rounded-[32px] border border-border bg-black/4 blur-xl' />
				<div className='relative overflow-hidden rounded-[30px] border border-border bg-panel p-3 shadow-soft'>
					<img src={myProfile} alt='Patrick Maureal' className='h-[420px] w-full rounded-[22px] object-cover' />
				</div>
				<div className='absolute -bottom-5 left-6 rounded-2xl border border-border bg-background px-4 py-3 shadow-soft'>
					<p className='text-[0.66rem] uppercase tracking-[0.18em] text-muted'>Based in</p>
					<p className='mt-1 text-lg font-medium text-primary'>Cebu, Philippines</p>
				</div>
			</div>
		</section>
	)
}

export default Hero