export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl">
        {/* Logo */}
        <h1 className="text-6xl md:text-8xl font-light tracking-wide mb-10">
          upp
        </h1>

        {/* WE ARE */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-widest">
          WE ARE...
        </h2>

        {/* Subtitle */}
        <p className="uppercase text-sm md:text-base font-semibold leading-relaxed mb-6">
          Innovating Business Transformation <br />
          Through Data, AI, and Salesforce Consulting
        </p>

        <p className="text-gray-300 mb-10">
          Achieve measurable success with Productized AI, Big Data insights.
        </p>

        {/* Button */}
        <button
          className="px-8 py-4 bg-white text-black rounded-full 
          font-medium 
          shadow-[0_0_30px_rgba(255,255,255,0.6)]
          hover:scale-105 transition duration-300"
        >
          Unlock your future
        </button>
      </div>
    </section>
  );
}
