import InteractivePunjabAtlas from '../../components/InteractivePunjabAtlas';

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

const indianDistricts = ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rupnagar', 'Sangrur', 'SAS Nagar', 'Sri Muktsar Sahib', 'Tarn Taran'];
const rivers = [
  { name: 'Jhelum', note: 'Western river tied to old Punjab geography and memory.' },
  { name: 'Chenab', note: 'River of many folk stories, including Heer Ranjha regions.' },
  { name: 'Ravi', note: 'Flows near Lahore and old central Punjab routes.' },
  { name: 'Beas', note: 'Eastern Punjab river connected to farming and settlement.' },
  { name: 'Sutlej', note: 'Major river connected with Malwa and Punjab’s name.' },
];
const heritagePlaces = ['Nankana Sahib', 'Amritsar', 'Anandpur Sahib', 'Kartarpur Sahib', 'Lahore Fort', 'Wagah', 'Dera Baba Nanak', 'Takht Sri Damdama Sahib'];

export default function MapsPage() {
  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[#24160f] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">Sanjha Maps</p>
          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">Punjab Map Library</h1>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-100">Clean interactive maps: no crowded labels. Tap a numbered place and its history opens in a detail panel.</p>
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

      <InteractivePunjabAtlas />

      <section id="old-punjab" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 md:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">Old Punjab</p>
          <h2 className="mt-2 text-4xl font-black">Before modern borders</h2>
          <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">This layer teaches historic Punjab as a cultural region. Next build: old map images, era switcher, Sikh Empire boundary, British Punjab, and Partition map.</p>
        </div>
      </section>

      <section id="new-punjab" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 md:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">New Punjab</p>
          <h2 className="mt-2 text-4xl font-black">Indian Punjab + Pakistani Punjab</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100"><h3 className="font-black">Indian Punjab</h3><p className="mt-2 text-sm text-slate-700">Amritsar, Ludhiana, Jalandhar, Patiala, Bathinda, Mohali and districts.</p></div>
            <div className="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100"><h3 className="font-black">Pakistani Punjab</h3><p className="mt-2 text-sm text-slate-700">Lahore, Faisalabad, Multan, Rawalpindi, Gujranwala, Nankana Sahib and divisions.</p></div>
          </div>
        </div>
      </section>

      <section id="districts" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 md:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">Districts</p>
          <h2 className="mt-2 text-4xl font-black">Tap district chips next</h2>
          <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">District names should not be crammed on the map. Kids first see clean district chips, then each district will open its own story page.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {indianDistricts.map((district) => <span key={district} className="rounded-full bg-white px-3 py-2 text-xs font-black text-slate-800 ring-1 ring-slate-200">{district}</span>)}
          </div>
        </div>
      </section>

      <section id="rivers" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 md:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-800">Five Rivers</p>
          <h2 className="mt-2 text-4xl font-black">One river at a time</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {rivers.map((river) => <div key={river.name} className="rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-100"><h3 className="font-black text-blue-900">{river.name}</h3><p className="mt-1 text-sm font-semibold text-slate-700">{river.note}</p></div>)}
          </div>
        </div>
      </section>

      <section id="heritage" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 pb-16 md:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-800">Heritage Places</p>
          <h2 className="mt-2 text-4xl font-black">Story pins without clutter</h2>
          <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">These become detailed pages with history, maps, kids summary, Punjabi words, photos, and family questions.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {heritagePlaces.map((place) => <span key={place} className="rounded-full bg-amber-50 px-3 py-2 text-xs font-black text-slate-800 ring-1 ring-amber-200">{place}</span>)}
          </div>
        </div>
      </section>
    </main>
  );
}
