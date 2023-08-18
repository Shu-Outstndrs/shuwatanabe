import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center bg-black w-screen h-screen text-xl text-white">
      <div className="flex flex-auto justify-center my-auto">
        <h1>404 Page not found</h1>
        <Link className="ml-4 border-l-2 pl-4 hover:text-slate-300" href="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
