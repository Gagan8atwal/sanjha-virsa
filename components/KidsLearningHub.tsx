'use client';

import { useEffect, useState } from 'react';

type Lesson = {
  id: string;
  title: string;
  punjabi: string;
  subtitle: string;
  xp: number;
  coins: number;
  tone: string;
  tasks: string[];
};

type Progress = {
  completed: string[];
  xp: number;
  coins: number;
  streak: number;
  lastActive: string;
  name: string;
};

const lessons: Lesson[] = [
  { id: 'alphabet', title: 'Alphabet', punjabi: 'ਅੱਖਰ', subtitle: 'Recognize letters and sounds', xp: 50, coins: 10, tone: '#6f1d1b', tasks: ['Open three letters', 'Say one word aloud', 'Choose the correct meaning'] },
  { id: 'family', title: 'Family Words', punjabi: 'ਪਰਿਵਾਰ', subtitle: 'Speak with parents and elders', xp: 40, coins: 8, tone: '#1e3553', tasks: ['Learn three family words', 'Say one short sentence', 'Ask an elder one question'] },
  { id: 'food', title: 'Kitchen Words', punjabi: 'ਰਸੋਈ', subtitle: 'Learn words from daily meals', xp: 45, coins: 9, tone: '#9a5b19', tasks: ['Learn three food words', 'Match one item', 'Name a family dish'] },
  { id: 'animals', title: 'Animals', punjabi: 'ਜਾਨਵਰ', subtitle: 'Words from village and nature', xp: 35, coins: 7, tone: '#315a45', tasks: ['Learn three animal names', 'Match one sound', 'Say one Punjabi name'] },
  { id: 'stories', title: 'Story Time', punjabi: 'ਕਹਾਣੀ', subtitle: 'Read and answer together', xp: 60, coins: 12, tone: '#5b3d76', tasks: ['Open one story', 'Reach the final page', 'Answer the family question'] },
  { id: 'festivals', title: 'Festivals', punjabi: 'ਤਿਉਹਾਰ', subtitle: 'Learn meaning and tradition', xp: 55, coins: 11, tone: '#7b4f16', tasks: ['Learn one festival', 'Name one tradition', 'Complete the recap'] },
];

const alphabet = [
  { letter: 'ੳ', name: 'Oora', word: 'ਊਠ', meaning: 'Camel' },
  { letter: 'ਅ', name: 'Aira', word: 'ਅਨਾਰ', meaning: 'Pomegranate' },
  { letter: 'ੲ', name: 'Eeri', word: 'ਇੱਕ', meaning: 'One' },
  { letter: 'ਸ', name: 'Sassa', word: 'ਸੇਵਾ', meaning: 'Service' },
  { letter: 'ਹ', name: 'Haha', word: 'ਹਿੰਮਤ', meaning: 'Courage' },
  { letter: 'ਕ', name: 'Kakka', word: 'ਕਬੂਤਰ', meaning: 'Pigeon' },
  { letter: 'ਖ', name: 'Khakha', word: 'ਖੇਤ', meaning: 'Field' },
  { letter: 'ਗ', name: 'Gagga', word: 'ਗੁਰੂ', meaning: 'Guide' },
];

