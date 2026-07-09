import { getStory, stories } from '../../../lib/stories';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return stories.map((story) => ({ id: story.id }));
}

export default function StoryReaderPage({ params }: { params: { id: string } }) {
  const story = getStory(params.id);

  if (!story) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8ecd4] text-[#24160f]">
      <section className="bg-[linear-gradient(135deg,#3b160f,#7f1d1d_50%,#d97706)] text-white">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
          <header className="flex flex-col gap-4 border-b border-white/20 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <a href="/storybook" className="text-sm font-bold text-amber-200">← Back to Story Library</a>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.3em] text-amber-100">Chapter {story.number} · {story.category} · {story.age}</p>
              <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">{story.title}</h1>
              <p className="mt-3 text-3xl font-black text-amber-100">{story.punjabi}</p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100">{story.theme}</p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6 text-center ring-1 ring-white/20">
              <p className="text-7xl">{story.emoji}</p>
              <p className="mt-3 text-sm font-black text-amber-100">Interactive reader</p>
              <p className="text-sm text-slate-200">Scroll page by page</p>
            </div>
          </header>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="mb-6 rounded-[2rem] bg-white/80 p-5 shadow-sm ring-1 ring-amber-900/10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">How this story works</p>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {['Read English', 'Read Punjabi', 'Learn words', 'Ask family'].map((step) => (
              <div key={step} className="rounded-2xl bg-amber-50 p-4 text-center font-black text-red-900 ring-1 ring-amber-200">{step}</div>
            ))}
          </div>
        </div>

        <div className="grid gap-8">
          {story.pages.map((page, index) => (
            <article key={page.en} className="overflow-hidden rounded-[2rem] bg-[#fffaf0] shadow-xl ring-1 ring-amber-900/10">
              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
                <div className="flex min-h-[260px] flex-col justify-between bg-[linear-gradient(160deg,#7f1d1d,#f59e0b)] p-8 text-white">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-100">Page {index + 1}</p>
                    <p className="mt-8 text-8xl">{story.emoji}</p>
                  </div>
                  <p className="text-lg font-black text-amber-100">Turn the page with your family</p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-2xl font-black leading-10 text-stone-900">{page.en}</p>
                  <div className="mt-6 rounded-3xl bg-amber-50 p-5 ring-1 ring-amber-200">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-red-700">Punjabi</p>
                    <p className="text-2xl font-bold leading-[2.4rem] text-red-950">{page.pa}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-amber-900/10 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">Lesson</p>
            <p className="mt-4 text-xl font-black leading-8 text-stone-900">{story.lesson}</p>
            <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-xl font-bold leading-9 text-red-950 ring-1 ring-amber-200">{story.lessonPa}</p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-amber-900/10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-800">Words</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {story.words.map((word) => (
                <span key={word} className="rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-stone-800 ring-1 ring-amber-200">{word}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] bg-[#24160f] p-6 text-white shadow-xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">Family Question</p>
          <p className="mt-4 text-2xl font-black leading-10">{story.familyQuestion}</p>
        </section>
      </section>
    </main>
  );
}
