'use client';

import { useMemo, useState } from 'react';

type Instrument = { id:string; name:string; punjabi:string; family:'Rhythm'|'String'|'Wind'; origin:string; played:string; sound:string; culture:string; color:string };

const instruments: Instrument[] = [
  { id:'dhol', name:'Dhol', punjabi:'ਢੋਲ', family:'Rhythm', origin:'Across Punjab', played:'Struck with two sticks, one heavier and one lighter.', sound:'Deep bass on one side and a sharp crack on the other.', culture:'The driving heartbeat of bhangra, weddings, harvest celebrations, and processions.', color:'#6f1d1b' },
  { id:'tumbi', name:'Tumbi', punjabi:'ਤੂੰਬੀ', family:'String', origin:'Punjab folk tradition', played:'A single string is plucked while the neck is held upright.', sound:'Bright, quick, repeating notes that cut through a full ensemble.', culture:'Closely associated with folk singing, energetic dance songs, and modern Punjabi music.', color:'#8a5b1f' },
  { id:'algoza', name:'Algoza', punjabi:'ਅਲਗੋਜ਼ਾ', family:'Wind', origin:'Punjab and adjoining regions', played:'Two wooden flutes are played together using continuous breath control.', sound:'One pipe carries melody while the other provides rhythm or drone.', culture:'Heard in pastoral music, folk performance, and stories of herders and travellers.', color:'#315a45' },
  { id:'chimta', name:'Chimta', punjabi:'ਚਿਮਟਾ', family:'Rhythm', origin:'Household tool adapted into music', played:'The metal arms are struck together so the attached jingles ring.', sound:'Metallic clacks with bright jingling accents.', culture:'Common in devotional, folk, and celebratory singing where portability matters.', color:'#6b7280' },
  { id:'sarangi', name:'Sarangi', punjabi:'ਸਾਰੰਗੀ', family:'String', origin:'North Indian classical and folk traditions', played:'Bowed vertically while sympathetic strings enrich the tone.', sound:'Expressive, voice-like, and capable of deep emotional ornamentation.', culture:'Supports narrative singing, classical performance, and regional folk traditions.', color:'#7a3d2d' },
  { id:'bugchu', name:'Bugchu', punjabi:'ਬੁਗਚੂ', family:'Rhythm', origin:'Punjab folk performance', played:'A string attached to a small drum is pulled and plucked to bend pitch.', sound:'A playful twang that changes pitch with hand pressure.', culture:'Used for comic timing, folk singing, and lively village performance.', color:'#b47a2a' },
  { id:'dilruba', name:'Dilruba', punjabi:'ਦਿਲਰੁਬਾ', family:'String', origin:'Sikh and North Indian musical traditions', played:'Bowed across strings while frets guide the melody.', sound:'Smooth, sustained, and devotional in character.', culture:'Associated with Sikh musical heritage and refined melodic accompaniment.', color:'#385747' },
  { id:'been', name:'Been', punjabi:'ਬੀਨ', family:'Wind', origin:'South Asian folk tradition', played:'Air flows through a gourd chamber into two reed pipes.', sound:'Continuous, reedy, and hypnotic.', culture:'Connected with itinerant performers, folk spectacle, and oral storytelling.', color:'#5c3c74' },
];

const families = ['All','Rhythm','String','Wind'] as const;

export default function InstrumentsMuseum(){
  const [family,setFamily]=useState<(typeof families)[number]>('All');
  const [selected,setSelected]=useState(instruments[0]);
  const visible=useMemo(()=>family==='All'?instruments:instruments.filter(i=>i.family===family),[family]);
  function choose(value:(typeof families)[number]){setFamily(value); const first=value==='All'?instruments[0]:instruments.find(i=>i.family===value); if(first)setSelected(first)}
  return <main className="sv-page">
    <section className="border-b border-black/10 bg-[#263e35] text-white"><div className="sv-container grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
      <div><p className="text-xs font-black uppercase tracking-[0.24em] text-[#f0cc83]">Punjabi Instruments Museum</p><h1 className="mt-5 max-w-[12ch] font-serif text-5xl font-bold leading-[0.97] tracking-[-0.04em] md:text-7xl">Hear the craft behind Punjab's rhythm and melody.</h1><p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/72">Explore how Punjabi instruments are built, played, heard, and connected to dance, devotion, storytelling, and celebration.</p></div>
      <InstrumentArt item={selected} large />
    </div></section>
    <section className="sv-container py-8"><div className="flex gap-2 overflow-x-auto pb-2">{families.map(v=><button key={v} type="button" onClick={()=>choose(v)} className={`min-w-max rounded-full px-5 py-3 text-sm font-black ${family===v?'bg-[#201712] text-white':'border border-black/10 bg-[#fffdf8]'}`}>{v}</button>)}</div></section>
    <section className="sv-container pb-14 md:pb-20"><div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
      <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">{visible.map(item=><button key={item.id} type="button" onClick={()=>setSelected(item)} className={`grid w-full grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition ${selected.id===item.id?'border-[#293f36] bg-[#f4f1df] shadow-lg':'border-black/10 bg-[#fffdf8] hover:-translate-y-0.5'}`}><InstrumentArt item={item}/><div><p className="font-serif text-xl font-bold">{item.name}</p><p className="mt-1 font-black text-[#6f1d1b]">{item.punjabi}</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6f675f]">{item.family}</p></div></button>)}</aside>
      <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffdf8] shadow-[0_22px_60px_rgba(54,35,24,0.1)]">
        <div className="grid gap-8 bg-[#eee7d7] p-7 md:grid-cols-[1fr_0.72fr] md:items-center md:p-10"><div><p className="sv-kicker">{selected.origin}</p><h2 className="mt-3 font-serif text-5xl font-bold tracking-[-0.03em]">{selected.name}</h2><p className="mt-2 text-3xl font-black text-[#6f1d1b]">{selected.punjabi}</p></div><InstrumentArt item={selected} large /></div>
        <div className="grid gap-5 p-7 md:grid-cols-3 md:p-10"><Info title="How it is played" text={selected.played}/><Info title="What it sounds like" text={selected.sound}/><Info title="Cultural role" text={selected.culture}/></div>
      </article>
    </div></section>
    <section className="border-t border-black/10 bg-[#6f1d1b] text-white"><div className="sv-container grid gap-8 py-14 md:grid-cols-[0.75fr_1.25fr] md:items-center"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#f0cc83]">Audio-ready foundation</p><h2 className="mt-4 font-serif text-4xl font-bold">Built for future sound samples.</h2></div><p className="text-base font-medium leading-8 text-white/72">Each instrument record is structured so authentic recordings, regional variations, performer credits, and educational listening exercises can be added without redesigning the museum.</p></div></section>
  </main>
}

