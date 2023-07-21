"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function RoutingView() {
  const pathname = usePathname();
  const routePath = pathname.split("/").filter(Boolean);
  console.log(routePath);
  return (
    <div className="flex fixed z-30 w-screen p-4 text-xl bg-white/90 backdrop-blur-sm rounded-b-lg">
      <Link
        className="text-blue-600 hover:text-blue-700 hover:underline"
        href="/"
      >
        Home
      </Link>
      <span className="ml-2">/</span>
      {routePath.map((path, index) => (
        <span
          key={index}
          className="ml-2 text-blue-600 hover:text-blue-700 hover:underline"
        >
          {index !== 0 && <span> / </span>}
          <Link href={`/${routePath.slice(0, index + 1).join("/")}`}>
            {path}
          </Link>
        </span>
      ))}
    </div>
  );
}
