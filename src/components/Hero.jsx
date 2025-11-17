import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 flex h-[90vh] items-center">
        <div className="mx-auto max-w-6xl px-6">
          <div className="backdrop-blur-sm/0">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(99,102,241,0.45)]">
              Futuristic Portfolio
            </h1>
            <p className="mt-4 max-w-2xl text-white/85 text-base md:text-lg leading-relaxed">
              A modern developer showcase with a pulsing blue–purple vibe, subtle motion, and crisp typography.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-white/90 hover:bg-white text-gray-900 px-5 py-2.5 font-medium transition-colors">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-indigo-600/90 hover:bg-indigo-600 text-white px-5 py-2.5 font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1020]" />
    </section>
  );
}
