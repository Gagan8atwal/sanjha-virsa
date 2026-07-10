import type { GuruProfile } from '../lib/sikh-history';

export default function GuruProfilePage({ guru }: { guru: GuruProfile }) {
  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#0f172a,#1e3a8a_55%,#d97706)] text-white">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
          <a href="/heritage#gurus" className="text-sm font-black text-amber-300">← All Gurus</a>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.35fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">Guru {guru.number}</p>
              <h1 className="mt-2 text-4xl font-black md:text-6xl">{guru.name}</h1>
              <p className="mt-2 text-3xl font-black text-amber-100">{guru.punjabi}</p>
              <p className="mt-4 text-lg font-black text-blue-100">{guru.subtitle}</p>
            </div>
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-amber-300 text-6xl font-black text-slate-950 shadow-2xl ring-8 ring-white/15">{guru.number}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <article className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-800">Overview</p>
              <p className="mt-3 text-lg font-semibold leading-8 text-slate-700">{guru.overview}</p>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-800">Early life and formation</p>
              <p className="mt-3 text-lg font-semibold leading-8 text-slate-700">{guru.earlyLife}</p>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-800">Major contributions</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {guru.contributions.map((item, index) => <div key={item} className="rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-100"><p className="text-xs font-black text-blue-700">{index + 1}</p><p className="mt-1 font-black leading-6">{item}</p></div>)}
              </div>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-800">Main teachings</p>
              <div className="mt-4 grid gap-3">
                {guru.teachings.map((item) => <div key={item} className="rounded-2xl bg-amber-50 p-4 font-black ring-1 ring-amber-200">{item}</div>)}
              </div>
            </article>
          </div>

          <aside className="space-y-5">
            <article className="rounded-3xl bg-[#24160f] p-6 text-white shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">For children</p>
              <p className="mt-4 text-lg font-black leading-8">{guru.childStory}</p>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-800">Important places</p>
              <div className="mt-4 flex flex-wrap gap-2">{guru.places.map((place) => <span key={place} className="rounded-full bg-red-50 px-3 py-2 text-sm font-black text-red-900 ring-1 ring-red-100">{place}</span>)}</div>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-800">Connected people</p>
              <div className="mt-4 flex flex-wrap gap-2">{guru.people.map((person) => <span key={person} className="rounded-full bg-purple-50 px-3 py-2 text-sm font-black text-purple-900 ring-1 ring-purple-100">{person}</span>)}</div>
            </article>

            <article className="rounded-3xl bg-emerald-50 p-6 ring-1 ring-emerald-200">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800">Reflect</p>
              <p className="mt-3 text-xl font-black leading-8 text-emerald-950">{guru.reflection}</p>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-800">Punjabi words</p>
              <div className="mt-4 flex flex-wrap gap-2">{guru.words.map((word) => <span key={word} className="rounded-full bg-amber-50 px-3 py-2 text-sm font-black ring-1 ring-amber-200">{word}</span>)}</div>
            </article>
          </aside>
        </div>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/10">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-600">Learning modules planned for this profile</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Interactive timeline', 'Map of connected places', 'Audio narration', 'Knowledge quiz'].map((item) => <div key={item} className="rounded-2xl bg-slate-50 p-4 text-center font-black ring-1 ring-slate-200">{item}</div>)}
          </div>
        </section>
      </section>
    </main>
  );
}
