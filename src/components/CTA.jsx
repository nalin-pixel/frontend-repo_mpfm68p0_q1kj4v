import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-black to-neutral-900 py-16">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-wide backdrop-blur">
          <Rocket size={14} /> Ready to roll
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Book a Test Ride</h2>
        <p className="mx-auto mt-2 max-w-2xl text-white/80">
          Experience the Hunter 350 up close. Share your contact and preferred date — we’ll arrange the rest.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
        >
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-amber-300"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-amber-300"
            required
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-amber-300 sm:col-span-2"
          />
          <button
            type="submit"
            className="col-span-1 rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-amber-200 sm:col-span-2"
          >
            Request Test Ride
          </button>
        </form>

        <p className="mt-4 text-xs text-white/60">
          By continuing you agree to be contacted by an authorized Royal Enfield partner.
        </p>
      </div>
    </section>
  );
}
