export type GuruProfile = {
  id: string;
  number: number;
  name: string;
  punjabi: string;
  subtitle: string;
  overview: string;
  earlyLife: string;
  contributions: string[];
  teachings: string[];
  places: string[];
  people: string[];
  childStory: string;
  reflection: string;
  words: string[];
};

export const gurus: GuruProfile[] = [
  {
    id: 'guru-nanak-dev-ji', number: 1, name: 'Guru Nanak Dev Ji', punjabi: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ', subtitle: 'Truth, equality, humility, and remembrance',
    overview: 'Guru Nanak Dev Ji is the first Sikh Guru. His message emphasized remembrance of the Creator, honest work, sharing, humility, and equality across social divisions.',
    earlyLife: 'Stories of Guru Nanak Dev Ji’s early life often describe a thoughtful child who questioned unfair customs and looked for the deeper meaning behind religious practice.',
    contributions: ['Taught Ik Onkar and the unity of the Creator', 'Emphasized honest work, sharing, and remembrance', 'Travelled widely and engaged people of different backgrounds', 'Built a community centered on sangat, humility, and truthful living'],
    teachings: ['Naam Japna — remember the Creator', 'Kirat Karni — earn honestly', 'Vand Chhakna — share with others', 'Reject pride, discrimination, and empty ritual'],
    places: ['Nankana Sahib', 'Sultanpur Lodhi', 'Kartarpur Sahib'], people: ['Bhai Mardana Ji', 'Mata Tripta Ji', 'Mehta Kalu Ji'],
    childStory: 'A child asked why some people were treated as less important. Guru Nanak’s message teaches that every person carries dignity and should be treated with respect.',
    reflection: 'What is one truthful and kind action you can take today?', words: ['Sach — ਸੱਚ', 'Kirat — ਕਿਰਤ', 'Vand — ਵੰਡ', 'Sangat — ਸੰਗਤ'],
  },
  {
    id: 'guru-angad-dev-ji', number: 2, name: 'Guru Angad Dev Ji', punjabi: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ', subtitle: 'Learning, discipline, and Gurmukhi',
    overview: 'Guru Angad Dev Ji strengthened the Sikh community and helped spread Gurmukhi literacy, making learning more accessible.',
    earlyLife: 'Before becoming Guru, he was known for devotion, humility, and service. His life shows the importance of becoming a learner before becoming a guide.',
    contributions: ['Promoted Gurmukhi literacy', 'Supported education and physical discipline', 'Preserved and shared Guru Nanak’s teachings', 'Strengthened organized community life'],
    teachings: ['Stay humble while learning', 'Build a strong body and disciplined mind', 'Make knowledge accessible', 'Serve before seeking status'],
    places: ['Khadur Sahib'], people: ['Mata Khivi Ji', 'Guru Nanak Dev Ji'],
    childStory: 'Guru Angad Dev Ji teaches that letters are not just symbols. They are doors that help children read history, Gurbani, poetry, and family memory.',
    reflection: 'Which Punjabi letter will you learn today?', words: ['Akhar — ਅੱਖਰ', 'Gurmukhi — ਗੁਰਮੁਖੀ', 'Sikhiya — ਸਿੱਖਿਆ'],
  },
  {
    id: 'guru-amar-das-ji', number: 3, name: 'Guru Amar Das Ji', punjabi: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ', subtitle: 'Seva, langar, equality, and reform',
    overview: 'Guru Amar Das Ji expanded the institutions of sangat, langar, seva, and equality.',
    earlyLife: 'His path shows that spiritual leadership can begin later in life and grow through consistent service and humility.',
    contributions: ['Strengthened langar and pangat', 'Organized community centers', 'Supported social reform and dignity', 'Emphasized equality before meeting the Guru'],
    teachings: ['No one is above service', 'Sit and eat together as equals', 'Respect women and reject harmful customs', 'Humility is a form of strength'],
    places: ['Goindwal Sahib'], people: ['Bibi Bhani Ji', 'Mata Mansa Devi Ji'],
    childStory: 'In pangat, everyone sits at the same level. The lesson is simple: no chair, wealth, title, or background makes one person more human than another.',
    reflection: 'How can you serve without expecting praise?', words: ['Seva — ਸੇਵਾ', 'Pangat — ਪੰਗਤ', 'Barabari — ਬਰਾਬਰੀ'],
  },
  {
    id: 'guru-ram-das-ji', number: 4, name: 'Guru Ram Das Ji', punjabi: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ', subtitle: 'Humility, devotion, and community building',
    overview: 'Guru Ram Das Ji is closely associated with the growth of Amritsar and a tradition of humility, devotion, and community.',
    earlyLife: 'His life is remembered as an example of humility, service, and steady responsibility.',
    contributions: ['Helped establish Ramdaspur, later Amritsar', 'Strengthened community organization', 'Composed devotional bani', 'Modeled humility in leadership'],
    teachings: ['Build communities where people feel welcome', 'Serve quietly and consistently', 'Let devotion shape daily conduct', 'Leadership requires humility'],
    places: ['Amritsar', 'Goindwal Sahib'], people: ['Bibi Bhani Ji', 'Guru Amar Das Ji'],
    childStory: 'A city can be more than roads and buildings. It can become a place of prayer, service, trade, family, and shared belonging.',
    reflection: 'What makes a community feel welcoming?', words: ['Nimrata — ਨਿਮਰਤਾ', 'Sangat — ਸੰਗਤ', 'Amritsar — ਅੰਮ੍ਰਿਤਸਰ'],
  },
  {
    id: 'guru-arjan-dev-ji', number: 5, name: 'Guru Arjan Dev Ji', punjabi: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ', subtitle: 'Bani, Harmandir Sahib, and shaheedi',
    overview: 'Guru Arjan Dev Ji is remembered for compiling the Adi Granth, developing Sikh institutions, and accepting shaheedi.',
    earlyLife: 'He grew within a community shaped by devotion, service, learning, and responsibility.',
    contributions: ['Compiled the Adi Granth', 'Oversaw development of Harmandir Sahib', 'Expanded community centers and service', 'Became the first Sikh Guru remembered for shaheedi'],
    teachings: ['Remain steady in difficulty', 'Center community life on wisdom and humility', 'Preserve spiritual teachings carefully', 'Courage can be calm and patient'],
    places: ['Amritsar', 'Tarn Taran'], people: ['Baba Buddha Ji', 'Bhai Gurdas Ji'],
    childStory: 'Guru Arjan Dev Ji’s life teaches that courage is not always loud. Sometimes courage is remaining truthful and composed when facing hardship.',
    reflection: 'How can patience become courage?', words: ['Bani — ਬਾਣੀ', 'Shaheedi — ਸ਼ਹੀਦੀ', 'Dheeraj — ਧੀਰਜ'],
  },
  {
    id: 'guru-hargobind-sahib-ji', number: 6, name: 'Guru Hargobind Sahib Ji', punjabi: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ', subtitle: 'Miri-Piri, courage, and protection',
    overview: 'Guru Hargobind Sahib Ji emphasized spiritual authority together with social responsibility and protection of the vulnerable.',
    earlyLife: 'He inherited leadership in a period of growing pressure and shaped a community prepared to combine devotion with responsibility.',
    contributions: ['Expressed the principle of Miri-Piri', 'Developed the Akal Takht tradition', 'Encouraged physical readiness and courage', 'Strengthened responsibility to defend justice'],
    teachings: ['Be spiritual and socially responsible', 'Protect others from injustice', 'Discipline strength through ethics', 'Do not confuse peace with passivity'],
    places: ['Akal Takht', 'Kiratpur Sahib'], people: ['Baba Buddha Ji', 'Bhai Bidhi Chand Ji'],
    childStory: 'Kindness and courage belong together. A good person should be gentle, but not silent when someone is being harmed.',
    reflection: 'When should kindness become action?', words: ['Miri-Piri — ਮੀਰੀ-ਪੀਰੀ', 'Himmat — ਹਿੰਮਤ', 'Insaf — ਇਨਸਾਫ਼'],
  },
  {
    id: 'guru-har-rai-sahib-ji', number: 7, name: 'Guru Har Rai Sahib Ji', punjabi: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਸਾਹਿਬ ਜੀ', subtitle: 'Compassion, care, and nature',
    overview: 'Guru Har Rai Sahib Ji is remembered for compassion, care, healing, and protection of life.',
    earlyLife: 'His life is often associated with gentleness, responsibility, and a deep respect for living things.',
    contributions: ['Supported healing and care', 'Maintained community readiness', 'Encouraged compassion toward people and nature', 'Strengthened Sikh institutions'],
    teachings: ['Strength can be gentle', 'Care for health and life', 'Respect nature', 'Compassion requires action'],
    places: ['Kiratpur Sahib'], people: ['Guru Hargobind Sahib Ji'],
    childStory: 'A child who protects a plant, helps an animal, or comforts a sick person is practicing real compassion.',
    reflection: 'What living thing can you care for today?', words: ['Daya — ਦਇਆ', 'Kudrat — ਕੁਦਰਤ', 'Sehat — ਸਿਹਤ'],
  },
  {
    id: 'guru-har-krishan-sahib-ji', number: 8, name: 'Guru Har Krishan Sahib Ji', punjabi: 'ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਸਾਹਿਬ ਜੀ', subtitle: 'Service, humility, and courage at a young age',
    overview: 'Guru Har Krishan Sahib Ji is remembered for serving people during suffering and illness despite his young age.',
    earlyLife: 'He became Guru while still very young, showing that wisdom, humility, and service are not limited by age.',
    contributions: ['Served people during illness', 'Modeled humility despite leadership', 'Inspired trust through compassion', 'Demonstrated that children can serve meaningfully'],
    teachings: ['Age does not limit goodness', 'Help people in pain', 'Stay humble', 'Compassion matters more than status'],
    places: ['Delhi', 'Bangla Sahib'], people: ['Guru Har Rai Sahib Ji'],
    childStory: 'A young person may not have power or money, but can still offer water, comfort, attention, and help.',
    reflection: 'What can a child do to help someone today?', words: ['Madad — ਮਦਦ', 'Dukh — ਦੁੱਖ', 'Seva — ਸੇਵਾ'],
  },
  {
    id: 'guru-tegh-bahadur-sahib-ji', number: 9, name: 'Guru Tegh Bahadur Sahib Ji', punjabi: 'ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਸਾਹਿਬ ਜੀ', subtitle: 'Freedom of conscience and sacrifice',
    overview: 'Guru Tegh Bahadur Sahib Ji is remembered for defending freedom of belief and accepting supreme sacrifice.',
    earlyLife: 'His life combined meditation, courage, travel, guidance, and a deep commitment to human dignity.',
    contributions: ['Defended freedom of conscience', 'Travelled and strengthened Sikh communities', 'Taught fearlessness and detachment', 'Accepted shaheedi in defense of others'],
    teachings: ['Protect freedom even for those different from you', 'Do not live under fear', 'Stand for dignity', 'Spiritual courage serves humanity'],
    places: ['Anandpur Sahib', 'Delhi', 'Baba Bakala'], people: ['Bhai Mati Das Ji', 'Bhai Sati Das Ji', 'Bhai Dayala Ji'],
    childStory: 'The deepest courage is not only protecting your own rights. It is protecting someone else’s right to live by their conscience.',
    reflection: 'How can you stand up for someone different from you?', words: ['Azadi — ਆਜ਼ਾਦੀ', 'Dharam — ਧਰਮ', 'Balidan — ਬਲਿਦਾਨ'],
  },
  {
    id: 'guru-gobind-singh-ji', number: 10, name: 'Guru Gobind Singh Ji', punjabi: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ', subtitle: 'Khalsa, discipline, courage, and sovereignty',
    overview: 'Guru Gobind Singh Ji shaped the Khalsa tradition and emphasized disciplined identity, courage, equality, responsibility, and spiritual sovereignty.',
    earlyLife: 'He grew in a period of conflict and responsibility and became a poet, leader, teacher, organizer, and defender of freedom.',
    contributions: ['Established the Khalsa tradition', 'Emphasized equality and disciplined identity', 'Led the community through conflict and sacrifice', 'Affirmed Guru Granth Sahib Ji as the eternal Guru'],
    teachings: ['Live with discipline', 'Stand against injustice', 'Treat all people with dignity', 'Join courage with compassion and wisdom'],
    places: ['Patna Sahib', 'Anandpur Sahib', 'Takht Sri Hazur Sahib'], people: ['Mata Sahib Kaur Ji', 'Mata Gujri Ji', 'Panj Pyare', 'Sahibzade'],
    childStory: 'A strong identity is not a costume. It is a promise to live with courage, fairness, discipline, and service.',
    reflection: 'Which daily habit can make you more disciplined?', words: ['Khalsa — ਖਾਲਸਾ', 'Rehat — ਰਹਿਤ', 'Chardi Kala — ਚੜ੍ਹਦੀ ਕਲਾ'],
  },
];

