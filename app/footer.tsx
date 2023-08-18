import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-between h-20 p-4 text-white border bg-slate-800/50 border-slate-800/60 backdrop-blur-lg rounded-lg">
      <Link href="/" className="text-2xl mt-[7px]">
        Shu/Outstndrs
      </Link>
      <h2 className="mt-3 text-slate-300 sm:block hidden">Next.js,Tailwind</h2>
    </footer>
  );
}
