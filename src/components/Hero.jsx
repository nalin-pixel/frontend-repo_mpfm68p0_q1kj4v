import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24 md:px-12 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-wide text-white backdrop-blur">
          Urban Roadster • 350cc J‑Series
        </span>
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          Royal Enfield
          <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Hunter 350
          </span>
        </h1>
        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          A nimble, city‑first motorcycle that blends classic Enfield DNA with modern dynamics.
          Punchy torque, confident braking, and head‑turning style.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#specs"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-amber-200"
          >
            Explore Specs
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
          >
            See It in Action
          </a>
        </div>
      </div>
    </section>
  );
}
