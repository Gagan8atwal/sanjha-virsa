'use client';

import { useMemo, useState } from 'react';

type Zone = {
  id: string;
  title: string;
  punjabi: string;
  emoji: string;
  description: string;
  facts: string[];
  activity: string;
  reward: number;
};

const zones: Zone[] = [
  { id: 'village', title: 'Village Life', punjabi: 'ਪਿੰਡ ਦੀ ਜ਼ਿੰਦਗੀ', emoji: '🏡', description: 'Explore the house, well, fields, animals, tractor, tube well, and village relationships.', facts: ['The pind is a social world, not only a location.', 'Courtyards, wells, fields, and shared work shaped daily life.', 'Modern village life now mixes tradition with machines and technology.'], activity: 'Tap through three village objects and remember their Punjabi names.', reward: 35 },
  { id: 'farming', title: 'Farming', punjabi: 'ਖੇਤੀਬਾੜੀ', emoji: '🌾', description: 'Learn wheat, rice, cotton, sugarcane, mustard, maize, irrigation, and harvest cycles.', facts: ['Wheat and rice are major crops.', 'Mustard fields are strongly connected with Punjabi visual culture.', 'Farming combines soil, water, weather, labor, and machines.'], activity: 'Choose one crop and complete its grow cycle.', reward: 40 },
  { id: 'kitchen', title: 'Punjabi Kitchen', punjabi: 'ਪੰਜਾਬੀ ਰਸੋਈ', emoji: '🍲', description: 'Discover saag, makki di roti, lassi, kheer, pinni, kadhi, rajma, and family cooking.', facts: ['Food carries region, season, memory, and family identity.', 'Many dishes are tied to winter, harvest, weddings, or festivals.', 'Punjabi kitchens often teach through watching and helping.'], activity: 'Build one traditional meal from three ingredients.', reward: 45 },
  { id: 'festivals', title: 'Festivals', punjabi: 'ਤਿਉਹਾਰ', emoji: '🪁', description: 'Explore Vaisakhi, Lohri, Maghi, Basant, Gurpurabs, Teeyan, songs, foods, and activities.', facts: ['Festivals connect seasons, faith, farming, and family.', 'The same festival can be celebrated differently by region and family.', 'Songs and food help children remember the meaning.'], activity: 'Match one festival with its season and tradition.', reward: 45 },
  { id: 'clothing', title: 'Clothing', punjabi: 'ਪਹਿਰਾਵਾ', emoji: '👳', description: 'Learn turbans, phulkari, kurta pajama, salwar kameez, jutti, paranda, and jewelry.', facts: ['Clothing can show region, occasion, craft, and identity.', 'Phulkari is a major embroidery tradition.', 'Turban styles vary by region, purpose, and community.'], activity: 'Dress a character with three Punjabi clothing items.', reward: 35 },
  { id: 'music', title: 'Music & Dance', punjabi: 'ਸੰਗੀਤ ਤੇ ਨੱਚ', emoji: '🥁', description: 'Meet the dhol, tumbi, algoza, chimta, sarangi, bhangra, giddha, and folk songs.', facts: ['Dhol drives rhythm in many celebrations.', 'Giddha preserves boliyan and women’s oral culture.', 'Folk instruments carry distinct regional sounds.'], activity: 'Match one instrument to its sound family.', reward: 40 },
  { id: 'animals', title: 'Animals', punjabi: 'ਜਾਨਵਰ', emoji: '🐃', description: 'Learn buffalo, cow, camel, horse, goat, peacock, parrot, and their place in daily life.', facts: ['Buffalo and cow are central to dairy life.', 'Horses hold a strong place in Punjabi history and imagery.', 'Birds appear often in folk songs and stories.'], activity: 'Match three Punjabi animal names to pictures.', reward: 30 },
  { id: 'nature', title: 'Trees & Nature', punjabi: 'ਰੁੱਖ ਤੇ ਕੁਦਰਤ', emoji: '🌳', description: 'Explore banyan, kikar, neem, mango, jamun, ber, seasons, and village shade.', facts: ['Trees provided shade, food, medicine, and gathering places.', 'Neem and kikar have many traditional uses.', 'Seasonal change shaped food, work, and festivals.'], activity: 'Choose one tree and learn its Punjabi name and use.', reward: 30 },
];

