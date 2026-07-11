'use client';

import { useMemo, useState } from 'react';

type Game = {
  id: string;
  name: string;
  punjabi: string;
  type: 'Team' | 'Strength' | 'Skill' | 'Children';
  players: string;
  setting: string;
  summary: string;
  rules: string[];
  skills: string[];
};

const games: Game[] = [
  { id: 'kabaddi', name: 'Kabaddi', punjabi: 'ਕਬੱਡੀ', type: 'Team', players: 'Two teams', setting: 'Open field or court', summary: 'Kabaddi is a contact team sport built around breath control, speed, balance, tactical raiding, and coordinated defense.', rules: ['One raider enters the opposing half', 'The raider attempts a touch and safe return', 'Defenders stop the raider without leaving bounds', 'Points reward successful raids and tackles'], skills: ['Breath control', 'Agility', 'Teamwork', 'Strength'] },
  { id: 'gulli-danda', name: 'Gulli Danda', punjabi: 'ਗੁੱਲੀ ਡੰਡਾ', type: 'Skill', players: 'Two or more players', setting: 'Open ground', summary: 'A small tapered stick is struck with a longer stick, combining timing, distance, fielding, and local rule variations.', rules: ['Place the gulli across a small groove', 'Lift it with the danda', 'Strike it while airborne', 'Measure distance or attempt a catch'], skills: ['Hand-eye coordination', 'Timing', 'Distance control', 'Field awareness'] },
  { id: 'pithu', name: 'Pithu Garam', punjabi: 'ਪਿੱਠੂ ਗਰਮ', type: 'Team', players: 'Two teams', setting: 'Courtyard or field', summary: 'Players knock down a stack of flat stones and race to rebuild it while the opposing team tries to tag them with a soft ball.', rules: ['Stack seven flat stones', 'One team throws to knock them down', 'The same team rebuilds the stack', 'The other team tags players with the ball'], skills: ['Throwing', 'Dodging', 'Team strategy', 'Speed'] },
  { id: 'kushti', name: 'Kushti', punjabi: 'ਕੁਸ਼ਤੀ', type: 'Strength', players: 'Two wrestlers', setting: 'Akhara', summary: 'Traditional wrestling emphasizes conditioning, discipline, grip, balance, respect, and supervised practice in an akhara.', rules: ['Begin from a balanced stance', 'Use legal grips and controlled movement', 'Aim to bring the opponent down safely', 'Respect the referee and training customs'], skills: ['Strength', 'Balance', 'Discipline', 'Technique'] },
  { id: 'rassa-kashi', name: 'Tug of War', punjabi: 'ਰੱਸਾਕਸ਼ੀ', type: 'Strength', players: 'Two teams', setting: 'Field or fairground', summary: 'Two teams pull opposite ends of a rope, requiring synchronized effort, footing, rhythm, and collective strength.', rules: ['Mark a center line', 'Teams grip opposite ends', 'Pull only after the signal', 'Win by moving the center marker across the line'], skills: ['Team timing', 'Grip', 'Leg strength', 'Coordination'] },
  { id: 'kanche', name: 'Marbles', punjabi: 'ਕੱਚ ਦੀਆਂ ਗੋਲੀਆਂ', type: 'Children', players: 'Two or more players', setting: 'Flat ground', summary: 'Children aim small glass marbles toward targets or circles using finger-flick techniques and locally agreed rules.', rules: ['Draw a target circle', 'Place marbles inside or mark a target', 'Take turns flicking a shooter marble', 'Score by striking or winning target marbles'], skills: ['Precision', 'Focus', 'Angle judgment', 'Fine motor control'] },
  { id: 'stapu', name: 'Stapu', punjabi: 'ਸਟਾਪੂ', type: 'Children', players: 'One or more players', setting: 'Courtyard or lane', summary: 'A numbered hopping grid challenges balance, controlled throws, and movement through marked spaces.', rules: ['Draw the grid', 'Throw a marker into the next square', 'Hop without touching boundary lines', 'Complete the full sequence'], skills: ['Balance', 'Coordination', 'Accuracy', 'Patience'] },
  { id: 'bante', name: 'Spinning Top', punjabi: 'ਲੱਟੂ', type: 'Skill', players: 'One or more players', setting: 'Hard flat ground', summary: 'A wooden top is wound with string and launched so it spins steadily, with games based on duration, accuracy, and control.', rules: ['Wrap the string tightly', 'Launch with a smooth motion', 'Keep the top inside the marked area', 'Compare spin time or target control'], skills: ['Wrist control', 'Timing', 'Practice', 'Accuracy'] },
];

