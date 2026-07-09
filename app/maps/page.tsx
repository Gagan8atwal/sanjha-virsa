const mapZones = [
  {
    title: 'Old Punjab',
    punjabi: 'ਪੁਰਾਣਾ ਪੰਜਾਬ',
    description: 'Historic Punjab before modern borders. This will become our own illustrated map with regions, rivers, cities, trade routes, and story markers.',
    points: ['Lahore', 'Amritsar', 'Multan', 'Rawalpindi', 'Patiala', 'Jalandhar'],
  },
  {
    title: 'Modern Indian Punjab',
    punjabi: 'ਅੱਜ ਦਾ ਭਾਰਤੀ ਪੰਜਾਬ',
    description: 'Districts, cities, villages, gurdwaras, farms, food, music, and modern life across Indian Punjab.',
    points: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Anandpur Sahib'],
  },
  {
    title: 'Modern Pakistani Punjab',
    punjabi: 'ਅੱਜ ਦਾ ਪਾਕਿਸਤਾਨੀ ਪੰਜਾਬ',
    description: 'Cities, Sufi heritage, Punjabi language, Shahmukhi, shared food, poetry, music, and historic places.',
    points: ['Lahore', 'Faisalabad', 'Gujranwala', 'Multan', 'Rawalpindi', 'Nankana Sahib'],
  },
  {
    title: 'Five Rivers Path',
    punjabi: 'ਪੰਜ ਦਰਿਆਵਾਂ ਦਾ ਰਾਹ',
    description: 'A child-friendly river journey explaining how water shaped Punjab’s farming, travel, language, and memory.',
    points: ['Jhelum', 'Chenab', 'Ravi', 'Beas', 'Sutlej'],
  },
];

export default function MapsPage() {
  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#064e3b,#111827_55%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-200">Sanjha Maps</p>
          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">Our own Punjab map room</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100">This is the internal map foundation. No more only outside links. We will build custom illustrated maps for old Punjab, modern Punjab, rivers, regions, cities, and family roots.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">Prototype Map</p>
          <div className="relative mt-6 min-h-[420px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_20%_30%,#fde68a,transparent_20%),radial-gradient(circle_at_70%_60%,#bbf7d0,transparent_25%),linear-gradient(135deg,#fef3c7,#d9f99d)] p-6">
            <div className="absolute left-[12%] top-[18%] rounded-full bg-red-800 px-4 py-2 text-sm font-black text-white">Lahore</div>
            <div className="absolute left-[32%] top-[35%] rounded-full bg-red-800 px-4 py-2 text-sm font-black text-white">Amritsar</div>
            <div className="absolute left-[48%] top-[48%] rounded-full bg-red-800 px-4 py-2 text-sm font-black text-white">Ludhiana</div>
            <div className="absolute left-[62%] top-[62%] rounded-full bg-red-800 px-4 py-2 text-sm font-black text-white">Patiala</div>
            <div className="absolute left-[20%] top-[70%] rounded-full bg-blue-800 px-4 py-2 text-sm font-black text-white">Ravi River</div>
            <div className="absolute left-[72%] top-[28%] rounded-full bg-blue-800 px-4 py-2 text-sm font-black text-white">Sutlej River</div>
            <div className="absolute bottom-5 left-5 rounded-3xl bg-white/80 p-4 shadow-lg">
              <p className="font-black">Map Goal</p>
              <p className="mt-1 max-w-md text-sm leading-6">Next version: replace this prototype with custom SVG Punjab maps, clickable cities, rivers, old boundaries, and story pins.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {mapZones.map((zone) => (
            <article key={zone.title} className="rounded-[2rem] bg-white p-6 shadow-md ring-1 ring-black/10">
              <h2 className="text-2xl font-black">{zone.title}</h2>
              <p className="mt-2 text-xl font-black text-red-800">{zone.punjabi}</p>
              <p className="mt-4 text-sm leading-6 text-slate-700">{zone.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {zone.points.map((point) => (
                  <span key={point} className="rounded-full bg-amber-50 px-3 py-2 text-xs font-black text-slate-800 ring-1 ring-amber-200">{point}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
