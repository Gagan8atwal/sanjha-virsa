const learningHubs = [
  {
    title: 'Kids Punjabi Learning Hub',
    href: '#kids-hub',
    icon: '🎒',
    summary: 'Alphabet quests, simple words, daily speaking practice, flashcards, memory games, and family challenges.',
  },
  {
    title: 'Gurmukhi & Shahmukhi',
    href: '#language',
    icon: 'ਅ',
    summary: 'Learn Punjabi letters, sounds, scripts, vocabulary, greetings, writing basics, and pronunciation.',
  },
  {
    title: 'Punjab History Timeline',
    href: '#history',
    icon: '🏛️',
    summary: 'Ancient Punjab, Sikh history, empires, partition, migration, modern Punjab, and diaspora stories.',
  },
  {
    title: 'Maps of Punjab',
    href: '#maps',
    icon: '🗺️',
    summary: 'Historic Punjab, modern Indian Punjab, Pakistani Punjab, rivers, regions, cities, and cultural zones.',
  },
  {
    title: 'Sikh Heritage',
    href: '#sikhism',
    icon: '☬',
    summary: 'The Gurus, Gurbani meaning, gurdwaras, seva, shaheedi, Sikh values, and child-friendly stories.',
  },
  {
    title: 'Stories & Folklore',
    href: '#stories',
    icon: '📖',
    summary: 'Heer Ranjha, Mirza Sahiban, Dulla Bhatti, village tales, moral stories, and bedtime Punjabi stories.',
  },
  {
    title: 'Food, Clothing & Life',
    href: '#culture',
    icon: '🌾',
    summary: 'Punjabi food, farming, phulkari, turbans, suits, village life, manners, family values, and traditions.',
  },
  {
    title: 'Music, Dance & Art',
    href: '#arts',
    icon: '🥁',
    summary: 'Bhangra, giddha, folk instruments, singers, writers, poetry, artists, and cultural performance.',
  },
];

const alphabets = [
  ['ੳ', 'Oora', 'ਉਦਾਹਰਨ: ਊਠ'],
  ['ਅ', 'Aira', 'ਅਨਾਰ'],
  ['ੲ', 'Eeri', 'ਇੱਕ'],
  ['ਸ', 'Sassa', 'ਸੇਵਾ'],
  ['ਹ', 'Haha', 'ਹਿੰਮਤ'],
  ['ਕ', 'Kakka', 'ਕਿਸਾਨ'],
  ['ਖ', 'Khakha', 'ਖੰਡਾ'],
  ['ਗ', 'Gagga', 'ਗੁਰੂ'],
  ['ਚ', 'Chacha', 'ਚਿੜੀ'],
  ['ਜ', 'Jajja', 'ਜਗਤ'],
  ['ਟ', 'Tainka', 'ਟਹਿਣੀ'],
  ['ਤ', 'Tatta', 'ਤਾਰਾ'],
  ['ਪ', 'Pappa', 'ਪੰਜਾਬ'],
  ['ਮ', 'Mamma', 'ਮਾਂ'],
  ['ਰ', 'Rara', 'ਰੱਬ'],
  ['ਲ', 'Lalla', 'ਲੰਗਰ'],
];

const historyCards = [
  'Ancient Punjab and the land of five rivers',
  'Guru Nanak Dev Ji and the beginning of Sikh tradition',
  'The ten Sikh Gurus and core values',
  'Misl period, Maharaja Ranjit Singh, and Sikh Empire',
  'Colonial Punjab, freedom movements, and reform movements',
  'Partition of 1947 and divided Punjab',
  'Modern Indian Punjab and Pakistani Punjab',
  'Punjabi diaspora in USA, Canada, UK, Australia, and beyond',
];

const mapLinks = [
  {
    title: 'Old Punjab Map Collection',
    url: 'https://commons.wikimedia.org/wiki/Category:Old_maps_of_Punjab',
    note: 'Public-domain and openly licensed historic Punjab maps.',
  },
  {
    title: 'Punjab Region Overview',
    url: 'https://en.wikipedia.org/wiki/Punjab',
    note: 'Broad overview of the Punjab region across India and Pakistan.',
  },
  {
    title: 'Indian Punjab Map',
    url: 'https://en.wikipedia.org/wiki/Punjab,_India',
    note: 'Modern Indian Punjab districts and background.',
  },
  {
    title: 'Pakistani Punjab Map',
    url: 'https://en.wikipedia.org/wiki/Punjab,_Pakistan',
    note: 'Modern Pakistani Punjab province and background.',
  },
];

