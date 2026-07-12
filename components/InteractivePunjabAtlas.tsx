'use client';

import { useMemo, useState } from 'react';

type Era = 'Ancient Punjab' | 'Sikh Empire' | 'British Punjab' | 'Partition 1947' | 'Modern Punjab';
type Category = 'All' | 'Historic' | 'Religious' | 'Education' | 'Tourism' | 'UNESCO';
type Side = 'East Punjab' | 'West Punjab' | 'Shared Punjab';

type Place = {
  id: string;
  name: string;
  punjabi: string;
  side: Side;
  category: Exclude<Category, 'All'>[];
  x: number;
  y: number;
  founded: string;
  population: string;
  summary: string;
  history: string;
  famousFor: string[];
  food: string[];
  festivals: string[];
  language: string;
  people: string[];
  nearby: string[];
  related: { label: string; href: string }[];
};

const eras: { name: Era; years: string; note: string; west: string; east: string }[] = [
  { name: 'Ancient Punjab', years: 'Before 1000 CE', note: 'River settlements, trade routes, learning centers, and early regional cultures.', west: '#b86f2c', east: '#c99542' },
  { name: 'Sikh Empire', years: '1799–1849', note: 'A connected political landscape centered on Lahore under Maharaja Ranjit Singh.', west: '#8d5a24', east: '#c48a2d' },
  { name: 'British Punjab', years: '1849–1947', note: 'Canals, railways, districts, universities, cities, and migration reshaped Punjab.', west: '#8c6f47', east: '#ad8d5a' },
  { name: 'Partition 1947', years: '1947', note: 'A new international border divided Punjab and displaced millions of people.', west: '#7d3b34', east: '#315a45' },
  { name: 'Modern Punjab', years: 'Today', note: 'Indian Punjab and Pakistani Punjab remain politically divided but culturally connected.', west: '#6f1d1b', east: '#315a45' },
];

