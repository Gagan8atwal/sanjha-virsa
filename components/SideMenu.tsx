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
    { label: 'Music Museum', href: '/music' }, { label: 'Instruments Museum', href: '/instruments' },
    { label: 'Folk Dance Museum', href: '/dances' }, { label: 'Festivals Museum', href: '/festivals' },
    { label: 'Village Life Museum', href: '/village-life' }, { label: 'Traditional Games', href: '/games' },
    { label: 'Cultural Objects', href: '/objects' }, { label: 'Architecture Museum', href: '/architecture' },
    { label: 'Literature Museum', href: '/literature' }, { label: 'Proverbs Museum', href: '/proverbs' },
    { label: 'Folk Tales Museum', href: '/folk-tales' },
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
          <NavLink item={{label:'Home',href:'/'}} close={() => setOpen(false)} />
          {groups.map(group => <section key={group.label} className="mb-5"><p className="mb-2 px-3 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#e7b650]">{group.label}</p><div className="space-y-1">
            {group.items.map(item => <NavLink key={item.href} item={item} close={() => setOpen(false)} />)}
          </div></section>)}
        </nav>
        <div className="border-t border-white/10 px-6 py-4 text-xs leading-5 text-white/45">Free cultural learning for Punjabi families worldwide.<p className="mt-2 font-bold uppercase tracking-[0.12em] text-[#e7b650]">Atwal Solutions</p></div>
      </div>
    </aside>
  </>;
}

function NavLink({ item, close }: { item: NavItem; close: () => void }) {
  return <a href={item.href} onClick={close} className="flex min-h-14 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-white/78 transition hover:bg-white/10 hover:text-white"><MiniArt href={item.href}/><span className="flex-1">{item.label}</span><Chevron/></a>;
}

