import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Work, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <footer className="bg-[#0b1020] px-6 py-12 text-center text-white/60">© 2025 Your Name</footer>
    </div>
  )
}

export default App
