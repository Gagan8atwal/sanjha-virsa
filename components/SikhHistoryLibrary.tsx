import { gurus, historySections } from '../lib/sikh-history';

export default function SikhHistoryLibrary() {
  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#1e3553] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e7b650]">Sikh history library</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Learn through people, places, teachings, and events.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/65">A respectful, text-first history experience with no invented portraits of Gurus or martyrs.</p>
          </div>
          <HistoryArchitecture />
        </div>
      </section>

      <section className="sv-container py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="sv-kicker">Explore by section</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] md:text-5xl">A clear structure for major parts of Sikh history.</h2>
          <p className="sv-copy mt-5">Each section will grow into its own focused library rather than becoming one long, crowded timeline.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {historySections.map((section, index) => (
            <a key={section.title} href={section.href} className="group rounded-[1.5rem] border border-black/10 bg-[#fffdf8] p-6 shadow-[0_14px_34px_rgba(54,35,24,0.06)] transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3553] text-sm font-black text-white">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="mt-5 font-serif text-2xl font-bold">{section.title}</h3>
              <p className="mt-1 text-lg font-black text-[#6f1d1b]">{section.punjabi}</p>
              <p className="mt-4 text-sm font-medium leading-7 text-[#6f675f]">{section.description}</p>
              <p className="mt-5 text-sm font-black text-[#315a45] group-hover:underline">Open section</p>
            </a>
          ))}
        </div>
      </section>

      <section id="gurus" className="border-y border-black/10 bg-[#fffdf8]">
        <div className="sv-container py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="sv-kicker">The Ten Gurus</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] md:text-5xl">Open one Guru profile at a time.</h2>
            <p className="sv-copy mt-5">Each profile focuses on teachings, contributions, important places, connected people, and child-friendly reflection.</p>
          </div>

          <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {gurus.map((guru) => (
              <a key={guru.id} href={`/heritage/gurus/${guru.id}`} className="group grid gap-5 py-7 md:grid-cols-[5rem_1fr_auto] md:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1e3553] font-serif text-2xl font-bold text-white">{guru.number}</div>
                <div>
                  <h3 className="font-serif text-3xl font-bold leading-tight">{guru.name}</h3>
                  <p className="mt-1 text-xl font-black text-[#6f1d1b]">{guru.punjabi}</p>
                  <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-[#6f675f]">{guru.subtitle}</p>
                </div>
                <span className="text-sm font-black text-[#315a45] group-hover:underline">Read profile</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="future-sections" className="sv-container py-14 md:py-20">
        <div className="grid gap-10 rounded-[2rem] bg-[#201712] p-7 text-white md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e7b650]">Next history expansions</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight">Build each major subject as a dedicated chapter.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Guru Granth Sahib Ji', 'Khalsa and Panj Pyare', 'Sahibzade and Shaheedi', 'Sikh Women', 'Misls and Sikh Empire', 'Takhts and Gurdwaras', 'Historic Battles', 'Modern Sikh History'].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-sm font-black text-[#e7b650]">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-semibold leading-6 text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function HistoryArchitecture() {
  return (
    <svg viewBox="0 0 640 430" role="img" aria-label="Respectful architecture-inspired Sikh history illustration" className="w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-5 shadow-2xl">
      <rect width="640" height="430" rx="28" fill="#f5e7ca" />
      <path d="M90 350h460M130 326h380M165 326V188m105 138V150m105 176V188m100 138V216" fill="none" stroke="#6f1d1b" strokeWidth="12" strokeLinecap="round" />
      <path d="M140 184h330L305 72 140 184Z" fill="#d99a22" stroke="#6f1d1b" strokeWidth="10" strokeLinejoin="round" />
      <path d="M225 326v-95h90v95M362 326v-70h70v70" fill="#fffdf8" stroke="#1e3553" strokeWidth="9" />
      <circle cx="305" cy="155" r="28" fill="#1e3553" />
      <path d="M305 130v50M280 155h50" stroke="#f5e7ca" strokeWidth="8" strokeLinecap="round" />
      <path d="M110 382h420" stroke="#315a45" strokeWidth="14" strokeLinecap="round" />
    </svg>
  );
}
