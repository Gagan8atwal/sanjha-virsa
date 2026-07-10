import { gurus, historySections } from '../lib/sikh-history';

export default function SikhHistoryLibrary() {
  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#0f172a,#1e3a8a_55%,#d97706)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">Sikh History Library</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Explore by Guru, event, place, and value.</h1>
          <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-slate-100 md:text-base">The timeline is now only the doorway. Every major subject opens into its own learning section.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {historySections.map((section) => (
            <a key={section.title} href={section.href} className="rounded-3xl bg-white p-5 shadow-md ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-4xl">{section.icon}</p>
              <h2 className="mt-3 text-xl font-black">{section.title}</h2>
              <p className="mt-1 text-lg font-black text-blue-900">{section.punjabi}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{section.description}</p>
              <p className="mt-4 text-sm font-black text-amber-700">Open section →</p>
            </a>
          ))}
        </div>
      </section>

      <section id="gurus" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-8 md:px-8">
        <div className="mb-5">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-800">Ten Gurus</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">Choose a Guru</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gurus.map((guru) => (
            <a key={guru.id} href={`/heritage/gurus/${guru.id}`} className="group overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-[linear-gradient(135deg,#1e3a8a,#d97706)] p-5 text-white">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-300 text-xl font-black text-slate-950">{guru.number}</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black">Guru Profile</span>
                </div>
                <h3 className="mt-5 text-2xl font-black">{guru.name}</h3>
                <p className="mt-1 text-xl font-black text-amber-100">{guru.punjabi}</p>
              </div>
              <div className="p-5">
                <p className="text-sm font-black text-blue-900">{guru.subtitle}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{guru.overview}</p>
                <p className="mt-4 font-black text-amber-700 group-hover:underline">Read full profile →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="future-sections" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-8 pb-16 md:px-8">
        <div className="rounded-3xl bg-[#24160f] p-6 text-white shadow-xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-300">Next history expansions</p>
          <h2 className="mt-2 text-3xl font-black">More dedicated sections are structured next</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {['Guru Granth Sahib Ji', 'Khalsa & Panj Pyare', 'Sahibzade & Shaheedi', 'Sikh Women', 'Misls & Sikh Empire', 'Takhts & Gurdwaras', 'Historic Battles', 'Modern Sikh History'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-4 font-black ring-1 ring-white/10">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