const cultureAreas = [
  'Food: makki di roti, sarson da saag, lassi, paratha, dal, kheer, pinni, jaggery, pickles, langar food traditions.',
  'Clothing: turban, phulkari, kurta pajama, salwar kameez, paranda, jutti, wedding clothing, regional styles.',
  'Festivals: Vaisakhi, Lohri, Gurpurab, Maghi, Teeyan, Basant, harvest celebrations, village melas.',
  'Values: seva, kirat karni, vand chhakna, respect for elders, hospitality, courage, honesty, family responsibility.',
  'Village life: farming, wells, tractors, fields, animals, pind culture, community gatherings, folk wisdom.',
  'Arts: phulkari, woodwork, pottery, calligraphy, folk instruments, poetry, stage performance, storytelling.',
];

const sikhHeritage = [
  'Guru Nanak Dev Ji: equality, truth, humility, and remembrance of the Creator.',
  'Guru Angad Dev Ji: development and spread of Gurmukhi script tradition.',
  'Guru Amar Das Ji: seva, langar, equality, and social reform.',
  'Guru Ram Das Ji: Amritsar foundation and devotional tradition.',
  'Guru Arjan Dev Ji: Adi Granth compilation and shaheedi.',
  'Guru Hargobind Sahib Ji: Miri-Piri and saint-soldier responsibility.',
  'Guru Har Rai Sahib Ji: compassion, care, and protection of life.',
  'Guru Har Krishan Sahib Ji: service during suffering and illness.',
  'Guru Tegh Bahadur Sahib Ji: religious freedom and supreme sacrifice.',
  'Guru Gobind Singh Ji: Khalsa, courage, discipline, and sovereignty of spirit.',
];

const storyIdeas = [
  'The Brave Little Kisan',
  'A Visit to Dada Ji’s Pind',
  'The Langar Lesson',
  'Why We Say Sat Sri Akal',
  'The Sparrow and the Five Rivers',
  'The Boy Who Learned Gurmukhi',
  'The Girl Who Saved the Phulkari',
  'The Story of Dulla Bhatti',
];

