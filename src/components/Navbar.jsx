export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-5 flex items-center justify-between rounded-full border border-white/15 bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10 py-2.5 px-4">
          <a href="#" className="text-white font-semibold tracking-tight">My Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="md:inline-flex hidden rounded-full bg-white text-gray-900 px-4 py-1.5 text-sm font-medium">Hire Me</a>
        </div>
      </div>
    </header>
  )
}
