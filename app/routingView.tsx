"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export function RoutingView() {
  const pathname = usePathname();
  const routePath = pathname.split("/").filter(Boolean);
  return (
    <div className="flex fixed z-30 w-screen p-4 text-xl bg-white/90 backdrop-blur-sm rounded-b-lg">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Link
          className="flex text-blue-600 hover:text-blue-700 hover:underline"
          href="/"
        >
          <svg
            className="w-3 h-3 mt-2 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          Home
        </Link>
      </motion.div>
      <span className="ml-2">
        <svg
          className="w-3 h-3 mt-2 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </span>
      {routePath.map((path: string, index: number) => (
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          key={index}
          className="flex ml-2 text-blue-600 hover:text-blue-700 hover:underline"
        >
          {index !== 0 && (
            <span>
              <svg
                className="w-3 h-3 mt-2 mx-1 mr-2 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </span>
          )}
          <Link href={`/${routePath.slice(0, index + 1).join("/")}`}>
            {path}
          </Link>
        </motion.span>
      ))}
    </div>
  );
}
