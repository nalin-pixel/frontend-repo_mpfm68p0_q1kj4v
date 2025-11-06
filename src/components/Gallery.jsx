export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop',
  ];

  return (
    <section id="gallery" className="bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Gallery</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Street presence from every angle. Minimal, muscular, unmistakably Hunter.
            </p>
          </div>
          <a href="#book" className="hidden rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-amber-200 sm:block">
            Book a Test Ride
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={src}
                alt={`Hunter 350 view ${idx + 1}`}
                className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
