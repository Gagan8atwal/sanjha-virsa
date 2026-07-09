import { getLearningWorld, learningWorlds } from '../../../lib/learning-worlds';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return learningWorlds.map((world) => ({ id: world.id }));
}

export default function LearningWorldPage({ params }: { params: { id: string } }) {
  const world = getLearningWorld(params.id);

  if (!world) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className={`bg-gradient-to-br ${world.color} text-white`}>
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <a href="/worlds" className="text-sm font-bold text-amber-100">← Back to Worlds</a>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-100">Learning World</p>
              <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">{world.title}</h1>
              <p className="mt-2 text-3xl font-black text-amber-100">{world.punjabi}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">{world.mission}</p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6 text-center shadow-2xl ring-1 ring-white/20">
              <p className="text-8xl">{world.emoji}</p>
              <p className="mt-4 text-xl font-black">Tap cards. Complete quests. Learn by doing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-red-800">Interactive Cards</p>
            <h2 className="mt-2 text-4xl font-black">Choose what to learn</h2>
          </div>
          <p className="max-w-xl text-slate-700">These become the future game-like lessons, audio cards, quizzes, maps, and story modules.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {world.cards.map((card) => (
            <div key={card.title} className="group rounded-[2rem] bg-white p-6 shadow-md ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-red-700">Lesson Card</p>
              <h3 className="mt-4 text-2xl font-black">{card.title}</h3>
              <p className="mt-2 text-xl font-black text-red-800">{card.punjabi}</p>
              <p className="mt-4 text-sm leading-6 text-slate-700">{card.description}</p>
              <button className="mt-5 rounded-2xl bg-amber-300 px-4 py-3 font-black text-slate-950">{card.action}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-black uppercase tracking-[0.25em] text-emerald-700">Daily Quests</p>
          <h2 className="mt-2 text-4xl font-black">Make learning active</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {world.quests.map((quest, index) => (
              <div key={quest} className="rounded-[2rem] bg-emerald-50 p-5 ring-1 ring-emerald-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 font-black text-white">{index + 1}</div>
                <p className="font-black leading-7">{quest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
