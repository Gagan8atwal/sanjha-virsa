export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#201712] text-white">
      <div className="sv-container grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e7b650]">Sanjha Virsa</p>
          <p className="mt-3 max-w-xl font-serif text-2xl font-bold leading-tight">Preserving Punjabi language, history, culture, and family memory for future generations.</p>
          <p className="mt-4 text-sm leading-6 text-white/55">Free cultural learning for Punjabi families worldwide.</p>
        </div>
        <div className="md:text-right">
          <p className="text-[0.65rem] font-black uppercase tracking-[0.34em] text-[#e7b650]">Produced by</p>
          <p className="mt-2 font-serif text-2xl font-bold uppercase tracking-[0.16em] text-white">Atwal Solutions</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Technology · Culture · Education</p>
          <p className="mt-4 text-xs text-white/40">© 2026 Atwal Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
