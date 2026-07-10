'use client';

import { useEffect, useMemo, useState } from 'react';

type Letter = {
  letter: string;
  name: string;
  word: string;
  meaning: string;
  sentence: string;
};

const letters: Letter[] = [
  { letter: 'ੳ', name: 'Oora', word: 'ਊਠ', meaning: 'Camel', sentence: 'ਊਠ ਰੇਤ ਵਿੱਚ ਤੁਰਦਾ ਹੈ।' },
  { letter: 'ਅ', name: 'Aira', word: 'ਅਨਾਰ', meaning: 'Pomegranate', sentence: 'ਅਨਾਰ ਲਾਲ ਹੁੰਦਾ ਹੈ।' },
  { letter: 'ੲ', name: 'Eeri', word: 'ਇੱਕ', meaning: 'One', sentence: 'ਮੇਰੇ ਕੋਲ ਇੱਕ ਕਿਤਾਬ ਹੈ।' },
  { letter: 'ਸ', name: 'Sassa', word: 'ਸੇਵਾ', meaning: 'Service', sentence: 'ਅਸੀਂ ਪਿਆਰ ਨਾਲ ਸੇਵਾ ਕਰਦੇ ਹਾਂ।' },
  { letter: 'ਹ', name: 'Haha', word: 'ਹਿੰਮਤ', meaning: 'Courage', sentence: 'ਹਿੰਮਤ ਨਾਲ ਅੱਗੇ ਵਧੋ।' },
  { letter: 'ਕ', name: 'Kakka', word: 'ਕਬੂਤਰ', meaning: 'Pigeon', sentence: 'ਕਬੂਤਰ ਅਸਮਾਨ ਵਿੱਚ ਉੱਡਦਾ ਹੈ।' },
  { letter: 'ਖ', name: 'Khakha', word: 'ਖੇਤ', meaning: 'Field', sentence: 'ਕਿਸਾਨ ਖੇਤ ਵਿੱਚ ਕੰਮ ਕਰਦਾ ਹੈ।' },
  { letter: 'ਗ', name: 'Gagga', word: 'ਗੁਰੂ', meaning: 'Guide', sentence: 'ਗੁਰੂ ਸਾਨੂੰ ਸੱਚ ਦਾ ਰਾਹ ਦਿਖਾਉਂਦੇ ਹਨ।' },
  { letter: 'ਘ', name: 'Ghaggha', word: 'ਘਰ', meaning: 'Home', sentence: 'ਮੇਰਾ ਘਰ ਪੰਜਾਬੀ ਬੋਲਦਾ ਹੈ।' },
  { letter: 'ਚ', name: 'Chacha', word: 'ਚਿੜੀ', meaning: 'Bird', sentence: 'ਚਿੜੀ ਰੁੱਖ ਉੱਤੇ ਬੈਠੀ ਹੈ।' },
  { letter: 'ਜ', name: 'Jajja', word: 'ਜਲ', meaning: 'Water', sentence: 'ਜਲ ਜੀਵਨ ਲਈ ਜ਼ਰੂਰੀ ਹੈ।' },
  { letter: 'ਟ', name: 'Tainka', word: 'ਟਹਿਣੀ', meaning: 'Branch', sentence: 'ਚਿੜੀ ਟਹਿਣੀ ਉੱਤੇ ਬੈਠੀ ਹੈ।' },
];

const words = [
  { en: 'Mother', pa: 'ਮਾਂ' }, { en: 'Father', pa: 'ਪਿਤਾ' }, { en: 'Water', pa: 'ਪਾਣੀ' }, { en: 'Bread', pa: 'ਰੋਟੀ' },
  { en: 'Home', pa: 'ਘਰ' }, { en: 'Village', pa: 'ਪਿੰਡ' }, { en: 'Field', pa: 'ਖੇਤ' }, { en: 'Book', pa: 'ਕਿਤਾਬ' },
];

