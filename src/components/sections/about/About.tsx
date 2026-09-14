import aboutImg from "../../../assets/profile/profile.png"

const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-start gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
        <div className="hidden md:flex md:items-center md:justify-start">
          <h1 className="font-bebas text-6xl leading-none text-primary lg:text-8xl">About</h1>
        </div>

        <div className="flex flex-col gap-6">
          <p className="section-label">Profile</p>
          <h2 className="text-2xl font-medium text-primary md:text-4xl">
            I craft digital experiences that are thoughtful, useful, and easy to trust.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-subtitle md:text-lg">
            I&apos;m a web developer based in Cebu, Philippines, focused on building modern interfaces that balance clarity, accessibility, and strong product thinking. I enjoy solving real user problems with elegant code and customer-first design decisions.
          </p>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-panel p-4">
              <p className="text-[0.66rem] uppercase tracking-[0.18em] text-muted">Experience</p>
              <p className="mt-2 text-2xl font-medium text-primary">3+ yrs</p>
            </div>
            <div className="rounded-2xl border border-border bg-panel p-4">
              <p className="text-[0.66rem] uppercase tracking-[0.18em] text-muted">Focus</p>
              <p className="mt-2 text-2xl font-medium text-primary">Web</p>
            </div>
            <div className="rounded-2xl border border-border bg-panel p-4">
              <p className="text-[0.66rem] uppercase tracking-[0.18em] text-muted">Style</p>
              <p className="mt-2 text-2xl font-medium text-primary">Clean</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 md:hidden">
        <img src={aboutImg} alt="Patrick Maureal" className="h-56 w-full rounded-[22px] border border-border object-cover" />
      </div>
    </section>
  );
};

export default About;
