'use client';

import { useEffect, useMemo, useState } from 'react';

type Lesson = {
  id: string;
  title: string;
  punjabi: string;
  emoji: string;
  color: string;
  xp: number;
  description: string;
};

const lessons: Lesson[] = [
  { id: 'alphabet', title: 'Alphabet Adventure', punjabi: 'ਅੱਖਰ ਯਾਤਰਾ', emoji: 'ਅ', color: 'from-red-700 to-orange-400', xp: 50, description: 'Tap letters, learn sounds, and remember one word.' },
  { id: 'family', title: 'My Punjabi Family', punjabi: 'ਮੇਰਾ ਪਰਿਵਾਰ', emoji: '👨‍👩‍👧‍👦', color: 'from-purple-700 to-pink-400', xp: 40, description: 'Learn family words such as ਮਾਂ, ਪਿਤਾ, ਦਾਦੀ, and ਨਾਨਾ.' },
  { id: 'food', title: 'Punjabi Kitchen', punjabi: 'ਪੰਜਾਬੀ ਰਸੋਈ', emoji: '🍲', color: 'from-amber-600 to-yellow-300', xp: 45, description: 'Learn food words through a colorful kitchen challenge.' },
  { id: 'animals', title: 'Village Animals', punjabi: 'ਪਿੰਡ ਦੇ ਜਾਨਵਰ', emoji: '🐄', color: 'from-emerald-700 to-lime-400', xp: 35, description: 'Match Punjabi animal words with familiar pictures.' },
  { id: 'stories', title: 'Story Time', punjabi: 'ਕਹਾਣੀ ਸਮਾਂ', emoji: '📚', color: 'from-blue-700 to-cyan-400', xp: 60, description: 'Read one short story and answer a family question.' },
  { id: 'festivals', title: 'Festival Quest', punjabi: 'ਤਿਉਹਾਰ ਯਾਤਰਾ', emoji: '🪁', color: 'from-fuchsia-700 to-rose-400', xp: 55, description: 'Explore Vaisakhi, Lohri, Gurpurabs, Maghi, and Teeyan.' },
];

const alphabet = [
  { letter: 'ੳ', name: 'Oora', word: 'ਊਠ', meaning: 'Camel' },
  { letter: 'ਅ', name: 'Aira', word: 'ਅਨਾਰ', meaning: 'Pomegranate' },
  { letter: 'ੲ', name: 'Eeri', word: 'ਇੱਕ', meaning: 'One' },
  { letter: 'ਸ', name: 'Sassa', word: 'ਸੇਵਾ', meaning: 'Service' },
  { letter: 'ਹ', name: 'Haha', word: 'ਹਿੰਮਤ', meaning: 'Courage' },
  { letter: 'ਕ', name: 'Kakka', word: 'ਕਬੂਤਰ', meaning: 'Pigeon' },
  { letter: 'ਖ', name: 'Khakha', word: 'ਖੇਤ', meaning: 'Field' },
  { letter: 'ਗ', name: 'Gagga', word: 'ਗੁਰੂ', meaning: 'Teacher/Guide' },
];

const badges = [
  { id: 'first-step', title: 'First Step', icon: '🌟', need: 1 },
  { id: 'alphabet-star', title: 'Alphabet Star', icon: 'ਅ', need: 2 },
  { id: 'virsa-explorer', title: 'Virsa Explorer', icon: '🧭', need: 4 },
  { id: 'daily-hero', title: 'Daily Hero', icon: '🔥', need: 6 },
];