export const historySections = [
  { title: 'Ten Gurus', punjabi: 'ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨ', href: '#gurus', icon: '੧੦', description: 'Dedicated pages for each Guru with teachings, places, people, stories, and reflection.' },
  { title: 'Guru Granth Sahib Ji', punjabi: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ', href: '#future-sections', icon: '📖', description: 'Structure, respect, role as eternal Guru, and simple Gurbani understanding.' },
  { title: 'Khalsa & Panj Pyare', punjabi: 'ਖਾਲਸਾ ਤੇ ਪੰਜ ਪਿਆਰੇ', href: '#future-sections', icon: '⚔️', description: '1699, discipline, equality, responsibility, and the Panj Pyare.' },
  { title: 'Sahibzade', punjabi: 'ਸਾਹਿਬਜ਼ਾਦੇ', href: '#future-sections', icon: '🛡️', description: 'Age-appropriate stories of courage, faith, and sacrifice.' },
  { title: 'Shaheedi', punjabi: 'ਸ਼ਹੀਦੀ', href: '#future-sections', icon: '🕯️', description: 'Respectful explanations of sacrifice and standing for truth.' },
  { title: 'Sikh Women', punjabi: 'ਸਿੱਖ ਬੀਬੀਆਂ', href: '#future-sections', icon: '🌺', description: 'Mata Khivi Ji, Mata Gujri Ji, Mai Bhago Ji, and other major figures.' },
  { title: 'Sikh Misls & Empire', punjabi: 'ਮਿਸਲਾਂ ਤੇ ਸਿੱਖ ਰਾਜ', href: '#future-sections', icon: '🏰', description: 'Misls, Maharaja Ranjit Singh, institutions, cities, and governance.' },
  { title: 'Takhts & Gurdwaras', punjabi: 'ਤਖ਼ਤ ਤੇ ਗੁਰਦੁਆਰੇ', href: '#future-sections', icon: '🏛️', description: 'Major Sikh places, their history, location, and meaning.' },
];

export function getGuru(id: string) {
  return gurus.find((guru) => guru.id === id);
}
