'use client';

import { useMemo, useState } from 'react';

const quizCards = [
  {
    question: 'What does Punjab mean?',
    choices: ['Land of five rivers', 'Land of mountains', 'Land of deserts'],
    correct: 'Land of five rivers',
    reward: 'River Keeper',
    explanation: 'Punjab comes from words connected to five waters or five rivers.',
  },
  {
    question: 'What does seva mean?',
    choices: ['Serving others', 'Buying food', 'Only dancing'],
    correct: 'Serving others',
    reward: 'Seva Star',
    explanation: 'Seva means serving others with humility and love.',
  },
  {
    question: 'Which writing system is used for Punjabi in Indian Punjab?',
    choices: ['Gurmukhi', 'Latin', 'Greek'],
    correct: 'Gurmukhi',
    reward: 'Akhar Master',
    explanation: 'Gurmukhi is the script widely used for Punjabi in Indian Punjab.',
  },
  {
    question: 'What is langar connected with?',
    choices: ['Sharing and equality', 'Only music', 'Only farming'],
    correct: 'Sharing and equality',
    reward: 'Langar Helper',
    explanation: 'Langar teaches equality, humility, sharing, and service.',
  },
  {
    question: 'Which one is a Punjabi folk dance?',
    choices: ['Bhangra', 'Ballet only', 'Salsa only'],
    correct: 'Bhangra',
    reward: 'Dhol Champion',
    explanation: 'Bhangra is a well-known Punjabi folk dance connected with rhythm and celebration.',
  },
];

export default function QuizPage() {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [streak, setStreak] = useState(0);

  const score = useMemo(
    () => quizCards.filter((card, index) => selected[index] === card.correct).length,
    [selected],
  );

  function choose(index: number, choice: string) {
    if (selected[index]) return;
    const isCorrect = choice === quizCards[index].correct;
    setSelected((current) => ({ ...current, [index]: choice }));
    setStreak((current) => (isCorrect ? current + 1 : 0));
  }

  function resetQuiz() {
    setSelected({});
    setStreak(0);
  }

  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[radial-gradient(circle_at_top_left,#fef08a,transparent_28%),linear-gradient(135deg,#4c1d95,#7f1d1d_55%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-200">Kids Quiz Arcade</p>
          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">Tap. Learn. Win badges.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100">Instant right/wrong feedback, streaks, score, rewards, and simple explanations. This is the first dopamine loop for Sanjha Virsa.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-3xl bg-white/15 p-5 ring-1 ring-white/20">
              <p className="text-sm text-amber-100">Score</p>
              <p className="text-4xl font-black">{score}/{quizCards.length}</p>
            </div>
            <div className="rounded-3xl bg-white/15 p-5 ring-1 ring-white/20">
              <p className="text-sm text-amber-100">Streak</p>
              <p className="text-4xl font-black">{streak}</p>
            </div>
            <div className="rounded-3xl bg-white/15 p-5 ring-1 ring-white/20 md:col-span-2">
              <p className="text-sm text-amber-100">Reward Path</p>
              <p className="text-2xl font-black">{score === quizCards.length ? 'Virsa Champion unlocked' : 'Answer all questions to unlock champion mode'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {quizCards.map((card, index) => {
            const picked = selected[index];
            const answered = Boolean(picked);
            const correct = picked === card.correct;

            return (
              <article key={card.question} className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-black/10">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-purple-800">Question {index + 1}</p>
                  {answered && (
                    <span className={`rounded-full px-4 py-2 text-sm font-black ${correct ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                      {correct ? 'Correct' : 'Wrong'}
                    </span>
                  )}
                </div>

                <h2 className="mt-4 text-2xl font-black">{card.question}</h2>

                <div className="mt-5 grid gap-3">
                  {card.choices.map((choice) => {
                    const isCorrectChoice = choice === card.correct;
                    const isPicked = picked === choice;
                    let style = 'bg-amber-50 ring-amber-200 hover:bg-amber-100 hover:scale-[1.02]';

                    if (answered && isCorrectChoice) style = 'bg-emerald-100 ring-emerald-300 scale-[1.02]';
                    if (answered && isPicked && !isCorrectChoice) style = 'bg-red-100 ring-red-300';

                    return (
                      <button
                        key={choice}
                        onClick={() => choose(index, choice)}
                        className={`rounded-2xl p-4 text-left font-black ring-2 transition ${style}`}
                      >
                        {choice}
                      </button>
                    );
                  })}
                </div>

                {answered && (
                  <div className={`mt-5 rounded-2xl p-5 ring-1 ${correct ? 'bg-emerald-50 ring-emerald-200' : 'bg-red-50 ring-red-200'}`}>
                    <p className="text-xl font-black">{correct ? `Badge unlocked: ${card.reward}` : 'Try again next round'}</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{card.explanation}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] bg-[#24160f] p-6 text-white shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">Arcade Result</p>
              <h2 className="mt-2 text-3xl font-black">{score === quizCards.length ? 'Full score. Virsa Champion.' : 'Keep going. One more correct answer builds memory.'}</h2>
            </div>
            <button onClick={resetQuiz} className="rounded-2xl bg-amber-300 px-6 py-4 font-black text-slate-950">Play again</button>
          </div>
        </div>
      </section>
    </main>
  );
}