const roadmap = [
  'Phase 1: Beautiful clickable foundation and learning structure.',
  'Phase 2: Add full articles, old maps, new maps, Sikh history, folklore, writers, singers, artists, food, clothing, and alphabet lessons.',
  'Phase 3: Add kids games, quizzes, flashcards, audio pronunciation, badges, and daily lessons.',
  'Phase 4: Add English, Punjabi Gurmukhi, Punjabi Shahmukhi, and Hindi versions.',
  'Phase 5: Add AI Punjabi tutor grounded only in reviewed content.',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[radial-gradient(circle_at_top_left,#fbbf24,transparent_32%),linear-gradient(135deg,#7f1d1d,#111827_58%,#064e3b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <header className="flex flex-col gap-4 border-b border-white/15 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-amber-200">Sanjha Virsa</p>
              <h1 className="mt-2 text-3xl font-black md:text-5xl">ਸਾਂਝਾ ਵਿਰਸਾ · سانجھا ورثہ</h1>
              <p className="mt-2 max-w-3xl text-sm text-slate-200 md:text-base">A free Punjabi culture, language, history, and Sikh heritage preserver for the next generation.</p>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm font-semibold">
              <a className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15" href="#kids-hub">Kids Hub</a>
              <a className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15" href="#maps">Maps</a>
              <a className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15" href="#sikhism">Sikhism</a>
              <a className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15" href="#roadmap">Roadmap</a>
            </nav>
          </header>

          <div className="grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-slate-950">Built for Punjabi kids growing up outside Punjab</p>
              <h2 className="text-5xl font-black leading-[0.95] md:text-7xl">Learn Punjabi like a game. Remember culture like a story.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">This platform should feel simple like Duolingo, visual like YouTube Kids, story-based like bedtime learning, and respectful like a digital museum. Children should click, explore, hear, repeat, play, and remember.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#learning-hubs" className="rounded-2xl bg-amber-300 px-6 py-4 font-black text-slate-950 shadow-lg">Start Exploring</a>
                <a href="#language" className="rounded-2xl border border-white/20 px-6 py-4 font-black text-white">Learn Alphabet</a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-5 text-slate-950">
                <p className="text-sm font-bold text-red-700">Today’s Punjabi Mission</p>
                <h3 className="mt-2 text-3xl font-black">Say 5 words to your family</h3>
                <div className="mt-5 grid gap-3">
                  {['Sat Sri Akal', 'Paani', 'Roti', 'Dhanvaad', 'Pind'].map((word) => (
                    <div key={word} className="flex items-center justify-between rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-200">
                      <span className="font-black">{word}</span>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">Practice</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learning-hubs" className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-red-700">Clickable Learning Hubs</p>
            <h2 className="mt-2 text-4xl font-black">Everything Punjabi, organized for kids</h2>
          </div>
          <p className="max-w-xl text-slate-700">Each card becomes a full section with lessons, stories, links, maps, images, audio, and quizzes.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {learningHubs.map((hub) => (
            <a key={hub.title} href={hub.href} className="group rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl">{hub.icon}</div>
              <h3 className="mt-4 text-xl font-black group-hover:text-red-700">{hub.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{hub.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="kids-hub" className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-black uppercase tracking-[0.25em] text-emerald-700">Kids Learning Hub</p>
          <h2 className="mt-2 text-4xl font-black">Make Punjabi feel easy, visual, and fun</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {['Daily 5-minute lessons', 'Word matching games', 'Grandparent speaking challenges', 'Punjabi bedtime stories', 'Badge rewards and streaks', 'Audio pronunciation practice'].map((item) => (
              <div key={item} className="rounded-3xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
                <h3 className="text-lg font-black">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">Designed for short attention spans, simple recall, and repeat practice.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="language" className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <p className="font-black uppercase tracking-[0.25em] text-red-700">Language</p>
        <h2 className="mt-2 text-4xl font-black">Gurmukhi alphabet starter</h2>
        <p className="mt-3 max-w-3xl text-slate-700">This becomes the first interactive course: tap a letter, hear the sound, trace it, match it with a word, then use it in a sentence.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {alphabets.map(([letter, name, example]) => (
            <div key={letter} className="rounded-3xl bg-white p-4 text-center shadow-sm ring-1 ring-black/10">
              <div className="text-5xl font-black text-red-800">{letter}</div>
              <p className="mt-2 font-black">{name}</p>
              <p className="mt-1 text-xs text-slate-600">{example}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="maps" className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-black uppercase tracking-[0.25em] text-amber-300">Maps</p>
          <h2 className="mt-2 text-4xl font-black">Old Punjab, new Punjab, and the five rivers</h2>
          <p className="mt-3 max-w-3xl text-slate-300">The map section should teach children where Punjab was, where it is now, what changed, and how culture continued across borders.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {mapLinks.map((link) => (
              <a key={link.title} href={link.url} target="_blank" rel="noreferrer" className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 hover:bg-white/15">
                <h3 className="text-xl font-black text-amber-200">{link.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{link.note}</p>
                <p className="mt-4 text-sm font-bold text-white">Open link →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <p className="font-black uppercase tracking-[0.25em] text-red-700">History</p>
        <h2 className="mt-2 text-4xl font-black">Punjab history made simple</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {historyCards.map((card, index) => (
            <div key={card} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-700 font-black text-white">{index + 1}</div>
              <h3 className="font-black">{card}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="sikhism" className="bg-amber-50 py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-black uppercase tracking-[0.25em] text-red-700">Sikh Heritage</p>
          <h2 className="mt-2 text-4xl font-black">The Gurus, values, seva, and shaheedi</h2>
          <p className="mt-3 max-w-3xl text-slate-700">This section must be respectful, child-friendly, and accurate. It should explain values first, then stories, places, Gurbani meanings, and martyrdom with age-appropriate care.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {sikhHeritage.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-4 ring-1 ring-amber-200">
                <p className="font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <p className="font-black uppercase tracking-[0.25em] text-emerald-700">Stories</p>
        <h2 className="mt-2 text-4xl font-black">Bedtime stories, folklore, and moral lessons</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {storyIdeas.map((story) => (
            <div key={story} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/10">
              <p className="text-3xl">📚</p>
              <h3 className="mt-3 text-lg font-black">{story}</h3>
              <p className="mt-2 text-sm text-slate-700">Future page: story, Punjabi words, quiz, audio, and family discussion.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="culture" className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-black uppercase tracking-[0.25em] text-red-700">Culture</p>
          <h2 className="mt-2 text-4xl font-black">Food, clothing, festivals, values, and village life</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cultureAreas.map((area) => (
              <div key={area} className="rounded-3xl bg-[#fff8ed] p-5 ring-1 ring-amber-100">
                <p className="leading-7 text-slate-800">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="arts" className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <p className="font-black uppercase tracking-[0.25em] text-red-700">Music, Dance, Writers & Artists</p>
        <h2 className="mt-2 text-4xl font-black">Bhangra, giddha, poetry, singers, writers, and folk memory</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['Folk music and instruments: dhol, tumbi, algoza, chimta, sarangi.', 'Dance: bhangra, giddha, jhumar, luddi, sammi, dhamaal.', 'Writers and poets: Waris Shah, Bulleh Shah, Shiv Kumar Batalvi, Amrita Pritam, Nanak Singh, and more.'].map((item) => (
            <div key={item} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/10">
              <p className="leading-7 text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-black uppercase tracking-[0.25em] text-amber-300">Build Roadmap</p>
          <h2 className="mt-2 text-4xl font-black">How this becomes a real culture-preserver</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {roadmap.map((step, index) => (
              <div key={step} className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-3xl font-black text-amber-300">{index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