const villageObjects = [
  { name: 'House', pa: 'ਘਰ', emoji: '🏠', text: 'The Punjabi home often centers family, hospitality, food, and shared responsibility.' },
  { name: 'Well', pa: 'ਖੂਹ', emoji: '🪣', text: 'The well was both a water source and a social gathering place.' },
  { name: 'Fields', pa: 'ਖੇਤ', emoji: '🌾', text: 'Fields connect weather, work, crops, family income, and seasonal rhythms.' },
  { name: 'Tractor', pa: 'ਟਰੈਕਟਰ', emoji: '🚜', text: 'The tractor represents modern farming, speed, power, and changing village life.' },
  { name: 'Buffalo', pa: 'ਮੱਝ', emoji: '🐃', text: 'Buffalo are closely tied to milk, lassi, ghee, and rural household economies.' },
  { name: 'Tube well', pa: 'ਟਿਊਬਵੈੱਲ', emoji: '💧', text: 'Tube wells changed irrigation and farming across many parts of Punjab.' },
];

const crops = [
  { name: 'Wheat', pa: 'ਕਣਕ', emoji: '🌾' },
  { name: 'Rice', pa: 'ਝੋਨਾ', emoji: '🌱' },
  { name: 'Mustard', pa: 'ਸਰੋਂ', emoji: '🌼' },
  { name: 'Cotton', pa: 'ਕਪਾਹ', emoji: '☁️' },
  { name: 'Sugarcane', pa: 'ਗੰਨਾ', emoji: '🎋' },
  { name: 'Maize', pa: 'ਮੱਕੀ', emoji: '🌽' },
];