const places: Place[] = [
  {
    id: 'lahore', name: 'Lahore', punjabi: 'ਲਾਹੌਰ', side: 'West Punjab', category: ['Historic', 'Education', 'Tourism', 'UNESCO'], x: 42, y: 39,
    founded: 'Ancient city with many historical layers', population: 'Major metropolitan center',
    summary: 'A historic cultural capital shaped by poetry, printing, architecture, education, food, music, and the memory of undivided Punjab.',
    history: 'Lahore has served as a major center under several empires and became the capital of the Sikh Empire. Its forts, gardens, colleges, bazaars, publishing houses, and neighborhoods hold many layers of Punjabi history.',
    famousFor: ['Lahore Fort', 'Shalimar Gardens', 'Walled City', 'Punjabi literature'], food: ['Lahori chargha', 'Nihari', 'Kulcha'], festivals: ['Basant traditions', 'Mela Chiraghan'], language: 'Punjabi, Urdu, and regional urban dialects', people: ['Waris Shah connections', 'Bulleh Shah literary tradition', 'Maharaja Ranjit Singh'], nearby: ['Kasur', 'Nankana Sahib', 'Gujranwala'],
    related: [{ label: 'Architecture Museum', href: '/architecture' }, { label: 'Food Museum', href: '/food' }, { label: 'Literature Museum', href: '/literature' }],
  },
  {
    id: 'amritsar', name: 'Amritsar', punjabi: 'ਅੰਮ੍ਰਿਤਸਰ', side: 'East Punjab', category: ['Religious', 'Historic', 'Tourism'], x: 54, y: 43,
    founded: 'Founded in the sixteenth century', population: 'Major urban and pilgrimage center',
    summary: 'A central Sikh heritage city associated with Sri Harmandir Sahib, langar, trade, memory, and living Punjabi community life.',
    history: 'Amritsar developed around the sacred pool and became one of the most important Sikh centers. The city also carries the memory of Jallianwala Bagh, Partition, trade, crafts, and migration.',
    famousFor: ['Sri Harmandir Sahib', 'Jallianwala Bagh', 'Old bazaars', 'Phulkari and crafts'], food: ['Amritsari kulcha', 'Chole', 'Lassi'], festivals: ['Vaisakhi', 'Gurpurabs'], language: 'Majhi Punjabi', people: ['Guru Ram Das Ji', 'Community leaders and artisans'], nearby: ['Tarn Taran', 'Wagah-Attari', 'Batala'],
    related: [{ label: 'Sikh History', href: '/heritage' }, { label: 'Food Museum', href: '/food' }, { label: 'Clothing Museum', href: '/clothing' }],
  },
  {
    id: 'nankana', name: 'Nankana Sahib', punjabi: 'ਨਨਕਾਣਾ ਸਾਹਿਬ', side: 'West Punjab', category: ['Religious', 'Historic', 'Tourism'], x: 38, y: 31,
    founded: 'Historic settlement associated with Guru Nanak Dev Ji', population: 'Regional city and global pilgrimage destination',
    summary: 'The birthplace of Guru Nanak Dev Ji and one of the most important Sikh heritage places in West Punjab.',
    history: 'Nankana Sahib is tied to the life and message of Guru Nanak Dev Ji. It represents truth, humility, equality, and the shared responsibility to preserve sacred heritage across borders.',
    famousFor: ['Gurdwara Janam Asthan', 'Sikh pilgrimage', 'Interfaith heritage'], food: ['Langar', 'Regional Punjabi foods'], festivals: ['Guru Nanak Gurpurab'], language: 'Punjabi', people: ['Guru Nanak Dev Ji'], nearby: ['Lahore', 'Sheikhupura', 'Faisalabad'],
    related: [{ label: 'Sikh History', href: '/heritage' }, { label: 'Punjab Through Time', href: '/timeline' }],
  },
  {
    id: 'multan', name: 'Multan', punjabi: 'ਮੁਲਤਾਨ', side: 'West Punjab', category: ['Historic', 'Tourism'], x: 24, y: 67,
    founded: 'One of the region’s oldest continuously inhabited cities', population: 'Major southern Punjab metropolitan center',
    summary: 'An ancient city of saints, shrines, crafts, mangoes, trade, heat, and Seraiki-Punjabi cultural memory.',
    history: 'Multan grew through trade routes linking Punjab with Sindh, Central Asia, and the wider subcontinent. Its blue pottery, shrines, bazaars, and poetry reflect a distinct southern Punjab identity.',
    famousFor: ['Shrines', 'Blue pottery', 'Mangoes', 'Old bazaars'], food: ['Sohan halwa', 'Mangoes', 'Regional breads'], festivals: ['Urs traditions', 'Seasonal melas'], language: 'Seraiki and Punjabi', people: ['Shah Rukn-e-Alam tradition', 'Regional poets'], nearby: ['Bahawalpur', 'Dera Ghazi Khan', 'Jhang'],
    related: [{ label: 'Cultural Objects', href: '/objects' }, { label: 'Architecture Museum', href: '/architecture' }],
  },
  {
    id: 'patiala', name: 'Patiala', punjabi: 'ਪਟਿਆਲਾ', side: 'East Punjab', category: ['Historic', 'Education', 'Tourism'], x: 70, y: 65,
    founded: 'Eighteenth-century princely city', population: 'Major Malwa city',
    summary: 'A city associated with royal history, music, architecture, clothing traditions, education, and Malwa identity.',
    history: 'Patiala became an important princely center and developed distinctive traditions in music, court culture, architecture, dress, and language. Its name remains tied to the Patiala gharana and iconic Punjabi styles.',
    famousFor: ['Qila Mubarak', 'Patiala gharana', 'Paranda', 'Patiala shahi pagg'], food: ['Patiala-style Punjabi cuisine', 'Lassi'], festivals: ['Heritage festivals', 'Vaisakhi'], language: 'Malwai Punjabi', people: ['Patiala gharana musicians', 'Royal-era patrons'], nearby: ['Sangrur', 'Fatehgarh Sahib', 'Mohali'],
    related: [{ label: 'Music Museum', href: '/music' }, { label: 'Clothing Museum', href: '/clothing' }, { label: 'Instruments Museum', href: '/instruments' }],
  },
  {
    id: 'anandpur', name: 'Anandpur Sahib', punjabi: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ', side: 'East Punjab', category: ['Religious', 'Historic', 'Tourism'], x: 71, y: 32,
    founded: 'Historic Sikh city', population: 'Pilgrimage town',
    summary: 'A major Sikh heritage city associated with the founding of the Khalsa and the foothills of Punjab.',
    history: 'Anandpur Sahib is deeply linked with Guru Gobind Singh Ji and the creation of the Khalsa in 1699. Its landscape connects spiritual history, martial traditions, poetry, and community memory.',
    famousFor: ['Takht Sri Kesgarh Sahib', 'Khalsa heritage', 'Hola Mohalla'], food: ['Langar', 'Regional foothill foods'], festivals: ['Hola Mohalla', 'Vaisakhi'], language: 'Punjabi', people: ['Guru Gobind Singh Ji'], nearby: ['Rupnagar', 'Kiratpur Sahib', 'Nangal'],
    related: [{ label: 'Sikh History', href: '/heritage' }, { label: 'Festivals Museum', href: '/festivals' }],
  },
  {
    id: 'faisalabad', name: 'Faisalabad', punjabi: 'ਫੈਸਲਾਬਾਦ', side: 'West Punjab', category: ['Historic', 'Education'], x: 39, y: 52,
    founded: 'Planned during the canal-colony era', population: 'Major industrial metropolitan center',
    summary: 'A major textile, agriculture, education, and industrial city shaped by canal-colony planning.',
    history: 'Originally developed as Lyallpur, the city grew around a planned clock-tower market and canal-colony agriculture. It later became one of Punjab’s largest industrial and textile centers.',
    famousFor: ['Clock Tower', 'Textiles', 'Agriculture', 'Universities'], food: ['Punjabi street food', 'Rural central Punjab cuisine'], festivals: ['Agricultural fairs', 'National and religious festivals'], language: 'Punjabi and Urdu', people: ['Industrialists', 'Agricultural scholars'], nearby: ['Jhang', 'Nankana Sahib', 'Sargodha'],
    related: [{ label: 'Village Life Museum', href: '/village-life' }, { label: 'Culture Library', href: '/culture' }],
  },
  {
    id: 'jalandhar', name: 'Jalandhar', punjabi: 'ਜਲੰਧਰ', side: 'East Punjab', category: ['Historic', 'Education'], x: 62, y: 46,
    founded: 'Ancient city with modern industrial growth', population: 'Major Doaba urban center',
    summary: 'A Doaba city known for sports goods, publishing, education, migration, and media.',
    history: 'Jalandhar is one of Punjab’s old urban centers and later became known for education, printing, newspapers, sports manufacturing, and strong diaspora connections.',
    famousFor: ['Sports goods', 'Publishing', 'Education', 'Doaba culture'], food: ['Doaba Punjabi cuisine', 'Sweets'], festivals: ['Vaisakhi', 'Regional melas'], language: 'Doabi Punjabi', people: ['Publishers', 'Athletes', 'Diaspora families'], nearby: ['Kapurthala', 'Hoshiarpur', 'Phagwara'],
    related: [{ label: 'Traditional Games', href: '/games' }, { label: 'Literature Museum', href: '/literature' }],
  },
];

