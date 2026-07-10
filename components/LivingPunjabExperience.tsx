'use client';

import { useMemo, useRef, useState } from 'react';

type Item = { name: string; pa: string; emoji: string; detail: string };
type Zone = {
  id: string;
  title: string;
  punjabi: string;
  emoji: string;
  description: string;
  reward: number;
  items: Item[];
};

const zones: Zone[] = [
  {
    id: 'village', title: 'Village Life', punjabi: 'ਪਿੰਡ ਦੀ ਜ਼ਿੰਦਗੀ', emoji: '🏡', reward: 35,
    description: 'Open the house, well, fields, tractor, buffalo, and tube well to learn how village life worked and how it is changing today.',
    items: [
      { name: 'House', pa: 'ਘਰ', emoji: '🏠', detail: 'The Punjabi home centers family, hospitality, food, and shared responsibility.' },
      { name: 'Well', pa: 'ਖੂਹ', emoji: '🪣', detail: 'The village well was both a water source and a meeting place.' },
      { name: 'Fields', pa: 'ਖੇਤ', emoji: '🌾', detail: 'Fields connect weather, crops, work, family income, and seasonal life.' },
      { name: 'Tractor', pa: 'ਟਰੈਕਟਰ', emoji: '🚜', detail: 'The tractor represents modern farming and changing village work.' },
      { name: 'Buffalo', pa: 'ਮੱਝ', emoji: '🐃', detail: 'Buffalo support milk, lassi, ghee, and rural household economies.' },
      { name: 'Tube well', pa: 'ਟਿਊਬਵੈੱਲ', emoji: '💧', detail: 'Tube wells changed irrigation and farming across Punjab.' },
    ],
  },
  {
    id: 'farming', title: 'Farming', punjabi: 'ਖੇਤੀਬਾੜੀ', emoji: '🌾', reward: 40,
    description: 'Choose a crop and move through planting, watering, growing, and harvesting.',
    items: [
      { name: 'Wheat', pa: 'ਕਣਕ', emoji: '🌾', detail: 'Wheat is a major winter crop and is closely connected with roti and harvest traditions.' },
      { name: 'Rice', pa: 'ਝੋਨਾ', emoji: '🌱', detail: 'Rice requires intensive water and is a major crop in modern Punjab.' },
      { name: 'Mustard', pa: 'ਸਰੋਂ', emoji: '🌼', detail: 'Mustard fields are strongly connected with Punjab’s winter landscape and food.' },
      { name: 'Cotton', pa: 'ਕਪਾਹ', emoji: '☁️', detail: 'Cotton is important in parts of Malwa and supports textile production.' },
      { name: 'Sugarcane', pa: 'ਗੰਨਾ', emoji: '🎋', detail: 'Sugarcane is used for sugar, gur, and fresh juice.' },
      { name: 'Maize', pa: 'ਮੱਕੀ', emoji: '🌽', detail: 'Maize is remembered through makki di roti and seasonal farming.' },
    ],
  },
  {
    id: 'kitchen', title: 'Punjabi Kitchen', punjabi: 'ਪੰਜਾਬੀ ਰਸੋਈ', emoji: '🍲', reward: 45,
    description: 'Tap a dish to see its ingredients, season, family role, and cultural meaning.',
    items: [
      { name: 'Sarson da Saag', pa: 'ਸਰੋਂ ਦਾ ਸਾਗ', emoji: '🥬', detail: 'A winter dish made from mustard greens and often served with makki di roti.' },
      { name: 'Makki di Roti', pa: 'ਮੱਕੀ ਦੀ ਰੋਟੀ', emoji: '🫓', detail: 'A maize flour flatbread strongly linked with winter meals.' },
      { name: 'Lassi', pa: 'ਲੱਸੀ', emoji: '🥛', detail: 'A yogurt drink served sweet or salted and connected with hospitality.' },
      { name: 'Kheer', pa: 'ਖੀਰ', emoji: '🍚', detail: 'A milk and rice dessert often prepared for celebrations and family gatherings.' },
      { name: 'Pinni', pa: 'ਪਿੰਨੀ', emoji: '🍪', detail: 'A rich winter sweet commonly made with flour, ghee, nuts, and jaggery or sugar.' },
      { name: 'Kadhi', pa: 'ਕੜ੍ਹੀ', emoji: '🥣', detail: 'A yogurt-based curry often served with rice or roti.' },
    ],
  },
  {
    id: 'festivals', title: 'Festivals', punjabi: 'ਤਿਉਹਾਰ', emoji: '🪁', reward: 45,
    description: 'Open each festival to learn its season, food, songs, faith, farming, and family traditions.',
    items: [
      { name: 'Vaisakhi', pa: 'ਵਿਸਾਖੀ', emoji: '🌾', detail: 'Vaisakhi connects harvest traditions and major Sikh history.' },
      { name: 'Lohri', pa: 'ਲੋਹੜੀ', emoji: '🔥', detail: 'Lohri is a winter celebration connected with fire, songs, sharing, and family.' },
      { name: 'Maghi', pa: 'ਮਾਘੀ', emoji: '🕯️', detail: 'Maghi carries seasonal and Sikh historical significance.' },
      { name: 'Basant', pa: 'ਬਸੰਤ', emoji: '🪁', detail: 'Basant celebrates spring, yellow color, music, and kite traditions in parts of Punjab.' },
      { name: 'Gurpurab', pa: 'ਗੁਰਪੁਰਬ', emoji: '🏛️', detail: 'Gurpurabs remember the lives and teachings of the Sikh Gurus.' },
      { name: 'Teeyan', pa: 'ਤੀਆਂ', emoji: '🌺', detail: 'Teeyan is associated with women’s songs, swings, monsoon, clothing, and community.' },
    ],
  },
  {
    id: 'clothing', title: 'Clothing', punjabi: 'ਪਹਿਰਾਵਾ', emoji: '👳', reward: 35,
    description: 'Tap clothing and craft items to learn where they are worn and what they represent.',
    items: [
      { name: 'Turban', pa: 'ਪੱਗ', emoji: '👳', detail: 'Turban styles vary by region, occasion, occupation, and community.' },
      { name: 'Phulkari', pa: 'ਫੁਲਕਾਰੀ', emoji: '🧵', detail: 'Phulkari is a major Punjabi embroidery tradition with regional patterns and family meaning.' },
      { name: 'Kurta Pajama', pa: 'ਕੁਰਤਾ ਪਜਾਮਾ', emoji: '🥻', detail: 'A widely worn traditional outfit for daily life and celebrations.' },
      { name: 'Salwar Kameez', pa: 'ਸਲਵਾਰ ਕਮੀਜ਼', emoji: '👗', detail: 'A central Punjabi clothing style with many regional cuts and designs.' },
      { name: 'Jutti', pa: 'ਜੁੱਤੀ', emoji: '👞', detail: 'Punjabi jutti is known for leather craft, embroidery, and festive use.' },
      { name: 'Paranda', pa: 'ਪਰਾਂਦਾ', emoji: '🎀', detail: 'A decorative hair accessory associated with Punjabi women’s dress and folk imagery.' },
    ],
  },
  {
    id: 'music', title: 'Music & Dance', punjabi: 'ਸੰਗੀਤ ਤੇ ਨੱਚ', emoji: '🥁', reward: 40,
    description: 'Tap an instrument or dance form to learn its sound, role, and cultural setting.',
    items: [
      { name: 'Dhol', pa: 'ਢੋਲ', emoji: '🥁', detail: 'The dhol drives rhythm in bhangra, celebrations, processions, and harvest events.' },
      { name: 'Tumbi', pa: 'ਤੂੰਬੀ', emoji: '🎸', detail: 'The tumbi is a one-string folk instrument with a sharp, recognizable sound.' },
      { name: 'Algoza', pa: 'ਅਲਗੋਜ਼ਾ', emoji: '🎶', detail: 'The algoza uses paired flutes and is strongly connected with Punjabi folk music.' },
      { name: 'Chimta', pa: 'ਚਿਮਟਾ', emoji: '🪘', detail: 'The chimta adds metallic rhythm and is used in folk and devotional performance.' },
      { name: 'Bhangra', pa: 'ਭੰਗੜਾ', emoji: '🕺', detail: 'Bhangra developed from Punjabi folk dance traditions and is now performed worldwide.' },
      { name: 'Giddha', pa: 'ਗਿੱਧਾ', emoji: '💃', detail: 'Giddha preserves boliyan, humor, memory, and women’s oral traditions.' },
    ],
  },
  {
    id: 'animals', title: 'Animals', punjabi: 'ਜਾਨਵਰ', emoji: '🐃', reward: 30,
    description: 'Tap an animal to learn its Punjabi name and role in farming, stories, songs, or family life.',
    items: [
      { name: 'Buffalo', pa: 'ਮੱਝ', emoji: '🐃', detail: 'Buffalo are central to dairy life and rural household economies.' },
      { name: 'Cow', pa: 'ਗਾਂ', emoji: '🐄', detail: 'Cows support dairy life and appear in village stories and daily work.' },
      { name: 'Horse', pa: 'ਘੋੜਾ', emoji: '🐎', detail: 'Horses carry strong historical, military, and cultural symbolism.' },
      { name: 'Goat', pa: 'ਬੱਕਰੀ', emoji: '🐐', detail: 'Goats are common livestock and important to many rural households.' },
      { name: 'Peacock', pa: 'ਮੋਰ', emoji: '🦚', detail: 'The peacock appears frequently in Punjabi songs, embroidery, and visual culture.' },
      { name: 'Parrot', pa: 'ਤੋਤਾ', emoji: '🦜', detail: 'Parrots appear in Punjabi folk songs, stories, and sayings.' },
    ],
  },
  {
    id: 'nature', title: 'Trees & Nature', punjabi: 'ਰੁੱਖ ਤੇ ਕੁਦਰਤ', emoji: '🌳', reward: 30,
    description: 'Tap a tree to learn its Punjabi name, uses, shade, fruit, and place in village life.',
    items: [
      { name: 'Banyan', pa: 'ਬੋਹੜ', emoji: '🌳', detail: 'The banyan provided shade and often served as a gathering place.' },
      { name: 'Kikar', pa: 'ਕਿੱਕਰ', emoji: '🌿', detail: 'Kikar wood, shade, and rural uses made it familiar across Punjab.' },
      { name: 'Neem', pa: 'ਨਿੰਮ', emoji: '🍃', detail: 'Neem is remembered for shade and many traditional household uses.' },
      { name: 'Mango', pa: 'ਅੰਬ', emoji: '🥭', detail: 'Mango trees provide fruit, shade, and strong seasonal memories.' },
      { name: 'Jamun', pa: 'ਜਾਮੁਣ', emoji: '🫐', detail: 'Jamun is a summer fruit connected with childhood and village trees.' },
      { name: 'Ber', pa: 'ਬੇਰ', emoji: '🍒', detail: 'Ber is a hardy fruit tree common in many parts of Punjab.' },
    ],
  },
];