export default function LivingPunjabExperience() {
  const [activeZone, setActiveZone] = useState(zones[0]);
  const [selectedVillageObject, setSelectedVillageObject] = useState(villageObjects[0]);
  const [selectedCrop, setSelectedCrop] = useState(crops[0]);
  const [cropStage, setCropStage] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);

  const xp = useMemo(() => zones.filter((zone) => completed.includes(zone.id)).reduce((sum, zone) => sum + zone.reward, 0), [completed]);

  function completeZone(zone: Zone) {
    setCompleted((current) => current.includes(zone.id) ? current : [...current, zone.id]);
  }

  function growCrop() {
    setCropStage((stage) => Math.min(stage + 1, 3));
  }

  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#14532d,#92400e_55%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-200">Living Punjab</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Explore culture by touching the world.</h1>
          <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-amber-50 md:text-base">Village life, farming, food, festivals, clothing, music, animals, and nature in one interactive learning space.</p>
          <div className="mt-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black ring-1 ring-white/20">XP earned: {xp}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((zone) => {
            const done = completed.includes(zone.id);
            return <button key={zone.id} onClick={() => setActiveZone(zone)} className={`rounded-3xl p-4 text-left shadow-md ring-1 transition hover:-translate-y-1 ${activeZone.id === zone.id ? 'bg-[#24160f] text-white ring-[#24160f]' : 'bg-white ring-black/10'} `}>
              <div className="flex items-start justify-between"><span className="text-4xl">{zone.emoji}</span><span className={`rounded-full px-3 py-1 text-xs font-black ${done ? 'bg-emerald-200 text-emerald-900' : activeZone.id === zone.id ? 'bg-white/10 text-amber-200' : 'bg-amber-100 text-amber-900'}`}>{done ? 'Done' : `${zone.reward} XP`}</span></div>
              <h2 className="mt-3 text-xl font-black">{zone.title}</h2>
              <p className={`mt-1 font-black ${activeZone.id === zone.id ? 'text-amber-200' : 'text-red-800'}`}>{zone.punjabi}</p>
            </button>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-5 md:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/10">
            <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800">Selected world</p><h2 className="mt-2 text-3xl font-black">{activeZone.title}</h2><p className="mt-1 text-2xl font-black text-red-800">{activeZone.punjabi}</p></div><span className="text-6xl">{activeZone.emoji}</span></div>
            <p className="mt-5 text-base font-semibold leading-7 text-slate-700">{activeZone.description}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">{activeZone.facts.map((fact, index) => <div key={fact} className="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100"><p className="text-xs font-black text-amber-800">FACT {index + 1}</p><p className="mt-2 text-sm font-semibold leading-6">{fact}</p></div>)}</div>
          </div>

          <div className="rounded-3xl bg-[#24160f] p-6 text-white shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Interactive challenge</p>
            <p className="mt-4 text-xl font-black leading-8">{activeZone.activity}</p>
            <button onClick={() => completeZone(activeZone)} className={`mt-6 w-full rounded-2xl p-4 font-black ${completed.includes(activeZone.id) ? 'bg-emerald-600 text-white' : 'bg-amber-300 text-slate-950'}`}>{completed.includes(activeZone.id) ? 'Challenge completed' : `Complete challenge · +${activeZone.reward} XP`}</button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-800">Interactive village</p>
            <h2 className="mt-2 text-3xl font-black">Tap a village object</h2>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">{villageObjects.map((item) => <button key={item.name} onClick={() => setSelectedVillageObject(item)} className={`rounded-2xl p-3 text-center ring-1 transition hover:scale-105 ${selectedVillageObject.name === item.name ? 'bg-red-800 text-white ring-red-800' : 'bg-amber-50 ring-amber-200'}`}><p className="text-3xl">{item.emoji}</p><p className="mt-2 text-xs font-black">{item.name}</p></button>)}</div>
            <div className="mt-5 rounded-3xl bg-amber-50 p-5 ring-1 ring-amber-200"><div className="flex items-center gap-4"><span className="text-5xl">{selectedVillageObject.emoji}</span><div><h3 className="text-2xl font-black">{selectedVillageObject.name}</h3><p className="text-xl font-black text-red-800">{selectedVillageObject.pa}</p></div></div><p className="mt-4 text-sm font-semibold leading-7 text-slate-700">{selectedVillageObject.text}</p></div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800">Farming simulator</p>
            <h2 className="mt-2 text-3xl font-black">Grow a crop</h2>
            <div className="mt-5 flex gap-2 overflow-x-auto pb-2">{crops.map((crop) => <button key={crop.name} onClick={() => { setSelectedCrop(crop); setCropStage(0); }} className={`min-w-max rounded-full px-4 py-2 text-sm font-black ${selectedCrop.name === crop.name ? 'bg-emerald-700 text-white' : 'bg-emerald-50 ring-1 ring-emerald-100'}`}>{crop.emoji} {crop.name}</button>)}</div>
            <div className="mt-5 rounded-3xl bg-emerald-50 p-5 text-center ring-1 ring-emerald-100"><p className="text-6xl">{['🌰','🌱','🌿',selectedCrop.emoji][cropStage]}</p><h3 className="mt-3 text-2xl font-black">{selectedCrop.name}</h3><p className="text-xl font-black text-emerald-800">{selectedCrop.pa}</p><p className="mt-2 text-sm font-semibold text-slate-600">Stage {cropStage + 1} of 4</p><button onClick={growCrop} disabled={cropStage === 3} className="mt-4 rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white disabled:opacity-50">{cropStage === 3 ? 'Harvest ready' : 'Water and grow'}</button></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-800">Next Living Punjab modules</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{['Cooking game', 'Festival calendar', 'Dress-up studio', 'Instrument soundboard', 'Grandmother story corner', 'Family mode', 'Printable activities', 'Seasonal village world'].map((item) => <div key={item} className="rounded-2xl bg-purple-50 p-4 font-black ring-1 ring-purple-100">{item}</div>)}</div>
        </div>
      </section>
    </main>
  );
}
