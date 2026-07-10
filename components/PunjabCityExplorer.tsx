'use client';

import { useMemo, useState } from 'react';
import { punjabCities, type PunjabCity } from '../lib/punjab-cities';

export default function PunjabCityExplorer() {
  const [region, setRegion] = useState<'All' | PunjabCity['region']>('All');
  const [selected, setSelected] = useState(punjabCities[0]);

  const cities = useMemo(
    () => region === 'All' ? punjabCities : punjabCities.filter((city) => city.region === region),
    [region],
  );

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#1e3553] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e7b650]">Punjab City Explorer</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Open Punjab one city at a time.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/68">Explore landmark-based city profiles across East and West Punjab without crowded map labels.</p>
          </div>
          <LandmarkIllustration city={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['All', 'East Punjab', 'West Punjab'] as const).map((item) => (
            <button key={item} onClick={() => setRegion(item)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${region === item ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>{item}</button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {cities.map((city) => (
              <button key={city.id} onClick={() => setSelected(city)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === city.id ? 'border-[#6f1d1b] bg-[#fff7ef] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <LandmarkIllustration city={city} compact />
                <div>
                  <p className="font-serif text-2xl font-bold">{city.name}</p>
                  <p className="mt-1 font-black text-[#6f1d1b]">{city.punjabi}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{city.region}</p>
                </div>
              </button>
            ))}
          </aside>

          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
            <div className="grid gap-8 bg-[#f0e5d4] p-7 md:grid-cols-[1fr_0.72fr] md:items-center md:p-10">
              <div>
                <p className="sv-kicker">{selected.region} · {selected.country}</p>
                <h2 className="mt-3 font-serif text-5xl font-bold tracking-[-0.03em]">{selected.name}</h2>
                <p className="mt-2 text-3xl font-black text-[#6f1d1b]">{selected.punjabi}</p>
                <p className="mt-5 text-base font-medium leading-8 text-[#5f564d]">{selected.overview}</p>
              </div>
              <LandmarkIllustration city={selected} />
            </div>

            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <div className="space-y-10">
                <section>
                  <p className="sv-kicker">Historical context</p>
                  <p className="mt-4 text-lg font-medium leading-9 text-[#4f473f]">{selected.history}</p>
                </section>

                <section className="border-t border-black/10 pt-8">
                  <p className="sv-kicker">Modern identity</p>
                  <p className="mt-4 text-lg font-medium leading-9 text-[#4f473f]">{selected.modernIdentity}</p>
                </section>

                <section className="border-t border-black/10 pt-8">
                  <p className="sv-kicker">City timeline</p>
                  <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
                    {selected.timeline.map((item) => (
                      <div key={`${selected.id}-${item.year}`} className="grid gap-3 py-5 sm:grid-cols-[8rem_1fr]">
                        <p className="font-serif text-xl font-bold text-[#1e3553]">{item.year}</p>
                        <p className="font-semibold leading-7 text-[#5f564d]">{item.event}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside>
                <section className="rounded-[1.5rem] bg-[#201712] p-6 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Landmark identity</p>
                  <p className="mt-4 font-serif text-2xl font-bold leading-tight">{selected.landmark}</p>
                </section>

                <section className="mt-5 rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6">
                  <p className="sv-kicker">Known for</p>
                  <div className="mt-4 space-y-3">
                    {selected.knownFor.map((item, index) => (
                      <div key={item} className="flex gap-3 border-b border-black/10 pb-3 last:border-0 last:pb-0">
                        <span className="text-xs font-black text-[#6f1d1b]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="font-semibold leading-6">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function LandmarkIllustration({ city, compact = false, large = false }: { city: PunjabCity; compact?: boolean; large?: boolean }) {
  const className = compact ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]' : large ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl' : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';
  const tone = city.region === 'East Punjab' ? '#6f1d1b' : '#315a45';

  return (
    <svg viewBox="0 0 420 280" role="img" aria-label={`${city.name} landmark illustration`} className={className}>
      <rect width="420" height="280" rx="24" fill="#f5e7ca" />
      <circle cx="335" cy="55" r="30" fill="#d99a22" opacity="0.9" />
      <path d="M0 215C90 170 170 184 245 220C310 252 360 242 420 210V280H0V215Z" fill="#c7a95c" />
      <path d="M0 245C90 215 180 228 265 255C320 272 370 268 420 248V280H0V245Z" fill={tone} opacity="0.92" />
      {city.id === 'amritsar' || city.id === 'nankana-sahib' || city.id === 'anandpur-sahib' ? (
        <>
          <rect x="95" y="150" width="230" height="82" fill="#fffdf8" stroke={tone} strokeWidth="7" />
          <path d="M130 150v-38h28v38M262 150v-55h28v55" stroke={tone} strokeWidth="10" strokeLinecap="round" />
          <path d="M82 148h256" stroke={tone} strokeWidth="8" />
          <path d="M190 232v-58h40v58" fill="#d99a22" />
        </>
      ) : city.id === 'lahore' ? (
        <>
          <rect x="105" y="145" width="210" height="88" fill="#b94d3a" />
          <path d="M125 145v-45M295 145v-45" stroke="#b94d3a" strokeWidth="14" strokeLinecap="round" />
          <path d="M122 98h16M292 98h16" stroke="#d99a22" strokeWidth="8" />
          <path d="M178 145c0-35 22-58 32-58s32 23 32 58" fill="#f5e7ca" />
        </>
      ) : city.id === 'patiala' ? (
        <>
          <rect x="90" y="135" width="240" height="98" fill="#c98a50" stroke={tone} strokeWidth="7" />
          <rect x="118" y="105" width="42" height="128" fill="#b06a3b" />
          <rect x="260" y="105" width="42" height="128" fill="#b06a3b" />
          <path d="M175 233v-62h70v62" fill="#f5e7ca" />
        </>
      ) : city.id === 'chandigarh' ? (
        <>
          <path d="M135 222c0-73 24-128 75-170 50 42 74 97 74 170" fill="none" stroke={tone} strokeWidth="18" strokeLinecap="round" />
          <path d="M210 56v166M156 120h108" stroke="#d99a22" strokeWidth="12" strokeLinecap="round" />
        </>
      ) : city.id === 'multan' ? (
        <>
          <rect x="120" y="150" width="180" height="82" fill="#8db6c4" stroke={tone} strokeWidth="7" />
          <path d="M155 150c0-48 25-76 55-76s55 28 55 76" fill="#d99a22" />
          <path d="M180 232v-54h60v54" fill="#f5e7ca" />
        </>
      ) : (
        <>
          <rect x="90" y="145" width="240" height="88" fill="#d8c5a3" stroke={tone} strokeWidth="7" />
          <rect x="185" y="80" width="50" height="153" fill="#c98a50" stroke={tone} strokeWidth="7" />
          <circle cx="210" cy="120" r="18" fill="#fffdf8" stroke={tone} strokeWidth="6" />
          <path d="M210 102v18l12 9" stroke={tone} strokeWidth="5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
