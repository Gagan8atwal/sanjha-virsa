import type { GuruProfile } from '../lib/sikh-history';
import { gurus } from '../lib/sikh-history';

export default function GuruProfilePage({ guru }: { guru: GuruProfile }) {
  const index = gurus.findIndex((item) => item.id === guru.id);
  const previous = index > 0 ? gurus[index - 1] : null;
  const next = index < gurus.length - 1 ? gurus[index + 1] : null;

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#1e3553] text-white">
        <div className="sv-container py-14 md:py-20">
          <a href="/heritage#gurus" className="text-sm font-black text-[#e7b650]">Back to all Gurus</a>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e7b650]">Guru {guru.number} of 10</p>
              <h1 className="mt-4 max-w-[12ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">{guru.name}</h1>
              <p className="mt-4 text-3xl font-black text-[#f3d9a8]">{guru.punjabi}</p>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/70">{guru.subtitle}</p>
            </div>
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/5 font-serif text-4xl font-bold text-[#e7b650]">{guru.number}</div>
          </div>
        </div>
      </section>

      <section className="sv-container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_19rem]">
          <div className="space-y-10">
            <article>
              <p className="sv-kicker">Overview</p>
              <p className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-snug text-[#30251f]">{guru.overview}</p>
            </article>

            <article className="border-t border-black/10 pt-8">
              <p className="sv-kicker">Early life and formation</p>
              <p className="mt-4 max-w-3xl text-lg font-medium leading-9 text-[#5f564d]">{guru.earlyLife}</p>
            </article>

            <article className="border-t border-black/10 pt-8">
              <p className="sv-kicker">Major contributions</p>
              <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
                {guru.contributions.map((item, itemIndex) => (
                  <div key={item} className="grid gap-4 py-5 sm:grid-cols-[3rem_1fr] sm:items-start">
                    <span className="font-serif text-2xl font-bold text-[#1e3553]">{String(itemIndex + 1).padStart(2, '0')}</span>
                    <p className="font-semibold leading-7 text-[#4f473f]">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border-t border-black/10 pt-8">
              <p className="sv-kicker">Main teachings</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {guru.teachings.map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-black/10 bg-[#fffdf8] p-6 shadow-[0_12px_30px_rgba(54,35,24,0.05)]">
                    <p className="font-serif text-2xl font-bold leading-tight">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] bg-[#201712] p-7 text-white md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e7b650]">For children</p>
              <p className="mt-5 font-serif text-3xl font-bold leading-snug">{guru.childStory}</p>
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">Reflect</p>
                <p className="mt-3 text-lg font-semibold leading-8 text-white/80">{guru.reflection}</p>
              </div>
            </article>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <section className="rounded-[1.5rem] border border-black/10 bg-[#fffdf8] p-6">
              <p className="sv-kicker">Important places</p>
              <div className="mt-4 space-y-3">{guru.places.map((place, placeIndex) => <div key={place} className="flex gap-3 border-b border-black/10 pb-3 last:border-0 last:pb-0"><span className="text-xs font-black text-[#6f1d1b]">{String(placeIndex + 1).padStart(2, '0')}</span><span className="font-semibold">{place}</span></div>)}</div>
            </section>

            <section className="rounded-[1.5rem] border border-black/10 bg-[#fffdf8] p-6">
              <p className="sv-kicker">Connected people</p>
              <div className="mt-4 space-y-3">{guru.people.map((person) => <p key={person} className="border-b border-black/10 pb-3 font-semibold last:border-0 last:pb-0">{person}</p>)}</div>
            </section>

            <section className="rounded-[1.5rem] bg-[#f0e5d4] p-6">
              <p className="sv-kicker">Punjabi words</p>
              <div className="mt-4 space-y-3">{guru.words.map((word) => <p key={word} className="font-serif text-xl font-bold">{word}</p>)}</div>
            </section>
          </aside>
        </div>

        <nav className="mt-14 grid gap-4 border-t border-black/10 pt-8 sm:grid-cols-2" aria-label="Guru profile navigation">
          {previous ? <a href={`/heritage/gurus/${previous.id}`} className="rounded-[1.5rem] border border-black/10 bg-[#fffdf8] p-6"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#6f675f]">Previous Guru</p><p className="mt-2 font-serif text-2xl font-bold">{previous.name}</p><p className="mt-1 font-black text-[#6f1d1b]">{previous.punjabi}</p></a> : <div />}
          {next ? <a href={`/heritage/gurus/${next.id}`} className="rounded-[1.5rem] border border-black/10 bg-[#fffdf8] p-6 sm:text-right"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#6f675f]">Next Guru</p><p className="mt-2 font-serif text-2xl font-bold">{next.name}</p><p className="mt-1 font-black text-[#6f1d1b]">{next.punjabi}</p></a> : <a href="/heritage#gurus" className="rounded-[1.5rem] border border-black/10 bg-[#fffdf8] p-6 sm:text-right"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#6f675f]">Complete set</p><p className="mt-2 font-serif text-2xl font-bold">Return to all Ten Gurus</p></a>}
        </nav>
      </section>
    </main>
  );
}
