const quizCards = [
  {
    question: 'What does Punjab mean?',
    choices: ['Land of five rivers', 'Land of mountains', 'Land of deserts'],
    correct: 'Land of five rivers',
  },
  {
    question: 'What does seva mean?',
    choices: ['Serving others', 'Buying food', 'Only dancing'],
    correct: 'Serving others',
  },
  {
    question: 'Which writing system is used for Punjabi in Indian Punjab?',
    choices: ['Gurmukhi', 'Latin', 'Greek'],
    correct: 'Gurmukhi',
  },
  {
    question: 'What is langar connected with?',
    choices: ['Sharing and equality', 'Only music', 'Only farming'],
    correct: 'Sharing and equality',
  },
];

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-[#fff8ed] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#4c1d95,#7f1d1d_55%,#f59e0b)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-200">Kids Quiz</p>
          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">Play, answer, remember</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100">This is the first quiz foundation. Next version will add tap-to-answer state, badges, sound, scores, streaks, and levels.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {quizCards.map((card, index) => (
            <article key={card.question} className="rounded-[2rem] bg-white p-6 shadow-md ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-purple-800">Question {index + 1}</p>
              <h2 className="mt-4 text-2xl font-black">{card.question}</h2>
              <div className="mt-5 grid gap-3">
                {card.choices.map((choice) => (
                  <div key={choice} className="rounded-2xl bg-amber-50 p-4 font-black ring-1 ring-amber-200">{choice}</div>
                ))}
              </div>
              <details className="mt-5 rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-200">
                <summary className="cursor-pointer font-black text-emerald-800">Show correct choice</summary>
                <p className="mt-3 font-black">{card.correct}</p>
              </details>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
