'use client';

import { useState } from 'react';

type NavItem = { label: string; href: string; icon: 'home' | 'learn' | 'book' | 'history' | 'map' | 'culture' | 'language' | 'quiz' };
type NavGroup = { label: string; items: NavItem[] };

const groups: NavGroup[] = [
  {
    label: 'Learn',
    items: [
      { label: 'Kids Hub', href: '/kids', icon: 'learn' },
      { label: 'Punjabi Language', href: '/language', icon: 'language' },
      { label: 'Stories', href: '/storybook', icon: 'book' },
      { label: 'Kids Quiz', href: '/quiz', icon: 'quiz' },
    ],
  },
  {
    label: 'History',
    items: [
      { label: 'Sikh History', href: '/heritage', icon: 'history' },
      { label: 'Punjab History', href: '/worlds/history', icon: 'history' },
      { label: 'Punjab Cities', href: '/cities', icon: 'map' },
      { label: 'Maps', href: '/maps', icon: 'map' },
    ],
  },
  {
    label: 'Culture',
    items: [
      { label: 'Living Punjab', href: '/living-punjab', icon: 'culture' },
      { label: 'Culture Library', href: '/culture', icon: 'culture' },
    ],
  },
];

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-black/10 bg-[#fffdf8]/95 px-4 backdrop-blur lg:hidden">
        <a href="/" className="min-w-0">
          <span className="block truncate text-sm font-black uppercase tracking-[0.18em] text-[#6f1d1b]">Sanjha Virsa</span>
          <span className="block text-base font-bold text-[#201712]">ਸਾਂਝਾ ਵਿਰਸਾ</span>
        </a>
        <button type="button" aria-label="Open navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-[#201712] shadow-sm">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {open && <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-black/35 lg:hidden" />}

      <aside className={`fixed inset-y-0 left-0 z-50 w-[86vw] max-w-[19rem] border-r border-white/10 bg-[#201712] text-white shadow-2xl transition-transform duration-300 lg:w-[17rem] lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-full flex-col">
          <div className="border-b border-white/10 px-6 py-6">
            <div className="flex items-start justify-between gap-4">
              <a href="/" onClick={() => setOpen(false)}>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e7b650]">Sanjha Virsa</p>
                <p className="mt-1 text-2xl font-bold">ਸਾਂਝਾ ਵਿਰਸਾ</p>
                <p className="mt-2 max-w-[13rem] text-xs leading-5 text-white/60">Punjabi heritage, language, history, and culture.</p>
              </a>
              <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/80 lg:hidden"><CloseIcon /></button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-5">
            <a href="/" onClick={() => setOpen(false)} className="mb-5 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-white/85 transition hover:bg-white/10 hover:text-white">
              <NavIcon type="home" />
              Home
            </a>

            {groups.map((group) => (
              <section key={group.label} className="mb-6">
                <p className="mb-2 px-3 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#e7b650]">{group.label}</p>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white/72 transition hover:bg-white/10 hover:text-white">
                      <NavIcon type={item.icon} />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </nav>

          <div className="border-t border-white/10 px-6 py-4 text-xs leading-5 text-white/45">Free cultural learning for Punjabi families worldwide.</div>
        </div>
      </aside>
    </>
  );
}

function NavIcon({ type }: { type: NavItem['icon'] }) {
  const common = 'h-5 w-5 shrink-0 stroke-current';
  if (type === 'home') return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M9.5 20v-6h5v6"/></svg>;
  if (type === 'book') return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5Z"/><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z"/></svg>;
  if (type === 'map') return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/></svg>;
  if (type === 'history') return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M4 20h16M6 17h12M8 17V9m4 8V9m4 8V9M5 7h14L12 3 5 7Z"/></svg>;
  if (type === 'culture') return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M12 21s7-3.6 7-10V5l-7-2-7 2v6c0 6.4 7 10 7 10Z"/><path d="M9 11.5 11 14l4-5"/></svg>;
  if (type === 'language') return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M4 5h10M9 3v2c0 5-2 8-6 10M6 10c1.5 2 3.5 3.5 6 4.5M14 20l3.5-9L21 20M15.5 16h4"/></svg>;
  if (type === 'quiz') return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.7 2c-1 .7-1.5 1.1-1.5 2.3M12 17h.01"/></svg>;
  return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>;
}

function MenuIcon() {
  return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
}

function CloseIcon() {
  return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M18 6 6 18"/></svg>;
}
