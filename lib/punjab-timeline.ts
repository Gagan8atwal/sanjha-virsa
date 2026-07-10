export type PunjabEra = {
  id: string;
  period: string;
  title: string;
  punjabi: string;
  summary: string;
  context: string;
  keyDevelopments: string[];
  places: string[];
};

export const punjabTimeline: PunjabEra[] = [
  {
    id: 'indus',
    period: 'c. 3300–1300 BCE',
    title: 'Indus Valley Civilisation',
    punjabi: 'ਸਿੰਧੂ ਘਾਟੀ ਸਭਿਆਚਾਰ',
    summary: 'One of the world’s earliest urban civilisations developed across the wider Punjab and Indus region.',
    context: 'Planned cities, long-distance trade, craft production, drainage systems, agriculture, and river-based settlement shaped life across the region. Harappa, in present-day Punjab, Pakistan, became one of its best-known archaeological sites.',
    keyDevelopments: ['Planned urban settlements', 'Agriculture and river systems', 'Craft and trade networks', 'Early writing system'],
    places: ['Harappa', 'Ravi River region', 'Upper Indus settlements'],
  },
  {
    id: 'ancient',
    period: 'c. 1500 BCE–1000 CE',
    title: 'Ancient Punjab',
    punjabi: 'ਪੁਰਾਤਨ ਪੰਜਾਬ',
    summary: 'Punjab became a crossroads of languages, kingdoms, trade routes, religions, and migrations.',
    context: 'The region was shaped by Vedic traditions, Persian and Greek encounters, Buddhist and Hindu learning, regional kingdoms, and major trade routes connecting South and Central Asia.',
    keyDevelopments: ['Growth of early languages and traditions', 'Trade through northwestern routes', 'Buddhist and Hindu learning centers', 'Changing kingdoms and empires'],
    places: ['Taxila', 'Multan', 'Salt Range', 'Five-river plains'],
  },
  {
    id: 'medieval',
    period: 'c. 1000–1469',
    title: 'Medieval Punjab',
    punjabi: 'ਮੱਧਕਾਲੀ ਪੰਜਾਬ',
    summary: 'New political powers, Sufi traditions, languages, cities, and farming communities reshaped Punjab.',
    context: 'Punjabi identity developed through village life, poetry, music, Islam, Hindu traditions, Sufi networks, trade, and regional courts. Punjabi and related dialects grew through oral culture and everyday use.',
    keyDevelopments: ['Expansion of Punjabi oral traditions', 'Growth of Sufi centers', 'Urban and agricultural change', 'Development of regional identities'],
    places: ['Lahore', 'Pakpattan', 'Multan', 'Jalandhar Doab'],
  },
  {
    id: 'gurus',
    period: '1469–1708',
    title: 'The Sikh Gurus',
    punjabi: 'ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨ ਦਾ ਯੁੱਗ',
    summary: 'The teachings and institutions of the Sikh Gurus transformed religious, social, literary, and political life in Punjab.',
    context: 'From Guru Nanak Dev Ji to Guru Gobind Singh Ji, Sikh teachings emphasized devotion, equality, honest work, sharing, courage, and resistance to injustice. Gurmukhi, sangat, pangat, scripture, sacred places, and the Khalsa shaped a lasting community.',
    keyDevelopments: ['Gurmukhi and Sikh scripture', 'Sangat, pangat, and seva', 'Creation of major Sikh centers', 'Establishment of the Khalsa'],
    places: ['Nankana Sahib', 'Kartarpur', 'Amritsar', 'Anandpur Sahib'],
  },
  {
    id: 'misls-empire',
    period: '1708–1849',
    title: 'Misls and the Sikh Empire',
    punjabi: 'ਮਿਸਲਾਂ ਅਤੇ ਸਿੱਖ ਰਾਜ',
    summary: 'Sikh confederacies rose across Punjab before Maharaja Ranjit Singh unified a powerful empire.',
    context: 'After a period of persecution and conflict, Sikh misls established regional power. Maharaja Ranjit Singh later built a multi-religious empire centered in Lahore, with a strong army, administration, diplomacy, and patronage of major religious sites.',
    keyDevelopments: ['Rise of the Sikh misls', 'Unification under Maharaja Ranjit Singh', 'Lahore as imperial capital', 'Religious and architectural patronage'],
    places: ['Lahore', 'Amritsar', 'Gujranwala', 'Multan'],
  },
  {
    id: 'colonial',
    period: '1849–1947',
    title: 'Colonial Punjab',
    punjabi: 'ਉਪਨਿਵੇਸ਼ਕ ਪੰਜਾਬ',
    summary: 'British rule transformed land, canals, cities, education, military recruitment, and political movements.',
    context: 'Punjab was annexed by the British in 1849. Canal colonies, railways, new legal systems, missionary schools, military recruitment, reform movements, and anti-colonial politics changed daily life and regional identity.',
    keyDevelopments: ['Canal colonies and agricultural change', 'Railway and city expansion', 'Religious and social reform movements', 'Anti-colonial resistance'],
    places: ['Lahore', 'Lyallpur', 'Amritsar', 'Rawalpindi'],
  },
  {
    id: 'partition',
    period: '1947',
    title: 'Partition of Punjab',
    punjabi: 'ਪੰਜਾਬ ਦੀ ਵੰਡ',
    summary: 'The division of British India split Punjab between India and Pakistan and caused mass displacement and violence.',
    context: 'Millions of Sikhs, Hindus, and Muslims crossed the new border. Families lost homes, land, neighbors, and records. Partition remains one of the defining memories of modern Punjabi identity on both sides of the border and across the diaspora.',
    keyDevelopments: ['Creation of East and West Punjab', 'Mass migration', 'Communal violence', 'Long-term family and cultural memory'],
    places: ['Wagah–Attari region', 'Lahore', 'Amritsar', 'Refugee routes across Punjab'],
  },
  {
    id: 'modern',
    period: '1947–Present',
    title: 'Modern Punjab and the Diaspora',
    punjabi: 'ਆਧੁਨਿਕ ਪੰਜਾਬ ਅਤੇ ਪਰਵਾਸ',
    summary: 'Punjab rebuilt after Partition while Punjabi communities expanded across the world.',
    context: 'Agricultural change, industrialization, linguistic politics, migration, music, cinema, religious institutions, education, and digital media reshaped Punjabi identity. Large communities now live across the United Kingdom, Canada, the United States, Europe, Australia, and the Gulf.',
    keyDevelopments: ['Post-Partition rebuilding', 'Green Revolution and industrial growth', 'Global Punjabi migration', 'Music, film, and digital culture'],
    places: ['Chandigarh', 'Ludhiana', 'Lahore', 'Global Punjabi communities'],
  },
];
