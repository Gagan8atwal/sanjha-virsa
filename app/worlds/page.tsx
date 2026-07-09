import { learningWorlds } from '../../lib/learning-worlds';

export default function WorldsPage() {
  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#111827,#7f1d1d_55%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <a href="/" className="text-sm font-bold text-amber-200">← Back to Sanjha Virsa</a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.35em] text-amber-200">Explore Worlds</p>
          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">Choose a Punjabi learning world</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100">This is the main next-gen menu. Every world opens into cards, quests, stories, maps, words, and future games.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningWorlds.map((world) => (
            <a key={world.id} href={world.route} className="group overflow-hidden rounded-[2rem] bg-white shadow-md ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className={`bg-gradient-to-br ${world.color} p-6 text-white`}>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-6xl">{world.emoji}</span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black">World</span>
                </div>
                <h2 className="mt-6 text-3xl font-black leading-tight">{world.title}</h2>
                <p className="mt-2 text-2xl font-black text-amber-100">{world.punjabi}</p>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-slate-700">{world.tagline}</p>
                <p className="mt-5 font-black text-red-800 group-hover:underline">Open world →</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
