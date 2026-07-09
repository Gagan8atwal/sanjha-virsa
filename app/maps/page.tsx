const mapZones = [
  {
    title: 'Old Punjab Atlas',
    punjabi: 'ਪੁਰਾਣਾ ਪੰਜਾਬ',
    description: 'Historic Punjab before modern borders, shown as a story atlas with rivers, cities, regions, and memory pins.',
    points: ['Lahore', 'Amritsar', 'Multan', 'Rawalpindi', 'Patiala', 'Jalandhar'],
  },
  {
    title: 'Indian Punjab Today',
    punjabi: 'ਭਾਰਤੀ ਪੰਜਾਬ',
    description: 'Districts, cities, gurdwaras, farming, food, music, and modern Punjabi life.',
    points: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Anandpur Sahib'],
  },
  {
    title: 'Pakistani Punjab Today',
    punjabi: 'ਪਾਕਿਸਤਾਨੀ ਪੰਜਾਬ',
    description: 'Lahore, Faisalabad, Multan, Sufi heritage, Shahmukhi Punjabi, shared food, and poetry.',
    points: ['Lahore', 'Faisalabad', 'Gujranwala', 'Multan', 'Rawalpindi', 'Nankana Sahib'],
  },
  {
    title: 'Five Rivers Journey',
    punjabi: 'ਪੰਜ ਦਰਿਆ',
    description: 'Follow the rivers and learn how water shaped farms, travel, music, food, and memory.',
    points: ['Jhelum', 'Chenab', 'Ravi', 'Beas', 'Sutlej'],
  },
];

const pins = [
  { name: 'Lahore', x: '29%', y: '39%', type: 'city', note: 'Historic capital, literature, food, art, and shared Punjabi memory.' },
  { name: 'Amritsar', x: '40%', y: '46%', type: 'heritage', note: 'Spiritual and cultural center connected with Sikh heritage.' },
  { name: 'Nankana Sahib', x: '33%', y: '31%', type: 'heritage', note: 'Birthplace of Guru Nanak Dev Ji.' },
  { name: 'Multan', x: '18%', y: '66%', type: 'city', note: 'Ancient city known for saints, crafts, heat, and history.' },
  { name: 'Jalandhar', x: '52%', y: '52%', type: 'city', note: 'Doaba region, diaspora roots, sports goods, and culture.' },
  { name: 'Patiala', x: '60%', y: '66%', type: 'city', note: 'Royal history, music, clothing, and Malwa culture.' },
  { name: 'Sutlej', x: '72%', y: '59%', type: 'river', note: 'One of the five rivers connected to Punjab’s name.' },
  { name: 'Ravi', x: '38%', y: '37%', type: 'river', note: 'River connected to Lahore, Amritsar region, and old Punjab routes.' },
];

export default function MapsPage() {
  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[radial-gradient(circle_at_top_left,#fef08a,transparent_25%),linear-gradient(135deg,#064e3b,#111827_55%,#7f1d1d)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-200">Sanjha Maps</p>
          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">Punjab Atlas Room</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100">A custom map experience for old Punjab, new Punjab, rivers, cities, gurdwaras, pind roots, and story pins. This replaces the weak prototype map.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] bg-white p-5 shadow-2xl ring-1 ring-black/10">
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">Interactive Atlas</p>
                <h2 className="mt-1 text-3xl font-black">Tap the story pins</h2>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-black">
                <span className="rounded-full bg-red-100 px-3 py-2 text-red-800">Cities</span>
                <span className="rounded-full bg-amber-100 px-3 py-2 text-amber-900">Heritage</span>
                <span className="rounded-full bg-blue-100 px-3 py-2 text-blue-800">Rivers</span>
              </div>
            </div>

            <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,#fde68a,transparent_22%),radial-gradient(circle_at_70%_70%,#bbf7d0,transparent_25%),linear-gradient(135deg,#fef3c7,#dcfce7)] p-4 ring-1 ring-amber-200">
              <svg viewBox="0 0 900 560" className="absolute inset-0 h-full w-full" role="img" aria-label="Illustrated Punjab atlas">
                <path d="M120 85 C220 35 350 45 438 88 C515 125 620 130 726 98 C789 79 835 117 817 188 C798 264 725 291 696 365 C665 446 570 503 455 489 C347 476 297 416 210 416 C111 416 64 338 96 260 C122 197 60 137 120 85 Z" fill="#facc15" opacity="0.28" />
                <path d="M152 126 C244 84 349 96 420 138 C486 177 561 187 645 159 C716 135 760 165 742 225 C722 292 655 313 626 377 C598 438 514 475 423 459 C337 444 303 392 224 392 C145 392 110 328 135 270 C158 215 98 151 152 126 Z" fill="#16a34a" opacity="0.24" />
                <path d="M139 115 C245 70 377 74 459 132 C547 195 653 158 734 141" fill="none" stroke="#2563eb" strokeWidth="9" strokeLinecap="round" opacity="0.72" />
                <path d="M184 205 C297 170 383 188 470 235 C555 282 648 276 755 238" fill="none" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" opacity="0.62" />
                <path d="M145 307 C250 277 356 304 455 352 C558 402 666 393 786 348" fill="none" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" opacity="0.58" />
                <path d="M267 72 C251 160 272 232 240 332 C221 390 205 438 211 500" fill="none" stroke="#7f1d1d" strokeWidth="4" strokeDasharray="12 12" opacity="0.42" />
                <path d="M552 72 C520 158 527 247 563 327 C599 408 584 459 548 510" fill="none" stroke="#7f1d1d" strokeWidth="4" strokeDasharray="12 12" opacity="0.42" />
              </svg>

              {pins.map((pin) => (
                <a
                  key={pin.name}
                  href={`#${pin.name.toLowerCase().replaceAll(' ', '-')}`}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-3 text-sm font-black text-white shadow-xl ring-4 ring-white/70 transition hover:scale-110 ${
                    pin.type === 'river' ? 'bg-blue-700' : pin.type === 'heritage' ? 'bg-amber-600' : 'bg-red-800'
                  }`}
                  style={{ left: pin.x, top: pin.y }}
                >
                  {pin.name}
                </a>
              ))}

              <div className="absolute bottom-5 left-5 max-w-md rounded-[2rem] bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">Atlas Goal</p>
                <p className="mt-2 text-sm font-semibold leading-6">Next: turn every pin into its own page with story, photos, timeline, family question, Punjabi words, and old/new map comparison.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[2rem] bg-[#24160f] p-6 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">Map Missions</p>
              <div className="mt-5 grid gap-3">
                {['Find Lahore and Amritsar', 'Remember one river', 'Ask family about their pind', 'Compare old and new Punjab'].map((mission, index) => (
                  <div key={mission} className="rounded-2xl bg-white/10 p-4 font-black ring-1 ring-white/10">{index + 1}. {mission}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">Coming Next</p>
              <p className="mt-3 text-2xl font-black">Real SVG map layers</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">Old Punjab boundary, Indian Punjab, Pakistani Punjab, rivers, districts, takhts, gurdwaras, folk regions, and diaspora routes.</p>
            </div>
          </aside>
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

        <section className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pins.map((pin) => (
            <article id={pin.name.toLowerCase().replaceAll(' ', '-')} key={pin.name} className="scroll-mt-28 rounded-[2rem] bg-white p-6 shadow-md ring-1 ring-black/10">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Story Pin</p>
              <h3 className="mt-3 text-2xl font-black">{pin.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{pin.note}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