const defaultProgress: Progress = { completed: [], xp: 0, coins: 0, streak: 1, lastActive: '', name: 'Punjab Explorer' };

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export default function KidsLearningHub() {
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [taskIndex, setTaskIndex] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState(alphabet[0]);
  const [reward, setReward] = useState<Lesson | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('sanjha-game-progress-v2');
    if (saved) {
      const parsed = JSON.parse(saved) as Progress & { avatar?: string };
      setProgress({ ...defaultProgress, ...parsed });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('sanjha-game-progress-v2', JSON.stringify(progress));
  }, [progress]);

  const level = Math.floor(progress.xp / 100) + 1;
  const levelProgress = progress.xp % 100;
  const completedCount = progress.completed.length;

  function startLesson(lesson: Lesson) {
    if (progress.completed.includes(lesson.id)) return;
    setActiveLesson(lesson);
    setTaskIndex(0);
  }

  function completeTask() {
    if (!activeLesson) return;
    if (taskIndex < activeLesson.tasks.length - 1) {
      setTaskIndex((current) => current + 1);
      return;
    }

    const today = todayKey();
    setProgress((current) => ({
      ...current,
      completed: current.completed.includes(activeLesson.id) ? current.completed : [...current.completed, activeLesson.id],
      xp: current.completed.includes(activeLesson.id) ? current.xp : current.xp + activeLesson.xp,
      coins: current.completed.includes(activeLesson.id) ? current.coins : current.coins + activeLesson.coins,
      streak: current.lastActive && current.lastActive !== today ? current.streak + 1 : current.streak,
      lastActive: today,
    }));
    setReward(activeLesson);
    setActiveLesson(null);
    setTaskIndex(0);
  }

  return (
    <main className="sv-page">
      {reward && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 p-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-[1.75rem] bg-[#fffdf8] p-7 text-center shadow-2xl">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#315a45] text-xl font-black text-white">✓</div>
            <h2 className="mt-5 font-serif text-3xl font-bold">Lesson complete</h2>
            <p className="mt-2 text-sm font-medium text-[#6f675f]">Your progress has been saved.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#fff3d9] p-4"><p className="text-xs font-black uppercase tracking-[0.15em] text-[#7b4f16]">XP</p><p className="mt-1 text-2xl font-black">+{reward.xp}</p></div>
              <div className="rounded-2xl bg-[#eef5ef] p-4"><p className="text-xs font-black uppercase tracking-[0.15em] text-[#315a45]">Coins</p><p className="mt-1 text-2xl font-black">+{reward.coins}</p></div>
            </div>
            <button onClick={() => setReward(null)} className="mt-6 w-full rounded-full bg-[#201712] px-5 py-3.5 font-black text-white">Continue</button>
          </div>
        </div>
      )}

      {activeLesson && (
        <div className="fixed inset-0 z-[75] flex items-end justify-center bg-black/50 p-3 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-lg rounded-[1.75rem] bg-[#fffdf8] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div><p className="sv-kicker">Lesson</p><h2 className="mt-2 font-serif text-3xl font-bold">{activeLesson.title}</h2><p className="mt-1 font-bold text-[#6f1d1b]">{activeLesson.punjabi}</p></div>
              <button onClick={() => setActiveLesson(null)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-xl">×</button>
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-black/10"><div className="h-full bg-[#d99a22] transition-all" style={{ width: `${((taskIndex + 1) / activeLesson.tasks.length) * 100}%` }} /></div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#6f675f]">Step {taskIndex + 1} of {activeLesson.tasks.length}</p>
            <div className="mt-3 rounded-[1.5rem] border border-black/10 bg-white p-6">
              <p className="font-serif text-2xl font-bold leading-tight">{activeLesson.tasks[taskIndex]}</p>
              <p className="mt-3 text-sm font-medium leading-6 text-[#6f675f]">Complete this step before moving forward.</p>
            </div>
            <button onClick={completeTask} className="mt-5 w-full rounded-full bg-[#d99a22] px-5 py-3.5 font-black text-[#201712]">{taskIndex === activeLesson.tasks.length - 1 ? 'Finish lesson' : 'Complete step'}</button>
          </div>
        </div>
      )}

      {profileOpen && <ProfileEditor progress={progress} onSave={(name) => { setProgress((current) => ({ ...current, name })); setProfileOpen(false); }} onClose={() => setProfileOpen(false)} />}

      <section className="border-b border-black/10 bg-[#201712] text-white">
        <div className="sv-container grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-end md:py-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e7b650]">Kids learning hub</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl font-bold leading-[0.98] tracking-[-0.04em] md:text-6xl">Small lessons. Clear progress. Stronger connection.</h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/65">Choose one lesson, complete three steps, and return tomorrow.</p>
          </div>
          <button onClick={() => setProfileOpen(true)} className="rounded-full border border-white/20 px-5 py-3 text-left text-sm font-black text-white">{progress.name}</button>
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="grid gap-4 rounded-[1.75rem] border border-black/10 bg-[#fffdf8] p-5 shadow-[0_18px_45px_rgba(54,35,24,0.08)] sm:grid-cols-4">
          <Stat label="Level" value={String(level)} />
          <Stat label="XP" value={String(progress.xp)} />
          <Stat label="Coins" value={String(progress.coins)} />
          <Stat label="Streak" value={`${progress.streak} days`} />
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10"><div className="h-full bg-[#d99a22]" style={{ width: `${levelProgress}%` }} /></div>
      </section>

      <section className="sv-container py-10 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <div><p className="sv-kicker">Learning path</p><h2 className="mt-2 font-serif text-4xl font-bold">Choose one lesson</h2></div>
          <p className="text-sm font-black text-[#6f675f]">{completedCount}/{lessons.length} complete</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => {
            const done = progress.completed.includes(lesson.id);
            return (
              <button key={lesson.id} onClick={() => startLesson(lesson)} className={`overflow-hidden rounded-[1.75rem] border text-left shadow-[0_16px_36px_rgba(54,35,24,0.07)] transition hover:-translate-y-0.5 ${done ? 'border-[#315a45]/25 bg-[#f3f8f4]' : 'border-black/10 bg-[#fffdf8]'}`}>
                <LessonArt type={lesson.id} tone={lesson.tone} />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3"><p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: lesson.tone }}>{lesson.subtitle}</p><span className="text-xs font-black text-[#6f675f]">{done ? 'Completed' : `${lesson.xp} XP`}</span></div>
                  <h3 className="mt-3 font-serif text-2xl font-bold">{lesson.title}</h3>
                  <p className="mt-1 text-lg font-black text-[#6f1d1b]">{lesson.punjabi}</p>
                  <p className="mt-4 text-sm font-medium text-[#6f675f]">{done ? 'Reward already earned.' : `${lesson.tasks.length} short steps`}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#fffdf8]">
        <div className="sv-container grid gap-8 py-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="sv-kicker">Alphabet practice</p>
            <h2 className="mt-3 font-serif text-4xl font-bold">Open one letter at a time.</h2>
            <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-8">
              {alphabet.map((item) => <button key={item.letter} onClick={() => setSelectedLetter(item)} className={`rounded-2xl border py-4 text-2xl font-black ${selectedLetter.letter === item.letter ? 'border-[#6f1d1b] bg-[#6f1d1b] text-white' : 'border-black/10 bg-[#fff8e8] text-[#6f1d1b]'}`}>{item.letter}</button>)}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[#201712] p-7 text-white">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e7b650]">Selected letter</p>
            <p className="mt-5 text-7xl font-black text-[#f3d9a8]">{selectedLetter.letter}</p>
            <p className="mt-4 font-serif text-3xl font-bold">{selectedLetter.name}</p>
            <p className="mt-2 text-xl font-black text-[#e7b650]">{selectedLetter.word}</p>
            <p className="mt-1 text-sm font-medium text-white/60">{selectedLetter.meaning}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function LessonArt({ type, tone }: { type: string; tone: string }) {
  return (
    <svg viewBox="0 0 520 220" role="img" aria-label={`${type} lesson illustration`} className="h-40 w-full" style={{ background: '#f6ead4' }}>
      <rect width="520" height="220" fill="#f6ead4" />
      <circle cx="430" cy="45" r="30" fill="#d99a22" opacity="0.85" />
      {type === 'alphabet' && <><rect x="55" y="35" width="150" height="150" rx="24" fill="#fffdf8" /><text x="130" y="140" textAnchor="middle" fontSize="96" fontWeight="700" fill={tone}>ਅ</text><path d="M255 70h180M255 112h140M255 154h165" stroke={tone} strokeWidth="14" strokeLinecap="round" opacity="0.55" /></>}
      {type === 'family' && <><path d="M78 176v-65l62-44 62 44v65" fill="#f3d9a8" stroke={tone} strokeWidth="8"/><circle cx="280" cy="92" r="28" fill={tone}/><circle cx="340" cy="82" r="24" fill="#d99a22"/><circle cx="392" cy="104" r="20" fill="#315a45"/><path d="M250 172c5-39 25-58 58-58s53 19 58 58M365 172c3-29 17-44 42-44s39 15 42 44" fill="none" stroke={tone} strokeWidth="10" strokeLinecap="round"/></>}
      {type === 'food' && <><path d="M95 130h155c-8 48-33 72-77 72s-70-24-78-72Z" fill="#fffdf8" stroke={tone} strokeWidth="8"/><path d="M120 92c0-25 18-40 18-65M172 92c0-25 18-40 18-65M224 92c0-25 18-40 18-65" fill="none" stroke="#d99a22" strokeWidth="8" strokeLinecap="round"/><circle cx="360" cy="128" r="55" fill="#f3d9a8" stroke={tone} strokeWidth="8"/><circle cx="360" cy="128" r="24" fill="#d99a22"/></>}
      {type === 'animals' && <><path d="M110 165c0-56 39-93 94-93s95 37 95 93" fill="#f3d9a8" stroke={tone} strokeWidth="8"/><circle cx="180" cy="115" r="8" fill={tone}/><circle cx="236" cy="115" r="8" fill={tone}/><path d="M195 145c13 10 27 10 40 0" stroke={tone} strokeWidth="8" fill="none" strokeLinecap="round"/><path d="M118 96 72 65M292 95l42-36" stroke={tone} strokeWidth="10" strokeLinecap="round"/></>}
      {type === 'stories' && <><path d="M85 55h140c28 0 45 18 45 45v82H130c-28 0-45-18-45-45V55Z" fill="#fffdf8" stroke={tone} strokeWidth="8"/><path d="M435 55H295c-28 0-45 18-45 45v82h140c28 0 45-18 45-45V55Z" fill="#fffdf8" stroke={tone} strokeWidth="8"/><path d="M250 75v105" stroke="#d99a22" strokeWidth="8"/></>}
      {type === 'festivals' && <><path d="M90 175h330" stroke={tone} strokeWidth="8"/><path d="M135 175V90M210 175V60M310 175V100M385 175V72" stroke={tone} strokeWidth="12" strokeLinecap="round"/><path d="m210 60-28 24h56l-28-24ZM385 72l-25 22h50l-25-22Z" fill="#d99a22"/><path d="M120 48c65 18 120 18 185 0s115-18 165 0" stroke="#315a45" strokeWidth="8" fill="none"/></>}
    </svg>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#6f675f]">{label}</p><p className="mt-2 font-serif text-3xl font-bold">{value}</p></div>;
}

function ProfileEditor({ progress, onSave, onClose }: { progress: Progress; onSave: (name: string) => void; onClose: () => void }) {
  const [name, setName] = useState(progress.name);
  return <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/55 p-3 backdrop-blur-sm sm:items-center"><div className="w-full max-w-md rounded-[1.75rem] bg-[#fffdf8] p-6"><div className="flex justify-between gap-4"><div><p className="sv-kicker">Profile</p><h2 className="mt-2 font-serif text-3xl font-bold">Learner name</h2></div><button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-xl">×</button></div><input value={name} onChange={(event) => setName(event.target.value)} className="mt-6 w-full rounded-2xl border border-black/10 bg-white p-4 font-bold outline-none focus:border-[#6f1d1b]" placeholder="Name" /><button onClick={() => onSave(name.trim() || 'Punjab Explorer')} className="mt-5 w-full rounded-full bg-[#315a45] p-4 font-black text-white">Save profile</button></div></div>;
}
