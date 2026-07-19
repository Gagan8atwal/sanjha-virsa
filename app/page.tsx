import HomeJourneyMount from '../components/HomeJourneyMount';

const pathways = [
  { eyebrow: 'Learn', title: 'Punjabi for the next generation', description: 'Short language lessons, stories, pronunciation, quizzes, and family practice.', href: '/kids', accent: 'bg-[#6f1d1b]', art: 'language' },
  { eyebrow: 'History', title: 'Understand Punjab through time', description: 'Sikh history, Punjab history, places, timelines, and carefully structured learning.', href: '/heritage', accent: 'bg-[#1e3553]', art: 'history' },
  { eyebrow: 'Culture', title: 'See how Punjabi life is lived', description: 'Food, clothing, music, village life, festivals, games, arts, and modern Punjabi identity.', href: '/culture', accent: 'bg-[#315a45]', art: 'culture' },
];

const featured = [
  { label: 'Punjabi Language', title: 'Learn Gurmukhi step by step', href: '/language', tone: 'border-[#d9a441]/40 bg-[#fff8e8]' },
  { label: 'Story Library', title: 'Read meaningful bilingual stories', href: '/storybook', tone: 'border-[#6f1d1b]/20 bg-[#fff9f5]' },
  { label: 'Living Punjab', title: 'Explore village life and traditions', href: '/living-punjab', tone: 'border-[#315a45]/25 bg-[#f5faf6]' },
  { label: 'Punjab Maps', title: 'Open cities, regions, and history', href: '/maps', tone: 'border-[#1e3553]/20 bg-[#f5f8fb]' },
];

const familyJourneys = [
  { title: 'For young learners', text: 'Five-minute lessons, visual vocabulary, short stories, and simple cultural activities.', href: '/kids' },
  { title: 'For parents', text: 'Use stories, family questions, and cultural topics to create conversations at home.', href: '/storybook' },
  { title: 'For grandparents', text: 'Share words, memories, village knowledge, family history, songs, and traditions.', href: '/living-punjab' },
];

const preservationGoals = [
  'Punjabi language in Gurmukhi and future Shahmukhi learning',
  'Respectful Sikh and Punjab history without invented portraits',
  'Cities, landmarks, maps, food, clothing, music, and folk arts',
  'Family stories, oral memory, migration, and global Punjabi identity',
];

