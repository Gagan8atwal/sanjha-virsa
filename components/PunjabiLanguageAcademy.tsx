'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Letter = { letter: string; name: string; word: string; meaning: string; sentence: string };

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
  const [audioState, setAudioState] = useState<'idle' | 'loading' | 'playing' | 'error'>('idle');
  const [audioMessage, setAudioMessage] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem('sanjha-language-progress');
    if (saved) setCompletedLetters(JSON.parse(saved));
    return () => {
      audioRef.current?.pause();
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
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

  async function speakPunjabi(text: string) {
    try {
      setAudioState('loading');
      setAudioMessage('Preparing native Punjabi pronunciation...');
      audioRef.current?.pause();
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);

      const response = await fetch('/api/pronunciation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error('Native audio unavailable');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      objectUrlRef.current = url;
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onplay = () => { setAudioState('playing'); setAudioMessage('Playing native Punjabi audio'); };
      audio.onended = () => { setAudioState('idle'); setAudioMessage(''); };
      audio.onerror = () => { setAudioState('error'); setAudioMessage('Audio could not be played.'); };
      await audio.play();
    } catch {
      const voices = window.speechSynthesis?.getVoices?.() ?? [];
      const punjabiVoice = voices.find((voice) => /^pa(-|_)/i.test(voice.lang));
      if (punjabiVoice && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = punjabiVoice;
        utterance.lang = punjabiVoice.lang;
        utterance.rate = 0.76;
        utterance.onend = () => { setAudioState('idle'); setAudioMessage(''); };
        window.speechSynthesis.speak(utterance);
        setAudioState('playing');
        setAudioMessage('Playing Punjabi voice installed on this device');
        return;
      }
      setAudioState('error');
      setAudioMessage('Native Punjabi audio is temporarily unavailable. Incorrect English-device speech has been disabled.');
    }
  }

  function markLetter() {
    setCompletedLetters((current) => current.includes(selected.letter) ? current : [...current, selected.letter]);
  }

  function chooseAnswer(choice: string) {
    if (answer) return;
    setAnswer(choice);
    if (choice === quizLetter.meaning) setCorrectCount((current) => current + 1);
  }

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#6f1d1b] text-white">
        <div className="sv-container py-12 md:py-16">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3d9a8]">Punjabi Language Academy</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl font-bold leading-[0.98] tracking-[-0.04em] md:text-6xl">Learn Punjabi with clear native pronunciation.</h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/70">Letters, words, speaking, and quizzes in one focused learning path.</p>
          <div className="mt-7 grid max-w-xl grid-cols-3 gap-3">
            <Stat label="XP" value={xp} /><Stat label="Letters" value={completedLetters.length} /><Stat label="Progress" value={`${progress}%`} />
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-30 border-b border-black/10 bg-[#fffdf8]/95 px-4 py-3 backdrop-blur lg:top-0">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {([['letters', 'Letters'], ['words', 'Words'], ['speak', 'Speak'], ['quiz', 'Quiz']] as const).map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)} className={`min-w-max rounded-full px-4 py-2 text-sm font-black ${tab === id ? 'bg-[#201712] text-white' : 'border border-black/10 bg-white'}`}>{label}</button>
          ))}
        </div>
      </section>

      {audioMessage && <div className={`sv-container mt-5 rounded-2xl border px-4 py-3 text-sm font-semibold ${audioState === 'error' ? 'border-red-200 bg-red-50 text-red-800' : 'border-[#d99a22]/30 bg-[#fff8e8] text-[#6f4a16]'}`}>{audioMessage}</div>}

      {tab === 'letters' && (
        <section className="sv-container py-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
            <div className="rounded-[1.75rem] border border-black/10 bg-[#fffdf8] p-6 shadow-lg">
              <p className="sv-kicker">Gurmukhi letters</p>
              <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-6">
                {letters.map((item) => <button key={item.letter} onClick={() => setSelected(item)} className={`rounded-2xl border p-4 text-4xl font-black ${selected.letter === item.letter ? 'border-[#6f1d1b] bg-[#6f1d1b] text-white' : completedLetters.includes(item.letter) ? 'border-[#315a45]/20 bg-[#eef5ef] text-[#315a45]' : 'border-black/10 bg-[#fff8e8] text-[#6f1d1b]'}`}>{item.letter}</button>)}
              </div>
            </div>
            <div className="rounded-[1.75rem] bg-[#201712] p-6 text-white shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e7b650]">Selected letter</p>
              <p className="mt-3 text-8xl font-black text-[#f3d9a8]">{selected.letter}</p>
              <p className="mt-2 text-sm font-black text-white/50">{selected.name}</p>
              <div className="mt-5 rounded-2xl bg-white p-5 text-[#201712]"><h2 className="text-3xl font-black">{selected.word}</h2><p className="mt-1 text-lg font-bold text-[#6f675f]">{selected.meaning}</p><p className="mt-4 text-lg font-bold leading-8 text-[#6f1d1b]">{selected.sentence}</p></div>
              <div className="mt-4 grid grid-cols-2 gap-3"><button disabled={audioState === 'loading'} onClick={() => speakPunjabi(`${selected.letter}। ${selected.word}। ${selected.sentence}`)} className="rounded-full bg-[#e7b650] p-4 font-black text-[#201712] disabled:opacity-50">{audioState === 'loading' ? 'Preparing…' : 'Hear native audio'}</button><button onClick={markLetter} className="rounded-full bg-[#315a45] p-4 font-black text-white">Mark learned</button></div>
            </div>
          </div>
        </section>
      )}

      {tab === 'words' && <section className="sv-container py-10"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{words.map((word) => <button key={word.en} onClick={() => speakPunjabi(word.pa)} className="rounded-[1.5rem] border border-black/10 bg-[#fffdf8] p-5 text-left shadow-sm transition hover:-translate-y-0.5"><p className="sv-kicker">Everyday word</p><p className="mt-3 text-3xl font-black text-[#6f1d1b]">{word.pa}</p><p className="mt-1 text-lg font-bold text-[#6f675f]">{word.en}</p><p className="mt-5 text-sm font-black text-[#315a45]">Hear native audio</p></button>)}</div></section>}

      {tab === 'speak' && <section className="sv-container max-w-4xl py-10"><div className="rounded-[1.75rem] border border-black/10 bg-[#fffdf8] p-6 shadow-lg"><p className="sv-kicker">Family speaking practice</p><div className="mt-6 divide-y divide-black/10">{speaking.map((item) => <button key={item.en} onClick={() => speakPunjabi(item.pa)} className="flex w-full items-center justify-between gap-5 py-5 text-left"><div><p className="text-xl font-black text-[#201712]">{item.pa}</p><p className="mt-1 text-sm font-semibold text-[#6f675f]">{item.en}</p></div><span className="rounded-full border border-black/10 px-4 py-2 text-sm font-black">Play</span></button>)}</div></div></section>}

      {tab === 'quiz' && <section className="sv-container max-w-3xl py-10"><div className="rounded-[1.75rem] border border-black/10 bg-[#fffdf8] p-6 shadow-xl"><div className="flex justify-between"><p className="sv-kicker">Mini quiz</p><p className="text-sm font-black">Score {correctCount}</p></div><div className="mt-6 text-center"><p className="text-8xl font-black text-[#6f1d1b]">{quizLetter.letter}</p><p className="mt-2 text-xl font-black">{quizLetter.word}</p><p className="mt-1 text-sm font-semibold text-[#6f675f]">What does this word mean?</p></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{quizChoices.map((choice) => { const isCorrect = choice === quizLetter.meaning; const isPicked = answer === choice; let style = 'border-black/10 bg-[#fff8e8]'; if (answer && isCorrect) style = 'border-emerald-300 bg-emerald-100'; if (answer && isPicked && !isCorrect) style = 'border-red-300 bg-red-100'; return <button key={choice} onClick={() => chooseAnswer(choice)} className={`rounded-2xl border p-4 font-black ${style}`}>{choice}</button>; })}</div>{answer && <div className="mt-5 rounded-2xl bg-[#f4efe7] p-4 text-center"><p className={`font-black ${answer === quizLetter.meaning ? 'text-emerald-700' : 'text-red-700'}`}>{answer === quizLetter.meaning ? 'Correct' : `Correct answer: ${quizLetter.meaning}`}</p><button onClick={() => { setAnswer(null); setQuizIndex((current) => current + 1); }} className="mt-3 rounded-full bg-[#1e3553] px-5 py-3 font-black text-white">Next question</button></div>}</div></section>}
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return <div className="rounded-2xl border border-white/15 bg-white/10 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#f3d9a8]">{label}</p><p className="mt-1 text-3xl font-black">{value}</p></div>;
}
