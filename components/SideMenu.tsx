'use client';

import { useState } from 'react';

type NavItem = { label: string; href: string };
type NavGroup = { label: string; items: NavItem[] };

const groups: NavGroup[] = [
  { label: 'Learn', items: [
    { label: 'Kids Hub', href: '/kids' }, { label: 'Punjabi Language', href: '/language' },
    { label: 'Stories', href: '/storybook' }, { label: 'Kids Quiz', href: '/quiz' },
  ]},
  { label: 'History', items: [
    { label: 'Sikh History', href: '/heritage' }, { label: 'Punjab Through Time', href: '/timeline' },
    { label: 'Punjab History', href: '/worlds/history' }, { label: 'Punjab Cities', href: '/cities' }, { label: 'Maps', href: '/maps' },
  ]},
  { label: 'Culture', items: [
    { label: 'Living Punjab', href: '/living-punjab' }, { label: 'Culture Library', href: '/culture' },
    { label: 'Food Museum', href: '/food' }, { label: 'Clothing Museum', href: '/clothing' },
    { label: 'Music Museum', href: '/music' }, { label: 'Folk Dance Museum', href: '/dances' },
    { label: 'Festivals Museum', href: '/festivals' }, { label: 'Village Life Museum', href: '/village-life' },
    { label: 'Traditional Games', href: '/games' }, { label: 'Cultural Objects', href: '/objects' },
    { label: 'Architecture Museum', href: '/architecture' }, { label: 'Literature Museum', href: '/literature' },
    { label: 'Proverbs Museum', href: '/proverbs' }, { label: 'Folk Tales Museum', href: '/folk-tales' },
  ]},
];