const eastDistricts = ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rupnagar', 'Sangrur', 'SAS Nagar', 'Sri Muktsar Sahib', 'Tarn Taran'];
const westDistricts = ['Lahore', 'Kasur', 'Sheikhupura', 'Nankana Sahib', 'Gujranwala', 'Sialkot', 'Faisalabad', 'Jhang', 'Sargodha', 'Multan', 'Bahawalpur', 'Rawalpindi', 'Attock', 'Jhelum', 'Mianwali', 'Dera Ghazi Khan', 'Rahim Yar Khan'];

export default function InteractivePunjabAtlas() {
  const [era, setEra] = useState<Era>('Modern Punjab');
  const [category, setCategory] = useState<Category>('All');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('lahore');
  const [zoom, setZoom] = useState(1);
  const currentEra = eras.find((item) => item.name === era) || eras[4];
  const visible = useMemo(() => places.filter((place) => {
    const matchesCategory = category === 'All' || place.category.includes(category);
    const haystack = [place.name, place.punjabi, place.side, place.summary, ...place.famousFor].join(' ').toLowerCase();
    return matchesCategory && haystack.includes(query.trim().toLowerCase());
  }), [category, query]);
  const selected = places.find((place) => place.id === selectedId) || places[0];

  return (
    <>
      <section className="border-b border-black/10 bg-[#201712] text-white">
        <div className="sv-container py-8">
          <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Punjab history era selector">
            {eras.map((item) => <button key={item.name} type="button" onClick={() => setEra(item.name)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black transition ${era === item.name ? 'bg-[#e7b650] text-[#201712]' : 'border border-white/15 bg-white/5 text-white/72 hover:bg-white/10'}`}>{item.name}</button>)}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-[auto_1fr] md:items-center">
            <p className="font-serif text-2xl font-bold text-[#f0cc83]">{currentEra.years}</p>
            <p className="text-sm font-medium leading-7 text-white/65">{currentEra.note}</p>
          </div>
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search cities and heritage places</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Lahore, Amritsar, food, architecture, education..." className="h-14 w-full rounded-2xl border border-black/10 bg-[#fffdf8] px-5 text-sm font-semibold outline-none ring-[#6f1d1b] transition focus:ring-2" />
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {(['All', 'Historic', 'Religious', 'Education', 'Tourism', 'UNESCO'] as Category[]).map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`min-w-max rounded-full px-4 py-3 text-xs font-black ${category === item ? 'bg-[#6f1d1b] text-white' : 'border border-black/10 bg-white text-[#4f473f]'}`}>{item}</button>)}
          </div>
        </div>
      </section>

      <section className="sv-container pb-14">
        <div className="grid gap-7 xl:grid-cols-[1.18fr_0.82fr]">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f2e5c9] shadow-[0_22px_60px_rgba(54,35,24,0.12)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 bg-[#fffdf8] p-5">
              <div><p className="sv-kicker">Interactive heritage atlas</p><h2 className="mt-2 font-serif text-3xl font-bold">Tap a city to open its story</h2></div>
              <div className="flex items-center gap-2"><button type="button" onClick={() => setZoom((value) => Math.max(.85, value - .15))} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-xl font-black" aria-label="Zoom out">−</button><span className="min-w-14 text-center text-xs font-black">{Math.round(zoom * 100)}%</span><button type="button" onClick={() => setZoom((value) => Math.min(1.45, value + .15))} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-xl font-black" aria-label="Zoom in">+</button></div>
            </div>
            <div className="relative min-h-[34rem] overflow-hidden bg-[radial-gradient(circle_at_18%_18%,#f3c95d,transparent_18%),linear-gradient(135deg,#ead39f,#d7e0bc)] md:min-h-[42rem]">
              <div className="absolute inset-0 origin-center transition-transform duration-300" style={{ transform: `scale(${zoom})` }}>
                <svg viewBox="0 0 900 620" className="absolute inset-0 h-full w-full" role="img" aria-label={`Illustrated map of ${era}`}>
                  <path d="M97 90C205 32 337 38 430 82c93 44 180 53 302 13 85-28 122 32 91 111-28 72-100 111-119 181-25 92-121 163-240 157-111-6-170-67-267-62-105 5-164-77-126-163 33-73-46-166 26-229Z" fill={currentEra.west} opacity=".58" />
                  <path d="M431 82c97 47 179 52 301 13 85-28 122 32 91 111-28 72-100 111-119 181-25 92-121 163-240 157-37-2-72-10-103-23 40-73 41-146 21-218-20-75-9-146 49-221Z" fill={currentEra.east} opacity=".72" />
                  <path d="M430 75c-31 82-24 166 4 246 23 66 18 137-11 210" fill="none" stroke="#fffdf8" strokeWidth="5" strokeDasharray={era === 'Partition 1947' || era === 'Modern Punjab' ? '14 12' : '0'} opacity={era === 'Partition 1947' || era === 'Modern Punjab' ? .95 : .2} />
                  <path d="M112 142c126-48 235-41 329 18 93 58 193 52 331 6M132 245c114-35 214-16 312 40 105 59 211 55 335 11M103 352c121-23 223 8 324 61 99 52 218 45 351 1" fill="none" stroke="#3f7da2" strokeWidth="8" strokeLinecap="round" opacity=".55" />
                  <path d="M118 492c195-48 388-31 593 25" fill="none" stroke="#8a5b1f" strokeWidth="5" strokeDasharray="10 12" opacity=".45" />
                  <g opacity=".8"><circle cx="135" cy="105" r="26" fill="#d99a22"/><path d="M90 535h720" stroke="#79552d" strokeWidth="8"/><path d="M165 535v-70m45 70v-95m48 95v-58m388 58v-90m46 90v-65" stroke="#315a45" strokeWidth="8"/></g>
                </svg>
                {visible.map((place) => <button key={place.id} type="button" onClick={() => setSelectedId(place.id)} style={{ left: `${place.x}%`, top: `${place.y}%` }} className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 px-3 py-2 text-left shadow-xl backdrop-blur transition hover:scale-105 ${selected.id === place.id ? 'z-20 border-[#201712] bg-[#fffdf8] text-[#201712]' : 'z-10 border-white/80 bg-[#201712]/88 text-white'}`} aria-label={`Open ${place.name}`}><span className="block text-[.62rem] font-black uppercase tracking-[.12em] opacity-65">{place.side}</span><span className="block text-sm font-black">{place.name}</span></button>)}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 rounded-2xl bg-[#fffdf8]/92 p-3 text-[.68rem] font-black shadow-lg backdrop-blur md:right-auto"><span className="rounded-full bg-[#6f1d1b] px-3 py-2 text-white">West Punjab</span><span className="rounded-full bg-[#315a45] px-3 py-2 text-white">East Punjab</span><span className="rounded-full border border-black/10 bg-white px-3 py-2">Five rivers shown as learning paths</span></div>
            </div>
          </div>

          <aside className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
            <div className="bg-[#6f1d1b] p-7 text-white"><p className="text-xs font-black uppercase tracking-[.2em] text-[#f0cc83]">Selected destination</p><h2 className="mt-3 font-serif text-5xl font-bold tracking-[-.04em]">{selected.name}</h2><p className="mt-2 text-3xl font-black text-[#f3d9a8]">{selected.punjabi}</p><p className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black">{selected.side}</p></div>
            <div className="space-y-6 p-7">
              <p className="text-base font-medium leading-8 text-[#4f473f]">{selected.summary}</p>
              <div className="grid gap-3 sm:grid-cols-2"><Info label="Historical profile" value={selected.founded}/><Info label="Population profile" value={selected.population}/></div>
              <section><p className="sv-kicker">History</p><p className="mt-3 text-sm font-medium leading-7 text-[#5f574f]">{selected.history}</p></section>
              <TagList label="Famous places and identity" items={selected.famousFor}/>
              <div className="grid gap-5 sm:grid-cols-2"><TagList label="Food" items={selected.food}/><TagList label="Festivals" items={selected.festivals}/></div>
              <Info label="Language" value={selected.language}/>
              <TagList label="Important people and traditions" items={selected.people}/>
              <TagList label="Nearby cities" items={selected.nearby}/>
              <section><p className="sv-kicker">Continue learning</p><div className="mt-3 grid gap-2">{selected.related.map((item) => <a key={item.href} href={item.href} className="flex items-center justify-between rounded-xl border border-black/10 bg-[#fff8e8] px-4 py-3 text-sm font-black transition hover:-translate-y-0.5"><span>{item.label}</span><span aria-hidden="true">›</span></a>)}</div></section>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#293f36] text-white">
        <div className="sv-container grid gap-8 py-14 lg:grid-cols-2">
          <DistrictBoard title="East Punjab districts" subtitle="Indian Punjab" districts={eastDistricts}/>
          <DistrictBoard title="West Punjab learning directory" subtitle="Pakistani Punjab" districts={westDistricts}/>
        </div>
      </section>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl border border-black/10 bg-[#fff8e8] p-4"><p className="text-[.65rem] font-black uppercase tracking-[.16em] text-[#6f1d1b]">{label}</p><p className="mt-2 text-sm font-bold leading-6">{value}</p></div>; }
function TagList({ label, items }: { label: string; items: string[] }) { return <section><p className="text-[.65rem] font-black uppercase tracking-[.16em] text-[#6f1d1b]">{label}</p><div className="mt-3 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-bold">{item}</span>)}</div></section>; }
function DistrictBoard({ title, subtitle, districts }: { title: string; subtitle: string; districts: string[] }) { return <article className="rounded-[2rem] border border-white/12 bg-white/6 p-6"><p className="text-xs font-black uppercase tracking-[.2em] text-[#f0cc83]">{subtitle}</p><h2 className="mt-3 font-serif text-3xl font-bold">{title}</h2><div className="mt-5 flex flex-wrap gap-2">{districts.map((district) => <span key={district} className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-bold text-white/82">{district}</span>)}</div></article>; }
