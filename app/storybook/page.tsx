import { stories } from '@/lib/stories';

const bookShelves = [
  { title: 'Guru Stories', description: 'Child-friendly Sikh history and values.' },
  { title: 'Punjab History', description: 'Rivers, regions, cities, empire, partition, and diaspora.' },
  { title: 'Alphabet Adventures', description: 'Gurmukhi letters taught through characters and sound.' },
  { title: 'Grandma Stories', description: 'Family lessons, bedtime stories, and Punjabi wisdom.' },
  { title: 'Village Life', description: 'Farms, wells, animals, seasons, pind life, and family roles.' },
  { title: 'Maps & Places', description: 'Old Punjab, new Punjab, Lahore, Amritsar, rivers, and regions.' },
  { title: 'Food Stories', description: 'Langar, roti, saag, lassi, sweets, and family kitchens.' },
  { title: 'Folk Tales', description: 'Folklore, moral stories, heroes, courage, and memory.' },
];

export default function StorybookPage() {
  return (
    <main className="min-h-screen bg-[#f8ecd4] text-[#24160f]">
      <section className="bg-[linear-gradient(135deg,#4c1d12,#7f1d1d_45%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <header className="flex flex-col gap-4 border-b border-white/20 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <a href="/" className="text-sm font-bold text-amber-200">← Back to Sanjha Virsa</a>
              <h1 className="mt-3 text-4xl font-black md:text-6xl">The Punjabi Story Library</h1>
              <p className="mt-3 max-w-3xl text-slate-100">Pick a story card. Open it like a book. Read English and Punjabi together.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-4 text-center ring-1 ring-white/20">
              <p className="text-sm text-amber-100">Next-gen mode</p>
              <p className="text-3xl font-black">Tap · Read · Learn</p>
              <p className="text-sm text-slate-200">Not a boring article page</p>
            </div>
          </header>

          <div className="grid gap-8 py-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-red-900">Story-first learning</p>
              <h2 className="text-5xl font-black leading-tight md:text-7xl">Choose a story. Turn pages. Keep the words.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">This is now a story library, not one long webpage. Each story opens as a separate interactive reader with pages, Punjabi translation, vocabulary, lesson, and family question.</p>
            </div>
            <div className="rounded-[2rem] bg-[#fff8ed] p-6 text-[#24160f] shadow-2xl ring-4 ring-white/20">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Today’s learning loop</p>
              <div className="mt-5 grid gap-3">
                {['1. Pick a story', '2. Read page by page', '3. Learn 5 Punjabi words', '4. Answer family question', '5. Come back tomorrow'].map((item) => (
                  <div key={item} className="rounded-2xl bg-white px-4 py-3 font-black shadow-sm ring-1 ring-amber-200">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-red-800">Story Menu</p>
            <h2 className="mt-2 text-4xl font-black">Choose your book</h2>
          </div>
          <p className="max-w-xl text-stone-700">Every card is clickable. This same pattern will be used for history, maps, language, food, music, Sikh heritage, and culture.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <a key={story.id} href={`/storybook/${story.id}`} className="group overflow-hidden rounded-[2rem] bg-white shadow-md ring-1 ring-amber-900/10 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="bg-[linear-gradient(135deg,#7f1d1d,#f59e0b)] p-5 text-white">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-5xl">{story.emoji}</span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black">{story.age}</span>
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.25em] text-amber-100">Chapter {story.number}</p>
                <h3 className="mt-2 text-2xl font-black leading-tight">{story.title}</h3>
                <p className="mt-2 text-xl font-black text-amber-100">{story.punjabi}</p>
              </div>
              <div className="p-5">
                <p className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-red-800 ring-1 ring-amber-200">{story.category}</p>
                <p className="mt-4 text-sm leading-6 text-stone-700">{story.theme}</p>
                <p className="mt-5 font-black text-red-800 group-hover:underline">Open story →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <h2 className="text-3xl font-black">Coming Story Worlds</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bookShelves.map((shelf) => (
            <div key={shelf.title} className="rounded-3xl bg-white/70 p-5 shadow-sm ring-1 ring-amber-900/10">
              <p className="text-3xl">📚</p>
              <h3 className="mt-3 text-lg font-black">{shelf.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">{shelf.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