export default function SideMenu() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-black/10 bg-[#fffdf8]/95 px-4 backdrop-blur lg:hidden">
      <a href="/" className="min-w-0"><span className="block truncate text-sm font-black uppercase tracking-[0.18em] text-[#6f1d1b]">Sanjha Virsa</span><span className="block text-base font-bold text-[#201712]">ਸਾਂਝਾ ਵਿਰਸਾ</span></a>
      <button type="button" aria-label="Open navigation" aria-expanded={open} onClick={() => setOpen(v => !v)} className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-[#201712] shadow-sm">{open ? <CloseIcon/> : <MenuIcon/>}</button>
    </header>
    {open && <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-black/35 lg:hidden" />}
    <aside className={`fixed inset-y-0 left-0 z-50 w-[86vw] max-w-[19rem] border-r border-white/10 bg-[#201712] text-white shadow-2xl transition-transform duration-300 lg:w-[17rem] lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 px-6 py-6"><div className="flex items-start justify-between gap-4">
          <a href="/" onClick={() => setOpen(false)}><p className="text-xs font-black uppercase tracking-[0.25em] text-[#e7b650]">Sanjha Virsa</p><p className="mt-1 text-2xl font-bold">ਸਾਂਝਾ ਵਿਰਸਾ</p><p className="mt-2 max-w-[13rem] text-xs leading-5 text-white/60">Punjabi heritage, language, history, and culture.</p></a>
          <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/80 lg:hidden"><CloseIcon/></button>
        </div></div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <a href="/" onClick={() => setOpen(false)} className="mb-4 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-white/85 hover:bg-white/10"><MiniArt href="/"/><span>Home</span><Chevron/></a>
          {groups.map(group => <section key={group.label} className="mb-5"><p className="mb-2 px-3 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#e7b650]">{group.label}</p><div className="space-y-1">
            {group.items.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-white/78 transition hover:bg-white/10 hover:text-white"><MiniArt href={item.href}/><span className="flex-1">{item.label}</span><Chevron/></a>)}
          </div></section>)}
        </nav>
        <div className="border-t border-white/10 px-6 py-4 text-xs leading-5 text-white/45">Free cultural learning for Punjabi families worldwide.<p className="mt-2 font-bold uppercase tracking-[0.12em] text-[#e7b650]">Atwal Solutions</p></div>
      </div>
    </aside>
  </>;
}

function MiniArt({ href }: { href: string }) {
  const key = href.split('/').pop() || 'home';
  const bg = key === 'music' ? '#6f1d1b' : key === 'dances' ? '#315a45' : key === 'festivals' ? '#d99a22' : key === 'village-life' ? '#8a5b1f' : key === 'games' ? '#365f73' : key === 'objects' ? '#8e4937' : key === 'architecture' ? '#b47a2a' : key === 'literature' ? '#385747' : key === 'proverbs' ? '#7a3d2d' : key === 'folk-tales' ? '#5c3c74' : '#4d6659';
  return <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-[#f4dfb8] shadow-sm"><svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true"><rect width="40" height="40" rx="10" fill="#f4dfb8"/><circle cx="31" cy="9" r="5" fill="#e0a52f"/><path d="M0 31c10-6 22-6 40 1v8H0z" fill="#d1b271"/>{key === 'music' ? <><circle cx="16" cy="23" r="7" fill={bg}/><path d="M23 10v16M23 10l9-2v5l-9 2" stroke="#5a351d" strokeWidth="3" fill="none"/><circle cx="23" cy="28" r="4" fill="#5a351d"/></> : key === 'dances' ? <><circle cx="14" cy="12" r="4" fill="#c98a72"/><circle cx="27" cy="12" r="4" fill="#c98a72"/><path d="M14 16v13M27 16v13M14 19l-7 5M27 19l7 5" stroke={bg} strokeWidth="4" strokeLinecap="round"/><path d="M10 29h8M23 29h8" stroke="#6f1d1b" strokeWidth="4"/></> : key === 'festivals' ? <><path d="M8 27h24l-5-14H13z" fill={bg}/><path d="M12 13h16" stroke="#6f1d1b" strokeWidth="3"/><path d="M30 7l5 8M35 7l-5 8" stroke="#315a45" strokeWidth="2"/></> : key === 'village-life' ? <><path d="M8 21 20 12l12 9v11H8z" fill={bg}/><path d="M12 21v11M28 21v11M17 32v-7h6v7" stroke="#fff1d0" strokeWidth="2"/></> : key === 'games' ? <><circle cx="14" cy="17" r="4" fill="#c98a72"/><circle cx="27" cy="17" r="4" fill="#c98a72"/><path d="M9 29c2-6 8-6 10 0M22 29c2-6 8-6 10 0" fill={bg}/><circle cx="20" cy="29" r="2" fill="#d99a22"/></> : key === 'objects' ? <><path d="M10 12h12v19H10z" fill={bg}/><path d="M22 17h9v14h-9z" fill="#315a45"/><path d="M12 17h8M12 22h8M24 21h5" stroke="#f0c15e" strokeWidth="2"/></> : key === 'architecture' ? <><path d="M7 29h26M10 29V17h20v12M14 17v-5h12v5M16 29v-7h8v7" stroke={bg} strokeWidth="3" fill="#fff1d0"/></> : key === 'literature' ? <><path d="M7 13c7-3 11-1 13 2v17c-3-3-7-4-13-2zM33 13c-7-3-11-1-13 2v17c3-3 7-4 13-2z" fill="#fffdf8" stroke={bg} strokeWidth="2"/></> : key === 'proverbs' ? <><path d="M8 11h23v19H8z" fill="#fff6df" stroke={bg} strokeWidth="2"/><path d="M12 16h15M12 21h11M12 26h13" stroke="#8a5b1f" strokeWidth="2"/></> : key === 'folk-tales' ? <><path d="M9 12c7-3 10-1 11 2v17c-3-3-6-4-11-2zM31 12c-7-3-10-1-11 2v17c3-3 6-4 11-2z" fill="#fffdf8" stroke={bg} strokeWidth="2"/><circle cx="20" cy="9" r="4" fill="#d99a22"/></> : <><path d="M8 28 20 13l12 15" fill={bg}/><circle cx="20" cy="14" r="4" fill="#d99a22"/></>}</svg></span>;
}

function Chevron(){return <svg className="h-4 w-4 shrink-0 text-white/45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 5 7 7-7 7"/></svg>}
function MenuIcon(){return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}
function CloseIcon(){return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M18 6 6 18"/></svg>}