const speaking = [
  { en: 'Hello', pa: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ' },
  { en: 'How are you?', pa: 'ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?' },
  { en: 'I am fine.', pa: 'ਮੈਂ ਠੀਕ ਹਾਂ।' },
  { en: 'Thank you.', pa: 'ਧੰਨਵਾਦ।' },
  { en: 'Please give me water.', pa: 'ਕਿਰਪਾ ਕਰਕੇ ਮੈਨੂੰ ਪਾਣੀ ਦਿਓ।' },
];

export default function PunjabiLanguageAcademy() {
  const [selected, setSelected] = useState(letters[0]);
  const [completedLetters, setCompletedLetters] = useState<string[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [tab, setTab] = useState<'letters' | 'words' | 'speak' | 'quiz'>('letters');

  useEffect(() => {
    const saved = window.localStorage.getItem('sanjha-language-progress');
    if (saved) setCompletedLetters(JSON.parse(saved));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('sanjha-language-progress', JSON.stringify(completedLetters));
  }, [completedLetters]);

  const xp = completedLetters.length * 10 + correctCount * 5;
  const progress = Math.round((completedLetters.length / letters.length) * 100);
  const quizLetter = letters[quizIndex % letters.length];
  const quizChoices = useMemo(() => {
    const others = letters.filter((item) => item.letter !== quizLetter.letter).slice(0, 3).map((item) => item.meaning);
    return [quizLetter.meaning, ...others].sort(() => 0.5 - Math.random());
  }, [quizIndex, quizLetter]);

  function speakText(text: string) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
  }

  function markLetter() {
    setCompletedLetters((current) => current.includes(selected.letter) ? current : [...current, selected.letter]);
  }

  function chooseAnswer(choice: string) {
    if (answer) return;
    setAnswer(choice);
    if (choice === quizLetter.meaning) setCorrectCount((current) => current + 1);
  }

  function nextQuiz() {
    setAnswer(null);
    setQuizIndex((current) => current + 1);
  }

  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#7f1d1d,#d97706_60%,#facc15)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-100">Punjabi Language Academy</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Learn Punjabi one small win at a time.</h1>
          <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-amber-50 md:text-base">Letters, words, speaking, and quizzes in one compact learning path.</p>

          <div className="mt-6 grid grid-cols-3 gap-3 max-w-xl">
            <div className="rounded-2xl bg-white/15 p-4 text-center ring-1 ring-white/20"><p className="text-xs font-black text-amber-100">XP</p><p className="text-3xl font-black">{xp}</p></div>
            <div className="rounded-2xl bg-white/15 p-4 text-center ring-1 ring-white/20"><p className="text-xs font-black text-amber-100">LETTERS</p><p className="text-3xl font-black">{completedLetters.length}</p></div>
            <div className="rounded-2xl bg-white/15 p-4 text-center ring-1 ring-white/20"><p className="text-xs font-black text-amber-100">PROGRESS</p><p className="text-3xl font-black">{progress}%</p></div>
          </div>
        </div>
      </section>

      <section className="sticky top-[112px] z-30 border-b bg-[#fff8ed]/95 px-4 py-3 backdrop-blur lg:top-0">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {[
            ['letters', 'Letters'], ['words', 'Words'], ['speak', 'Speak'], ['quiz', 'Quiz'],
          ].map(([id, label]) => <button key={id} onClick={() => setTab(id as typeof tab)} className={`min-w-max rounded-full px-4 py-2 text-sm font-black ${tab === id ? 'bg-red-800 text-white' : 'bg-white ring-1 ring-black/10'}`}>{label}</button>)}
        </div>
      </section>

      {tab === 'letters' && (
        <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
            <div className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-800">Gurmukhi letters</p>
              <div className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-6">
                {letters.map((item) => <button key={item.letter} onClick={() => setSelected(item)} className={`rounded-2xl p-4 text-4xl font-black transition hover:scale-105 ${selected.letter === item.letter ? 'bg-red-800 text-white shadow-lg' : completedLetters.includes(item.letter) ? 'bg-emerald-100 text-emerald-900 ring-1 ring-emerald-200' : 'bg-amber-50 text-red-900 ring-1 ring-amber-200'}`}>{item.letter}</button>)}
              </div>
            </div>

            <div className="rounded-3xl bg-[#24160f] p-6 text-white shadow-2xl">
              <div className="flex items-start justify-between"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Selected letter</p><p className="mt-3 text-8xl font-black text-amber-200">{selected.letter}</p></div><span className="rounded-full bg-white/10 px-3 py-2 text-xs font-black">{selected.name}</span></div>
              <div className="mt-5 rounded-2xl bg-white p-5 text-slate-950"><h2 className="text-3xl font-black">{selected.word}</h2><p className="mt-1 text-xl font-bold text-slate-600">{selected.meaning}</p><p className="mt-4 text-lg font-bold leading-8 text-red-900">{selected.sentence}</p></div>
              <div className="mt-4 grid grid-cols-2 gap-3"><button onClick={() => speakText(`${selected.letter}. ${selected.word}. ${selected.sentence}`)} className="rounded-2xl bg-amber-300 p-4 font-black text-slate-950">Hear it</button><button onClick={markLetter} className="rounded-2xl bg-emerald-600 p-4 font-black text-white">Mark learned</button></div>
            </div>
          </div>
        </section>
      )}

      {tab === 'words' && (
        <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{words.map((word) => <button key={word.en} onClick={() => speakText(`${word.pa}. ${word.en}`)} className="rounded-3xl bg-white p-5 text-left shadow-md ring-1 ring-black/10 hover:-translate-y-1 hover:shadow-xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-amber-700">Everyday word</p><p className="mt-3 text-3xl font-black text-red-800">{word.pa}</p><p className="mt-1 text-lg font-bold text-slate-600">{word.en}</p><p className="mt-4 text-sm font-black text-emerald-700">Tap to hear →</p></button>)}</div>
        </section>
      )}

      {tab === 'speak' && (
        <section className="mx-auto max-w-4xl px-5 py-8 md:px-8">
          <div className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/10"><p className="text-xs font-black uppercase tracking-[0.2em] text-purple-800">Family speaking practice</p><div className="mt-5 grid gap-3">{speaking.map((item, index) => <button key={item.en} onClick={() => speakText(item.pa)} className="flex items-center justify-between gap-4 rounded-2xl bg-purple-50 p-4 text-left ring-1 ring-purple-100"><div><p className="text-xl font-black text-purple-950">{item.pa}</p><p className="mt-1 text-sm font-semibold text-slate-600">{item.en}</p></div><span className="rounded-full bg-white px-3 py-2 text-sm font-black">Play {index + 1}</span></button>)}</div></div>
        </section>
      )}

      {tab === 'quiz' && (
        <section className="mx-auto max-w-3xl px-5 py-8 md:px-8">
          <div className="rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/10">
            <div className="flex justify-between"><p className="text-xs font-black uppercase tracking-[0.2em] text-blue-800">Mini quiz</p><p className="text-sm font-black">Score {correctCount}</p></div>
            <div className="mt-6 text-center"><p className="text-8xl font-black text-red-800">{quizLetter.letter}</p><p className="mt-2 text-xl font-black">{quizLetter.word}</p><p className="mt-1 text-sm font-semibold text-slate-500">What does this word mean?</p></div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">{quizChoices.map((choice) => {
              const isCorrect = choice === quizLetter.meaning;
              const isPicked = answer === choice;
              let style = 'bg-amber-50 ring-amber-200';
              if (answer && isCorrect) style = 'bg-emerald-100 ring-emerald-300';
              if (answer && isPicked && !isCorrect) style = 'bg-red-100 ring-red-300';
              return <button key={choice} onClick={() => chooseAnswer(choice)} className={`rounded-2xl p-4 font-black ring-2 ${style}`}>{choice}</button>;
            })}</div>
            {answer && <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-center"><p className={`font-black ${answer === quizLetter.meaning ? 'text-emerald-700' : 'text-red-700'}`}>{answer === quizLetter.meaning ? 'Correct' : `Correct answer: ${quizLetter.meaning}`}</p><button onClick={nextQuiz} className="mt-3 rounded-2xl bg-blue-800 px-5 py-3 font-black text-white">Next question</button></div>}
          </div>
        </section>
      )}
    </main>
  );
}
