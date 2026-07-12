import InteractivePunjabAtlas from '../../components/InteractivePunjabAtlas';

const related = [
  { title: 'Punjab Cities', href: '/cities', text: 'Open the city directory and explore more local histories.' },
  { title: 'Punjab Through Time', href: '/timeline', text: 'Follow major historical transitions in chronological order.' },
  { title: 'Architecture Museum', href: '/architecture', text: 'Study forts, havelis, sacred spaces, gates, and regional building traditions.' },
  { title: 'Food Museum', href: '/food', text: 'Connect each place with Punjabi food, farming, markets, and family memory.' },
];

export default function MapsPage() {
  return (
    <main className="sv-page">
      <nav aria-label="Breadcrumb" className="border-b border-black/10 bg-[#fffdf8]">
        <div className="sv-container flex items-center gap-2 py-4 text-xs font-black uppercase tracking-[.14em] text-[#6f675f]"><a href="/" className="hover:text-[#6f1d1b]">Home</a><span>/</span><span className="text-[#6f1d1b]">Heritage Maps</span></div>
      </nav>

      <section className="overflow-hidden border-b border-black/10 bg-[#6f1d1b] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div><p className="text-xs font-black uppercase tracking-[.24em] text-[#f0cc83]">Interactive Punjabi Heritage Maps</p><h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[.97] tracking-[-.045em] md:text-7xl">One Punjab, many eras, cities, and memories.</h1><p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/72">Move through historical eras, search major cities, filter heritage categories, compare East and West Punjab, and open a detailed cultural profile for every destination.</p></div>
          <svg viewBox="0 0 520 390" role="img" aria-label="Illustrated Punjab map with rivers and city landmarks" className="w-full rounded-[2rem] border border-white/10 bg-[#f4dfb8] p-4 shadow-2xl"><rect width="520" height="390" rx="28" fill="#f4dfb8"/><path d="M63 72c92-48 191-35 260 6 75 45 132 39 181 22-4 63-53 94-76 142-31 67-96 108-180 96-77-11-114-54-180-49-66 5-90-56-63-108 22-43-6-85 58-109Z" fill="#d7c270" stroke="#8a5b1f" strokeWidth="7"/><path d="M263 75c-20 76-7 132 14 187 16 43 10 78-7 107" fill="none" stroke="#fffdf8" strokeWidth="6" strokeDasharray="12 12"/><path d="M75 125c104-38 188-22 267 21 63 35 108 30 145 17M82 205c90-27 169-9 239 30 64 35 114 34 165 14M73 280c94-11 177 13 249 52 56 31 108 29 158 16" fill="none" stroke="#3f7da2" strokeWidth="9" strokeLinecap="round"/><g fill="#6f1d1b" stroke="#fffdf8" strokeWidth="5"><circle cx="218" cy="153" r="14"/><circle cx="292" cy="170" r="14"/><circle cx="171" cy="231" r="14"/><circle cx="361" cy="255" r="14"/></g><path d="M105 322h87v-48h-87zM335 316h98v-64h-98z" fill="#315a45"/><path d="M98 274l51-38 51 38M325 252l59-46 59 46" fill="#d99a22"/></svg>
        </div>
      </section>

      <InteractivePunjabAtlas />

      <section className="sv-container py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[.75fr_1.25fr] md:items-end"><div><p className="sv-kicker">Related museums</p><h2 className="mt-4 font-serif text-4xl font-bold tracking-[-.03em]">Keep exploring Punjab beyond the map.</h2></div><p className="text-base font-medium leading-8 text-[#625a52]">Every map destination connects to the wider Sanjha Virsa collection, helping families move naturally between geography, history, food, architecture, language, and memory.</p></div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{related.map((item, index) => <a key={item.href} href={item.href} className="group rounded-[1.5rem] border border-black/10 bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><span className="text-xs font-black text-[#6f1d1b]">0{index + 1}</span><h3 className="mt-4 font-serif text-2xl font-bold">{item.title}</h3><p className="mt-3 text-sm font-medium leading-7 text-[#625a52]">{item.text}</p><p className="mt-5 text-sm font-black text-[#315a45]">Open museum <span aria-hidden="true">›</span></p></a>)}</div>
      </section>

      <section className="border-t border-black/10 bg-[#201712] text-white"><div className="sv-container grid gap-8 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#f0cc83]">Map standard</p><h2 className="mt-4 font-serif text-4xl font-bold">Cultural learning, not political argument.</h2></div><p className="text-base font-medium leading-8 text-white/70">The atlas explains changing borders while presenting Punjab’s cities, rivers, languages, sacred places, and family memories as a connected cultural inheritance shared across generations.</p></div></section>
    </main>
  );
}
