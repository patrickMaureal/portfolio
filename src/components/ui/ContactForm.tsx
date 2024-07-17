const ContactForm = () => {
	return (
		<>
			<form className="flex flex-col w-full space-y-6">
				<div className="flex flex-col space-y-2">
					<label htmlFor="name" className="text-subtitle text-base font-medium font-manrope">Name</label>
					<input type="text" name="name" id="name" className="py-2.5 px-4 bg-[#1A1A1A] rounded-lg text-white" />
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="email" className="text-subtitle text-base font-medium font-manrope">Email</label>
					<input type="email" name="email" id="email" className="py-2.5 px-4 bg-[#1A1A1A] rounded-lg text-white"  />
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="subject" className="text-subtitle text-base font-medium font-manrope">Subject</label>
					<input type="text" name="subject" id="subject" className="py-2.5 px-4 bg-[#1A1A1A] rounded-lg text-white" />
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="message" className="text-subtitle text-base font-medium font-manrope">Message</label>
					<textarea name="message" id="message" className="py-2.5 px-4 bg-[#1A1A1A] rounded-lg text-white" rows={4}></textarea>
				</div>

				<button className="rounded-full uppercase bg-primary py-4 px-4 md:py-4 md:px-8 text-background font-manrope font-bold text-base md:text-xl w-2/5">Submit</button>
			</form>
		</>
	)
}

export default ContactForm