export default function KidsLearningHub() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [selectedLetter, setSelectedLetter] = useState(alphabet[0]);
  const [missionDone, setMissionDone] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('sanjha-kids-progress');
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('sanjha-kids-progress', JSON.stringify(completed));
  }, [completed]);

  const xp = useMemo(() => lessons.filter((lesson) => completed.includes(lesson.id)).reduce((total, lesson) => total + lesson.xp, 0) + (missionDone ? 50 : 0), [completed, missionDone]);
  const level = Math.floor(xp / 100) + 1;
  const levelProgress = xp % 100;
  const stars = completed.length + (missionDone ? 1 : 0);

  function completeLesson(lesson: Lesson) {
    if (completed.includes(lesson.id)) return;
    setCompleted((current) => [...current, lesson.id]);
    setCelebrate(true);
    window.setTimeout(() => setCelebrate(false), 1500);
  }

  function completeMission() {
    if (missionDone) return;
    setMissionDone(true);
    setCelebrate(true);
    window.setTimeout(() => setCelebrate(false), 1500);
  }

  function resetProgress() {
    setCompleted([]);
    setMissionDone(false);
  }

  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      {celebrate && (
        <div className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="animate-bounce rounded-[2rem] bg-white px-8 py-6 text-center shadow-2xl ring-4 ring-amber-300">
            <p className="text-6xl">🎉</p>
            <p className="mt-2 text-3xl font-black text-red-800">Shabash!</p>
            <p className="font-bold text-slate-700">XP earned</p>
          </div>
        </div>
      )}

      <section className="bg-[radial-gradient(circle_at_top_left,#fde68a,transparent_24%),linear-gradient(135deg,#4c1d95,#7f1d1d_52%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-purple-900">Kids Learning Hub</p>
              <h1 className="mt-5 text-5xl font-black leading-[0.95] md:text-7xl">Learn Punjabi in five joyful minutes.</h1>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-slate-100">Complete lessons, earn XP, unlock badges, build a streak, and bring Punjabi into everyday family life.</p>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl ring-4 ring-white/20">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-purple-50 p-4 text-center ring-1 ring-purple-100"><p className="text-xs font-black uppercase text-purple-700">Level</p><p className="mt-1 text-3xl font-black">{level}</p></div>
                <div className="rounded-2xl bg-amber-50 p-4 text-center ring-1 ring-amber-100"><p className="text-xs font-black uppercase text-amber-700">XP</p><p className="mt-1 text-3xl font-black">{xp}</p></div>
                <div className="rounded-2xl bg-emerald-50 p-4 text-center ring-1 ring-emerald-100"><p className="text-xs font-black uppercase text-emerald-700">Stars</p><p className="mt-1 text-3xl font-black">{stars}</p></div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between text-sm font-black"><span>Level progress</span><span>{levelProgress}/100</span></div>
                <div className="mt-2 h-4 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-amber-400 transition-all" style={{ width: `${levelProgress}%` }} /></div>
              </div>
              <button onClick={resetProgress} className="mt-5 text-sm font-black text-slate-500 underline">Reset demo progress</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#24160f] p-6 text-white shadow-2xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">Today&apos;s Mission</p>
              <h2 className="mt-3 text-4xl font-black">Meet the letter ਕ</h2>
              <p className="mt-3 text-2xl font-black text-amber-200">ਕ ਤੋਂ ਕਬੂਤਰ · Kakka for pigeon</p>
              <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-slate-200">Tap the letter, say it aloud three times, remember the word ਕਬੂਤਰ, then complete the mission.</p>
              <button onClick={completeMission} disabled={missionDone} className={`mt-6 rounded-2xl px-6 py-4 font-black ${missionDone ? 'bg-emerald-500 text-white' : 'bg-amber-300 text-slate-950 hover:scale-105'} transition`}>
                {missionDone ? 'Mission complete · +50 XP' : 'Complete mission · +50 XP'}
              </button>
            </div>
            <div className="rounded-[2rem] bg-white p-8 text-center text-slate-950">
              <p className="text-8xl font-black text-red-800">ਕ</p>
              <p className="mt-3 text-xl font-black">Kakka</p>
              <p className="mt-1 text-lg font-bold text-slate-600">ਕਬੂਤਰ · Pigeon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <div className="mb-6">
          <p className="font-black uppercase tracking-[0.25em] text-purple-800">Learning Worlds</p>
          <h2 className="mt-2 text-4xl font-black">Pick your next adventure</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => {
            const done = completed.includes(lesson.id);
            return (
              <button key={lesson.id} onClick={() => completeLesson(lesson)} className="group overflow-hidden rounded-[2rem] bg-white text-left shadow-md ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-2xl">
                <div className={`bg-gradient-to-br ${lesson.color} p-6 text-white`}>
                  <div className="flex items-start justify-between gap-4"><span className="text-6xl">{lesson.emoji}</span><span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black">+{lesson.xp} XP</span></div>
                  <h3 className="mt-6 text-2xl font-black">{lesson.title}</h3>
                  <p className="mt-1 text-xl font-black text-amber-100">{lesson.punjabi}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold leading-6 text-slate-700">{lesson.description}</p>
                  <div className={`mt-5 rounded-2xl px-4 py-3 text-center font-black ${done ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-300 text-slate-950 group-hover:bg-amber-200'}`}>{done ? 'Completed' : 'Start lesson'}</div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
            <p className="font-black uppercase tracking-[0.25em] text-red-800">Alphabet Playground</p>
            <h2 className="mt-2 text-4xl font-black">Tap a letter</h2>
            <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-8">
              {alphabet.map((item) => (
                <button key={item.letter} onClick={() => setSelectedLetter(item)} className={`rounded-2xl p-4 text-4xl font-black transition hover:scale-110 ${selectedLetter.letter === item.letter ? 'bg-red-800 text-white shadow-xl' : 'bg-amber-50 text-red-900 ring-1 ring-amber-200'}`}>{item.letter}</button>
              ))}
            </div>
            <div className="mt-6 rounded-[2rem] bg-amber-50 p-6 ring-1 ring-amber-200">
              <div className="grid gap-5 md:grid-cols-[0.45fr_1fr] md:items-center">
                <div className="text-center"><p className="text-8xl font-black text-red-800">{selectedLetter.letter}</p><p className="mt-2 text-xl font-black">{selectedLetter.name}</p></div>
                <div><p className="text-3xl font-black">{selectedLetter.word}</p><p className="mt-2 text-xl font-bold text-slate-700">{selectedLetter.meaning}</p><p className="mt-4 text-sm font-semibold text-slate-600">Say the sound. Trace the letter with your finger. Use the word in a family conversation.</p></div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/10">
            <p className="font-black uppercase tracking-[0.25em] text-emerald-700">Achievement Badges</p>
            <h2 className="mt-2 text-4xl font-black">Unlock your path</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {badges.map((badge) => {
                const unlocked = stars >= badge.need;
                return <div key={badge.id} className={`rounded-2xl p-5 ring-1 ${unlocked ? 'bg-emerald-50 ring-emerald-200' : 'bg-slate-100 ring-slate-200 opacity-60'}`}><p className="text-4xl">{badge.icon}</p><h3 className="mt-3 font-black">{badge.title}</h3><p className="mt-1 text-xs font-bold text-slate-600">{unlocked ? 'Unlocked' : `Earn ${badge.need} stars`}</p></div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-black uppercase tracking-[0.25em] text-blue-800">Mini Games</p>
          <h2 className="mt-2 text-4xl font-black">Game worlds ready for expansion</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {['Memory Match', 'Letter Match', 'Word Builder', 'Village Explorer', 'Animal Match', 'Festival Match', 'Find the Object', 'Family Challenge'].map((game, index) => (
              <div key={game} className="rounded-[2rem] bg-[#fff8ed] p-5 ring-1 ring-amber-100"><p className="text-3xl">{['🧠','🔤','🧩','🚜','🐄','🪁','🔎','👨‍👩‍👧‍👦'][index]}</p><h3 className="mt-3 text-lg font-black">{game}</h3><p className="mt-2 text-sm font-semibold text-slate-600">Interactive game module coming in the next expansion.</p></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
