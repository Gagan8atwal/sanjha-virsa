'use client';

import { useEffect, useMemo, useState } from 'react';

type VillagePlace = {
  id: string;
  name: string;
  punjabi: string;
  purpose: string;
  dailyLife: string;
  tools: string[];
  links: { label: string; href: string }[];
};

type Season = {
  name: string;
  punjabi: string;
  color: string;
  crops: string[];
  festivals: string[];
  foods: string[];
  activities: string[];
};

const places: VillagePlace[] = [
  { id: 'haveli', name: 'Haveli', punjabi: 'ਹਵੇਲੀ', purpose: 'A large family home organized around privacy, hospitality, storage, and shared responsibility.', dailyLife: 'Courtyards connected generations, meals, craft work, visitors, and evening conversation.', tools: ['Charpai', 'Sandook', 'Hand fan', 'Brass vessels'], links: [{ label: 'Architecture Museum', href: '/architecture' }, { label: 'Cultural Objects', href: '/objects' }] },
  { id: 'courtyard', name: 'Courtyard', punjabi: 'ਵੇਹੜਾ', purpose: 'The open heart of the home where domestic work and family life met.', dailyLife: 'Children played, elders rested, grain dried, clothes were prepared, and stories were shared.', tools: ['Charkha', 'Chhaj', 'Peerhi', 'Clay pots'], links: [{ label: 'Village Life Museum', href: '/village-life' }, { label: 'Folk Tales Museum', href: '/folk-tales' }] },
  { id: 'kitchen', name: 'Kitchen', punjabi: 'ਰਸੋਈ', purpose: 'A working space for nourishment, hospitality, preservation, and seasonal knowledge.', dailyLife: 'Meals were shaped by crops, weather, dairy work, family size, and celebrations.', tools: ['Tandoor', 'Chakki', 'Madani', 'Degchi'], links: [{ label: 'Food Museum', href: '/food' }, { label: 'Cultural Objects', href: '/objects' }] },
  { id: 'fields', name: 'Fields', punjabi: 'ਖੇਤ', purpose: 'The economic and seasonal foundation of village life.', dailyLife: 'Families planned around sowing, irrigation, harvesting, livestock, and market days.', tools: ['Plough', 'Sickle', 'Seed basket', 'Irrigation channel'], links: [{ label: 'Festivals Museum', href: '/festivals' }, { label: 'Heritage Maps', href: '/maps' }] },
  { id: 'well', name: 'Village Well', punjabi: 'ਖੂਹ', purpose: 'A water source and an important social gathering point.', dailyLife: 'Water collection created daily routines and brought neighbors together.', tools: ['Rope', 'Bucket', 'Pulley', 'Water vessel'], links: [{ label: 'Village Life Museum', href: '/village-life' }, { label: 'Proverbs Museum', href: '/proverbs' }] },
  { id: 'gurdwara', name: 'Gurdwara', punjabi: 'ਗੁਰਦੁਆਰਾ', purpose: 'A place for prayer, learning, service, memory, and community organization.', dailyLife: 'Sangat, kirtan, langar, announcements, and collective service connected the village.', tools: ['Manji Sahib', 'Rumal', 'Langar utensils', 'Prayer books'], links: [{ label: 'Sikh History', href: '/heritage' }, { label: 'Music Museum', href: '/music' }] },
  { id: 'school', name: 'School', punjabi: 'ਸਕੂਲ', purpose: 'A place where literacy, language, arithmetic, and civic knowledge were passed forward.', dailyLife: 'Children balanced learning with household and seasonal duties.', tools: ['Takhti', 'Slate', 'Ink pot', 'Books'], links: [{ label: 'Punjabi Language', href: '/language' }, { label: 'Kids Hub', href: '/kids' }] },
  { id: 'bazaar', name: 'Bazaar', punjabi: 'ਬਜ਼ਾਰ', purpose: 'The exchange point for crops, cloth, tools, food, news, and services.', dailyLife: 'Market days connected villages with towns, craftspeople, traders, and travelers.', tools: ['Scales', 'Baskets', 'Ledgers', 'Cloth rolls'], links: [{ label: 'Punjab Cities', href: '/cities' }, { label: 'Clothing Museum', href: '/clothing' }] },
  { id: 'blacksmith', name: 'Blacksmith', punjabi: 'ਲੁਹਾਰ', purpose: 'A specialist workshop for farm tools, repairs, fittings, and household metalwork.', dailyLife: 'The blacksmith supported nearly every stage of farming and transport.', tools: ['Anvil', 'Hammer', 'Bellows', 'Tongs'], links: [{ label: 'Cultural Objects', href: '/objects' }, { label: 'Traditional Games', href: '/games' }] },
  { id: 'potter', name: 'Potter', punjabi: 'ਘੁਮਿਆਰ', purpose: 'A craft space for making water pots, cooking vessels, lamps, and storage containers.', dailyLife: 'Clay work joined local soil, skilled hands, seasonal demand, and household needs.', tools: ['Potter wheel', 'Clay', 'Kiln', 'Shaping tools'], links: [{ label: 'Cultural Objects', href: '/objects' }, { label: 'Architecture Museum', href: '/architecture' }] },
  { id: 'weaver', name: 'Weaver', punjabi: 'ਜੁਲਾਹਾ', purpose: 'A textile workshop producing useful cloth and patterned household fabrics.', dailyLife: 'Spinning, dyeing, weaving, embroidery, and trade linked homes with local markets.', tools: ['Loom', 'Spindle', 'Thread', 'Dye pots'], links: [{ label: 'Clothing Museum', href: '/clothing' }, { label: 'Literature Museum', href: '/literature' }] },
  { id: 'cattle', name: 'Cattle Shed', punjabi: 'ਪਸ਼ੂਆਂ ਦਾ ਵਾੜਾ', purpose: 'A protected space for animals central to dairy work, farming, and household income.', dailyLife: 'Feeding, milking, cleaning, and fodder preparation shaped the daily rhythm.', tools: ['Fodder cutter', 'Milk pail', 'Rope', 'Feed trough'], links: [{ label: 'Village Life Museum', href: '/village-life' }, { label: 'Food Museum', href: '/food' }] },
];

