'use client';

import { useState } from 'react';
import { punjabTimeline } from '../lib/punjab-timeline';

export default function PunjabTimelineExplorer() {
  const [selected, setSelected] = useState(punjabTimeline[0]);

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#201712] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e7b650]">Punjab Through Time</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Explore the story of Punjab across thousands of years.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/68">Move through eight major eras and open one historical chapter at a time.</p>
          </div>
          <TimelineLandscape />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-3 overflow-x-auto pb-3">
          {punjabTimeline.map((era, index) => (
            <button key={era.id} onClick={() => setSelected(era)} className={`min-w-[15rem] rounded-[1.5rem] border p-5 text-left transition ${selected.id === era.id ? 'border-[#6f1d1b] bg-[#fff7ef] shadow-lg' : 'border-black/10 bg-[#fffdf8]'}`}>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6f675f]">Chapter {String(index + 1).padStart(2, '0')}</p>
              <p className="mt-3 font-serif text-2xl font-bold leading-tight">{era.title}</p>
              <p className="mt-2 text-sm font-black text-[#6f1d1b]">{era.period}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
          <div className="grid gap-8 bg-[#f0e5d4] p-7 md:grid-cols-[1fr_0.72fr] md:items-center md:p-10">
            <div>
              <p className="sv-kicker">{selected.period}</p>
              <h2 className="mt-3 font-serif text-5xl font-bold tracking-[-0.03em]">{selected.title}</h2>
              <p className="mt-2 text-2xl font-black text-[#6f1d1b]">{selected.punjabi}</p>
              <p className="mt-5 text-base font-medium leading-8 text-[#5f564d]">{selected.summary}</p>
            </div>
            <EraIllustration id={selected.id} />
          </div>

          <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
            <div className="space-y-10">
              <section>
                <p className="sv-kicker">Historical context</p>
                <p className="mt-4 text-lg font-medium leading-9 text-[#4f473f]">{selected.context}</p>
              </section>

              <section className="border-t border-black/10 pt-8">
                <p className="sv-kicker">Key developments</p>
                <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
                  {selected.keyDevelopments.map((item, index) => (
                    <div key={item} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr]">
                      <span className="font-serif text-2xl font-bold text-[#1e3553]">{String(index + 1).padStart(2, '0')}</span>
                      <p className="font-semibold leading-7 text-[#5f564d]">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="rounded-[1.5rem] bg-[#201712] p-6 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Important places</p>
              <div className="mt-5 space-y-4">
                {selected.places.map((place, index) => (
                  <div key={place} className="flex gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-xs font-black text-[#e7b650]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="font-semibold leading-6 text-white/82">{place}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </article>
      </section>
    </main>
  );
}

function TimelineLandscape() {
  return (
    <svg viewBox="0 0 640 420" role="img" aria-label="Artistic timeline landscape of Punjab history" className="w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl">
      <rect width="640" height="420" rx="28" fill="#f5e7ca" />
      <circle cx="525" cy="80" r="42" fill="#d99a22" />
      <path d="M0 285C115 225 235 240 340 290C455 345 545 330 640 270V420H0V285Z" fill="#c8a85b" />
      <path d="M0 345C130 305 250 325 360 360C455 392 560 380 640 342V420H0V345Z" fill="#315a45" />
      <path d="M80 310h150v110H80z" fill="#f3d9a8" /><path d="m62 312 93-72 94 72H62Z" fill="#6f1d1b" />
      <path d="M330 320h190v100H330z" fill="#fffdf8" stroke="#1e3553" strokeWidth="8" />
      <path d="M360 320v-48h25v48M465 320v-60h25v60" stroke="#1e3553" strokeWidth="10" strokeLinecap="round" />
      <path d="M315 318h220" stroke="#1e3553" strokeWidth="8" />
      <path d="M72 380h495" stroke="#d99a22" strokeWidth="10" strokeLinecap="round" />
      {[120, 215, 310, 405, 500].map((x) => <circle key={x} cx={x} cy="380" r="12" fill="#201712" />)}
    </svg>
  );
}

function EraIllustration({ id }: { id: string }) {
  const tone = id === 'partition' ? '#6f1d1b' : id === 'modern' ? '#315a45' : id === 'gurus' || id === 'misls-empire' ? '#1e3553' : '#8a5b1f';
  return (
    <svg viewBox="0 0 420 280" role="img" aria-label="Historical era illustration" className="w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3">
      <rect width="420" height="280" rx="24" fill="#f5e7ca" />
      <circle cx="330" cy="58" r="30" fill="#d99a22" />
      <path d="M0 210C90 165 165 180 245 218C315 251 365 240 420 205V280H0V210Z" fill="#c8a85b" />
      <path d="M0 245C95 215 180 226 262 252C320 270 370 265 420 246V280H0V245Z" fill={tone} opacity="0.9" />
      {id === 'indus' ? (
        <><rect x="92" y="120" width="236" height="110" fill="#c98a50" /><rect x="125" y="150" width="50" height="80" fill="#f5e7ca" /><rect x="245" y="140" width="48" height="90" fill="#f5e7ca" /><path d="M90 118h240" stroke={tone} strokeWidth="8" /></>
      ) : id === 'partition' ? (
        <><path d="M205 70v160" stroke={tone} strokeWidth="10" strokeDasharray="18 14" /><path d="M88 190h95M237 190h95" stroke="#1e3553" strokeWidth="14" strokeLinecap="round" /><path d="m170 176 20 14-20 14M250 176l-20 14 20 14" fill="none" stroke="#1e3553" strokeWidth="7" /></>
      ) : id === 'modern' ? (
        <><rect x="78" y="145" width="70" height="85" fill="#d8c5a3" /><rect x="168" y="115" width="70" height="115" fill="#b7c8d0" /><rect x="258" y="82" width="80" height="148" fill="#9db4bd" /><path d="M112 145v-34M202 115V80M298 82V45" stroke={tone} strokeWidth="8" /></>
      ) : (
        <><rect x="95" y="145" width="230" height="85" fill="#fffdf8" stroke={tone} strokeWidth="8" /><path d="M125 145v-42h28v42M265 145v-58h28v58" stroke={tone} strokeWidth="10" strokeLinecap="round" /><path d="M82 143h256" stroke={tone} strokeWidth="8" /><path d="M185 230v-62h50v62" fill="#d99a22" /></>
      )}
    </svg>
  );
}
