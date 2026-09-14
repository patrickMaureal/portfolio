import Projects from "../components/sections/projects/Projects";

const Work = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-10">
        <p className="section-label">Selected work</p>
        <h1 className="mt-3 font-bebas text-5xl text-primary md:text-7xl">Work</h1>
      </div>
      <Projects />
    </main>
  );
};

export default Work;
