import Link from "next/link";

export function LinkCard({ title, description, href, children }) {
  return (
    <Link
      href={href}
      className="max-w-md p-6 inline-block border bg-gray-100/80 border-gray-200/80 hover:bg-gray-200/80 hover:border-gray-300/80 dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:bg-gray-700/50 dark:hover:border-gray-600/50 rounded-lg backdrop-blur-lg shadow"
      scroll={false}
    >
      {children}
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </Link>
  );
}
