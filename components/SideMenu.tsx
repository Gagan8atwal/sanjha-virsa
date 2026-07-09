export default function SideMenu() {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Stories', href: '/storybook' },
    { label: 'History', href: '/worlds/history' },
    { label: 'Maps', href: '/maps' },
    { label: 'Kids Quiz', href: '/quiz' },
    { label: 'Heritage', href: '/worlds/sikh-heritage' },
    { label: 'Language', href: '/worlds/language' },
    { label: 'Culture', href: '/worlds/culture' },
    { label: 'Kids Hub', href: '/worlds/kids-hub' },
  ];

  return (
    <aside className="sticky top-0 z-50 bg-[#24160f] text-white lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:overflow-y-auto">
      <div className="border-b border-white/10 p-4 lg:p-6">
        <a href="/" className="block">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">Sanjha Virsa</p>
          <h2 className="mt-1 text-2xl font-black">ਸਾਂਝਾ ਵਿਰਸਾ</h2>
        </a>
      </div>
      <nav className="flex gap-2 overflow-x-auto p-3 lg:block lg:space-y-2 lg:overflow-visible lg:p-4">
        {menuItems.map((item) => (
          <a key={item.href} href={item.href} className="flex min-w-max items-center rounded-2xl bg-white/5 px-4 py-3 text-sm font-black ring-1 ring-white/10 transition hover:bg-amber-300 hover:text-slate-950 lg:min-w-0">
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
