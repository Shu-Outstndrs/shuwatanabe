import Link from "next/link";

type careerTitlesType = {
  date: string;
  title: string;
  description: string;
  linkButton: undefined | boolean;
  linkTitle: undefined | string;
  href: string;
};

export function CareerTitles({
  date,
  title,
  description,
  linkButton,
  linkTitle,
  href,
}: careerTitlesType) {
  return (
    <li className="mb-3 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100">
        {title}
      </h3>
      <p className="text-base font-normal text-gray-800 dark:text-gray-300">
        {description}
      </p>
      {linkButton ? (
        <Link
          href={href}
          passHref
          target="_blank"
          className="inline-flex items-center mt-2 mb-4 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100/80 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-slate-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          {linkTitle}{" "}
          <svg
            className="w-3 h-3 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      ) : (
        <></>
      )}
    </li>
  );
}
