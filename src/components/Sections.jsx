export function About() {
  return (
    <section id="about" className="relative bg-[#0b1020] py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold">About</h2>
        <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
          I build performant web apps with modern stacks. I love design systems, animations, and crafting delightful experiences.
        </p>
      </div>
    </section>
  )
}

export function Work() {
  const projects = [
    { title: 'Motion Commerce', tag: 'Next.js, Framer Motion, Stripe' },
    { title: 'Realtime Dashboard', tag: 'Next.js, WebSockets, Charts' },
    { title: 'AI Docs Assistant', tag: 'Next.js, RAG, OpenAI' },
  ]

  return (
    <section id="work" className="relative bg-[#0b1020] py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30" />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-white/70">{p.tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b1020] py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <p className="mt-4 text-white/80">Open to opportunities and collaborations. Let’s build something great.</p>
        <a href="mailto:you@example.com" className="mt-8 inline-flex rounded-full bg-indigo-600 hover:bg-indigo-500 px-6 py-3 text-white font-semibold">you@example.com</a>
      </div>
    </section>
  )
}
