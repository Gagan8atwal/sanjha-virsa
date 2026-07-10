export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#201712] text-white">
      <div className="sv-container grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e7b650]">Sanjha Virsa</p>
          <p className="mt-3 max-w-xl font-serif text-2xl font-bold leading-tight">Preserving Punjabi language, history, culture, and family memory for future generations.</p>
          <p className="mt-4 text-sm leading-6 text-white/55">Free cultural learning for Punjabi families worldwide.</p>
        </div>
        <div className="text-sm text-white/55 md:text-right">
          <p className="font-bold text-white/85">Produced by Atwal Group</p>
          <p className="mt-2">© 2026 Atwal Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
