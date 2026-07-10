'use client';

import { useMemo, useState } from 'react';

type TimelineItem = {
  id: string;
  title: string;
  punjabi: string;
  subtitle: string;
  type: 'guru' | 'event' | 'value';
  emoji: string;
  summary: string;
  lesson: string;
  kids: string;
  words: string[];
};

const items: TimelineItem[] = [
  { id: 'guru-nanak', title: 'Guru Nanak Dev Ji', punjabi: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ', subtitle: 'Truth, equality, humility', type: 'guru', emoji: '੧', summary: 'The first Sikh Guru taught remembrance of the Creator, honest work, sharing, equality, and compassion.', lesson: 'A spiritual life should be lived through truth, humility, work, and care for others.', kids: 'Speak truth, share what you have, and treat every person with respect.', words: ['Sach — ਸੱਚ', 'Kirat — ਕਿਰਤ', 'Vand — ਵੰਡ'] },
  { id: 'guru-angad', title: 'Guru Angad Dev Ji', punjabi: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ', subtitle: 'Learning and discipline', type: 'guru', emoji: '੨', summary: 'The second Guru strengthened the use of Gurmukhi and supported learning, physical discipline, and community.', lesson: 'Language and education help knowledge travel from one generation to the next.', kids: 'Learning Punjabi is one way to stay connected with family and heritage.', words: ['Akhar — ਅੱਖਰ', 'Gurmukhi — ਗੁਰਮੁਖੀ', 'Sikhiya — ਸਿੱਖਿਆ'] },
  { id: 'guru-amar-das', title: 'Guru Amar Das Ji', punjabi: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ', subtitle: 'Seva and equality', type: 'guru', emoji: '੩', summary: 'The third Guru strengthened langar, seva, equality, and community organization.', lesson: 'No one is too important to sit with others or serve others.', kids: 'Help without showing off. Sit, eat, and learn with everyone.', words: ['Seva — ਸੇਵਾ', 'Pangat — ਪੰਗਤ', 'Barabari — ਬਰਾਬਰੀ'] },
  { id: 'guru-ram-das', title: 'Guru Ram Das Ji', punjabi: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ', subtitle: 'Humility and community', type: 'guru', emoji: '੪', summary: 'The fourth Guru is closely associated with the development of Amritsar and a tradition of humility and devotion.', lesson: 'A strong community grows through humility, service, and shared purpose.', kids: 'Build places where people feel welcome and safe.', words: ['Nimrata — ਨਿਮਰਤਾ', 'Sangat — ਸੰਗਤ', 'Amritsar — ਅੰਮ੍ਰਿਤਸਰ'] },
  { id: 'guru-arjan', title: 'Guru Arjan Dev Ji', punjabi: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ', subtitle: 'Scripture and sacrifice', type: 'guru', emoji: '੫', summary: 'The fifth Guru compiled the Adi Granth and is remembered for spiritual leadership and shaheedi.', lesson: 'Truth and faith may demand courage, patience, and sacrifice.', kids: 'Stay calm and truthful even when something is difficult.', words: ['Bani — ਬਾਣੀ', 'Shaheedi — ਸ਼ਹੀਦੀ', 'Dheeraj — ਧੀਰਜ'] },
  { id: 'guru-hargobind', title: 'Guru Hargobind Sahib Ji', punjabi: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ', subtitle: 'Miri-Piri and responsibility', type: 'guru', emoji: '੬', summary: 'The sixth Guru emphasized spiritual depth together with responsibility, courage, and protection of others.', lesson: 'Good people should be peaceful, but also ready to protect justice.', kids: 'Be kind, but do not ignore unfairness.', words: ['Miri-Piri — ਮੀਰੀ-ਪੀਰੀ', 'Himmat — ਹਿੰਮਤ', 'Insaf — ਇਨਸਾਫ਼'] },
  { id: 'guru-har-rai', title: 'Guru Har Rai Sahib Ji', punjabi: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਸਾਹਿਬ ਜੀ', subtitle: 'Compassion and care', type: 'guru', emoji: '੭', summary: 'The seventh Guru is remembered for compassion, care, and service to people and nature.', lesson: 'Strength includes gentleness and care for life.', kids: 'Protect plants, animals, and people who need help.', words: ['Daya — ਦਇਆ', 'Kudrat — ਕੁਦਰਤ', 'Sehat — ਸਿਹਤ'] },
  { id: 'guru-har-krishan', title: 'Guru Har Krishan Sahib Ji', punjabi: 'ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਸਾਹਿਬ ਜੀ', subtitle: 'Service in suffering', type: 'guru', emoji: '੮', summary: 'The eighth Guru is remembered for serving people during illness and suffering despite his young age.', lesson: 'Age does not decide how much good a person can do.', kids: 'Even a child can help, comfort, and serve others.', words: ['Sewa — ਸੇਵਾ', 'Madad — ਮਦਦ', 'Dukh — ਦੁੱਖ'] },
  { id: 'guru-tegh-bahadur', title: 'Guru Tegh Bahadur Sahib Ji', punjabi: 'ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਸਾਹਿਬ ਜੀ', subtitle: 'Freedom of belief', type: 'guru', emoji: '੯', summary: 'The ninth Guru is remembered for defending freedom of conscience and accepting supreme sacrifice.', lesson: 'Protecting another person’s freedom is a deep form of courage.', kids: 'Stand up for people who are treated unfairly, even if they are different from you.', words: ['Azadi — ਆਜ਼ਾਦੀ', 'Dharam — ਧਰਮ', 'Balidan — ਬਲਿਦਾਨ'] },
  { id: 'guru-gobind-singh', title: 'Guru Gobind Singh Ji', punjabi: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ', subtitle: 'Khalsa, courage, discipline', type: 'guru', emoji: '੧੦', summary: 'The tenth Guru shaped the Khalsa tradition and emphasized courage, discipline, equality, responsibility, and spiritual strength.', lesson: 'Identity should be joined with discipline, courage, and service.', kids: 'Be brave, honest, disciplined, and ready to help others.', words: ['Khalsa — ਖਾਲਸਾ', 'Rehat — ਰਹਿਤ', 'Chardi Kala — ਚੜ੍ਹਦੀ ਕਲਾ'] },
  { id: 'khalsa-1699', title: 'Creation of the Khalsa', punjabi: 'ਖਾਲਸੇ ਦੀ ਸਾਜਨਾ', subtitle: '1699 · Anandpur Sahib', type: 'event', emoji: '⚔️', summary: 'The Khalsa was established as a disciplined community committed to courage, equality, faith, and responsibility.', lesson: 'Belonging to a community also means accepting duties and discipline.', kids: 'A strong identity is shown by how you live, not only by what you wear.', words: ['Khalsa — ਖਾਲਸਾ', 'Panj Pyare — ਪੰਜ ਪਿਆਰੇ', 'Rehat — ਰਹਿਤ'] },
  { id: 'guru-granth', title: 'Guru Granth Sahib Ji', punjabi: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ', subtitle: 'Living Guru of the Sikhs', type: 'event', emoji: '📖', summary: 'Sikhs recognize Guru Granth Sahib Ji as the eternal Guru and approach it with deep respect.', lesson: 'Wisdom should guide daily conduct, not remain only in a book.', kids: 'Listen carefully, ask questions respectfully, and try to live good values.', words: ['Gurbani — ਗੁਰਬਾਣੀ', 'Satkar — ਸਤਿਕਾਰ', 'Guru — ਗੁਰੂ'] },
];

const filters = ['All', 'Gurus', 'Events'];

export default function SikhHistoryTimeline() {
  const [selectedId, setSelectedId] = useState(items[0].id);
  const [filter, setFilter] = useState('All');
  const selected = items.find((item) => item.id === selectedId) || items[0];
  const visible = useMemo(() => items.filter((item) => filter === 'All' || (filter === 'Gurus' ? item.type === 'guru' : item.type === 'event')), [filter]);

  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#0f172a,#1e3a8a_55%,#d97706)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">Sikh History</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Tap the timeline. Learn the message.</h1>
          <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-slate-100 md:text-base">A compact, child-friendly timeline focused on the Gurus, values, courage, seva, equality, and key Sikh milestones.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`min-w-max rounded-full px-4 py-2 text-sm font-black ${filter === item ? 'bg-blue-900 text-white' : 'bg-white text-slate-700 ring-1 ring-black/10'}`}>{item}</button>)}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-white p-4 shadow-xl ring-1 ring-black/10">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-800">Timeline</p>
            <div className="space-y-2">
              {visible.map((item, index) => <button key={item.id} onClick={() => setSelectedId(item.id)} className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left transition ${selectedId === item.id ? 'bg-blue-900 text-white shadow-lg' : 'bg-slate-50 hover:bg-amber-50'}`}>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-black ${selectedId === item.id ? 'bg-amber-300 text-slate-950' : 'bg-white ring-1 ring-black/10'}`}>{item.emoji}</span>
                <span className="min-w-0"><span className="block truncate font-black">{item.title}</span><span className={`block truncate text-xs font-semibold ${selectedId === item.id ? 'text-blue-100' : 'text-slate-500'}`}>{item.subtitle}</span></span>
                <span className="ml-auto text-xs font-black opacity-60">{index + 1}</span>
              </button>)}
            </div>
          </div>

          <div className="rounded-3xl bg-[#24160f] p-5 text-white shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div><p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Selected</p><h2 className="mt-2 text-3xl font-black">{selected.title}</h2><p className="mt-1 text-2xl font-black text-amber-200">{selected.punjabi}</p></div>
              <span className="text-5xl">{selected.emoji}</span>
            </div>
            <p className="mt-4 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-amber-100 ring-1 ring-white/10">{selected.subtitle}</p>
            <p className="mt-5 text-lg font-bold leading-8">{selected.summary}</p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 text-slate-950"><p className="text-xs font-black uppercase text-red-800">Core lesson</p><p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{selected.lesson}</p></div>
              <div className="rounded-2xl bg-amber-100 p-4 text-slate-950"><p className="text-xs font-black uppercase text-amber-900">For kids</p><p className="mt-2 text-sm font-black leading-6">{selected.kids}</p></div>
            </div>

            <div className="mt-5"><p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Words</p><div className="mt-2 flex flex-wrap gap-2">{selected.words.map((word) => <span key={word} className="rounded-full bg-white px-3 py-2 text-xs font-black text-slate-950">{word}</span>)}</div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
