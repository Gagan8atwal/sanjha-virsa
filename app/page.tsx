const sections = [
  {
    title: 'Punjabi Language',
    subtitle: 'Gurmukhi, Shahmukhi, Hindi support, speaking basics, reading, writing, greetings, vocabulary, and pronunciation.',
  },
  {
    title: 'History & Regions',
    subtitle: 'Majha, Malwa, Doaba, Pothohar, historic Punjab, rivers, cities, villages, and shared heritage across both Punjabs.',
  },
  {
    title: 'Culture & Traditions',
    subtitle: 'Family values, festivals, food, clothing, dances, folklore, music, arts, literature, and village life.',
  },
  {
    title: 'Children’s Learning',
    subtitle: 'Future interactive lessons, quizzes, flashcards, audio practice, family challenges, and AI tutor support.',
  },
];

const languages = [
  { name: 'English', sample: 'Shared Heritage' },
  { name: 'Punjabi Gurmukhi', sample: 'ਸਾਂਝਾ ਵਿਰਸਾ' },
  { name: 'Punjabi Shahmukhi', sample: 'سانجھا ورثہ' },
  { name: 'Hindi', sample: 'सांझी विरासत' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Sanjha Virsa</p>
            <h1 className="mt-2 text-3xl font-bold">ਸਾਂਝਾ ਵਿਰਸਾ</h1>
          </div>
          <p className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300">Free Punjabi Learning Platform</p>
        </header>

        <div className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200 ring-1 ring-amber-300/20">
              Built for Punjabi kids growing up outside Punjab
            </p>
            <h2 className="text-5xl font-black leading-tight md:text-7xl">
              Preserve language, culture, and identity for the next generation.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Sanjha Virsa is a multilingual digital home for Punjabi language, history, food, folklore, clothing, music, festivals, values, and shared heritage across Indian and Pakistani Punjab.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#sections" className="rounded-xl bg-amber-300 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-200">Explore Foundation</a>
              <a href="#languages" className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10">View Languages</a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="mt-3 text-slate-300">
              Build a free, accurate, interactive platform where children can learn Punjabi through stories, games, family challenges, culture lessons, and future AI tutoring.
            </p>
            <div className="mt-6 grid gap-3">
              {['Free public resource', 'Four-language foundation', 'Culture + language + history', 'Future AI tutor and mobile app'].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-900/70 p-4 text-slate-200 ring-1 ring-white/10">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section id="languages" className="py-10">
          <h3 className="text-3xl font-bold">Language Versions</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {languages.map((language) => (
              <div key={language.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">{language.name}</p>
                <p className="mt-2 text-xl font-bold">{language.sample}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="sections" className="py-10">
          <h3 className="text-3xl font-bold">Core Knowledge Areas</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h4 className="text-xl font-bold text-amber-200">{section.title}</h4>
                <p className="mt-3 leading-7 text-slate-300">{section.subtitle}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
