export type PunjabCity = {
  id: string;
  name: string;
  punjabi: string;
  region: 'East Punjab' | 'West Punjab';
  country: 'India' | 'Pakistan';
  landmark: string;
  overview: string;
  history: string;
  modernIdentity: string;
  knownFor: string[];
  timeline: { year: string; event: string }[];
};

export const punjabCities: PunjabCity[] = [
  {
    id: 'amritsar',
    name: 'Amritsar',
    punjabi: 'ਅੰਮ੍ਰਿਤਸਰ',
    region: 'East Punjab',
    country: 'India',
    landmark: 'Harmandir Sahib',
    overview: 'Amritsar is one of Punjab’s most important spiritual, historical, and cultural cities.',
    history: 'The city developed around the sacred pool and settlement associated with Guru Ram Das Ji and Guru Arjan Dev Ji. It later became a major center of Sikh life, trade, education, and political history.',
    modernIdentity: 'Today Amritsar is known for pilgrimage, food, textiles, tourism, cross-border memory, and a strong global Punjabi identity.',
    knownFor: ['Harmandir Sahib', 'Jallianwala Bagh', 'Punjabi food', 'Textiles and trade'],
    timeline: [
      { year: '1577', event: 'Ramdaspur developed around the sacred pool.' },
      { year: '1604', event: 'The Adi Granth was installed at Harmandir Sahib.' },
      { year: '1919', event: 'The Jallianwala Bagh massacre became a major event in anti-colonial history.' },
      { year: 'Today', event: 'A major spiritual, commercial, and cultural center.' },
    ],
  },
  {
    id: 'lahore',
    name: 'Lahore',
    punjabi: 'ਲਾਹੌਰ',
    region: 'West Punjab',
    country: 'Pakistan',
    landmark: 'Badshahi Mosque and Lahore Fort',
    overview: 'Lahore is one of the great historic cities of Punjab and a major center of literature, art, education, architecture, and politics.',
    history: 'The city grew through ancient, medieval, Mughal, Sikh, and British periods. It served as the capital of Maharaja Ranjit Singh’s Sikh Empire and remained central to Punjabi cultural life.',
    modernIdentity: 'Modern Lahore is known for universities, publishing, food streets, music, film, architecture, and Pakistan’s cultural industries.',
    knownFor: ['Lahore Fort', 'Badshahi Mosque', 'Anarkali', 'Punjabi literature and arts'],
    timeline: [
      { year: 'Ancient era', event: 'Lahore developed as a major settlement in the Punjab region.' },
      { year: '1799', event: 'Maharaja Ranjit Singh took Lahore and made it the center of the Sikh Empire.' },
      { year: '1947', event: 'Partition transformed the city’s population and regional role.' },
      { year: 'Today', event: 'A leading cultural and educational city of Pakistan.' },
    ],
  },
  {
    id: 'anandpur-sahib',
    name: 'Anandpur Sahib',
    punjabi: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ',
    region: 'East Punjab',
    country: 'India',
    landmark: 'Takht Sri Kesgarh Sahib',
    overview: 'Anandpur Sahib is a major Sikh historical city closely connected with Guru Tegh Bahadur Sahib Ji and Guru Gobind Singh Ji.',
    history: 'The settlement became a center of Sikh learning, community organization, defense, and spiritual life. The Khalsa was established here in 1699.',
    modernIdentity: 'The city remains a major pilgrimage center and is closely associated with Hola Mohalla and Sikh historical education.',
    knownFor: ['Takht Sri Kesgarh Sahib', 'Khalsa creation', 'Hola Mohalla', 'Sikh history'],
    timeline: [
      { year: '1665', event: 'The settlement associated with Anandpur Sahib was established.' },
      { year: '1699', event: 'Guru Gobind Singh Ji established the Khalsa.' },
      { year: 'Early 1700s', event: 'The city became central to major Sikh conflicts and community organization.' },
      { year: 'Today', event: 'A major Sikh pilgrimage and historical learning center.' },
    ],
  },
  {
    id: 'nankana-sahib',
    name: 'Nankana Sahib',
    punjabi: 'ਨਨਕਾਣਾ ਸਾਹਿਬ',
    region: 'West Punjab',
    country: 'Pakistan',
    landmark: 'Gurdwara Janam Asthan',
    overview: 'Nankana Sahib is revered as the birthplace of Guru Nanak Dev Ji.',
    history: 'The city is deeply connected with the early life of Guru Nanak Dev Ji and later became one of the most important Sikh pilgrimage centers in Punjab.',
    modernIdentity: 'It remains a major place of pilgrimage, memory, interfaith importance, and cross-border Punjabi heritage.',
    knownFor: ['Gurdwara Janam Asthan', 'Guru Nanak Dev Ji', 'Pilgrimage', 'Shared Punjabi heritage'],
    timeline: [
      { year: '1469', event: 'Guru Nanak Dev Ji was born at Rai Bhoi di Talwandi.' },
      { year: 'Later centuries', event: 'The settlement became known as Nankana Sahib.' },
      { year: '1921', event: 'The Nankana Sahib massacre became important in the Gurdwara Reform Movement.' },
      { year: 'Today', event: 'A major Sikh pilgrimage site in Pakistan.' },
    ],
  },
  {
    id: 'patiala',
    name: 'Patiala',
    punjabi: 'ਪਟਿਆਲਾ',
    region: 'East Punjab',
    country: 'India',
    landmark: 'Qila Mubarak',
    overview: 'Patiala is known for royal history, music, clothing, education, and distinctive cultural traditions.',
    history: 'The city developed as the center of the princely state of Patiala and became influential in politics, architecture, court culture, and music.',
    modernIdentity: 'Today it is known for education, sports institutions, Patiala gharana music, the Patiala shahi turban, and Patiala salwar.',
    knownFor: ['Qila Mubarak', 'Patiala gharana', 'Patiala shahi turban', 'Patiala salwar'],
    timeline: [
      { year: '1763', event: 'Patiala emerged as the center of a growing princely state.' },
      { year: '18th–19th centuries', event: 'Court culture, architecture, and music expanded.' },
      { year: '1948', event: 'Patiala became part of the Patiala and East Punjab States Union.' },
      { year: 'Today', event: 'A major educational and cultural city.' },
    ],
  },
  {
    id: 'multan',
    name: 'Multan',
    punjabi: 'ਮੁਲਤਾਨ',
    region: 'West Punjab',
    country: 'Pakistan',
    landmark: 'Historic shrines and blue pottery',
    overview: 'Multan is one of the oldest continuously inhabited cities in the Punjab region.',
    history: 'Its location made it important to trade, religion, political power, and cultural exchange. The city is especially associated with Sufi traditions and historic architecture.',
    modernIdentity: 'Modern Multan is known for shrines, mangoes, ceramics, textiles, heat, and southern Punjabi identity.',
    knownFor: ['Sufi shrines', 'Blue pottery', 'Mangoes', 'Saraiki and Punjabi culture'],
    timeline: [
      { year: 'Ancient era', event: 'Multan became an important settlement and trade center.' },
      { year: 'Medieval era', event: 'The city developed as a major center of Sufi learning.' },
      { year: 'British period', event: 'Rail and administrative networks expanded its regional role.' },
      { year: 'Today', event: 'A major city of southern Punjab in Pakistan.' },
    ],
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    punjabi: 'ਚੰਡੀਗੜ੍ਹ',
    region: 'East Punjab',
    country: 'India',
    landmark: 'Open Hand Monument',
    overview: 'Chandigarh is a planned modern city that serves as the shared capital of Punjab and Haryana.',
    history: 'The city was planned after Partition as a new administrative capital for Indian Punjab. Its architecture and urban design became internationally known.',
    modernIdentity: 'It is associated with government, education, healthcare, modernist architecture, parks, and planned urban life.',
    knownFor: ['Open Hand Monument', 'Capitol Complex', 'Rock Garden', 'Planned architecture'],
    timeline: [
      { year: '1947', event: 'Partition created the need for a new capital for Indian Punjab.' },
      { year: '1950s', event: 'The modern city was planned and constructed.' },
      { year: '1966', event: 'Chandigarh became a union territory and shared capital.' },
      { year: 'Today', event: 'A major administrative, educational, and healthcare center.' },
    ],
  },
  {
    id: 'ludhiana',
    name: 'Ludhiana',
    punjabi: 'ਲੁਧਿਆਣਾ',
    region: 'East Punjab',
    country: 'India',
    landmark: 'Clock Tower and industrial skyline',
    overview: 'Ludhiana is one of Punjab’s largest industrial and commercial cities.',
    history: 'The city grew through trade, agriculture-linked manufacturing, rail connections, and later major textile and engineering industries.',
    modernIdentity: 'It is known for bicycles, hosiery, machinery, business, education, and a large migrant workforce.',
    knownFor: ['Hosiery', 'Bicycle industry', 'Clock Tower', 'Business and manufacturing'],
    timeline: [
      { year: 'Medieval era', event: 'The settlement developed under the Lodi period.' },
      { year: '19th century', event: 'Trade and rail links expanded the city.' },
      { year: '20th century', event: 'Textile, bicycle, and engineering industries grew rapidly.' },
      { year: 'Today', event: 'A leading industrial city of Punjab.' },
    ],
  },
];
