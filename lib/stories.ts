export type StoryPage = {
  en: string;
  pa: string;
};

export type Story = {
  id: string;
  number: string;
  title: string;
  punjabi: string;
  category: string;
  age: string;
  emoji: string;
  theme: string;
  pages: StoryPage[];
  lesson: string;
  lessonPa: string;
  words: string[];
  familyQuestion: string;
};

export const stories: Story[] = [
  {
    id: 'five-rivers',
    number: '01',
    title: 'The Land of Five Rivers',
    punjabi: 'ਪੰਜ ਦਰਿਆਵਾਂ ਦੀ ਧਰਤੀ',
    category: 'Punjab History',
    age: 'Ages 6+',
    emoji: '🌊',
    theme: 'Punjab begins with rivers, fields, language, memory, and shared heritage.',
    pages: [
      {
        en: 'Long ago, before today’s borders, Punjab was known as the land of five rivers. Families lived near flowing water, green fields, village paths, and old trees where elders told stories in the evening.',
        pa: 'ਬਹੁਤ ਸਮਾਂ ਪਹਿਲਾਂ, ਅੱਜ ਦੀਆਂ ਸਰਹੱਦਾਂ ਤੋਂ ਪਹਿਲਾਂ, ਪੰਜਾਬ ਪੰਜ ਦਰਿਆਵਾਂ ਦੀ ਧਰਤੀ ਵਜੋਂ ਜਾਣਿਆ ਜਾਂਦਾ ਸੀ। ਪਰਿਵਾਰ ਵਗਦੇ ਪਾਣੀ, ਹਰੇ ਖੇਤਾਂ, ਪਿੰਡਾਂ ਦੇ ਰਾਹਾਂ ਅਤੇ ਪੁਰਾਣੇ ਰੁੱਖਾਂ ਕੋਲ ਰਹਿੰਦੇ ਸਨ ਜਿੱਥੇ ਵੱਡੇ ਸ਼ਾਮ ਨੂੰ ਕਹਾਣੀਆਂ ਸੁਣਾਉਂਦੇ ਸਨ।',
      },
      {
        en: 'The rivers helped farmers grow wheat, mustard, sugarcane, and cotton. Villages became places of work, prayer, music, food, courage, and hospitality.',
        pa: 'ਦਰਿਆਵਾਂ ਨੇ ਕਿਸਾਨਾਂ ਨੂੰ ਕਣਕ, ਸਰੋਂ, ਗੰਨਾ ਅਤੇ ਕਪਾਹ ਉਗਾਉਣ ਵਿੱਚ ਮਦਦ ਕੀਤੀ। ਪਿੰਡ ਮਿਹਨਤ, ਅਰਦਾਸ, ਸੰਗੀਤ, ਭੋਜਨ, ਹਿੰਮਤ ਅਤੇ ਮਹਿਮਾਨਨਵਾਜ਼ੀ ਦੇ ਘਰ ਬਣੇ।',
      },
      {
        en: 'Even when Punjabis moved far away to Canada, America, England, Australia, and other countries, they carried Punjab with them through language, food, faith, songs, and family stories.',
        pa: 'ਜਦੋਂ ਪੰਜਾਬੀ ਕੈਨੇਡਾ, ਅਮਰੀਕਾ, ਇੰਗਲੈਂਡ, ਆਸਟ੍ਰੇਲੀਆ ਅਤੇ ਹੋਰ ਦੇਸ਼ਾਂ ਵਿੱਚ ਗਏ, ਉਹ ਆਪਣੀ ਬੋਲੀ, ਭੋਜਨ, ਧਰਮ, ਗੀਤਾਂ ਅਤੇ ਪਰਿਵਾਰਕ ਕਹਾਣੀਆਂ ਰਾਹੀਂ ਪੰਜਾਬ ਨੂੰ ਆਪਣੇ ਨਾਲ ਲੈ ਗਏ।',
      },
    ],
    lesson: 'Punjab is not only a place on a map. It is a living heritage carried by families.',
    lessonPa: 'ਪੰਜਾਬ ਸਿਰਫ਼ ਨਕਸ਼ੇ ਉੱਤੇ ਇੱਕ ਥਾਂ ਨਹੀਂ। ਇਹ ਪਰਿਵਾਰਾਂ ਵੱਲੋਂ ਸੰਭਾਲਿਆ ਗਿਆ ਜੀਊਂਦਾ ਵਿਰਸਾ ਹੈ।',
    words: ['Punjab — ਪੰਜਾਬ', 'Darya — ਦਰਿਆ', 'Pind — ਪਿੰਡ', 'Khet — ਖੇਤ', 'Virsa — ਵਿਰਸਾ'],
    familyQuestion: 'Ask an elder: which city, village, or region of Punjab is connected to our family?',
  },
  {
    id: 'first-letters',
    number: '02',
    title: 'The First Letters',
    punjabi: 'ਪਹਿਲੇ ਅੱਖਰ',
    category: 'Language',
    age: 'Ages 5+',
    emoji: 'ਅ',
    theme: 'A child discovers that letters are doors into family, prayer, poetry, and memory.',
    pages: [
      {
        en: 'A child opened an old book from Dadi Ji’s shelf. On the first page was a beautiful letter: ੳ. The child asked, “What is this?”',
        pa: 'ਇੱਕ ਬੱਚੇ ਨੇ ਦਾਦੀ ਜੀ ਦੀ ਅਲਮਾਰੀ ਵਿਚੋਂ ਇੱਕ ਪੁਰਾਣੀ ਕਿਤਾਬ ਖੋਲੀ। ਪਹਿਲੇ ਸਫ਼ੇ ਉੱਤੇ ਇੱਕ ਸੁੰਦਰ ਅੱਖਰ ਸੀ: ੳ। ਬੱਚੇ ਨੇ ਪੁੱਛਿਆ, “ਇਹ ਕੀ ਹੈ?”',
      },
      {
        en: 'Dadi Ji smiled and said, “This is an akhar. Every letter is a small door. When you learn these doors, your ancestors can speak to you through words.”',
        pa: 'ਦਾਦੀ ਜੀ ਮੁਸਕੁਰਾਏ ਅਤੇ ਕਿਹਾ, “ਇਹ ਅੱਖਰ ਹੈ। ਹਰ ਅੱਖਰ ਇੱਕ ਛੋਟਾ ਦਰਵਾਜ਼ਾ ਹੈ। ਜਦੋਂ ਤੂੰ ਇਹ ਦਰਵਾਜ਼ੇ ਸਿੱਖੇਂਗਾ, ਤੇਰੇ ਵੱਡੇ ਬੋਲਾਂ ਰਾਹੀਂ ਤੇਰੇ ਨਾਲ ਗੱਲ ਕਰ ਸਕਣਗੇ।”',
      },
      {
        en: 'The child traced ੳ, ਅ, ੲ, ਸ, ਹ, and ਕ. Slowly the letters became sounds. The sounds became words. The words became stories.',
        pa: 'ਬੱਚੇ ਨੇ ੳ, ਅ, ੲ, ਸ, ਹ ਅਤੇ ਕ ਨੂੰ ਹੌਲੀ-ਹੌਲੀ ਲਿਖਿਆ। ਅੱਖਰ ਆਵਾਜ਼ਾਂ ਬਣੇ। ਆਵਾਜ਼ਾਂ ਸ਼ਬਦ ਬਣੇ। ਸ਼ਬਦ ਕਹਾਣੀਆਂ ਬਣ ਗਏ।',
      },
    ],
    lesson: 'Language connects children to grandparents, history, Gurbani, poetry, and identity.',
    lessonPa: 'ਬੋਲੀ ਬੱਚਿਆਂ ਨੂੰ ਵੱਡਿਆਂ, ਇਤਿਹਾਸ, ਗੁਰਬਾਣੀ, ਕਵਿਤਾ ਅਤੇ ਪਛਾਣ ਨਾਲ ਜੋੜਦੀ ਹੈ।',
    words: ['Akhar — ਅੱਖਰ', 'Boli — ਬੋਲੀ', 'Gurmukhi — ਗੁਰਮੁਖੀ', 'Shabad — ਸ਼ਬਦ', 'Kahani — ਕਹਾਣੀ'],
    familyQuestion: 'Ask an elder to teach you one Punjabi word they used as a child.',
  },
  {
    id: 'langar-lesson',
    number: '03',
    title: 'The Langar Lesson',
    punjabi: 'ਲੰਗਰ ਦੀ ਸਿੱਖਿਆ',
    category: 'Sikh Values',
    age: 'Ages 6+',
    emoji: '🍲',
    theme: 'A child learns seva, equality, humility, and sharing.',
    pages: [
      {
        en: 'One morning, a child went to the gurdwara with the family. Inside, people bowed, listened, and sat together peacefully.',
        pa: 'ਇੱਕ ਸਵੇਰ ਬੱਚਾ ਆਪਣੇ ਪਰਿਵਾਰ ਨਾਲ ਗੁਰਦੁਆਰੇ ਗਿਆ। ਅੰਦਰ ਲੋਕ ਮੱਥਾ ਟੇਕ ਰਹੇ ਸਨ, ਸੁਣ ਰਹੇ ਸਨ ਅਤੇ ਸ਼ਾਂਤੀ ਨਾਲ ਇਕੱਠੇ ਬੈਠੇ ਸਨ।',
      },
      {
        en: 'In the langar hall, everyone sat on the floor in one line. No one asked who was rich or poor. No one asked who was important. Everyone was served with respect.',
        pa: 'ਲੰਗਰ ਹਾਲ ਵਿੱਚ ਸਾਰੇ ਇਕ ਲਾਈਨ ਵਿੱਚ ਫਰਸ਼ ਉੱਤੇ ਬੈਠੇ। ਕਿਸੇ ਨੇ ਨਹੀਂ ਪੁੱਛਿਆ ਕੌਣ ਅਮੀਰ ਹੈ ਜਾਂ ਗਰੀਬ। ਕਿਸੇ ਨੇ ਨਹੀਂ ਪੁੱਛਿਆ ਕੌਣ ਵੱਡਾ ਹੈ। ਹਰ ਕਿਸੇ ਨੂੰ ਸਤਿਕਾਰ ਨਾਲ ਲੰਗਰ ਮਿਲਿਆ।',
      },
      {
        en: 'The child helped carry water cups. Dada Ji said, “This is seva. When hands serve with love, the heart becomes bigger.”',
        pa: 'ਬੱਚੇ ਨੇ ਪਾਣੀ ਦੇ ਗਲਾਸ ਵੰਡਣ ਵਿੱਚ ਮਦਦ ਕੀਤੀ। ਦਾਦਾ ਜੀ ਨੇ ਕਿਹਾ, “ਇਹ ਸੇਵਾ ਹੈ। ਜਦੋਂ ਹੱਥ ਪਿਆਰ ਨਾਲ ਸੇਵਾ ਕਰਦੇ ਹਨ, ਦਿਲ ਵੱਡਾ ਹੋ ਜਾਂਦਾ ਹੈ।”',
      },
    ],
    lesson: 'Langar teaches equality, humility, sharing, and service without pride.',
    lessonPa: 'ਲੰਗਰ ਸਾਨੂੰ ਬਰਾਬਰੀ, ਨਿਮਰਤਾ, ਸਾਂਝ ਅਤੇ ਬਿਨਾਂ ਅਹੰਕਾਰ ਸੇਵਾ ਕਰਨੀ ਸਿਖਾਉਂਦਾ ਹੈ।',
    words: ['Langar — ਲੰਗਰ', 'Seva — ਸੇਵਾ', 'Sangat — ਸੰਗਤ', 'Pangat — ਪੰਗਤ', 'Satkar — ਸਤਿਕਾਰ'],
    familyQuestion: 'Ask your family: what is one way we can do seva this week?',
  },
  {
    id: 'brave-sparrow',
    number: '04',
    title: 'The Brave Village Sparrow',
    punjabi: 'ਹਿੰਮਤੀ ਪਿੰਡ ਵਾਲੀ ਚਿੜੀ',
    category: 'Folk-style Story',
    age: 'Ages 5+',
    emoji: '🐦',
    theme: 'A folk-style story about courage, responsibility, and community.',
    pages: [
      {
        en: 'In a small Punjabi village, a tiny sparrow lived near the wheat fields. She was small, but she noticed everything: the wind, the clouds, the wells, and the worried faces of people.',
        pa: 'ਇੱਕ ਛੋਟੇ ਪੰਜਾਬੀ ਪਿੰਡ ਵਿੱਚ, ਕਣਕ ਦੇ ਖੇਤਾਂ ਕੋਲ ਇੱਕ ਨਿੱਕੀ ਚਿੜੀ ਰਹਿੰਦੀ ਸੀ। ਉਹ ਛੋਟੀ ਸੀ, ਪਰ ਉਹ ਹਰ ਚੀਜ਼ ਵੇਖਦੀ ਸੀ: ਹਵਾ, ਬੱਦਲ, ਖੂਹ ਅਤੇ ਲੋਕਾਂ ਦੇ ਚਿੰਤਤ ਚਿਹਰੇ।',
      },
      {
        en: 'One summer, the old water path became blocked. The animals were thirsty and the fields became dry. The sparrow flew from roof to roof, chirping until the villagers came outside.',
        pa: 'ਇੱਕ ਗਰਮੀ ਵਿੱਚ ਪਾਣੀ ਦਾ ਪੁਰਾਣਾ ਰਾਹ ਬੰਦ ਹੋ ਗਿਆ। ਪਸ਼ੂ ਪਿਆਸੇ ਸਨ ਅਤੇ ਖੇਤ ਸੁੱਕ ਰਹੇ ਸਨ। ਚਿੜੀ ਛੱਤ ਤੋਂ ਛੱਤ ਉੱਡੀ ਅਤੇ ਚਹਿਕਦੀ ਰਹੀ ਜਦ ਤੱਕ ਪਿੰਡ ਵਾਲੇ ਬਾਹਰ ਨਾ ਆ ਗਏ।',
      },
      {
        en: 'The villagers cleaned the path together. Slowly water returned. The child watching from the doorway learned: even a small voice matters when it speaks for everyone.',
        pa: 'ਪਿੰਡ ਵਾਲਿਆਂ ਨੇ ਇਕੱਠੇ ਹੋ ਕੇ ਰਾਹ ਸਾਫ਼ ਕੀਤਾ। ਹੌਲੀ-ਹੌਲੀ ਪਾਣੀ ਮੁੜ ਆ ਗਿਆ। ਦਰਵਾਜ਼ੇ ਕੋਲ ਖੜ੍ਹੇ ਬੱਚੇ ਨੇ ਸਿੱਖਿਆ: ਜਦੋਂ ਕੋਈ ਆਵਾਜ਼ ਸਭ ਲਈ ਬੋਲਦੀ ਹੈ, ਉਹ ਛੋਟੀ ਨਹੀਂ ਰਹਿੰਦੀ।',
      },
    ],
    lesson: 'Courage is not about being big. Courage is noticing a problem and taking action.',
    lessonPa: 'ਹਿੰਮਤ ਵੱਡਾ ਹੋਣ ਵਿੱਚ ਨਹੀਂ। ਹਿੰਮਤ ਸਮੱਸਿਆ ਨੂੰ ਵੇਖ ਕੇ ਕਦਮ ਚੁੱਕਣ ਵਿੱਚ ਹੈ।',
    words: ['Chiri — ਚਿੜੀ', 'Himmat — ਹਿੰਮਤ', 'Paani — ਪਾਣੀ', 'Pind — ਪਿੰਡ', 'Ikatthe — ਇਕੱਠੇ'],
    familyQuestion: 'Ask your family: when did someone small do something brave?',
  },
];

export function getStory(id: string) {
  return stories.find((story) => story.id === id);
}