const dayStages = [
  ['Before sunrise', 'ਅੰਮ੍ਰਿਤ ਵੇਲਾ', 'Prayer, animal care, water preparation, and the first household tasks begin.'],
  ['Morning', 'ਸਵੇਰ', 'Breakfast, school preparation, milking, cleaning, and field work start.'],
  ['Farming hours', 'ਖੇਤੀ ਦਾ ਸਮਾਂ', 'Irrigation, sowing, harvesting, repair work, and livestock duties continue.'],
  ['Market and school', 'ਬਜ਼ਾਰ ਤੇ ਸਕੂਲ', 'Children learn while adults trade produce, buy supplies, and exchange news.'],
  ['Evening', 'ਸ਼ਾਮ', 'Animals return, meals are prepared, tools are stored, and families gather.'],
  ['Night stories', 'ਰਾਤ ਦੀਆਂ ਗੱਲਾਂ', 'Folk tales, songs, family memory, and plans for the next day close the evening.'],
];

const seasons: Season[] = [
  { name: 'Spring', punjabi: 'ਬਸੰਤ', color: '#d99a22', crops: ['Mustard', 'Wheat'], festivals: ['Basant traditions', 'Hola Mohalla'], foods: ['Fresh greens', 'Lassi'], activities: ['Kite traditions', 'Field visits'] },
  { name: 'Summer', punjabi: 'ਗਰਮੀ', color: '#b65b35', crops: ['Fodder', 'Early rice work'], festivals: ['Village fairs'], foods: ['Mango', 'Chaas'], activities: ['Irrigation', 'Courtyard sleeping'] },
  { name: 'Monsoon', punjabi: 'ਸਾਵਣ', color: '#3f7da2', crops: ['Rice', 'Maize'], festivals: ['Teeyan'], foods: ['Pakoras', 'Kheer'], activities: ['Swings', 'Boliyan'] },
  { name: 'Autumn', punjabi: 'ਪਤਝੜ', color: '#8a5b1f', crops: ['Rice harvest', 'Cotton'], festivals: ['Harvest gatherings'], foods: ['Gur', 'Fresh grain dishes'], activities: ['Harvest work', 'Market trade'] },
  { name: 'Winter', punjabi: 'ਸਰਦੀ', color: '#315a45', crops: ['Wheat', 'Mustard'], festivals: ['Lohri', 'Maghi'], foods: ['Saag', 'Makki di roti', 'Pinni'], activities: ['Bonfires', 'Phulkari work'] },
];

