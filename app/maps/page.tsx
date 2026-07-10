const layers = [
  {
    id: 'old-punjab',
    title: 'Old Punjab',
    punjabi: 'ਪੁਰਾਣਾ ਪੰਜਾਬ',
    href: '#old-punjab',
    description: 'Historic Punjab before modern borders: rivers, major cities, regions, trade paths, and memory routes.',
  },
  {
    id: 'new-punjab',
    title: 'New Punjab',
    punjabi: 'ਅੱਜ ਦਾ ਪੰਜਾਬ',
    href: '#new-punjab',
    description: 'Modern Indian Punjab and Pakistani Punjab shown separately but taught as shared cultural heritage.',
  },
  {
    id: 'districts',
    title: 'Districts',
    punjabi: 'ਜ਼ਿਲ੍ਹੇ',
    href: '#districts',
    description: 'A clean district learning board for Indian Punjab now, Pakistani Punjab next.',
  },
  {
    id: 'rivers',
    title: 'Five Rivers',
    punjabi: 'ਪੰਜ ਦਰਿਆ',
    href: '#rivers',
    description: 'Learn the rivers one by one without crowding the map.',
  },
  {
    id: 'heritage',
    title: 'Heritage Places',
    punjabi: 'ਵਿਰਸੇ ਵਾਲੀਆਂ ਥਾਵਾਂ',
    href: '#heritage',
    description: 'Gurdwaras, cities, historic sites, and story locations.',
  },
];

const oldPunjabPlaces = ['Lahore', 'Amritsar', 'Multan', 'Rawalpindi', 'Jalandhar', 'Patiala', 'Sialkot', 'Gujranwala'];
const indianDistricts = ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rupnagar', 'Sangrur', 'SAS Nagar', 'Sri Muktsar Sahib', 'Tarn Taran'];
const rivers = [
  { name: 'Jhelum', note: 'Western river tied to old Punjab geography and memory.' },
  { name: 'Chenab', note: 'River of many folk stories, including Heer Ranjha regions.' },
  { name: 'Ravi', note: 'Flows near Lahore and old central Punjab routes.' },
  { name: 'Beas', note: 'Eastern Punjab river connected to farming and settlement.' },
  { name: 'Sutlej', note: 'Major river connected with Malwa and Punjab’s name.' },
];
const heritagePlaces = ['Nankana Sahib', 'Amritsar', 'Anandpur Sahib', 'Kartarpur Sahib', 'Lahore Fort', 'Wagah', 'Dera Baba Nanak', 'Takht Sri Damdama Sahib'];

function MiniMap({ label, variant }: { label: string; variant: 'old' | 'new' | 'districts' | 'rivers' | 'heritage' }) {
  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-[2rem] bg-[#fef3c7] p-5 ring-1 ring-amber-200">
      <svg viewBox="0 0 700 360" className="absolute inset-0 h-full w-full" aria-label={label}>
        <path d="M105 60 C190 28 305 35 388 70 C470 105 545 83 615 68 C650 61 680 92 660 140 C635 200 592 215 560 270 C522 333 425 338 340 315 C258 292 215 328 140 300 C75 276 60 210 90 160 C118 113 58 82 105 60 Z" fill="#f59e0b" opacity="0.26" />
        <path d="M130 88 C210 62 300 73 365 105 C425 135 505 122 585 99" stroke="#2563eb" strokeWidth="8" fill="none" opacity="0.7" strokeLinecap="round" />
        <path d="M122 168 C225 135 315 158 405 198 C488 236 565 220 640 190" stroke="#2563eb" strokeWidth="7" fill="none" opacity="0.55" strokeLinecap="round" />
        <path d="M120 245 C225 225 310 252 406 285 C488 314 570 300 642 268" stroke="#2563eb" strokeWidth="7" fill="none" opacity="0.5" strokeLinecap="round" />
        {variant === 'new' && <path d="M350 50 C330 105 330 165 350 230 C370 285 360 320 340 350" stroke="#7f1d1d" strokeWidth="5" strokeDasharray="10 10" fill="none" />}
        {variant === 'districts' && [170, 240, 310, 380, 450, 520].map((x, i) => <circle key={x} cx={x} cy={140 + (i % 3) * 55} r="28" fill="#16a34a" opacity="0.25" stroke="#166534" />)}
        {variant === 'rivers' && [90, 150, 210, 270, 330].map((y) => <path key={y} d={`M90 ${y} C220 ${y - 35} 360 ${y + 30} 620 ${y - 10}`} stroke="#1d4ed8" strokeWidth="6" fill="none" opacity="0.7" strokeLinecap="round" />)}
        {variant === 'heritage' && [[215, 120], [345, 170], [480, 130], [535, 250], [290, 260]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="16" fill="#b45309" stroke="#fff7ed" strokeWidth="6" />)}
      </svg>
      <div className="relative z-10 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">{label}</p>
        <p className="mt-1 text-sm font-semibold text-slate-700">Clean visual layer. Details are below, not crowded on the map.</p>
      </div>
    </div>
  );
}

