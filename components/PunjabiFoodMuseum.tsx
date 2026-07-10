'use client';

import { useMemo, useState } from 'react';

type FoodItem = {
  id: string;
  name: string;
  punjabi: string;
  category: 'Meals' | 'Breads' | 'Drinks' | 'Sweets';
  season: string;
  region: string;
  story: string;
  ingredients: string[];
  servedWith: string;
};

const foods: FoodItem[] = [
  { id: 'saag', name: 'Sarson da Saag', punjabi: 'ਸਰੋਂ ਦਾ ਸਾਗ', category: 'Meals', season: 'Winter', region: 'Across Punjab', story: 'A slow-cooked greens dish strongly associated with winter, farming households, and seasonal eating across Punjab.', ingredients: ['Mustard greens', 'Spinach or bathua', 'Ginger', 'Maize flour'], servedWith: 'Traditionally served with makki di roti, white butter, onion, and jaggery.' },
  { id: 'makki-roti', name: 'Makki di Roti', punjabi: 'ਮੱਕੀ ਦੀ ਰੋਟੀ', category: 'Breads', season: 'Winter', region: 'Across Punjab', story: 'A maize-flour flatbread known for its rustic texture and close connection with winter meals and agricultural life.', ingredients: ['Maize flour', 'Warm water', 'Salt', 'Ghee'], servedWith: 'Best known with sarson da saag, butter, lassi, and jaggery.' },
  { id: 'lassi', name: 'Lassi', punjabi: 'ਲੱਸੀ', category: 'Drinks', season: 'Summer', region: 'Across Punjab', story: 'A yogurt-based drink connected with hospitality, farming households, roadside dhabas, and hot-weather refreshment.', ingredients: ['Yogurt', 'Water or milk', 'Sugar or salt', 'Cardamom optional'], servedWith: 'Served chilled in a tall glass or traditional metal cup.' },
  { id: 'kulcha', name: 'Amritsari Kulcha', punjabi: 'ਅੰਮ੍ਰਿਤਸਰੀ ਕੁਲਚਾ', category: 'Breads', season: 'All year', region: 'Amritsar', story: 'A layered stuffed bread associated with Amritsar’s street-food culture, tandoors, and bustling breakfast shops.', ingredients: ['Refined flour', 'Potato filling', 'Onion', 'Spices'], servedWith: 'Usually served with chole, chutney, onion, and butter.' },
  { id: 'kadhi', name: 'Kadhi Pakora', punjabi: 'ਕੜ੍ਹੀ ਪਕੌੜਾ', category: 'Meals', season: 'All year', region: 'Across Punjab', story: 'A tangy yogurt-and-gram-flour curry with pakoras, commonly prepared in family kitchens and served with rice.', ingredients: ['Yogurt', 'Gram flour', 'Onion pakoras', 'Spices'], servedWith: 'Most often eaten with steamed rice, pickle, and onion.' },
  { id: 'pinni', name: 'Pinni', punjabi: 'ਪਿੰਨੀ', category: 'Sweets', season: 'Winter', region: 'Across Punjab', story: 'A dense winter sweet prepared in many homes as an energy-rich food using ghee, flour, nuts, and family recipes.', ingredients: ['Wheat flour', 'Ghee', 'Jaggery or sugar', 'Nuts'], servedWith: 'Often eaten with warm milk or tea during colder months.' },
  { id: 'kheer', name: 'Kheer', punjabi: 'ਖੀਰ', category: 'Sweets', season: 'Celebrations', region: 'Across Punjab', story: 'A milk-and-rice dessert prepared for family gatherings, religious occasions, festivals, and celebrations.', ingredients: ['Milk', 'Rice', 'Sugar', 'Cardamom'], servedWith: 'Served warm or chilled, often topped with nuts.' },
  { id: 'chole-bhature', name: 'Chole Bhature', punjabi: 'ਛੋਲੇ ਭਟੂਰੇ', category: 'Meals', season: 'All year', region: 'Urban Punjab', story: 'A popular restaurant and street-food combination pairing spiced chickpeas with large fried breads.', ingredients: ['Chickpeas', 'Flour', 'Yogurt', 'Spices'], servedWith: 'Served with onion, pickle, green chili, and chutney.' },
];