export default function HomePage() {
  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#201712] text-white">
        <div className="sv-container grid gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e7b650]">Punjabi heritage learning</p>
            <h1 className="mt-5 max-w-[12ch] font-serif text-5xl font-bold leading-[0.96] tracking-[-0.04em] md:text-7xl">A digital home for Punjabi language, history, and culture.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/68 md:text-lg">Sanjha Virsa helps children and families learn through clear lessons, meaningful stories, respectful history, and interactive cultural exploration.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/kids" className="rounded-full bg-[#e7b650] px-6 py-3.5 text-sm font-black text-[#201712] transition hover:-translate-y-0.5">Start learning</a>
              <a href="/heritage" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white/10">Explore history</a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#f6ead4] p-6 text-[#201712] shadow-2xl md:p-8">
            <PunjabLandscape />
            <div className="mt-6 border-t border-black/10 pt-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6f1d1b]">Shared heritage</p>
              <p className="mt-2 font-serif text-2xl font-bold leading-tight">From language at home to history across generations.</p>
            </div>
          </div>
        </div>
      </section>

      <HomeJourneyMount skipTargetId="home-explore" />

      <section id="home-explore" className="sv-container py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="sv-kicker">Choose a path</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] md:text-5xl">One clear doorway into every part of Punjabi heritage.</h2>
          <p className="sv-copy mt-5">Each area opens into a focused learning experience instead of placing everything on one crowded page.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pathways.map((path) => (
            <a key={path.title} href={path.href} className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#fffdf8] shadow-[0_18px_45px_rgba(54,35,24,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(54,35,24,0.13)]">
              <div className={`${path.accent} min-h-56 p-6 text-white`}><PathwayArt type={path.art} /></div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6f1d1b]">{path.eyebrow}</p>
                <h3 className="mt-3 font-serif text-3xl font-bold leading-tight">{path.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-[#6f675f]">{path.description}</p>
                <p className="mt-5 text-sm font-black text-[#315a45] group-hover:underline">Open section</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#fffdf8]">
        <div className="sv-container py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="sv-kicker">Featured experiences</p>
              <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em]">Continue with one focused activity.</h2>
              <p className="sv-copy mt-5">Each experience is designed to be understandable on mobile, easy to return to, and free from unnecessary visual clutter.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featured.map((item) => (
                <a key={item.title} href={item.href} className={`group rounded-[1.5rem] border p-6 transition hover:-translate-y-0.5 hover:shadow-lg ${item.tone}`}>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6f1d1b]">{item.label}</p>
                  <h3 className="mt-3 font-serif text-2xl font-bold leading-tight">{item.title}</h3>
                  <p className="mt-5 text-sm font-black text-[#315a45] group-hover:underline">Open experience</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sv-container py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="sv-kicker">Across generations</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em]">A family learning system, not only a children’s website.</h2>
            <p className="sv-copy mt-5">The strongest preservation happens when children, parents, and elders all have a role.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {familyJourneys.map((journey) => (
              <a key={journey.title} href={journey.href} className="group rounded-[1.5rem] border border-black/10 bg-[#fffdf8] p-6 shadow-[0_12px_30px_rgba(54,35,24,0.06)] transition hover:-translate-y-0.5 hover:shadow-lg">
                <h3 className="font-serif text-2xl font-bold">{journey.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-[#6f675f]">{journey.text}</p>
                <p className="mt-5 text-sm font-black text-[#6f1d1b] group-hover:underline">Explore</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f0e5d4]">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="sv-kicker">Preservation mission</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em]">Build a trustworthy Punjabi cultural library that can grow for decades.</h2>
            <p className="sv-copy mt-5">Every future section will follow the same standards: correct context, respectful history, relevant artwork, clean navigation, and no broken or unrelated images.</p>
          </div>
          <div className="rounded-[1.75rem] border border-black/10 bg-[#fffdf8] p-6 shadow-[0_18px_45px_rgba(54,35,24,0.08)] md:p-8">
            <div className="space-y-4">
              {preservationGoals.map((goal, index) => (
                <div key={goal} className="flex gap-4 border-b border-black/10 pb-4 last:border-0 last:pb-0">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#201712] text-xs font-black text-white">{index + 1}</span>
                  <p className="font-semibold leading-7 text-[#4f473f]">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sv-container py-14 md:py-20">
        <div className="grid gap-6 rounded-[2rem] bg-[#1e3553] p-7 text-white md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e7b650]">Built for Punjabi families worldwide</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight md:text-4xl">Learn a word. Read a story. Ask an elder. Keep the connection alive.</h2>
          </div>
          <a href="/storybook" className="w-fit rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#1e3553]">Read a story</a>
        </div>
      </section>
    </main>
  );
}

function PunjabLandscape() {
  return (
    <svg viewBox="0 0 640 430" role="img" aria-label="Artistic Punjab landscape with fields, a village home, water, and distant city architecture" className="w-full">
      <rect width="640" height="430" rx="28" fill="#F7E8C8" />
      <circle cx="510" cy="88" r="44" fill="#D99A22" opacity="0.9" />
      <path d="M0 245C120 190 205 215 320 252C420 284 525 285 640 225V430H0V245Z" fill="#D8B85D" />
      <path d="M0 305C125 250 260 275 350 315C455 360 545 330 640 285V430H0V305Z" fill="#7C9B62" />
      <path d="M0 354C145 318 240 340 352 370C458 398 540 392 640 352V430H0V354Z" fill="#315A45" />
      <path d="M70 325h160v105H70z" fill="#F3D9A8" /><path d="m55 326 95-68 96 68H55Z" fill="#8B3A2B" />
      <rect x="128" y="350" width="46" height="80" rx="4" fill="#6F1D1B" /><rect x="88" y="348" width="26" height="34" rx="3" fill="#1E3553" />
      <path d="M400 210h95v82h-95z" fill="#F5E2B7" /><path d="M414 210v-36h16v36M465 210v-52h16v52" stroke="#6F1D1B" strokeWidth="10" strokeLinecap="round" /><path d="M395 208h105" stroke="#6F1D1B" strokeWidth="8" />
      <path d="M320 430c20-70 52-111 98-155" stroke="#9DC6D8" strokeWidth="25" fill="none" strokeLinecap="round" /><path d="M320 430c20-70 52-111 98-155" stroke="#D9EEF4" strokeWidth="8" fill="none" strokeLinecap="round" />
      <g stroke="#F3E4B7" strokeWidth="4" opacity="0.9"><path d="M250 335v95M280 327v103M310 328v102" /><path d="M520 328v102M550 315v115M580 310v120" /></g>
    </svg>
  );
}

function PathwayArt({ type }: { type: string }) {
  if (type === 'language') return <svg viewBox="0 0 520 260" role="img" aria-label="Gurmukhi learning illustration" className="h-48 w-full"><rect x="28" y="28" width="190" height="190" rx="24" fill="#FFF4DC" opacity="0.96" /><text x="123" y="155" textAnchor="middle" fontSize="112" fontWeight="700" fill="#6F1D1B">ਅ</text><path d="M270 70h205M270 118h165M270 166h190" stroke="#F5DFC0" strokeWidth="18" strokeLinecap="round" /><path d="M270 214h120" stroke="#E7B650" strokeWidth="12" strokeLinecap="round" /></svg>;
  if (type === 'history') return <svg viewBox="0 0 520 260" role="img" aria-label="Text-first Sikh and Punjab history illustration" className="h-48 w-full"><path d="M75 215h370M105 195h310M135 195V98m83 97V98m84 97V98m83 97V98M112 78h296L260 30 112 78Z" fill="none" stroke="#F4E5C4" strokeWidth="12" strokeLinejoin="round" /><circle cx="260" cy="130" r="24" fill="#E7B650" /><path d="M260 106v48M236 130h48" stroke="#1E3553" strokeWidth="8" strokeLinecap="round" /></svg>;
  return <svg viewBox="0 0 520 260" role="img" aria-label="Punjabi culture illustration with phulkari-inspired pattern and village objects" className="h-48 w-full"><rect x="40" y="35" width="190" height="190" rx="24" fill="#F7E8C8" /><path d="M135 62 182 110 135 158 88 110 135 62Zm0 96 47 48H88l47-48Z" fill="#B24A3A" /><path d="M135 86 158 110 135 134 112 110 135 86Z" fill="#D99A22" /><path d="M290 190h145v38H290z" fill="#D9A441" /><path d="m310 190 52-72 52 72H310Z" fill="#F7E8C8" /><rect x="350" y="164" width="24" height="64" fill="#6F1D1B" /><path d="M455 214c0-55-20-94-54-124" stroke="#F7E8C8" strokeWidth="14" fill="none" strokeLinecap="round" /><path d="M446 92c28 8 38 33 26 57-25-5-38-28-26-57Z" fill="#D99A22" /></svg>;
}
