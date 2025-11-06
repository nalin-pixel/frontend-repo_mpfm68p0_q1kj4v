import { Gauge, Zap, Disc, Ruler } from 'lucide-react';

const specs = [
  {
    icon: Gauge,
    title: 'Engine',
    value: '349cc J‑Series, air‑oil cooled',
  },
  {
    icon: Zap,
    title: 'Power & Torque',
    value: '20.2 bhp @ 6100 rpm • 27 Nm @ 4000 rpm',
  },
  {
    icon: Disc,
    title: 'Braking',
    value: 'Dual-channel ABS • 300mm front disc',
  },
  {
    icon: Ruler,
    title: 'Seat Height & Weight',
    value: '800 mm • 181 kg (kerb)',
  },
];

export default function Specs() {
  return (
    <section id="specs" className="relative bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hunter 350 Key Specs</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Balanced for city agility and weekend sprints. Built on the proven J‑platform for smooth, refined performance.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map(({ icon: Icon, title, value }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-amber-300">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/80">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