export default function PunjabiFoodMuseum() {
  const [category, setCategory] = useState<'All' | FoodItem['category']>('All');
  const [selected, setSelected] = useState(foods[0]);
  const visible = useMemo(() => category === 'All' ? foods : foods.filter((food) => food.category === category), [category]);

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#315a45] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3d9a8]">Punjabi Food Museum</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Explore Punjab through dishes, seasons, and family kitchens.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/68">Open one dish at a time and learn what it is, where it belongs, and how families serve it.</p>
          </div>
          <FoodIllustration food={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['All', 'Meals', 'Breads', 'Drinks', 'Sweets'] as const).map((value) => (
            <button key={value} onClick={() => setCategory(value)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${category === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>{value}</button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((food) => (
              <button key={food.id} onClick={() => setSelected(food)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === food.id ? 'border-[#315a45] bg-[#f3f8f4] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <FoodIllustration food={food} compact />
                <div>
                  <p className="font-serif text-xl font-bold leading-tight">{food.name}</p>
                  <p className="mt-1 font-black text-[#6f1d1b]">{food.punjabi}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{food.category}</p>
                </div>
              </button>
            ))}
          </aside>

          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
            <div className="grid gap-8 bg-[#f0e5d4] p-7 md:grid-cols-[1fr_0.72fr] md:items-center md:p-10">
              <div>
                <p className="sv-kicker">{selected.region}</p>
                <h2 className="mt-3 font-serif text-5xl font-bold tracking-[-0.03em]">{selected.name}</h2>
                <p className="mt-2 text-3xl font-black text-[#6f1d1b]">{selected.punjabi}</p>
                <p className="mt-5 text-base font-medium leading-8 text-[#5f564d]">{selected.story}</p>
              </div>
              <FoodIllustration food={selected} />
            </div>

            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <section>
                <p className="sv-kicker">Main ingredients</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {selected.ingredients.map((ingredient, index) => (
                    <div key={ingredient} className="rounded-2xl border border-black/10 bg-[#fff8e8] p-4">
                      <span className="text-xs font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span>
                      <p className="mt-2 font-serif text-xl font-bold">{ingredient}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-black/10 pt-8">
                  <p className="sv-kicker">How it is served</p>
                  <p className="mt-4 text-lg font-medium leading-9 text-[#4f473f]">{selected.servedWith}</p>
                </div>
              </section>

              <aside className="space-y-5">
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Season</p><p className="mt-4 font-serif text-2xl font-bold">{selected.season}</p></div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6"><p className="sv-kicker">Category</p><p className="mt-4 font-serif text-2xl font-bold">{selected.category}</p></div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function FoodIllustration({ food, compact = false, large = false }: { food: FoodItem; compact?: boolean; large?: boolean }) {
  const className = compact ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]' : large ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl' : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';
  return (
    <svg viewBox="0 0 420 320" role="img" aria-label={`${food.name} illustration`} className={className}>
      <rect width="420" height="320" rx="24" fill="#f5e7ca" />
      <path d="M0 268C100 225 205 238 300 275C352 295 390 291 420 274V320H0V268Z" fill="#d8bd7b" />
      <rect x="54" y="232" width="312" height="24" rx="12" fill="#8a5b1f" />
      {food.id === 'saag' && <><ellipse cx="210" cy="200" rx="105" ry="34" fill="#8b4e24"/><path d="M112 194c10 56 45 82 98 82s88-26 98-82" fill="#b56a34"/><ellipse cx="210" cy="190" rx="95" ry="29" fill="#315a45"/><path d="M150 178c25-18 55-18 80 0M195 170c24-14 48-12 70 5" stroke="#79a36e" strokeWidth="8" fill="none" strokeLinecap="round"/></>}
      {food.id === 'makki-roti' && <><ellipse cx="210" cy="208" rx="115" ry="38" fill="#b56a34"/><ellipse cx="210" cy="198" rx="104" ry="34" fill="#d99a22"/><circle cx="210" cy="196" r="58" fill="#e9bd52"/><circle cx="210" cy="196" r="12" fill="#fff3d9"/></>}
      {food.id === 'lassi' && <><path d="M152 76h116l-14 164H166L152 76Z" fill="#fffdf8" stroke="#6f1d1b" strokeWidth="8"/><ellipse cx="210" cy="76" rx="58" ry="18" fill="#f6e2c0" stroke="#6f1d1b" strokeWidth="8"/><path d="M168 124h84M172 160h76M176 196h68" stroke="#d7c29c" strokeWidth="6"/><path d="M214 48v40" stroke="#315a45" strokeWidth="8" strokeLinecap="round"/></>}
      {food.id === 'kulcha' && <><ellipse cx="210" cy="208" rx="120" ry="38" fill="#b56a34"/><ellipse cx="210" cy="196" rx="105" ry="35" fill="#e6b95a"/><circle cx="180" cy="190" r="8" fill="#6f1d1b"/><circle cx="220" cy="202" r="7" fill="#315a45"/><circle cx="252" cy="185" r="6" fill="#6f1d1b"/><path d="M150 172c35 20 75 20 120 0" stroke="#fff3d9" strokeWidth="6" fill="none"/></>}
      {food.id === 'kadhi' && <><ellipse cx="210" cy="204" rx="106" ry="34" fill="#8b4e24"/><path d="M112 198c12 55 47 79 98 79s86-24 98-79" fill="#b56a34"/><ellipse cx="210" cy="193" rx="96" ry="29" fill="#d9a441"/><circle cx="174" cy="190" r="18" fill="#b9702e"/><circle cx="218" cy="184" r="18" fill="#b9702e"/><circle cx="252" cy="198" r="16" fill="#b9702e"/></>}
      {food.id === 'pinni' && <>{[150,210,270].map((x) => <circle key={x} cx={x} cy="196" r="42" fill="#a85d2a" stroke="#6f1d1b" strokeWidth="6"/>)}<path d="M132 240h156" stroke="#8a5b1f" strokeWidth="10" strokeLinecap="round"/></>}
      {food.id === 'kheer' && <><ellipse cx="210" cy="202" rx="105" ry="34" fill="#8b4e24"/><path d="M112 196c10 56 45 82 98 82s88-26 98-82" fill="#b56a34"/><ellipse cx="210" cy="190" rx="95" ry="28" fill="#fff7df"/><path d="M160 188h100" stroke="#d99a22" strokeWidth="7" strokeDasharray="12 10"/></>}
      {food.id === 'chole-bhature' && <><ellipse cx="155" cy="205" rx="78" ry="28" fill="#8b4e24"/><path d="M84 200c10 46 32 66 71 66s61-20 71-66" fill="#b56a34"/><ellipse cx="155" cy="193" rx="68" ry="23" fill="#7b4f16"/><circle cx="140" cy="190" r="8" fill="#c78b3d"/><circle cx="168" cy="198" r="8" fill="#c78b3d"/><ellipse cx="280" cy="192" rx="74" ry="56" fill="#e6b95a" stroke="#b56a34" strokeWidth="8"/></>}
    </svg>
  );
}
