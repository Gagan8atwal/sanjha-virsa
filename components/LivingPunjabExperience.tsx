'use client';

import { useEffect, useMemo, useState } from 'react';

type VillagePlace = { id: string; name: string; punjabi: string; purpose: string; dailyLife: string; tools: string[]; links: { label: string; href: string }[] };
type Season = { name: string; punjabi: string; color: string; crops: string[]; festivals: string[]; foods: string[]; activities: string[] };
type Craft = { name: string; punjabi: string; artisan: string; material: string; process: string; use: string; link: string };
type Overlay = { type: 'place' | 'day' | 'season' | 'family' | 'craft'; index: number } | null;

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
  ['Dada', 'ਦਾਦਾ', 'Paternal grandfather'], ['Dadi', 'ਦਾਦੀ', 'Paternal grandmother'], ['Nana', 'ਨਾਨਾ', 'Maternal grandfather'], ['Nani', 'ਨਾਨੀ', 'Maternal grandmother'],
  ['Taya', 'ਤਾਇਆ', 'Father’s elder brother'], ['Chacha', 'ਚਾਚਾ', 'Father’s younger brother'], ['Bhua', 'ਭੂਆ', 'Father’s sister'], ['Mama', 'ਮਾਮਾ', 'Mother’s brother'],
  ['Masi', 'ਮਾਸੀ', 'Mother’s sister'], ['Veer', 'ਵੀਰ', 'Brother or respectful male relation'], ['Bhen', 'ਭੈਣ', 'Sister or respectful female relation'], ['Puttar', 'ਪੁੱਤਰ', 'Affectionate term for a child'],
];

const crafts: Craft[] = [
  { name: 'Phulkari', punjabi: 'ਫੁਲਕਾਰੀ', artisan: 'Embroiderer', material: 'Hand-spun cloth and silk thread', process: 'Geometric and floral patterns are counted and stitched from the reverse side of the cloth.', use: 'Wedding textiles, shawls, household memory, and ceremonial gifts.', link: '/clothing' },
  { name: 'Punjabi Jutti', punjabi: 'ਪੰਜਾਬੀ ਜੁੱਤੀ', artisan: 'Leather craftsperson', material: 'Leather, thread, beads, and embroidery', process: 'Leather is cut, shaped, stitched, and decorated by hand for regional styles and occasions.', use: 'Daily wear, weddings, festivals, and formal dress.', link: '/clothing' },
  { name: 'Clay Pottery', punjabi: 'ਮਿੱਟੀ ਦੇ ਭਾਂਡੇ', artisan: 'Potter', material: 'Local clay and natural slips', process: 'Clay is prepared, formed on a wheel, dried, decorated, and fired in a kiln.', use: 'Water storage, cooking, lamps, dairy work, and decoration.', link: '/objects' },
  { name: 'Durrie Weaving', punjabi: 'ਦਰੀ ਬੁਣਾਈ', artisan: 'Weaver', material: 'Cotton or wool yarn', process: 'Colored yarn is tensioned on a loom and woven into durable flat patterns.', use: 'Floor coverings, bedding layers, prayer spaces, and household furnishing.', link: '/objects' },
  { name: 'Wood Carving', punjabi: 'ਲੱਕੜ ਦੀ ਨੱਕਾਸ਼ੀ', artisan: 'Carpenter and carver', material: 'Sheesham and other local woods', process: 'Wood is measured, joined, carved, polished, and fitted into doors, furniture, and tools.', use: 'Doors, chests, charpai frames, agricultural tools, and decorative architecture.', link: '/architecture' },
  { name: 'Metalwork', punjabi: 'ਧਾਤ ਦਾ ਕੰਮ', artisan: 'Blacksmith and metalworker', material: 'Iron, brass, copper, and steel', process: 'Metal is heated, hammered, cast, joined, sharpened, and repaired.', use: 'Farm tools, cooking vessels, locks, fittings, and ceremonial objects.', link: '/objects' },
];

const passportStops = ['village', 'day', 'season', 'family', 'craft'];

