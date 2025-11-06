import Hero from './components/Hero';
import Specs from './components/Specs';
import Gallery from './components/Gallery';
import CTA from './components/CTA';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/70 to-transparent py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#" className="text-lg font-bold tracking-wide text-white">Hunter 350</a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#specs" className="hover:text-white">Specs</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#book" className="rounded-md bg-white px-4 py-2 font-semibold text-gray-900 hover:bg-amber-200">Test Ride</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Hunter 350 — Royal Enfield Tribute</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#specs" className="hover:text-white">Specs</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#book" className="hover:text-white">Book</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-inter">
      <Header />
      <main>
        <Hero />
        <Specs />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
