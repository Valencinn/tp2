import Link from 'next/link';

//navbar
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex justify-center gap-[14px] px-4 py-4 bg-[rgba(255,253,247,0.9)] border-b border-[rgba(54,43,12,0.12)]">
      <Link
        href="/"
        className="text-[var(--text-outside)] font-bold px-5 py-[10px] inline-block shadow-[0_4px_10px_rgba(54,43,12,0.05)]"
      >
        Home
      </Link>
      <Link
        href="/recipe"
        className="text-[var(--text-outside)] font-bold px-5 py-[10px] inline-block shadow-[0_4px_10px_rgba(54,43,12,0.05)]"
      >
        Receta
      </Link>
    </nav>
  );
}