export default function LivingPunjabExperience() {
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [visited, setVisited] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem('sanjha-virsa-passport');
    if (stored) setVisited(JSON.parse(stored));
  }, []);
  useEffect(() => { window.localStorage.setItem('sanjha-virsa-passport', JSON.stringify(visited)); }, [visited]);
  useEffect(() => {
    document.body.style.overflow = overlay ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [overlay]);

  const progress = useMemo(() => Math.round((visited.length / passportStops.length) * 100), [visited]);
  const mark = (id: string) => setVisited((current) => current.includes(id) ? current : [...current, id]);
  const open = (type: NonNullable<Overlay>['type'], index: number, stamp: string) => { mark(stamp); setOverlay({ type, index }); };

  return (
    <main className="sv-page bg-[#fff8ed] text-[#201712]">
      <nav aria-label="Breadcrumb" className="border-b border-black/10 bg-[#fffdf8]"><div className="sv-container flex items-center gap-2 py-4 text-xs font-black uppercase tracking-[.14em] text-[#6f675f]"><a href="/">Home</a><span>/</span><span className="text-[#6f1d1b]">Living Punjab</span></div></nav>

      <section className="overflow-hidden border-b border-black/10 bg-[#293f36] text-white"><div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_.9fr] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[.24em] text-[#f0cc83]">Living Heritage Experience</p><h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[.97] tracking-[-.045em] md:text-7xl">Walk through a Punjabi village, one living tradition at a time.</h1><p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/72">Tap any card and its full story opens immediately in a focused window. No searching below the menu.</p></div><VillageIllustration /></div></section>

      <CardSection kicker="Virtual village" title="Choose a place to enter.">
        {places.map((place, index) => <ChoiceCard key={place.id} number={index + 1} title={place.name} punjabi={place.punjabi} onClick={() => open('place', index, 'village')} />)}
      </CardSection>

      <section className="border-y border-black/10 bg-[#201712] text-white"><div className="sv-container py-14"><p className="text-xs font-black uppercase tracking-[.22em] text-[#f0cc83]">A day in the village</p><h2 className="mt-4 font-serif text-4xl font-bold">Follow the rhythm from dawn to night.</h2><div className="mt-8 grid gap-3 md:grid-cols-3 xl:grid-cols-6">{dayStages.map((stage, index) => <button key={stage[0]} type="button" onClick={() => open('day', index, 'day')} className="rounded-[1.5rem] border border-white/12 bg-white/5 p-5 text-left transition hover:-translate-y-1 hover:bg-white/10"><p className="text-xs font-black text-[#f0cc83]">{String(index + 1).padStart(2, '0')}</p><p className="mt-3 font-serif text-xl font-bold">{stage[0]}</p><p className="mt-1 font-black text-white/70">{stage[1]}</p></button>)}</div></div></section>

      <CardSection kicker="Seasonal Punjab" title="The calendar changes everything.">
        {seasons.map((season, index) => <ChoiceCard key={season.name} number={index + 1} title={season.name} punjabi={season.punjabi} swatch={season.color} onClick={() => open('season', index, 'season')} />)}
      </CardSection>

      <section className="border-y border-black/10 bg-[#f0e3c6]"><div className="sv-container py-14 md:py-20"><p className="sv-kicker">Family tree of Punjab</p><h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold">Relationships carry language, respect, and responsibility.</h2><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{familyTerms.map(([name, pa, relation], index) => <button key={name} type="button" onClick={() => open('family', index, 'family')} className="rounded-[1.3rem] border border-black/10 bg-[#fffdf8] p-5 text-left transition hover:-translate-y-1 hover:shadow-lg"><p className="font-serif text-2xl font-bold">{name}</p><p className="mt-1 text-xl font-black text-[#6f1d1b]">{pa}</p><p className="mt-3 text-sm font-medium text-[#625a52]">{relation}</p></button>)}</div></div></section>

      <CardSection kicker="Punjabi artisan workshop" title="Meet the hands behind the heritage.">
        {crafts.map((craft, index) => <ChoiceCard key={craft.name} number={index + 1} title={craft.name} punjabi={craft.punjabi} onClick={() => open('craft', index, 'craft')} />)}
      </CardSection>

      <section className="sv-container py-14 md:py-20"><div className="grid gap-8 rounded-[2rem] border border-black/10 bg-[#fffdf8] p-7 shadow-lg md:grid-cols-[.8fr_1.2fr] md:items-center"><div><p className="sv-kicker">Children’s heritage passport</p><h2 className="mt-4 font-serif text-4xl font-bold">Progress stays on this device.</h2><p className="mt-4 text-sm font-medium leading-7 text-[#625a52]">Open one item in every learning area to collect all five stamps.</p></div><div><div className="h-4 overflow-hidden rounded-full bg-[#eadfc9]"><div className="h-full rounded-full bg-[#315a45] transition-all" style={{ width: `${progress}%` }} /></div><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">{passportStops.map((stop, index) => <div key={stop} className={`rounded-[1.3rem] border p-4 text-center ${visited.includes(stop) ? 'border-[#315a45] bg-[#e1eadf]' : 'border-black/10 bg-[#fff8e8]'}`}><p className="text-xs font-black text-[#6f1d1b]">STAMP {index + 1}</p><p className="mt-2 text-sm font-bold capitalize">{stop}</p></div>)}</div><p className="mt-5 text-right text-sm font-black">{progress}% complete</p></div></div></section>

      <section className="border-t border-black/10 bg-[#6f1d1b] text-white"><div className="sv-container grid gap-8 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#f0cc83]">Continue learning</p><h2 className="mt-4 font-serif text-4xl font-bold">Move from daily life into deeper museums.</h2></div><div className="grid gap-3 sm:grid-cols-2"><LinkCard href="/food" label="Food Museum" /><LinkCard href="/objects" label="Cultural Objects" /><LinkCard href="/festivals" label="Festivals Museum" /><LinkCard href="/clothing" label="Clothing Museum" /></div></div></section>

      {overlay && <DetailOverlay overlay={overlay} close={() => setOverlay(null)} move={(direction) => setOverlay((current) => current ? { ...current, index: wrapIndex(current.type, current.index + direction) } : current)} />}
    </main>
  );
}

function CardSection({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) { return <section className="sv-container py-14 md:py-20"><p className="sv-kicker">{kicker}</p><h2 className="mt-4 font-serif text-4xl font-bold">{title}</h2><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{children}</div></section>; }
function ChoiceCard({ number, title, punjabi, swatch, onClick }: { number: number; title: string; punjabi: string; swatch?: string; onClick: () => void }) { return <button type="button" onClick={onClick} className="group flex min-h-32 items-center gap-4 rounded-[1.4rem] border border-black/10 bg-[#fffdf8] p-5 text-left transition hover:-translate-y-1 hover:border-[#6f1d1b] hover:shadow-lg"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f4e5c5] text-sm font-black text-[#6f1d1b]">{String(number).padStart(2, '0')}</span><span className="min-w-0 flex-1"><span className="block font-serif text-2xl font-bold">{title}</span><span className="mt-1 block font-black text-[#315a45]">{punjabi}</span></span>{swatch && <span className="h-6 w-6 rounded-full border-4 border-white shadow" style={{ background: swatch }} />}<span className="text-2xl text-[#6f1d1b]">›</span></button>; }
function LinkCard({ href, label }: { href: string; label: string }) { return <a href={href} className="flex items-center justify-between rounded-xl border border-white/15 bg-white/8 px-4 py-4 text-sm font-black"><span>{label}</span><span>›</span></a>; }

function DetailOverlay({ overlay, close, move }: { overlay: NonNullable<Overlay>; close: () => void; move: (direction: number) => void }) {
  return <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5" role="dialog" aria-modal="true" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}><article className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-[#fffdf8] shadow-2xl sm:rounded-[2rem]"><div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-[#6f1d1b] px-5 py-4 text-white"><div><p className="text-[.65rem] font-black uppercase tracking-[.18em] text-[#f0cc83]">Open detail</p><p className="mt-1 text-sm font-bold">Tap outside or close when finished</p></div><button type="button" onClick={close} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-2xl" aria-label="Close detail">×</button></div><div className="p-6 sm:p-8">{overlay.type === 'place' && <PlaceDetail place={places[overlay.index]} />}{overlay.type === 'day' && <SimpleDetail title={dayStages[overlay.index][0]} punjabi={dayStages[overlay.index][1]} text={dayStages[overlay.index][2]} />}{overlay.type === 'season' && <SeasonDetail season={seasons[overlay.index]} />}{overlay.type === 'family' && <SimpleDetail title={familyTerms[overlay.index][0]} punjabi={familyTerms[overlay.index][1]} text={familyTerms[overlay.index][2]} />}{overlay.type === 'craft' && <CraftDetail craft={crafts[overlay.index]} />}<div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5"><button type="button" onClick={() => move(-1)} className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black">Previous</button><button type="button" onClick={() => move(1)} className="rounded-full bg-[#315a45] px-5 py-3 text-sm font-black text-white">Next</button></div></div></article></div>;
}
function PlaceDetail({ place }: { place: VillagePlace }) { return <div><p className="sv-kicker">Virtual village</p><h2 className="mt-3 font-serif text-5xl font-bold">{place.name}</h2><p className="mt-2 text-3xl font-black text-[#6f1d1b]">{place.punjabi}</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><Info title="Purpose" text={place.purpose} /><Info title="Daily life" text={place.dailyLife} /></div><TagBlock title="Traditional tools" values={place.tools} /><div className="mt-6"><p className="sv-kicker">Related museums</p><div className="mt-3 grid gap-2 sm:grid-cols-2">{place.links.map((link) => <a key={link.href} href={link.href} className="flex items-center justify-between rounded-xl border border-black/10 bg-[#fff8e8] px-4 py-3 text-sm font-black"><span>{link.label}</span><span>›</span></a>)}</div></div></div>; }
function SimpleDetail({ title, punjabi, text }: { title: string; punjabi: string; text: string }) { return <div><p className="sv-kicker">Living Punjab</p><h2 className="mt-3 font-serif text-5xl font-bold">{title}</h2><p className="mt-2 text-3xl font-black text-[#6f1d1b]">{punjabi}</p><p className="mt-7 rounded-[1.4rem] bg-[#fff8e8] p-6 text-base font-medium leading-8 text-[#5f574f]">{text}</p></div>; }
function SeasonDetail({ season }: { season: Season }) { return <div><div className="flex items-start justify-between gap-4"><div><p className="sv-kicker">Selected season</p><h2 className="mt-3 font-serif text-5xl font-bold">{season.name}</h2><p className="mt-2 text-3xl font-black text-[#6f1d1b]">{season.punjabi}</p></div><span className="h-16 w-16 rounded-full border-8 border-white shadow-lg" style={{ background: season.color }} /></div><div className="mt-7 grid gap-4 sm:grid-cols-2"><TagBlock title="Crops" values={season.crops} /><TagBlock title="Festivals" values={season.festivals} /><TagBlock title="Foods" values={season.foods} /><TagBlock title="Activities" values={season.activities} /></div></div>; }
function CraftDetail({ craft }: { craft: Craft }) { return <div><p className="sv-kicker">Punjabi artisan workshop</p><h2 className="mt-3 font-serif text-5xl font-bold">{craft.name}</h2><p className="mt-2 text-3xl font-black text-[#6f1d1b]">{craft.punjabi}</p><div className="mt-7 grid gap-4 sm:grid-cols-2"><Info title="Artisan" text={craft.artisan} /><Info title="Materials" text={craft.material} /><Info title="How it is made" text={craft.process} /><Info title="Cultural use" text={craft.use} /></div><a href={craft.link} className="mt-7 flex items-center justify-between rounded-xl bg-[#315a45] px-5 py-4 text-sm font-black text-white"><span>Open related museum</span><span>›</span></a></div>; }
function Info({ title, text }: { title: string; text: string }) { return <section className="rounded-[1.3rem] border border-black/10 bg-[#fff8e8] p-5"><p className="sv-kicker">{title}</p><p className="mt-3 text-sm font-medium leading-7 text-[#5f574f]">{text}</p></section>; }
function TagBlock({ title, values }: { title: string; values: string[] }) { return <section className="mt-6 rounded-[1.3rem] border border-black/10 bg-[#fff8e8] p-5"><p className="sv-kicker">{title}</p><div className="mt-3 flex flex-wrap gap-2">{values.map((value) => <span key={value} className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-bold">{value}</span>)}</div></section>; }
function wrapIndex(type: NonNullable<Overlay>['type'], index: number) { const lengths = { place: places.length, day: dayStages.length, season: seasons.length, family: familyTerms.length, craft: crafts.length }; const length = lengths[type]; return (index + length) % length; }
function VillageIllustration() { return <svg viewBox="0 0 520 390" role="img" aria-label="Illustrated Punjabi village" className="w-full rounded-[2rem] border border-white/10 bg-[#f4dfb8] p-4 shadow-2xl"><rect width="520" height="390" rx="28" fill="#f4dfb8"/><circle cx="430" cy="70" r="36" fill="#d99a22"/><path d="M0 290c110-45 225-40 335 4 73 29 132 24 185 7v89H0z" fill="#d7c270"/><path d="M55 250 155 165l100 85v80H55z" fill="#8a5b1f"/><path d="M95 330v-72h120v72M137 330v-45h38v45" stroke="#fff3d2" strokeWidth="8"/><path d="M315 330V210h125v120M300 210l78-62 78 62" fill="#315a45" stroke="#6f1d1b" strokeWidth="8"/><circle cx="350" cy="285" r="30" fill="#b65b35"/><path d="M350 255v60M320 285h60" stroke="#f4dfb8" strokeWidth="8"/><path d="M25 330h250M35 315c50-60 115-75 210-20" stroke="#3f7da2" strokeWidth="10" fill="none"/></svg>; }
