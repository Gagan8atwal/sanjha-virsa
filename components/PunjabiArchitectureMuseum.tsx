'use client';

import { useMemo, useState } from 'react';

type Site = {
  id: string;
  name: string;
  punjabi: string;
  type: 'Fort' | 'Gurdwara' | 'Haveli' | 'Gate' | 'Temple' | 'Civic';
  location: string;
  period: string;
  summary: string;
  features: string[];
};

const sites: Site[] = [
  { id: 'lahore-fort', name: 'Lahore Fort', punjabi: 'ਲਾਹੌਰ ਕਿਲ੍ਹਾ', type: 'Fort', location: 'Lahore', period: 'Mughal and earlier layers', summary: 'A major fortified complex shaped by successive rulers, courts, gardens, gateways, and defensive architecture.', features: ['Massive fortified walls', 'Decorated gateways', 'Palaces and audience halls', 'Layered historical construction'] },
  { id: 'gobindgarh', name: 'Gobindgarh Fort', punjabi: 'ਗੋਬਿੰਦਗੜ੍ਹ ਕਿਲ੍ਹਾ', type: 'Fort', location: 'Amritsar', period: '18th–19th century', summary: 'A strategic fort associated with the rise of Sikh power and later expanded during the Sikh Empire.', features: ['Defensive bastions', 'Military courtyards', 'Brick fortification', 'Sikh Empire connections'] },
  { id: 'harmandir', name: 'Sri Harmandir Sahib', punjabi: 'ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ', type: 'Gurdwara', location: 'Amritsar', period: '16th century onward', summary: 'A major Sikh sacred complex centered on humility, openness, reflection, and community service.', features: ['Sarovar-centered plan', 'Four-direction access', 'Causeway approach', 'Marble and gilded surfaces'] },
  { id: 'anandpur', name: 'Takht Sri Kesgarh Sahib', punjabi: 'ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ', type: 'Gurdwara', location: 'Anandpur Sahib', period: 'Historic Sikh center', summary: 'A major Sikh site connected with the creation of the Khalsa and the sacred landscape of Anandpur Sahib.', features: ['Elevated setting', 'Domed composition', 'Ceremonial courtyards', 'Historic pilgrimage landscape'] },
  { id: 'haveli', name: 'Punjabi Haveli', punjabi: 'ਪੰਜਾਬੀ ਹਵੇਲੀ', type: 'Haveli', location: 'Historic towns and villages', period: '18th–20th century', summary: 'Large courtyard homes reflected family structure, climate, craft, privacy, storage, and social status.', features: ['Central courtyard', 'Carved doors and balconies', 'Thick climate-responsive walls', 'Family and service zones'] },
  { id: 'delhi-gate', name: 'Historic City Gate', punjabi: 'ਸ਼ਹਿਰੀ ਦਰਵਾਜ਼ਾ', type: 'Gate', location: 'Lahore and other walled cities', period: 'Medieval and early modern', summary: 'City gates controlled movement and became landmarks for trade, defense, neighborhoods, and civic identity.', features: ['Arched passage', 'Heavy timber doors', 'Guard spaces', 'Connection to bazaars'] },
  { id: 'durgiana', name: 'Durgiana Temple', punjabi: 'ਦੁਰਗਿਆਣਾ ਮੰਦਰ', type: 'Temple', location: 'Amritsar', period: '20th century form', summary: 'A prominent Hindu temple complex in Amritsar built around a sacred pool and causeway composition.', features: ['Sacred pool', 'Central shrine', 'Causeway access', 'Decorative domes'] },
  { id: 'capitol', name: 'Chandigarh Capitol Complex', punjabi: 'ਚੰਡੀਗੜ੍ਹ ਕੈਪੀਟਲ ਕੰਪਲੈਕਸ', type: 'Civic', location: 'Chandigarh', period: '20th century modernism', summary: 'A major modern civic ensemble representing post-independence planning, monumental concrete architecture, and institutional design.', features: ['Monumental concrete forms', 'Planned civic axis', 'Brise-soleil and climate control', 'Large public plazas'] },
];

