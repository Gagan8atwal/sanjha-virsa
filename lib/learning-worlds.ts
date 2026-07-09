export type LearningWorld = {
  id: string;
  title: string;
  punjabi: string;
  emoji: string;
  tagline: string;
  mission: string;
  route: string;
  color: string;
  cards: {
    title: string;
    punjabi: string;
    description: string;
    action: string;
  }[];
  quests: string[];
};

export const learningWorlds: LearningWorld[] = [
  {
    id: 'language',
    title: 'Punjabi Language Academy',
    punjabi: 'ਪੰਜਾਬੀ ਬੋਲੀ ਅਕੈਡਮੀ',
    emoji: 'ਅ',
    tagline: 'Letters, sounds, words, speaking, reading, and family conversation.',
    mission: 'Make Punjabi easy to remember through tiny lessons, big letters, bilingual cards, voice practice, and family challenges.',
    route: '/worlds/language',
    color: 'from-red-900 to-amber-500',
    cards: [
      { title: 'Gurmukhi Letters', punjabi: 'ਗੁਰਮੁਖੀ ਅੱਖਰ', description: 'Tap each letter, see its sound, and learn one useful word.', action: 'Start letters' },
      { title: 'Everyday Words', punjabi: 'ਰੋਜ਼ਾਨਾ ਸ਼ਬਦ', description: 'Family, food, home, school, farm, feelings, and manners.', action: 'Learn words' },
      { title: 'Speak With Family', punjabi: 'ਪਰਿਵਾਰ ਨਾਲ ਬੋਲੋ', description: 'Simple Punjabi sentences kids can use with parents and grandparents.', action: 'Practice speaking' },
      { title: 'Shahmukhi Bridge', punjabi: 'شاہ مکھی', description: 'Future bridge for Pakistani Punjabi script and shared vocabulary.', action: 'Preview bridge' },
    ],
    quests: ['Say 5 Punjabi words today.', 'Ask Dadi/Nani one word from childhood.', 'Write ੳ ਅ ੲ three times.', 'Use one Punjabi sentence at dinner.'],
  },
  {
    id: 'history',
    title: 'Punjab History Journey',
    punjabi: 'ਪੰਜਾਬ ਇਤਿਹਾਸ ਯਾਤਰਾ',
    emoji: '🏛️',
    tagline: 'Ancient Punjab, Sikh history, empire, partition, and diaspora.',
    mission: 'Teach history as a guided journey, not a dry textbook. Kids should know where they come from and what their families carried forward.',
    route: '/worlds/history',
    color: 'from-slate-950 to-red-800',
    cards: [
      { title: 'Land of Five Rivers', punjabi: 'ਪੰਜ ਦਰਿਆ', description: 'How rivers shaped life, farming, travel, and culture.', action: 'Begin journey' },
      { title: 'Sikh Era', punjabi: 'ਸਿੱਖ ਇਤਿਹਾਸ', description: 'The Gurus, values, misls, and the Sikh Empire.', action: 'Explore era' },
      { title: 'Partition Memory', punjabi: 'ਵੰਡ ਦੀ ਯਾਦ', description: 'Age-appropriate explanation of 1947 and divided Punjab.', action: 'Learn carefully' },
      { title: 'Diaspora', punjabi: 'ਪਰਵਾਸ', description: 'How Punjabis built homes in Canada, USA, UK, Australia, and more.', action: 'See migration' },
    ],
    quests: ['Find your family region on a map.', 'Ask an elder about migration.', 'Learn one historic city.', 'Remember one river name.'],
  },
  {
    id: 'maps',
    title: 'Interactive Punjab Maps',
    punjabi: 'ਪੰਜਾਬ ਦੇ ਨਕਸ਼ੇ',
    emoji: '🗺️',
    tagline: 'Old Punjab, new Punjab, rivers, cities, regions, and historic places.',
    mission: 'Make maps feel like an adventure. A child taps Lahore, Amritsar, rivers, or regions and unlocks stories, photos, timelines, and vocabulary.',
    route: '/worlds/maps',
    color: 'from-emerald-950 to-amber-600',
    cards: [
      { title: 'Old Punjab', punjabi: 'ਪੁਰਾਣਾ ਪੰਜਾਬ', description: 'Historic maps and the wider Punjab region before modern borders.', action: 'Open old maps' },
      { title: 'Modern Punjab', punjabi: 'ਅੱਜ ਦਾ ਪੰਜਾਬ', description: 'Indian Punjab and Pakistani Punjab as living cultural regions.', action: 'Open new maps' },
      { title: 'Five Rivers', punjabi: 'ਪੰਜ ਦਰਿਆ', description: 'Jhelum, Chenab, Ravi, Beas, and Sutlej.', action: 'Follow rivers' },
      { title: 'Cities & Pinds', punjabi: 'ਸ਼ਹਿਰ ਤੇ ਪਿੰਡ', description: 'Amritsar, Lahore, Ludhiana, Jalandhar, Patiala, Faisalabad, and more.', action: 'Visit places' },
    ],
    quests: ['Tap one river and remember it.', 'Find Amritsar and Lahore.', 'Ask family about their pind.', 'Compare old and new Punjab.'],
  },
  {
    id: 'sikh-heritage',
    title: 'Sikh Heritage World',
    punjabi: 'ਸਿੱਖ ਵਿਰਸਾ',
    emoji: '☬',
    tagline: 'The Gurus, values, seva, langar, Gurbani meaning, and shaheedi.',
    mission: 'Explain Sikh heritage with respect, clarity, and age-appropriate storytelling. Values come first, then stories, places, and history.',
    route: '/worlds/sikh-heritage',
    color: 'from-blue-950 to-amber-500',
    cards: [
      { title: 'Ten Gurus', punjabi: 'ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨ', description: 'Child-friendly introductions to each Guru and their message.', action: 'Meet the Gurus' },
      { title: 'Seva & Langar', punjabi: 'ਸੇਵਾ ਤੇ ਲੰਗਰ', description: 'Equality, humility, serving others, and sharing food.', action: 'Learn seva' },
      { title: 'Gurbani Basics', punjabi: 'ਗੁਰਬਾਣੀ ਦੀ ਸਮਝ', description: 'Simple meanings, respect, listening, and reflection.', action: 'Start basics' },
      { title: 'Shaheedi & Courage', punjabi: 'ਸ਼ਹੀਦੀ ਤੇ ਹਿੰਮਤ', description: 'Careful, respectful stories about sacrifice and standing for truth.', action: 'Learn courage' },
    ],
    quests: ['Do one act of seva.', 'Learn what langar means.', 'Ask why we cover our head in gurdwara.', 'Remember one Guru’s message.'],
  },
  {
    id: 'culture',
    title: 'Punjabi Culture World',
    punjabi: 'ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ',
    emoji: '🌾',
    tagline: 'Food, clothing, festivals, family values, village life, music, and dance.',
    mission: 'Preserve the everyday life of Punjab so children can feel culture, not just read about it.',
    route: '/worlds/culture',
    color: 'from-orange-900 to-yellow-500',
    cards: [
      { title: 'Food & Kitchen', punjabi: 'ਭੋਜਨ ਤੇ ਰਸੋਈ', description: 'Roti, saag, lassi, dal, sweets, pickles, and family cooking.', action: 'Enter kitchen' },
      { title: 'Clothing & Phulkari', punjabi: 'ਕੱਪੜੇ ਤੇ ਫੁਲਕਾਰੀ', description: 'Turbans, suits, phulkari, jutti, wedding clothing, and identity.', action: 'See clothing' },
      { title: 'Festivals', punjabi: 'ਤਿਉਹਾਰ', description: 'Vaisakhi, Lohri, Gurpurab, Maghi, Teeyan, Basant, and melas.', action: 'Celebrate' },
      { title: 'Music & Dance', punjabi: 'ਸੰਗੀਤ ਤੇ ਨੱਚ', description: 'Dhol, tumbi, bhangra, giddha, folk songs, and stage performance.', action: 'Feel rhythm' },
    ],
    quests: ['Learn one food word.', 'Ask about one family festival.', 'Listen to one folk instrument.', 'Name one traditional clothing item.'],
  },
  {
    id: 'kids-hub',
    title: 'Kids Learning Hub',
    punjabi: 'ਬੱਚਿਆਂ ਦਾ ਸਿੱਖਣ ਘਰ',
    emoji: '🎒',
    tagline: 'Daily missions, badges, games, stories, words, and family activities.',
    mission: 'Turn Sanjha Virsa into a habit for kids: 5 minutes a day, one story, one word, one value, one family question.',
    route: '/worlds/kids-hub',
    color: 'from-purple-950 to-pink-500',
    cards: [
      { title: 'Daily Mission', punjabi: 'ਰੋਜ਼ ਦੀ ਮਿਸ਼ਨ', description: 'A simple task kids can complete in 5 minutes.', action: 'Start mission' },
      { title: 'Word Game', punjabi: 'ਸ਼ਬਦ ਖੇਡ', description: 'Match English to Punjabi and build memory.', action: 'Play words' },
      { title: 'Family Challenge', punjabi: 'ਪਰਿਵਾਰਕ ਚੈਲੈਂਜ', description: 'Ask elders questions and bring family into learning.', action: 'Ask family' },
      { title: 'Badge Path', punjabi: 'ਬੈਜ ਰਾਹ', description: 'Future rewards for consistency, speaking, reading, and stories.', action: 'View badges' },
    ],
    quests: ['Complete one 5-minute lesson.', 'Read one story card.', 'Say one Punjabi sentence.', 'Ask one family question.'],
  },
];

export function getLearningWorld(id: string) {
  return learningWorlds.find((world) => world.id === id);
}