export default function MapsPage() {
  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[#24160f] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">Sanjha Maps</p>
          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">Punjab Map Library</h1>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-100">Instead of one crowded map, this page now opens clear map layers: old Punjab, new Punjab, districts, rivers, and heritage places.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="grid gap-4 md:grid-cols-5">
          {layers.map((layer) => (
            <a key={layer.id} href={layer.href} className="rounded-[2rem] bg-white p-5 shadow-md ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl">
              <h2 className="text-xl font-black">{layer.title}</h2>
              <p className="mt-1 text-lg font-black text-red-800">{layer.punjabi}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{layer.description}</p>
              <p className="mt-4 font-black text-emerald-800">Open layer →</p>
            </a>
          ))}
        </div>
      </section>

      <section id="old-punjab" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <MiniMap label="Old Punjab Layer" variant="old" />
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">Old Punjab</p>
            <h2 className="mt-2 text-4xl font-black">Before modern borders</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">This layer teaches historic Punjab as a cultural region. It should later include boundary changes by era, old map images, trade paths, Sikh Empire boundaries, British Punjab, and Partition context.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {oldPunjabPlaces.map((place) => <span key={place} className="rounded-full bg-amber-50 px-3 py-2 text-xs font-black text-slate-800 ring-1 ring-amber-200">{place}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="new-punjab" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <MiniMap label="New Punjab Layer" variant="new" />
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">New Punjab</p>
            <h2 className="mt-2 text-4xl font-black">Indian Punjab + Pakistani Punjab</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">This layer separates today’s political map but keeps the cultural connection clear. Future work: two side-by-side clickable maps with districts, cities, language, food, and heritage markers.</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100"><h3 className="font-black">Indian Punjab</h3><p className="mt-2 text-sm text-slate-700">Amritsar, Ludhiana, Jalandhar, Patiala, Bathinda, Mohali and districts.</p></div>
              <div className="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100"><h3 className="font-black">Pakistani Punjab</h3><p className="mt-2 text-sm text-slate-700">Lahore, Faisalabad, Multan, Rawalpindi, Gujranwala, Nankana Sahib and divisions.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="districts" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <MiniMap label="District Learning Layer" variant="districts" />
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">Districts</p>
            <h2 className="mt-2 text-4xl font-black">Learn districts clearly</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">District names should not be crammed on the map. Kids first see clean district chips, then tap one to open a story page later.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {indianDistricts.map((district) => <span key={district} className="rounded-full bg-white px-3 py-2 text-xs font-black text-slate-800 ring-1 ring-slate-200">{district}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="rivers" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <MiniMap label="Five Rivers Layer" variant="rivers" />
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-800">Five Rivers</p>
            <h2 className="mt-2 text-4xl font-black">One river at a time</h2>
            <div className="mt-5 grid gap-3">
              {rivers.map((river) => <div key={river.name} className="rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-100"><h3 className="font-black text-blue-900">{river.name}</h3><p className="mt-1 text-sm font-semibold text-slate-700">{river.note}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="heritage" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 pb-16 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <MiniMap label="Heritage Places Layer" variant="heritage" />
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-800">Heritage Places</p>
            <h2 className="mt-2 text-4xl font-black">Story pins without clutter</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">These will become detailed pages with history, maps, kids summary, Punjabi words, photos, and family questions.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {heritagePlaces.map((place) => <span key={place} className="rounded-full bg-amber-50 px-3 py-2 text-xs font-black text-slate-800 ring-1 ring-amber-200">{place}</span>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