export default function PunjabiArchitectureMuseum() {
  const [type, setType] = useState<'All' | Site['type']>('All');
  const [selected, setSelected] = useState(sites[0]);
  const visible = useMemo(() => type === 'All' ? sites : sites.filter((site) => site.type === type), [type]);

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#5a4032] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3d9a8]">Punjabi Architecture Museum</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Explore forts, sacred spaces, havelis, gates, and modern landmarks.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">Open one structure at a time to understand its period, location, purpose, and architectural features.</p>
          </div>
          <ArchitectureArt site={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['All', 'Fort', 'Gurdwara', 'Haveli', 'Gate', 'Temple', 'Civic'] as const).map((value) => (
            <button key={value} onClick={() => setType(value)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${type === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>{value}</button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((site) => (
              <button key={site.id} onClick={() => setSelected(site)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === site.id ? 'border-[#5a4032] bg-[#fff8ef] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <ArchitectureArt site={site} compact />
                <div><p className="font-serif text-xl font-bold">{site.name}</p><p className="mt-1 font-black text-[#6f1d1b]">{site.punjabi}</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{site.type}</p></div>
              </button>
            ))}
          </aside>

          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
            <div className="grid gap-8 bg-[#f0e5d4] p-7 md:grid-cols-[1fr_0.72fr] md:items-center md:p-10">
              <div>
                <p className="sv-kicker">{selected.location}</p>
                <h2 className="mt-3 font-serif text-5xl font-bold tracking-[-0.03em]">{selected.name}</h2>
                <p className="mt-2 text-3xl font-black text-[#6f1d1b]">{selected.punjabi}</p>
                <p className="mt-5 text-base font-medium leading-8 text-[#5f564d]">{selected.summary}</p>
              </div>
              <ArchitectureArt site={selected} />
            </div>
            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <section>
                <p className="sv-kicker">Architectural features</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {selected.features.map((feature, index) => <div key={feature} className="rounded-2xl border border-black/10 bg-[#fff8e8] p-4"><span className="text-xs font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span><p className="mt-2 font-serif text-xl font-bold">{feature}</p></div>)}
                </div>
              </section>
              <aside className="space-y-5">
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Period</p><p className="mt-4 font-serif text-2xl font-bold">{selected.period}</p></div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6"><p className="sv-kicker">Type</p><p className="mt-4 font-serif text-2xl font-bold">{selected.type}</p></div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function ArchitectureArt({ site, compact = false, large = false }: { site: Site; compact?: boolean; large?: boolean }) {
  const className = compact ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]' : large ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl' : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';
  const sacred = site.type === 'Gurdwara' || site.type === 'Temple';
  return <svg viewBox="0 0 420 320" role="img" aria-label={`${site.name} illustration`} className={className}>
    <rect width="420" height="320" rx="24" fill="#f5e7ca"/><circle cx="338" cy="58" r="28" fill="#d99a22"/><path d="M0 270C110 230 210 240 310 277C360 295 392 291 420 278V320H0V270Z" fill="#d8bd7b"/>
    {sacred ? <><rect x="92" y="165" width="236" height="92" fill="#fffdf8" stroke="#5a4032" strokeWidth="8"/><path d="M210 82c42 24 54 49 54 83H156c0-34 12-59 54-83Z" fill="#d99a22" stroke="#5a4032" strokeWidth="8"/><path d="M130 165v-38h28v38M262 165v-46h28v46" stroke="#5a4032" strokeWidth="10"/><rect x="186" y="205" width="48" height="52" fill="#6f1d1b"/></> : null}
    {site.type === 'Fort' && <><rect x="74" y="130" width="272" height="132" fill="#b56a34" stroke="#5a4032" strokeWidth="9"/><path d="M74 130h46v-38h42v38h96v-38h42v38h46" fill="#b56a34" stroke="#5a4032" strokeWidth="9"/><path d="M178 262v-72c0-28 64-28 64 0v72" fill="#5a4032"/><circle cx="124" cy="184" r="12" fill="#201712"/><circle cx="296" cy="184" r="12" fill="#201712"/></>}
    {site.type === 'Haveli' && <><rect x="82" y="122" width="256" height="140" fill="#d8b27a" stroke="#5a4032" strokeWidth="9"/><path d="M82 122h256l-26-42H108l-26 42Z" fill="#8a5b1f"/><rect x="178" y="190" width="64" height="72" fill="#6f1d1b"/><path d="M114 152h48v42h-48zM258 152h48v42h-48z" fill="#1e3553"/><path d="M100 214h64M256 214h64" stroke="#d99a22" strokeWidth="8"/></>}
    {site.type === 'Gate' && <><rect x="110" y="92" width="200" height="170" fill="#b56a34" stroke="#5a4032" strokeWidth="9"/><path d="M164 262v-84c0-62 92-62 92 0v84" fill="#5a4032"/><path d="M110 92h45V58h40v34h30V58h40v34h45" fill="#b56a34" stroke="#5a4032" strokeWidth="9"/></>}
    {site.type === 'Civic' && <><path d="M88 240V118h74v122M180 240V82h74v158M272 240V142h60v98" fill="#c7c2b7" stroke="#5f5b55" strokeWidth="8"/><path d="M104 140h42M104 170h42M104 200h42M196 108h42M196 142h42M196 176h42M288 164h28M288 194h28" stroke="#1e3553" strokeWidth="7"/></>}
  </svg>;
}
