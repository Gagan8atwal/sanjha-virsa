'use client';

import { useEffect, useMemo, useState } from 'react';

type Lesson = {
  id: string;
  title: string;
  punjabi: string;
  emoji: string;
  xp: number;
  coins: number;
  tasks: string[];
};

type Progress = {
  completed: string[];
  xp: number;
  coins: number;
  streak: number;
  lastActive: string;
  name: string;
  avatar: string;
};

const lessons: Lesson[] = [
  { id: 'alphabet', title: 'Alphabet', punjabi: 'ਅੱਖਰ', emoji: 'ਅ', xp: 50, coins: 10, tasks: ['Tap 3 letters', 'Say one word aloud', 'Choose the correct meaning'] },
  { id: 'family', title: 'Family', punjabi: 'ਪਰਿਵਾਰ', emoji: '👨‍👩‍👧‍👦', xp: 40, coins: 8, tasks: ['Learn 3 family words', 'Say one sentence', 'Ask an elder one question'] },
  { id: 'food', title: 'Kitchen', punjabi: 'ਰਸੋਈ', emoji: '🍲', xp: 45, coins: 9, tasks: ['Learn 3 food words', 'Match one item', 'Name a family dish'] },
  { id: 'animals', title: 'Animals', punjabi: 'ਜਾਨਵਰ', emoji: '🐄', xp: 35, coins: 7, tasks: ['Learn 3 animals', 'Match one sound', 'Say one Punjabi name'] },
  { id: 'stories', title: 'Story', punjabi: 'ਕਹਾਣੀ', emoji: '📚', xp: 60, coins: 12, tasks: ['Open a story', 'Reach the last page', 'Answer the family question'] },
  { id: 'festivals', title: 'Festivals', punjabi: 'ਤਿਉਹਾਰ', emoji: '🪁', xp: 55, coins: 11, tasks: ['Learn one festival', 'Name one tradition', 'Complete the recap'] },
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

const defaultProgress: Progress = {
  completed: [], xp: 0, coins: 0, streak: 1, lastActive: '', name: 'Punjab Explorer', avatar: '🦁',
};

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
      const parsed = JSON.parse(saved) as Progress;
      const today = todayKey();
      setProgress({ ...parsed, streak: parsed.lastActive && parsed.lastActive !== today ? parsed.streak : Math.max(1, parsed.streak) });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('sanjha-game-progress-v2', JSON.stringify(progress));
  }, [progress]);

  const level = Math.floor(progress.xp / 100) + 1;
  const levelProgress = progress.xp % 100;
  const completedCount = progress.completed.length;
  const badges = useMemo(() => [
    { name: 'First Win', icon: '⭐', unlocked: completedCount >= 1 },
    { name: 'Word Hero', icon: 'ਅ', unlocked: completedCount >= 2 },
    { name: 'Virsa Guide', icon: '🧭', unlocked: completedCount >= 4 },
    { name: 'Daily Flame', icon: '🔥', unlocked: progress.streak >= 3 },
  ], [completedCount, progress.streak]);

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

  function saveProfile(name: string, avatar: string) {
    setProgress((current) => ({ ...current, name: name.trim() || 'Punjab Explorer', avatar }));
    setProfileOpen(false);
  }

  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      {reward && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 p-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl ring-4 ring-amber-300">
            <p className="text-5xl">🏆</p>
            <h2 className="mt-2 text-3xl font-black text-red-800">Shabash!</h2>
            <p className="mt-1 font-bold text-slate-600">Lesson completed</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-amber-50 p-4"><p className="text-xs font-black text-amber-800">XP</p><p className="text-2xl font-black">+{reward.xp}</p></div>
              <div className="rounded-2xl bg-purple-50 p-4"><p className="text-xs font-black text-purple-800">COINS</p><p className="text-2xl font-black">+{reward.coins}</p></div>
            </div>
            <button onClick={() => setReward(null)} className="mt-5 w-full rounded-2xl bg-emerald-600 px-5 py-4 font-black text-white">Continue</button>
          </div>
        </div>
      )}

      {activeLesson && (
        <div className="fixed inset-0 z-[75] flex items-end justify-center bg-black/50 p-3 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-lg rounded-3xl bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div><p className="text-xs font-black uppercase text-purple-700">Lesson</p><h2 className="text-2xl font-black">{activeLesson.emoji} {activeLesson.title}</h2></div>
              <button onClick={() => setActiveLesson(null)} className="rounded-full bg-slate-100 px-3 py-2 font-black">×</button>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200"><div className="h-full bg-gradient-to-r from-purple-600 to-amber-400 transition-all" style={{ width: `${((taskIndex + 1) / activeLesson.tasks.length) * 100}%` }} /></div>
            <p className="mt-5 text-sm font-black text-slate-500">Task {taskIndex + 1} of {activeLesson.tasks.length}</p>
            <div className="mt-3 rounded-3xl bg-amber-50 p-6 text-center ring-1 ring-amber-200">
              <p className="text-5xl">{activeLesson.emoji}</p>
              <p className="mt-4 text-xl font-black">{activeLesson.tasks[taskIndex]}</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">Complete this step before moving forward.</p>
            </div>
            <button onClick={completeTask} className="mt-5 w-full rounded-2xl bg-amber-300 px-5 py-4 font-black text-slate-950">
              {taskIndex === activeLesson.tasks.length - 1 ? 'Finish lesson' : 'Task done · Next'}
            </button>
          </div>
        </div>
      )}

      {profileOpen && <ProfileEditor progress={progress} onSave={saveProfile} onClose={() => setProfileOpen(false)} />}

      <section className="bg-[linear-gradient(135deg,#4c1d95,#7f1d1d_55%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-7 md:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-200">Kids Hub</p>
              <h1 className="mt-2 text-3xl font-black md:text-5xl">Learn. Play. Preserve.</h1>
              <p className="mt-2 max-w-xl text-sm font-semibold text-slate-100">Short lessons. Real completion. Meaningful rewards.</p>
            </div>
            <button onClick={() => setProfileOpen(true)} className="flex items-center gap-3 rounded-2xl bg-white/15 p-3 text-left ring-1 ring-white/20">
              <span className="text-4xl">{progress.avatar}</span><span><span className="block text-xs text-amber-100">Player</span><span className="font-black">{progress.name}</span></span>
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-5 md:px-8">
        <div className="grid grid-cols-4 gap-2 rounded-3xl bg-white p-3 shadow-lg ring-1 ring-black/10">
          <Stat label="Level" value={String(level)} />
          <Stat label="XP" value={String(progress.xp)} />
          <Stat label="Coins" value={String(progress.coins)} />
          <Stat label="Streak" value={`${progress.streak}🔥`} />
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200"><div className="h-full bg-gradient-to-r from-purple-600 to-amber-400" style={{ width: `${levelProgress}%` }} /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4 md:px-8">
        <div className="mb-4 flex items-end justify-between"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-purple-800">Learning path</p><h2 className="text-2xl font-black">Choose a lesson</h2></div><span className="text-sm font-black text-slate-500">{completedCount}/{lessons.length}</span></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => {
            const done = progress.completed.includes(lesson.id);
            return <button key={lesson.id} onClick={() => startLesson(lesson)} className={`rounded-3xl p-4 text-left shadow-md ring-1 transition ${done ? 'bg-emerald-50 ring-emerald-200' : 'bg-white ring-black/10 hover:-translate-y-1 hover:shadow-xl'}`}>
              <div className="flex items-start justify-between"><span className="text-4xl">{lesson.emoji}</span><span className={`rounded-full px-3 py-1 text-xs font-black ${done ? 'bg-emerald-200 text-emerald-900' : 'bg-amber-100 text-amber-900'}`}>{done ? 'Completed' : `${lesson.xp} XP`}</span></div>
              <h3 className="mt-3 text-xl font-black">{lesson.title}</h3><p className="text-lg font-black text-red-800">{lesson.punjabi}</p>
              <p className="mt-3 text-sm font-semibold text-slate-600">{done ? 'Reward already earned.' : `${lesson.tasks.length} tasks · ${lesson.coins} coins`}</p>
            </button>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-black/10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-800">Alphabet practice</p>
            <div className="mt-4 grid grid-cols-8 gap-2">{alphabet.map((item) => <button key={item.letter} onClick={() => setSelectedLetter(item)} className={`rounded-xl py-3 text-2xl font-black ${selectedLetter.letter === item.letter ? 'bg-red-800 text-white' : 'bg-amber-50 text-red-900 ring-1 ring-amber-200'}`}>{item.letter}</button>)}</div>
            <div className="mt-4 flex items-center gap-5 rounded-2xl bg-amber-50 p-4"><span className="text-6xl font-black text-red-800">{selectedLetter.letter}</span><div><p className="text-lg font-black">{selectedLetter.name}</p><p className="font-bold text-slate-700">{selectedLetter.word} · {selectedLetter.meaning}</p></div></div>
          </div>
          <div className="rounded-3xl bg-[#24160f] p-5 text-white shadow-lg">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Badges</p>
            <div className="mt-4 grid grid-cols-2 gap-3">{badges.map((badge) => <div key={badge.name} className={`rounded-2xl p-3 ${badge.unlocked ? 'bg-white text-slate-950' : 'bg-white/10 text-white/50'}`}><p className="text-3xl">{badge.icon}</p><p className="mt-1 text-sm font-black">{badge.name}</p><p className="text-xs">{badge.unlocked ? 'Unlocked' : 'Locked'}</p></div>)}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div className="text-center"><p className="text-[10px] font-black uppercase text-slate-500">{label}</p><p className="mt-1 text-xl font-black sm:text-2xl">{value}</p></div>;
}

function ProfileEditor({ progress, onSave, onClose }: { progress: Progress; onSave: (name: string, avatar: string) => void; onClose: () => void }) {
  const [name, setName] = useState(progress.name);
  const [avatar, setAvatar] = useState(progress.avatar);
  return <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/55 p-3 backdrop-blur-sm sm:items-center"><div className="w-full max-w-md rounded-3xl bg-white p-5"><div className="flex justify-between"><h2 className="text-2xl font-black">Kid profile</h2><button onClick={onClose} className="font-black">×</button></div><input value={name} onChange={(event) => setName(event.target.value)} className="mt-5 w-full rounded-2xl border p-4 font-bold" placeholder="Name" /><div className="mt-4 flex gap-3">{['🦁','🐯','🦚','🐘','🐦'].map((item) => <button key={item} onClick={() => setAvatar(item)} className={`rounded-2xl p-3 text-3xl ${avatar === item ? 'bg-amber-200 ring-2 ring-amber-500' : 'bg-slate-100'}`}>{item}</button>)}</div><button onClick={() => onSave(name, avatar)} className="mt-5 w-full rounded-2xl bg-emerald-600 p-4 font-black text-white">Save profile</button></div></div>;
}