export default function PunjabiGamesMuseum() {
  const [type, setType] = useState<'All' | Game['type']>('All');
  const [selected, setSelected] = useState(games[0]);
  const visible = useMemo(() => type === 'All' ? games : games.filter((game) => game.type === type), [type]);

  return (
    <main className="sv-page">
      <section className="border-b border-black/10 bg-[#1e3553] text-white">
        <div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e7b650]">Punjabi Traditional Games Museum</p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Learn the games played in fields, lanes, fairs, and courtyards.</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/68">Open one game at a time to understand its rules, skills, players, and cultural setting.</p>
          </div>
          <GameArt game={selected} large />
        </div>
      </section>

      <section className="sv-container py-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['All', 'Team', 'Strength', 'Skill', 'Children'] as const).map((value) => (
            <button key={value} onClick={() => setType(value)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${type === value ? 'bg-[#201712] text-white' : 'border border-black/10 bg-[#fffdf8]'}`}>{value}</button>
          ))}
        </div>
      </section>

      <section className="sv-container pb-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {visible.map((game) => (
              <button key={game.id} onClick={() => setSelected(game)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id === game.id ? 'border-[#1e3553] bg-[#f3f6fa] shadow-lg' : 'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}>
                <GameArt game={game} compact />
                <div>
                  <p className="font-serif text-xl font-bold">{game.name}</p>
                  <p className="mt-1 font-black text-[#6f1d1b]">{game.punjabi}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{game.type}</p>
                </div>
              </button>
            ))}
          </aside>

          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
            <div className="grid gap-8 bg-[#f0e5d4] p-7 md:grid-cols-[1fr_0.72fr] md:items-center md:p-10">
              <div>
                <p className="sv-kicker">{selected.setting}</p>
                <h2 className="mt-3 font-serif text-5xl font-bold tracking-[-0.03em]">{selected.name}</h2>
                <p className="mt-2 text-3xl font-black text-[#6f1d1b]">{selected.punjabi}</p>
                <p className="mt-5 text-base font-medium leading-8 text-[#5f564d]">{selected.summary}</p>
              </div>
              <GameArt game={selected} />
            </div>

            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_18rem]">
              <section>
                <p className="sv-kicker">How to play</p>
                <div className="mt-5 space-y-3">
                  {selected.rules.map((rule, index) => (
                    <div key={rule} className="grid grid-cols-[2.6rem_1fr] gap-4 rounded-2xl border border-black/10 bg-[#fff8e8] p-4">
                      <span className="font-serif text-xl font-bold text-[#1e3553]">{String(index + 1).padStart(2, '0')}</span>
                      <p className="font-semibold leading-7">{rule}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-black/10 pt-8">
                  <p className="sv-kicker">Skills developed</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selected.skills.map((skill) => <div key={skill} className="rounded-2xl border border-black/10 bg-[#fffdf8] p-4 font-serif text-xl font-bold">{skill}</div>)}
                  </div>
                </div>
              </section>

              <aside className="space-y-5">
                <div className="rounded-[1.5rem] bg-[#201712] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e7b650]">Players</p><p className="mt-4 font-serif text-2xl font-bold">{selected.players}</p></div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6"><p className="sv-kicker">Game type</p><p className="mt-4 font-serif text-2xl font-bold">{selected.type}</p></div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function GameArt({ game, compact = false, large = false }: { game: Game; compact?: boolean; large?: boolean }) {
  const className = compact ? 'h-20 w-20 rounded-2xl border border-black/10 bg-[#f5e7ca]' : large ? 'w-full rounded-[2rem] border border-white/10 bg-[#f5e7ca] p-4 shadow-2xl' : 'w-full rounded-[1.5rem] border border-black/10 bg-[#f5e7ca] p-3';
  return (
    <svg viewBox="0 0 420 320" role="img" aria-label={`${game.name} illustration`} className={className}>
      <rect width="420" height="320" rx="24" fill="#f5e7ca" />
      <circle cx="335" cy="58" r="28" fill="#d99a22" />
      <path d="M0 242C95 202 190 214 280 248C340 271 385 266 420 248V320H0V242Z" fill="#d8bd7b" />
      <path d="M0 278C96 250 192 258 288 286C345 302 388 298 420 286V320H0V278Z" fill="#7c9b62" />
      {game.id === 'kabaddi' && <><circle cx="150" cy="118" r="24" fill="#c98a72"/><circle cx="270" cy="120" r="24" fill="#c98a72"/><path d="M150 145v80M270 147v78M150 170l58 24M270 170l-58 24M150 225l-32 48M150 225l35 45M270 225l-35 45M270 225l32 48" stroke="#1e3553" strokeWidth="14" strokeLinecap="round"/></>}
      {game.id === 'gulli-danda' && <><path d="M118 236 300 92" stroke="#8a5b1f" strokeWidth="14" strokeLinecap="round"/><path d="M155 230 245 214" stroke="#6f1d1b" strokeWidth="11" strokeLinecap="round"/><circle cx="105" cy="126" r="22" fill="#c98a72"/><path d="M105 150v70M105 172l58 26M105 220l-28 48M105 220l30 48" stroke="#1e3553" strokeWidth="13" strokeLinecap="round"/></>}
      {game.id === 'pithu' && <><path d="M210 245h-90l18-22h144l18 22h-90Z" fill="#8a5b1f"/><path d="M160 215h100l-15-20h-70l-15 20ZM180 187h60l-12-18h-36l-12 18Z" fill="#6f675f"/><circle cx="100" cy="150" r="22" fill="#c98a72"/><path d="M100 174v66M100 194l60 16M100 240l-28 38M100 240l28 38" stroke="#1e3553" strokeWidth="13" strokeLinecap="round"/><circle cx="170" cy="210" r="14" fill="#d99a22"/></>}
      {game.id === 'kushti' && <><circle cx="155" cy="118" r="24" fill="#c98a72"/><circle cx="265" cy="118" r="24" fill="#c98a72"/><path d="M155 144l38 62M265 144l-38 62M155 160l76 12M265 160l-76 12M193 206l-28 58M193 206l28 58M227 206l-28 58M227 206l28 58" stroke="#6f1d1b" strokeWidth="14" strokeLinecap="round"/></>}
      {game.id === 'rassa-kashi' && <><path d="M72 190h276" stroke="#8a5b1f" strokeWidth="12"/><circle cx="120" cy="130" r="20" fill="#c98a72"/><circle cx="300" cy="130" r="20" fill="#c98a72"/><path d="M120 152v72M300 152v72M120 178l58 12M300 178l-58 12M120 224l-28 45M120 224l28 45M300 224l-28 45M300 224l28 45" stroke="#1e3553" strokeWidth="13" strokeLinecap="round"/></>}
      {game.id === 'kanche' && <>{[150,195,240,285].map((x,i)=><circle key={x} cx={x} cy={210+(i%2)*14} r="22" fill={i%2 ? '#1e3553' : '#d99a22'} stroke="#fffdf8" strokeWidth="5"/>)}<path d="M88 244c20-42 50-60 90-54" stroke="#6f1d1b" strokeWidth="10" fill="none" strokeLinecap="round"/></>}
      {game.id === 'stapu' && <><path d="M160 270h100v-54H160zM160 206h46v-54h-46zM214 206h46v-54h-46zM160 142h100V88H160z" fill="none" stroke="#1e3553" strokeWidth="7"/><circle cx="105" cy="118" r="21" fill="#c98a72"/><path d="M105 142v66M105 164l48 18M105 208l-14 56M105 208l42 30" stroke="#6f1d1b" strokeWidth="13" strokeLinecap="round"/></>}
      {game.id === 'bante' && <><path d="M210 92 270 178 210 248 150 178 210 92Z" fill="#a85d2a" stroke="#6f1d1b" strokeWidth="8"/><path d="M210 248v34" stroke="#6f1d1b" strokeWidth="8"/><path d="M162 178h96M180 140h60M180 216h60" stroke="#d99a22" strokeWidth="6"/></>}
    </svg>
  );
}