export default function LivingPunjabExperience() {
  const [activeZone, setActiveZone] = useState(zones[0]);
  const [activeItem, setActiveItem] = useState(zones[0].items[0]);
  const [completed, setCompleted] = useState<string[]>([]);
  const [steps, setSteps] = useState(0);
  const detailRef = useRef<HTMLElement | null>(null);

  const xp = useMemo(
    () => zones.filter((zone) => completed.includes(zone.id)).reduce((sum, zone) => sum + zone.reward, 0),
    [completed],
  );

  function openZone(zone: Zone) {
    setActiveZone(zone);
    setActiveItem(zone.items[0]);
    setSteps(0);
    window.setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  function openItem(item: Item) {
    setActiveItem(item);
    setSteps((current) => Math.min(current + 1, 3));
  }

  function completeZone() {
    if (steps < 3) return;
    setCompleted((current) => current.includes(activeZone.id) ? current : [...current, activeZone.id]);
  }

  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#14532d,#92400e_55%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-7 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-200">Living Punjab</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Tap a world. Open its culture.</h1>
          <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-amber-50">Every card now opens a real interactive section below.</p>
          <div className="mt-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black ring-1 ring-white/20">XP earned: {xp}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((zone) => {
            const done = completed.includes(zone.id);
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => openZone(zone)}
                className={`rounded-3xl p-4 text-left shadow-md ring-1 transition active:scale-[0.98] ${activeZone.id === zone.id ? 'bg-[#24160f] text-white ring-[#24160f]' : 'bg-white ring-black/10'}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{zone.emoji}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${done ? 'bg-emerald-200 text-emerald-900' : 'bg-amber-100 text-amber-900'}`}>{done ? 'Done' : `${zone.reward} XP`}</span>
                </div>
                <h2 className="mt-3 text-xl font-black">{zone.title}</h2>
                <p className={activeZone.id === zone.id ? 'mt-1 font-black text-amber-200' : 'mt-1 font-black text-red-800'}>{zone.punjabi}</p>
                <p className="mt-3 text-sm font-black underline">Open →</p>
              </button>
            );
          })}
        </div>
      </section>

      <section ref={detailRef} id="zone-detail" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-6 md:px-8">
        <div className="rounded-[2rem] bg-white p-5 shadow-2xl ring-1 ring-black/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-800">Interactive world</p>
              <h2 className="mt-2 text-3xl font-black">{activeZone.title}</h2>
              <p className="mt-1 text-2xl font-black text-red-800">{activeZone.punjabi}</p>
            </div>
            <span className="text-6xl">{activeZone.emoji}</span>
          </div>
          <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-700">{activeZone.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {activeZone.items.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => openItem(item)}
                className={`rounded-2xl p-4 text-center ring-1 transition active:scale-95 ${activeItem.name === item.name ? 'bg-red-800 text-white ring-red-800' : 'bg-amber-50 ring-amber-200'}`}
              >
                <p className="text-4xl">{item.emoji}</p>
                <p className="mt-2 text-sm font-black">{item.name}</p>
                <p className={`mt-1 text-sm font-black ${activeItem.name === item.name ? 'text-amber-200' : 'text-red-800'}`}>{item.pa}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-amber-50 p-5 ring-1 ring-amber-200">
              <div className="flex items-center gap-4">
                <span className="text-6xl">{activeItem.emoji}</span>
                <div><h3 className="text-2xl font-black">{activeItem.name}</h3><p className="text-xl font-black text-red-800">{activeItem.pa}</p></div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">{activeItem.detail}</p>
            </div>

            <div className="rounded-3xl bg-[#24160f] p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Explore challenge</p>
              <p className="mt-3 font-black">Open any 3 items to complete this world.</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full bg-amber-300 transition-all" style={{ width: `${Math.min(steps, 3) / 3 * 100}%` }} /></div>
              <p className="mt-2 text-sm font-black">{Math.min(steps, 3)}/3 items explored</p>
              <button
                type="button"
                onClick={completeZone}
                disabled={steps < 3 || completed.includes(activeZone.id)}
                className="mt-5 w-full rounded-2xl bg-amber-300 p-4 font-black text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {completed.includes(activeZone.id) ? 'World completed' : steps < 3 ? 'Explore 3 items first' : `Complete · +${activeZone.reward} XP`}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
