'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Story } from '../lib/stories';

export default function StoryReaderExperience({ story }: { story: Story }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [language, setLanguage] = useState<'both' | 'en' | 'pa'>('both');
  const [completed, setCompleted] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const page = story.pages[pageIndex];
  const progress = ((pageIndex + 1) / story.pages.length) * 100;

  useEffect(() => {
    window.localStorage.setItem('sanjha-last-story', story.id);
    const savedPage = window.localStorage.getItem(`sanjha-story-page-${story.id}`);
    if (savedPage) setPageIndex(Math.min(Number(savedPage), story.pages.length - 1));
    const savedCompleted = window.localStorage.getItem('sanjha-completed-stories');
    if (savedCompleted) setCompleted(JSON.parse(savedCompleted).includes(story.id));
  }, [story.id, story.pages.length]);

  useEffect(() => {
    window.localStorage.setItem(`sanjha-story-page-${story.id}`, String(pageIndex));
  }, [pageIndex, story.id]);

  const isLast = pageIndex === story.pages.length - 1;
  const isFirst = pageIndex === 0;
  const pageTone = useMemo(() => ['from-red-900 to-orange-500', 'from-purple-900 to-pink-500', 'from-emerald-900 to-lime-500'][pageIndex % 3], [pageIndex]);

  function speak() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const text = language === 'pa' ? page.pa : language === 'en' ? page.en : `${page.en}. ${page.pa}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }

  function finishStory() {
    const saved = window.localStorage.getItem('sanjha-completed-stories');
    const current: string[] = saved ? JSON.parse(saved) : [];
    if (!current.includes(story.id)) {
      window.localStorage.setItem('sanjha-completed-stories', JSON.stringify([...current, story.id]));
    }
    setCompleted(true);
  }

  function next() {
    if (!isLast) setPageIndex((current) => current + 1);
    else finishStory();
  }

  return (
    <main className="min-h-screen bg-[#130d0a] text-white">
      <section className="bg-[radial-gradient(circle_at_top_left,#f59e0b55,transparent_24%),linear-gradient(135deg,#24160f,#450a0a_60%,#111827)]">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <a href="/storybook" className="text-sm font-black text-amber-300">← Story Library</a>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-amber-200">{story.category} · {story.age}</p>
              <h1 className="mt-2 text-4xl font-black md:text-6xl">{story.title}</h1>
              <p className="mt-2 text-3xl font-black text-amber-100">{story.punjabi}</p>
            </div>
            <div className="flex gap-2 rounded-2xl bg-white/10 p-2 ring-1 ring-white/10">
              {(['both', 'en', 'pa'] as const).map((item) => <button key={item} onClick={() => setLanguage(item)} className={`rounded-xl px-4 py-2 text-sm font-black ${language === item ? 'bg-amber-300 text-slate-950' : 'text-white'}`}>{item === 'both' ? 'Both' : item === 'en' ? 'English' : 'Punjabi'}</button>)}
            </div>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-amber-300 to-orange-500 transition-all duration-500" style={{ width: `${progress}%` }} /></div>
          <div className="mt-2 flex justify-between text-xs font-black text-slate-300"><span>Page {pageIndex + 1} of {story.pages.length}</span><span>{Math.round(progress)}%</span></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#fffaf0] text-slate-950 shadow-2xl ring-4 ring-white/10">
          <div className="grid min-h-[540px] lg:grid-cols-[0.8fr_1.2fr]">
            <div className={`flex flex-col justify-between bg-gradient-to-br ${pageTone} p-8 text-white md:p-10`}>
              <div>
                <div className="flex items-center justify-between"><span className="rounded-full bg-white/15 px-4 py-2 text-xs font-black">Page {pageIndex + 1}</span><span className="text-7xl">{story.emoji}</span></div>
                <h2 className="mt-12 text-5xl font-black leading-tight">{story.title}</h2>
                <p className="mt-3 text-3xl font-black text-amber-100">{story.punjabi}</p>
              </div>
              <button onClick={speak} className="mt-8 rounded-2xl bg-white px-5 py-4 font-black text-slate-950 transition hover:scale-105">{speaking ? 'Reading aloud…' : 'Read this page aloud'}</button>
            </div>

            <div className="flex flex-col justify-between p-6 md:p-10">
              <div>
                {(language === 'both' || language === 'en') && <div><p className="text-xs font-black uppercase tracking-[0.25em] text-red-800">English</p><p className="mt-4 text-2xl font-black leading-10 text-slate-900 md:text-3xl md:leading-[3rem]">{page.en}</p></div>}
                {(language === 'both' || language === 'pa') && <div className={`${language === 'both' ? 'mt-8' : ''} rounded-[2rem] bg-amber-50 p-6 ring-1 ring-amber-200`}><p className="text-xs font-black uppercase tracking-[0.25em] text-amber-900">Punjabi</p><p className="mt-4 text-2xl font-bold leading-10 text-red-950 md:text-3xl md:leading-[3.2rem]">{page.pa}</p></div>}
              </div>

              <div className="mt-10 flex items-center justify-between gap-3">
                <button onClick={() => setPageIndex((current) => Math.max(0, current - 1))} disabled={isFirst} className="rounded-2xl bg-slate-200 px-5 py-4 font-black text-slate-700 disabled:opacity-40">← Previous</button>
                <div className="hidden gap-2 sm:flex">{story.pages.map((_, index) => <button key={index} onClick={() => setPageIndex(index)} aria-label={`Go to page ${index + 1}`} className={`h-3 w-3 rounded-full ${index === pageIndex ? 'bg-red-800' : 'bg-slate-300'}`} />)}</div>
                <button onClick={next} className={`rounded-2xl px-6 py-4 font-black ${isLast ? 'bg-emerald-500 text-white' : 'bg-amber-300 text-slate-950'}`}>{isLast ? 'Finish story' : 'Next page →'}</button>
              </div>
            </div>
          </div>
        </div>

        {completed && <div className="mt-8 rounded-[2rem] bg-emerald-100 p-6 text-center text-emerald-950 shadow-xl"><p className="text-5xl">🏆</p><h2 className="mt-3 text-3xl font-black">Story completed</h2><p className="mt-2 font-bold">You unlocked the Story Reader badge.</p></div>}

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-xl lg:col-span-2">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-800">What this story teaches</p>
            <p className="mt-4 text-xl font-black leading-8">{story.lesson}</p>
            <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-xl font-bold leading-9 text-red-950 ring-1 ring-amber-200">{story.lessonPa}</p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-800">Words collected</p>
            <div className="mt-4 flex flex-wrap gap-2">{story.words.map((word) => <span key={word} className="rounded-full bg-amber-50 px-4 py-2 text-sm font-black ring-1 ring-amber-200">{word}</span>)}</div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-300">Talk with your family</p>
          <p className="mt-4 text-2xl font-black leading-10">{story.familyQuestion}</p>
        </section>
      </section>
    </main>
  );
}
