import Link from 'next/link';

//navbar
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex justify-center gap-[14px] px-4 py-4 bg-[rgba(255,253,247,0.9)] border-b border-[rgba(54,43,12,0.12)] shadow-[0_8px_20px_rgba(54,43,12,0.06)] backdrop-blur-[10px]">
      <Link
        href="/"
        className="text-[var(--text-outside)] font-bold px-5 py-[10px] inline-block shadow-[0_4px_10px_rgba(54,43,12,0.05)] transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(54,43,12,0.1)]"
      >
        Home
      </Link>
      <Link
        href="/recipe"
        className="text-[var(--text-outside)] font-bold px-5 py-[10px] inline-block shadow-[0_4px_10px_rgba(54,43,12,0.05)] transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(54,43,12,0.1)]"
      >
        Receta
      </Link>
    </nav>
  );
}
