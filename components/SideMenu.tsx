'use client';

import { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

type NavItem = { label: string; href: string; art: string };
type NavGroup = { label: string; items: NavItem[] };

const groups: NavGroup[] = [
  { label: 'Learn', items: [
    { label: 'Kids Hub', href: '/kids', art: 'kids' }, { label: 'Punjabi Language', href: '/language', art: 'language' },
    { label: 'Stories', href: '/storybook', art: 'stories' }, { label: 'Kids Quiz', href: '/quiz', art: 'quiz' },
  ]},
  { label: 'History & Places', items: [
    { label: 'Sikh History', href: '/heritage', art: 'heritage' }, { label: 'Punjab Through Time', href: '/timeline', art: 'timeline' },
    { label: 'Punjab History', href: '/worlds/history', art: 'history' }, { label: 'Punjab Cities', href: '/cities', art: 'cities' },
    { label: 'Heritage Maps', href: '/maps', art: 'maps' },
  ]},
  { label: 'Living Culture', items: [
    { label: 'Living Punjab', href: '/living-punjab', art: 'village' }, { label: 'Culture Library', href: '/culture', art: 'library' },
    { label: 'Artisan Workshop', href: '/living-punjab#artisan-workshop', art: 'artisan' }, { label: 'Food Museum', href: '/food', art: 'food' },
    { label: 'Clothing Museum', href: '/clothing', art: 'clothing' }, { label: 'Village Life Museum', href: '/village-life', art: 'village' },
    { label: 'Traditional Games', href: '/games', art: 'games' }, { label: 'Cultural Objects', href: '/objects', art: 'objects' },
  ]},
  { label: 'Arts & Literature', items: [
    { label: 'Music Museum', href: '/music', art: 'music' }, { label: 'Instruments Museum', href: '/instruments', art: 'instruments' },
    { label: 'Folk Dance Museum', href: '/dances', art: 'dance' }, { label: 'Festivals Museum', href: '/festivals', art: 'festival' },
    { label: 'Architecture Museum', href: '/architecture', art: 'architecture' }, { label: 'Literature Museum', href: '/literature', art: 'literature' },
    { label: 'Proverbs Museum', href: '/proverbs', art: 'proverbs' }, { label: 'Folk Tales Museum', href: '/folk-tales', art: 'stories' },
  ]},
];

export default function SideMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ Learn: true, 'History & Places': true, 'Living Culture': true, 'Arts & Literature': false });
  const filtered = useMemo(() => groups.map(group => ({ ...group, items: group.items.filter(item => `${item.label} ${group.label}`.toLowerCase().includes(query.toLowerCase())) })).filter(group => group.items.length), [query]);
  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]);
  const close = () => setOpen(false);

  return <>
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-black/10 bg-[#fffdf8]/95 px-4 backdrop-blur lg:hidden">
      <a href="/" className="min-w-0"><span className="block truncate text-sm font-black uppercase tracking-[0.18em] text-[#6f1d1b]">Sanjha Virsa</span><span className="block text-base font-bold text-[#201712]">ਸਾਂਝਾ ਵਿਰਸਾ</span></a>
      <button type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(v => !v)} className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-[#201712] shadow-sm">{open ? <CloseIcon/> : <MenuIcon/>}</button>
    </header>
    {open && <button type="button" aria-label="Close navigation" onClick={close} className="fixed inset-0 z-40 bg-black/35 lg:hidden" />}
    <aside className={`fixed inset-y-0 left-0 z-50 w-[88vw] max-w-[20rem] border-r border-white/10 bg-[#201712] text-white shadow-2xl transition-transform duration-300 lg:w-[18rem] lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 px-5 py-5"><div className="flex items-start justify-between gap-3"><a href="/" onClick={close}><p className="text-xs font-black uppercase tracking-[0.25em] text-[#e7b650]">Sanjha Virsa</p><p className="mt-1 text-2xl font-bold">ਸਾਂਝਾ ਵਿਰਸਾ</p><p className="mt-2 text-xs leading-5 text-white/60">Punjabi heritage, language, history, and culture.</p></a><button type="button" aria-label="Close navigation" onClick={close} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 lg:hidden"><CloseIcon/></button></div>
          <label className="mt-4 block"><span className="sr-only">Search navigation</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search sections" className="w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white outline-none placeholder:text-white/40 focus:border-[#e7b650]" /></label>
        </div>
        <nav aria-label="Primary" className="flex-1 overflow-y-auto px-3 py-3">
          <NavLink item={{label:'Home',href:'/',art:'home'}} isActive={active('/')} close={close}/>
          {filtered.map(group => <section key={group.label} className="mt-2 border-t border-white/8 pt-2"><button type="button" onClick={() => setExpanded(v => ({...v,[group.label]:!v[group.label]}))} className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-[0.7rem] font-black uppercase tracking-[0.18em] text-[#e7b650]" aria-expanded={query ? true : !!expanded[group.label]}><span>{group.label}</span><span className={`transition-transform ${(query || expanded[group.label]) ? 'rotate-180' : ''}`}>⌄</span></button>{(query || expanded[group.label]) && <div className="space-y-1">{group.items.map(item => <NavLink key={item.href} item={item} isActive={active(item.href)} close={close}/>)}</div>}</section>)}
          {!filtered.length && <p className="px-3 py-8 text-sm text-white/55">No matching section.</p>}
        </nav>
        <div className="border-t border-white/10 px-5 py-3"><p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#e7b650]">Atwal Solutions</p></div>
      </div>
    </aside>
  </>;
}

function NavLink({ item, isActive, close }: { item: NavItem; isActive: boolean; close: () => void }) {
  return <a href={item.href} onClick={close} aria-current={isActive ? 'page' : undefined} className={`flex min-h-12 items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-[#e7b650] text-[#201712]' : 'text-white/78 hover:bg-white/10 hover:text-white'}`}><MiniArt kind={item.art}/><span className="flex-1">{item.label}</span><Chevron/></a>;
}

function MiniArt({ kind }: { kind: string }) {
  const art: Record<string, React.ReactNode> = {
    home:<><path d="M5 22 20 9l15 13v13H5z" fill="#8a5b1f"/><path d="M15 35V24h10v11" fill="#fff3d2"/><circle cx="31" cy="9" r="4" fill="#d99a22"/></>,
    kids:<><circle cx="13" cy="12" r="4" fill="#c98a72"/><circle cx="27" cy="12" r="4" fill="#c98a72"/><path d="M7 32c1-10 11-10 12 0M21 32c1-10 11-10 12 0" fill="#315a45"/><path d="M12 21h16v9H12z" fill="#fffdf8"/></>,
    language:<><path d="M7 7h26v27H7z" fill="#fff6df" stroke="#8a5b1f" strokeWidth="2"/><path d="M12 15h16M12 21h12M12 27h14" stroke="#6f1d1b" strokeWidth="2"/></>,
    stories:<><path d="M5 12c7-3 12-1 15 3v18c-4-3-9-4-15-2zM35 12c-7-3-12-1-15 3v18c4-3 9-4 15-2z" fill="#fffdf8" stroke="#315a45" strokeWidth="2"/></>,
    quiz:<><path d="M9 7h22v27H9z" fill="#fffdf8" stroke="#8a5b1f" strokeWidth="2"/><circle cx="27" cy="25" r="6" fill="#6f1d1b"/><path d="M25 23c0-3 5-3 5 0 0 2-2 2-2 4" stroke="white" strokeWidth="2"/></>,
    heritage:<><path d="M20 5v30M10 12c4 5 6 7 10 8M30 12c-4 5-6 7-10 8M10 28c4-5 6-7 10-8M30 28c-4-5-6-7-10-8" stroke="#d99a22" strokeWidth="3" strokeLinecap="round"/></>,
    timeline:<><path d="M12 6h16M12 34h16M14 8c0 8 12 8 12 16s-12 8-12 8M26 8c0 8-12 8-12 16s12 8 12 8" stroke="#315a45" strokeWidth="2" fill="none"/></>,
    history:<><path d="M9 7h22v27H9z" fill="#7a3d2d"/><path d="M14 14h12M14 20h10M14 26h12" stroke="#f4dfb8" strokeWidth="2"/></>,
    cities:<><path d="M6 32h28M9 32V17h22v15M13 17v-6h14v6M16 32v-8h8v8" stroke="#b47a2a" strokeWidth="2.5" fill="#fff1d0"/></>,
    maps:<><path d="m5 11 10-4 10 4 10-4v24l-10 4-10-4-10 4z" fill="#fffdf8" stroke="#315a45" strokeWidth="2"/><circle cx="29" cy="15" r="4" fill="#6f1d1b"/></>,
    village:<><path d="M5 23 17 12l12 11v11H5z" fill="#8a5b1f"/><circle cx="31" cy="18" r="6" fill="#315a45"/></>,
    library:<><path d="M8 8h24v27H8z" fill="#315a45"/><path d="M13 14h14M13 20h12M13 26h10" stroke="#f4dfb8" strokeWidth="2"/></>,
    artisan:<><path d="M8 31 28 11M12 11l18 22" stroke="#8a5b1f" strokeWidth="5" strokeLinecap="round"/><rect x="27" y="7" width="9" height="9" rx="2" fill="#315a45"/></>,
    food:<><ellipse cx="20" cy="25" rx="14" ry="8" fill="#d99a22"/><circle cx="14" cy="22" r="4" fill="#6f1d1b"/><circle cx="24" cy="22" r="4" fill="#315a45"/></>,
    clothing:<><path d="M12 8h16l5 7-6 5v14H13V20l-6-5z" fill="#a14d74" stroke="#d99a22" strokeWidth="2"/></>,
    games:<><circle cx="13" cy="15" r="4" fill="#c98a72"/><circle cx="27" cy="15" r="4" fill="#c98a72"/><path d="M8 31c2-8 9-8 11 0M21 31c2-8 9-8 11 0" fill="#365f73"/></>,
    objects:<><path d="M9 11h10v23H9z" fill="#8e4937"/><path d="M22 17h10v17H22z" fill="#315a45"/></>,
    music:<><circle cx="13" cy="26" r="8" fill="#6f1d1b"/><path d="M22 7v22M22 7l11-2v6l-11 2" stroke="#8a5b1f" strokeWidth="3"/></>,
    instruments:<><ellipse cx="20" cy="25" rx="13" ry="8" fill="#8a5b1f"/><path d="M8 25h24M15 18v14M25 18v14" stroke="#f4dfb8" strokeWidth="2"/></>,
    dance:<><circle cx="20" cy="10" r="5" fill="#c98a72"/><path d="M20 16v16M20 20 7 13M20 20l13-7M20 32 11 38M20 32l9 6" stroke="#315a45" strokeWidth="4" strokeLinecap="round"/></>,
    festival:<><path d="M7 30h18l-4-13H11z" fill="#d99a22"/><path d="M29 8 36 15 29 22 22 15z" fill="#6f1d1b"/></>,
    architecture:<><path d="M5 33h30M8 33V18h24v15M12 18v-6h16v6M15 33v-8h10v8" stroke="#b47a2a" strokeWidth="2.5" fill="#fff1d0"/></>,
    literature:<><path d="M5 12c7-3 12-1 15 3v18c-4-3-9-4-15-2zM35 12c-7-3-12-1-15 3v18c4-3 9-4 15-2z" fill="#fffdf8" stroke="#385747" strokeWidth="2"/><path d="m29 7 5-3-2 6-8 10" stroke="#7a3d2d" strokeWidth="2"/></>,
    proverbs:<><path d="M7 9h26v23H7z" fill="#fff6df" stroke="#7a3d2d" strokeWidth="2"/><path d="M11 16h16M11 22h12M11 27h14" stroke="#8a5b1f" strokeWidth="2"/></>,
  };
  return <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-black/10 bg-[#f4dfb8]"><svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true"><rect width="40" height="40" rx="10" fill="#f4dfb8"/>{art[kind] || art.library}</svg></span>;
}

function Chevron(){return <svg className="h-4 w-4 shrink-0 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 5 7 7-7 7"/></svg>}
function MenuIcon(){return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}
function CloseIcon(){return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M18 6 6 18"/></svg>}