function MiniArt({ href }: { href: string }) {
  const k = href === '/' ? 'home' : href.split('/').pop() || 'home';
  return <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-[#f4dfb8] shadow-sm"><svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true"><rect width="40" height="40" rx="10" fill="#f4dfb8"/>{art(k)}</svg></span>;
}

function art(k: string) {
  switch (k) {
    case 'home': return <><path d="M6 22 20 10l14 12v12H6z" fill="#8a5b1f"/><path d="M12 34V23h16v11M17 34v-7h6v7" stroke="#fff3d2" strokeWidth="2"/><circle cx="31" cy="9" r="4" fill="#d99a22"/></>;
    case 'kids': return <><circle cx="13" cy="12" r="4" fill="#c98a72"/><circle cx="27" cy="12" r="4" fill="#c98a72"/><path d="M8 30c1-9 9-9 10 0M22 30c1-9 9-9 10 0" fill="#315a45"/><path d="M12 20h16v10H12z" fill="#fffdf8" stroke="#6f1d1b" strokeWidth="2"/></>;
    case 'language': return <><path d="M7 8h26v24H7z" fill="#fff6df" stroke="#8a5b1f" strokeWidth="2"/><path d="M12 15h16M12 21h11M12 27h14" stroke="#6f1d1b" strokeWidth="2"/><path d="m27 31 6-8" stroke="#315a45" strokeWidth="3"/></>;
    case 'storybook': return <><path d="M5 12c7-3 12-1 15 3v18c-4-3-9-4-15-2zM35 12c-7-3-12-1-15 3v18c4-3 9-4 15-2z" fill="#fffdf8" stroke="#315a45" strokeWidth="2"/><path d="M20 15v18" stroke="#8a5b1f" strokeWidth="2"/><circle cx="20" cy="9" r="4" fill="#d99a22"/></>;
    case 'quiz': return <><path d="M9 8h22v26H9z" fill="#fffdf8" stroke="#8a5b1f" strokeWidth="2"/><path d="M14 15h9M14 22h7M14 29h10" stroke="#315a45" strokeWidth="2"/><circle cx="29" cy="26" r="6" fill="#6f1d1b"/><path d="M27 24c0-3 5-3 5 0 0 2-2 2-2 4M30 31h.1" stroke="white" strokeWidth="1.5"/></>;
    case 'heritage': return <><path d="M20 5v30M10 12c4 5 6 7 10 8M30 12c-4 5-6 7-10 8M10 28c4-5 6-7 10-8M30 28c-4-5-6-7-10-8" stroke="#d99a22" strokeWidth="3" strokeLinecap="round"/></>;
    case 'timeline': return <><path d="M12 6h16M12 34h16M14 8c0 8 12 8 12 16s-12 8-12 8M26 8c0 8-12 8-12 16s12 8 12 8" stroke="#315a45" strokeWidth="2" fill="none"/><path d="M15 28h10" stroke="#d99a22" strokeWidth="4"/></>;
    case 'history': return <><path d="M9 7h22v27H9z" fill="#7a3d2d" stroke="#d99a22" strokeWidth="2"/><path d="M14 14h12M14 20h10M14 26h12" stroke="#f4dfb8" strokeWidth="2"/></>;
    case 'cities': return <><path d="M6 31h28M9 31V17h22v14M13 17v-6h14v6M16 31v-8h8v8" stroke="#b47a2a" strokeWidth="2.5" fill="#fff1d0"/></>;
    case 'maps': return <><path d="m5 11 10-4 10 4 10-4v24l-10 4-10-4-10 4z" fill="#fffdf8" stroke="#315a45" strokeWidth="2"/><path d="M15 7v24M25 11v24" stroke="#8a5b1f" strokeWidth="2"/><circle cx="29" cy="15" r="4" fill="#6f1d1b"/></>;
    case 'living-punjab': return <><circle cx="12" cy="12" r="4" fill="#c98a72"/><circle cx="20" cy="10" r="4" fill="#c98a72"/><circle cx="28" cy="12" r="4" fill="#c98a72"/><path d="M7 31c1-9 9-9 10 0M15 31c1-11 9-11 10 0M23 31c1-9 9-9 10 0" fill="#6f1d1b"/></>;
    case 'culture': return <><path d="M8 9h24v25H8z" fill="#315a45"/><path d="M13 14h14M13 20h12M13 26h10" stroke="#f4dfb8" strokeWidth="2"/><path d="M10 7h20" stroke="#d99a22" strokeWidth="3"/></>;
    case 'food': return <><ellipse cx="20" cy="25" rx="14" ry="8" fill="#d99a22"/><circle cx="14" cy="22" r="4" fill="#6f1d1b"/><circle cx="21" cy="21" r="4" fill="#315a45"/><circle cx="27" cy="23" r="4" fill="#8a5b1f"/><path d="M12 12h16" stroke="#6f1d1b" strokeWidth="3"/></>;
    case 'clothing': return <><path d="M12 8h16l5 7-6 5v14H13V20l-6-5z" fill="#a14d74" stroke="#d99a22" strokeWidth="2"/><path d="M16 14h8M17 22h6M17 27h6" stroke="#f4dfb8" strokeWidth="2"/></>;
    case 'music': return <><circle cx="13" cy="25" r="8" fill="#6f1d1b"/><path d="M21 7v20M21 7l11-2v6l-11 2" stroke="#8a5b1f" strokeWidth="3" fill="none"/><circle cx="21" cy="29" r="4" fill="#8a5b1f"/></>;
    case 'instruments': return <><ellipse cx="20" cy="25" rx="13" ry="8" fill="#8a5b1f" stroke="#6f1d1b" strokeWidth="2"/><path d="M8 25h24M15 18v14M25 18v14" stroke="#f4dfb8" strokeWidth="2"/><path d="M30 7v13M30 7l6-2v5l-6 2" stroke="#315a45" strokeWidth="2"/></>;
    case 'dances': return <><circle cx="13" cy="11" r="4" fill="#c98a72"/><circle cx="27" cy="11" r="4" fill="#c98a72"/><path d="M13 16v15M27 16v15M13 19l-8 5M27 19l8 5" stroke="#315a45" strokeWidth="4" strokeLinecap="round"/><path d="M9 32h8M23 32h8" stroke="#6f1d1b" strokeWidth="3"/></>;
    case 'festivals': return <><path d="M7 29h18l-4-12H11z" fill="#d99a22"/><path d="M29 8 36 15 29 22 22 15z" fill="#6f1d1b"/><path d="M29 22v11" stroke="#315a45" strokeWidth="2"/></>;
    case 'village-life': return <><path d="M6 22 17 12l11 10v11H6z" fill="#8a5b1f"/><circle cx="31" cy="20" r="6" fill="#315a45"/><path d="M31 26v8M12 33v-7h6v7" stroke="#f4dfb8" strokeWidth="2"/></>;
    case 'games': return <><circle cx="13" cy="16" r="4" fill="#c98a72"/><circle cx="27" cy="16" r="4" fill="#c98a72"/><path d="M8 30c2-7 9-7 11 0M21 30c2-7 9-7 11 0" fill="#365f73"/><circle cx="20" cy="29" r="3" fill="#d99a22"/></>;
    case 'objects': return <><path d="M8 12h11v21H8z" fill="#8e4937"/><path d="M22 17h10v16H22z" fill="#315a45"/><path d="M10 18h7M10 24h7M24 22h6" stroke="#f0c15e" strokeWidth="2"/></>;
    case 'architecture': return <><path d="M5 32h30M8 32V18h24v14M12 18v-6h16v6M15 32v-8h10v8" stroke="#b47a2a" strokeWidth="2.5" fill="#fff1d0"/><circle cx="20" cy="10" r="3" fill="#d99a22"/></>;
    case 'literature': return <><path d="M5 12c7-3 12-1 15 3v18c-4-3-9-4-15-2zM35 12c-7-3-12-1-15 3v18c4-3 9-4 15-2z" fill="#fffdf8" stroke="#385747" strokeWidth="2"/><path d="m29 7 5-3-2 6-8 10" stroke="#7a3d2d" strokeWidth="2"/></>;
    case 'proverbs': return <><path d="M7 10h25v21H7z" fill="#fff6df" stroke="#7a3d2d" strokeWidth="2"/><path d="M11 16h16M11 21h12M11 26h14" stroke="#8a5b1f" strokeWidth="2"/><path d="m28 31 6-9" stroke="#315a45" strokeWidth="2"/></>;
    case 'folk-tales': return <><path d="M6 14c7-4 11-2 14 2v17c-4-3-8-4-14-2zM34 14c-7-4-11-2-14 2v17c4-3 8-4 14-2z" fill="#fffdf8" stroke="#5c3c74" strokeWidth="2"/><path d="M12 12c2-6 14-8 16 0" stroke="#d99a22" strokeWidth="3"/></>;
    default: return <><path d="M8 28 20 13l12 15" fill="#4d6659"/><circle cx="20" cy="14" r="4" fill="#d99a22"/></>;
  }
}

function Chevron(){return <svg className="h-4 w-4 shrink-0 text-white/45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 5 7 7-7 7"/></svg>}
function MenuIcon(){return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}
function CloseIcon(){return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M18 6 6 18"/></svg>}