const familyTerms = [
  ['Dada', 'ਦਾਦਾ', 'Paternal grandfather'], ['Dadi', 'ਦਾਦੀ', 'Paternal grandmother'],
  ['Nana', 'ਨਾਨਾ', 'Maternal grandfather'], ['Nani', 'ਨਾਨੀ', 'Maternal grandmother'],
  ['Taya', 'ਤਾਇਆ', 'Father’s elder brother'], ['Chacha', 'ਚਾਚਾ', 'Father’s younger brother'],
  ['Bhua', 'ਭੂਆ', 'Father’s sister'], ['Mama', 'ਮਾਮਾ', 'Mother’s brother'],
  ['Masi', 'ਮਾਸੀ', 'Mother’s sister'], ['Veer', 'ਵੀਰ', 'Brother or respectful male relation'],
  ['Bhen', 'ਭੈਣ', 'Sister or respectful female relation'], ['Puttar', 'ਪੁੱਤਰ', 'Affectionate term for a child'],
];

const passportStops = ['village', 'day', 'season', 'family'];

export default function LivingPunjabExperience() {
  const [selectedPlace, setSelectedPlace] = useState(places[0]);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [visited, setVisited] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem('sanjha-virsa-passport');
    if (stored) setVisited(JSON.parse(stored));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('sanjha-virsa-passport', JSON.stringify(visited));
  }, [visited]);

  const progress = useMemo(() => Math.round((visited.length / passportStops.length) * 100), [visited]);
  const mark = (id: string) => setVisited((current) => current.includes(id) ? current : [...current, id]);

  return (
    <main className="sv-page bg-[#fff8ed] text-[#201712]">
      <nav aria-label="Breadcrumb" className="border-b border-black/10 bg-[#fffdf8]"><div className="sv-container flex items-center gap-2 py-4 text-xs font-black uppercase tracking-[.14em] text-[#6f675f]"><a href="/">Home</a><span>/</span><span className="text-[#6f1d1b]">Living Punjab</span></div></nav>

      <section className="overflow-hidden border-b border-black/10 bg-[#293f36] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div><p className="text-xs font-black uppercase tracking-[.24em] text-[#f0cc83]">Living Heritage Experience</p><h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[.97] tracking-[-.045em] md:text-7xl">Walk through a Punjabi village, one living tradition at a time.</h1><p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/72">Explore places, family relationships, seasons, daily routines, tools, food, stories, and community life through an interactive cultural village.</p></div>
          <VillageIllustration place={selectedPlace.id} />
        </div>
      </section>

      <section className="sv-container py-14 md:py-20">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="sv-kicker">Virtual village</p><h2 className="mt-4 font-serif text-4xl font-bold">Choose a place to enter.</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {places.map((place, index) => <button key={place.id} type="button" onClick={() => { setSelectedPlace(place); mark('village'); }} className={`rounded-[1.4rem] border p-4 text-left transition hover:-translate-y-1 ${selectedPlace.id === place.id ? 'border-[#6f1d1b] bg-[#f4e5c5] shadow-lg' : 'border-black/10 bg-[#fffdf8]'}`}><span className="text-[.65rem] font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span><p className="mt-2 font-serif text-xl font-bold">{place.name}</p><p className="mt-1 font-black text-[#315a45]">{place.punjabi}</p></button>)}
            </div>
          </div>
          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,.1)]">
            <div className="bg-[#6f1d1b] p-7 text-white"><p className="text-xs font-black uppercase tracking-[.2em] text-[#f0cc83]">Selected village place</p><h2 className="mt-3 font-serif text-5xl font-bold">{selectedPlace.name}</h2><p className="mt-2 text-3xl font-black text-[#f3d9a8]">{selectedPlace.punjabi}</p></div>
            <div className="space-y-6 p-7"><Info title="Purpose" text={selectedPlace.purpose} /><Info title="Daily life" text={selectedPlace.dailyLife} /><div><p className="sv-kicker">Traditional tools</p><div className="mt-3 flex flex-wrap gap-2">{selectedPlace.tools.map((tool) => <span key={tool} className="rounded-full border border-black/10 bg-[#fff8e8] px-3 py-2 text-xs font-bold">{tool}</span>)}</div></div><div><p className="sv-kicker">Related museums</p><div className="mt-3 grid gap-2">{selectedPlace.links.map((link) => <a key={link.href} href={link.href} className="flex items-center justify-between rounded-xl border border-black/10 bg-[#fff8e8] px-4 py-3 text-sm font-black"><span>{link.label}</span><span>›</span></a>)}</div></div></div>
          </article>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#201712] text-white"><div className="sv-container py-14"><p className="text-xs font-black uppercase tracking-[.22em] text-[#f0cc83]">A day in the village</p><h2 className="mt-4 font-serif text-4xl font-bold">Follow the rhythm from dawn to night.</h2><div className="mt-8 grid gap-3 md:grid-cols-3 xl:grid-cols-6">{dayStages.map((stage, index) => <button key={stage[0]} type="button" onClick={() => { setSelectedDay(index); mark('day'); }} className={`rounded-[1.5rem] border p-5 text-left ${selectedDay === index ? 'border-[#e7b650] bg-[#e7b650] text-[#201712]' : 'border-white/12 bg-white/5'}`}><p className="text-xs font-black">{String(index + 1).padStart(2, '0')}</p><p className="mt-3 font-serif text-xl font-bold">{stage[0]}</p><p className="mt-1 font-black">{stage[1]}</p></button>)}</div><div className="mt-6 rounded-[1.5rem] border border-white/12 bg-white/6 p-6 text-base font-medium leading-8 text-white/78">{dayStages[selectedDay][2]}</div></div></section>

      <section className="sv-container py-14 md:py-20"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="sv-kicker">Seasonal Punjab</p><h2 className="mt-4 font-serif text-4xl font-bold">The calendar changes everything.</h2><div className="mt-6 grid gap-2">{seasons.map((season, index) => <button key={season.name} type="button" onClick={() => { setSelectedSeason(index); mark('season'); }} className={`flex items-center justify-between rounded-xl border px-4 py-4 text-left font-black ${selectedSeason === index ? 'border-[#201712] bg-[#f4e5c5]' : 'border-black/10 bg-[#fffdf8]'}`}><span>{season.name} · {season.punjabi}</span><span className="h-4 w-4 rounded-full" style={{ background: season.color }} /></button>)}</div></div><SeasonPanel season={seasons[selectedSeason]} /></div></section>

      <section className="border-y border-black/10 bg-[#f0e3c6]"><div className="sv-container py-14 md:py-20"><p className="sv-kicker">Family tree of Punjab</p><div className="mt-4 grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><h2 className="font-serif text-4xl font-bold">Relationships carry language, respect, and responsibility.</h2><p className="mt-5 text-base font-medium leading-8 text-[#625a52]">Punjabi family terms are more precise than simple English labels. They identify the side of the family, age relationship, affection, and expected forms of respect.</p><button type="button" onClick={() => mark('family')} className="mt-6 rounded-full bg-[#6f1d1b] px-5 py-3 text-sm font-black text-white">Mark family lesson complete</button></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{familyTerms.map(([name, pa, relation]) => <article key={name} className="rounded-[1.3rem] border border-black/10 bg-[#fffdf8] p-5"><p className="font-serif text-2xl font-bold">{name}</p><p className="mt-1 text-xl font-black text-[#6f1d1b]">{pa}</p><p className="mt-3 text-sm font-medium leading-6 text-[#625a52]">{relation}</p></article>)}</div></div></div></section>

      <section className="sv-container py-14 md:py-20"><div className="grid gap-8 rounded-[2rem] border border-black/10 bg-[#fffdf8] p-7 shadow-lg md:grid-cols-[.8fr_1.2fr] md:items-center"><div><p className="sv-kicker">Children’s heritage passport</p><h2 className="mt-4 font-serif text-4xl font-bold">Progress stays on this device.</h2><p className="mt-4 text-sm font-medium leading-7 text-[#625a52]">Visit the village, complete the day, explore a season, and learn family terms. Progress is stored locally without requiring an account.</p></div><div><div className="h-4 overflow-hidden rounded-full bg-[#eadfc9]"><div className="h-full rounded-full bg-[#315a45] transition-all" style={{ width: `${progress}%` }} /></div><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">{passportStops.map((stop, index) => <div key={stop} className={`rounded-[1.3rem] border p-4 text-center ${visited.includes(stop) ? 'border-[#315a45] bg-[#e1eadf]' : 'border-black/10 bg-[#fff8e8]'}`}><p className="text-xs font-black text-[#6f1d1b]">STAMP {index + 1}</p><p className="mt-2 text-sm font-bold capitalize">{stop}</p></div>)}</div><p className="mt-5 text-right text-sm font-black">{progress}% complete</p></div></div></section>

      <section className="border-t border-black/10 bg-[#6f1d1b] text-white"><div className="sv-container grid gap-8 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#f0cc83]">Continue learning</p><h2 className="mt-4 font-serif text-4xl font-bold">Move from daily life into deeper museums.</h2></div><div className="grid gap-3 sm:grid-cols-2"><LinkCard href="/food" label="Food Museum" /><LinkCard href="/objects" label="Cultural Objects" /><LinkCard href="/festivals" label="Festivals Museum" /><LinkCard href="/folk-tales" label="Folk Tales Museum" /></div></div></section>
    </main>
  );
}

function Info({ title, text }: { title: string; text: string }) { return <section><p className="sv-kicker">{title}</p><p className="mt-3 text-sm font-medium leading-7 text-[#5f574f]">{text}</p></section>; }
function LinkCard({ href, label }: { href: string; label: string }) { return <a href={href} className="flex items-center justify-between rounded-xl border border-white/15 bg-white/8 px-4 py-4 text-sm font-black"><span>{label}</span><span>›</span></a>; }
function SeasonPanel({ season }: { season: Season }) { const blocks = [['Crops', season.crops], ['Festivals', season.festivals], ['Foods', season.foods], ['Activities', season.activities]] as const; return <article className="rounded-[2rem] border border-black/10 bg-[#fffdf8] p-7 shadow-lg"><div className="flex items-center justify-between gap-4"><div><p className="sv-kicker">Selected season</p><h3 className="mt-3 font-serif text-5xl font-bold">{season.name}</h3><p className="mt-2 text-3xl font-black text-[#6f1d1b]">{season.punjabi}</p></div><span className="h-20 w-20 rounded-full border-8 border-white shadow-lg" style={{ background: season.color }} /></div><div className="mt-7 grid gap-4 sm:grid-cols-2">{blocks.map(([title, values]) => <section key={title} className="rounded-[1.4rem] border border-black/10 bg-[#fff8e8] p-5"><p className="text-xs font-black uppercase tracking-[.16em] text-[#6f1d1b]">{title}</p><div className="mt-3 flex flex-wrap gap-2">{values.map((value) => <span key={value} className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-bold">{value}</span>)}</div></section>)}</div></article>; }
function VillageIllustration({ place }: { place: string }) { return <svg viewBox="0 0 520 390" role="img" aria-label={`Illustrated Punjabi village showing ${place}`} className="w-full rounded-[2rem] border border-white/10 bg-[#f4dfb8] p-4 shadow-2xl"><rect width="520" height="390" rx="28" fill="#f4dfb8"/><circle cx="430" cy="70" r="36" fill="#d99a22"/><path d="M0 290c110-45 225-40 335 4 73 29 132 24 185 7v89H0z" fill="#d7c270"/><path d="M55 250 155 165l100 85v80H55z" fill="#8a5b1f"/><path d="M95 330v-72h120v72M137 330v-45h38v45" stroke="#fff3d2" strokeWidth="8"/><path d="M315 330V210h125v120M300 210l78-62 78 62" fill="#315a45" stroke="#6f1d1b" strokeWidth="8"/><path d="M280 330h210" stroke="#79552d" strokeWidth="10"/><circle cx="350" cy="285" r="30" fill="#b65b35"/><path d="M350 255v60M320 285h60" stroke="#f4dfb8" strokeWidth="8"/><path d="M25 330h250M35 315c50-60 115-75 210-20" stroke="#3f7da2" strokeWidth="10" fill="none"/><path d="M210 330v-78m18 78v-105m21 105v-67" stroke="#315a45" strokeWidth="8"/></svg>; }