function Info({title,text}:{title:string;text:string}){return <section className="rounded-[1.5rem] border border-black/10 bg-[#fff8e8] p-6"><p className="sv-kicker">{title}</p><p className="mt-4 text-base font-medium leading-8 text-[#4f473f]">{text}</p></section>}

function InstrumentArt({item,large=false}:{item:Instrument;large?:boolean}){
  return <svg viewBox="0 0 420 320" role="img" aria-label={`${item.name} illustration`} className={`${large?'w-full rounded-[1.5rem] p-3':'h-20 w-20 rounded-2xl'} border border-black/10 bg-[#f5e7ca]`}><rect width="420" height="320" rx="24" fill="#f5e7ca"/><circle cx="340" cy="55" r="28" fill="#d99a22"/><path d="M0 270c90-35 190-36 285 0 55 22 98 19 135 7v43H0z" fill="#d8bd7b"/>{shape(item)}</svg>
}

function shape(item:Instrument){
  if(item.id==='dhol')return <><ellipse cx="210" cy="190" rx="110" ry="62" fill={item.color} stroke="#8a5b1f" strokeWidth="18"/><path d="M105 190h210M145 140l-28 100M275 140l28 100" stroke="#f4dfb8" strokeWidth="12"/><path d="M120 95 95 155M300 95l25 60" stroke="#315a45" strokeWidth="12" strokeLinecap="round"/></>;
  if(item.id==='tumbi')return <><circle cx="170" cy="225" r="62" fill="#d99a22" stroke="#8a5b1f" strokeWidth="14"/><path d="M190 180 260 55M260 55l35 18-18 28" stroke={item.color} strokeWidth="18" fill="none" strokeLinecap="round"/><path d="M180 220 270 75" stroke="#fff8e8" strokeWidth="5"/></>;
  if(item.id==='algoza')return <><path d="M145 65v190M235 65v190" stroke={item.color} strokeWidth="28" strokeLinecap="round"/><circle cx="145" cy="110" r="8" fill="#f5e7ca"/><circle cx="145" cy="150" r="8" fill="#f5e7ca"/><circle cx="235" cy="125" r="8" fill="#f5e7ca"/><circle cx="235" cy="170" r="8" fill="#f5e7ca"/><path d="M120 62h140" stroke="#8a5b1f" strokeWidth="14"/></>;
  if(item.id==='chimta')return <><path d="M145 65c0 95 25 160 65 200M275 65c0 95-25 160-65 200" stroke={item.color} strokeWidth="18" fill="none" strokeLinecap="round"/><circle cx="160" cy="115" r="15" fill="#d99a22"/><circle cx="260" cy="115" r="15" fill="#d99a22"/><circle cx="180" cy="175" r="15" fill="#d99a22"/><circle cx="240" cy="175" r="15" fill="#d99a22"/></>;
  if(item.id==='sarangi'||item.id==='dilruba')return <><path d="M160 95h100l-10 145H170z" fill={item.color} stroke="#8a5b1f" strokeWidth="14"/><path d="M210 40v210" stroke="#6f1d1b" strokeWidth="16"/><path d="M120 75c80 55 120 105 165 185" stroke="#315a45" strokeWidth="10" fill="none"/></>;
  if(item.id==='bugchu')return <><circle cx="165" cy="220" r="58" fill={item.color} stroke="#6f1d1b" strokeWidth="14"/><path d="M165 165 265 75" stroke="#315a45" strokeWidth="10"/><path d="M260 70h35v80" stroke="#8a5b1f" strokeWidth="16" fill="none"/></>;
  return <><ellipse cx="175" cy="175" rx="75" ry="95" fill="#8a5b1f"/><path d="M175 85v175M175 110 280 75M175 140 285 125" stroke={item.color} strokeWidth="18" strokeLinecap="round"/><circle cx="245" cy="92" r="10" fill="#f5e7ca"/><circle cx="255" cy="137" r="10" fill="#f5e7ca"/></>;
}
