const storyChapters = [
  {
    number: '01',
    title: 'The Land of Five Rivers',
    punjabi: 'ਪੰਜ ਦਰਿਆਵਾਂ ਦੀ ਧਰਤੀ',
    theme: 'Punjab begins with water, fields, songs, and memory.',
    pages: [
      'Long ago, before borders and passports, there was a land known by its rivers. Children heard the names like music: Jhelum, Chenab, Ravi, Beas, and Sutlej.',
      'The rivers fed wheat fields, villages, orchards, animals, and people. Punjab became a meeting place for travelers, farmers, saints, poets, soldiers, and storytellers.',
      'Every family carried a small piece of Punjab: a word, a recipe, a song, a prayer, a turban, a phulkari, or a story from a grandparent.'
    ],
    lesson: 'Punjab means more than one place. It is a living heritage shared across people, languages, faiths, and families.',
    words: ['Punjab', 'Darya', 'Pind', 'Khet', 'Virsa'],
  },
  {
    number: '02',
    title: 'The First Letters',
    punjabi: 'ਪਹਿਲੇ ਅੱਖਰ',
    theme: 'A child meets Gurmukhi for the first time.',
    pages: [
      'A little child opened an old book from Dadi Ji’s shelf. On the first page was a beautiful letter: ੳ.',
      'Dadi Ji smiled and said, “Every letter is a small door. When you learn the letters, Punjab begins speaking to you.”',
      'The child traced each letter slowly: ਅ, ੲ, ਸ, ਹ, ਕ. The letters became sounds. The sounds became words. The words became stories.'
    ],
    lesson: 'Language is the bridge between generations.',
    words: ['Akhar', 'Boli', 'Gurmukhi', 'Shabad', 'Kahani'],
  },
  {
    number: '03',
    title: 'The Langar Lesson',
    punjabi: 'ਲੰਗਰ ਦੀ ਸਿੱਖਿਆ',
    theme: 'A story about seva, equality, and sharing.',
    pages: [
      'One morning, a child visited the gurdwara and saw people sitting together on the floor. Young, old, rich, poor, everyone sat in one line.',
      'In the kitchen, volunteers stirred dal, rolled rotis, washed dishes, and served with humility. Nobody asked who was important. Everyone was treated with respect.',
      'The child learned that food can fill the stomach, but seva can fill the heart.'
    ],
    lesson: 'Seva means serving others without ego.',
    words: ['Langar', 'Seva', 'Sangat', 'Pangat', 'Dhanvaad'],
  },
  {
    number: '04',
    title: 'The Brave Village Sparrow',
    punjabi: 'ਹਿੰਮਤੀ ਚਿੜੀ',
    theme: 'A child-friendly folk-style story about courage.',
    pages: [
      'In a small pind, a sparrow lived near the wheat fields. She was tiny, but she watched everything carefully.',
      'One hot day, the village well began to dry. The animals were thirsty, and the children were worried. The sparrow flew from house to house, chirping until everyone gathered.',
      'Together, the villagers cleaned the old canal path. Water returned slowly. The sparrow taught them that even a small voice can wake up a whole village.'
    ],
    lesson: 'Courage is not about size. It is about action.',
    words: ['Chiri', 'Himmat', 'Paani', 'Pind', 'Ikatthe'],
  },
];

const bookShelves = [
  'Guru Stories',
  'Punjab History',
  'Alphabet Adventures',
  'Grandma Stories',
  'Village Life',
  'Maps & Places',
  'Food Stories',
  'Folk Tales',
];

export default function StorybookPage() {
  return (
    <main className="min-h-screen bg-[#f8ecd4] text-[#24160f]">
      <section className="bg-[linear-gradient(135deg,#4c1d12,#7f1d1d_45%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <header className="flex flex-col gap-4 border-b border-white/20 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <a href="/" className="text-sm font-bold text-amber-200">← Back to Sanjha Virsa</a>
              <h1 className="mt-3 text-4xl font-black md:text-6xl">The Punjabi Storybook</h1>
              <p className="mt-3 max-w-3xl text-slate-100">Open a chapter, read a story, learn Punjabi words, remember a value, and pass it forward.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-4 text-center ring-1 ring-white/20">
              <p className="text-sm text-amber-100">Today’s guide</p>
              <p className="text-3xl font-black">ਬੁੱਧੀ ਚਿੜੀ</p>
              <p className="text-sm text-slate-200">The wise sparrow</p>
            </div>
          </header>

          <div className="grid gap-8 py-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-red-900">Story-first learning</p>
              <h2 className="text-5xl font-black leading-tight md:text-7xl">Learn heritage like turning pages in an old family book.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">This section is the foundation for Sanjha Virsa’s book-style experience: short chapters, simple language, Punjabi words, family values, and future narration.</p>
            </div>
            <div className="rounded-[2rem] bg-[#fff8ed] p-6 text-[#24160f] shadow-2xl ring-4 ring-white/20">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">How to read</p>
              <ol className="mt-5 space-y-3 text-sm font-semibold leading-7">
                <li>1. Choose a chapter.</li>
                <li>2. Read each page slowly.</li>
                <li>3. Learn the Punjabi words.</li>
                <li>4. Ask someone older in your family about it.</li>
                <li>5. Come back tomorrow for another story.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black">Story Shelves</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bookShelves.map((shelf) => (
            <div key={shelf} className="rounded-3xl bg-white/70 p-5 shadow-sm ring-1 ring-amber-900/10">
              <p className="text-3xl">📚</p>
              <h3 className="mt-3 text-lg font-black">{shelf}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">Coming next: full chapter library, audio, quizzes, and printable family activities.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="mb-6">
          <p className="font-black uppercase tracking-[0.25em] text-red-800">Open Chapters</p>
          <h2 className="mt-2 text-4xl font-black">First storybook chapters</h2>
        </div>
        <div className="grid gap-8">
          {storyChapters.map((chapter) => (
            <article key={chapter.title} className="overflow-hidden rounded-[2rem] bg-[#fffaf0] shadow-xl ring-1 ring-amber-900/10">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="bg-[linear-gradient(160deg,#7f1d1d,#f59e0b)] p-6 text-white md:p-8">
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-100">Chapter {chapter.number}</p>
                  <h3 className="mt-4 text-4xl font-black">{chapter.title}</h3>
                  <p className="mt-2 text-2xl font-black text-amber-100">{chapter.punjabi}</p>
                  <p className="mt-5 leading-7 text-slate-100">{chapter.theme}</p>
                  <div className="mt-8 rounded-3xl bg-white/15 p-5 ring-1 ring-white/20">
                    <p className="text-sm font-black text-amber-100">Lesson</p>
                    <p className="mt-2 font-semibold leading-7">{chapter.lesson}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid gap-4 md:grid-cols-3">
                    {chapter.pages.map((page, index) => (
                      <div key={page} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-amber-900/10">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-red-700">Page {index + 1}</p>
                        <p className="mt-4 text-lg font-semibold leading-8 text-stone-800">{page}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-3xl bg-amber-50 p-5 ring-1 ring-amber-200">
                    <p className="font-black text-red-800">Punjabi words to remember</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {chapter.words.map((word) => (
                        <span key={word} className="rounded-full bg-white px-4 py-2 text-sm font-black text-stone-800 ring-1 ring-amber-200">{word}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
