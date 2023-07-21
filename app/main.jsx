import Image from "next/image";
import { Intro } from "./intro";

export function Main({
  imgPath,
  title1,
  title2,
  age,
  description1,
  description2,
}) {
  return (
    <main className="flex lg:w-[50vw] w-[100vw] lg:max-w-[50vw] lg:min-h-screen pb-10 text-white bg-zinc-900 lg:rounded-none rounded-b-[1rem]">
      <div className="flex flex-col m-auto mt-10 lg:w-[30vw] w-[61vw]">
        <div className="m-auto">
          <Image
            className="z-1 mt-4 mb-2 align-middle"
            src={imgPath}
            width={240}
            height={240}
            alt="shuIcon"
          />
        </div>
        <div className="mt-8 mb-8 text-center whitespace-nowrap">
          <h1 className="font-base lg:text-7xl text-6xl">{title1}</h1>
          <h1 className="lg:text-6xl text-5xl">{title2}</h1>
        </div>

        {age ? (
          <>
            <div class="flex justify-between mb-1">
              <span class="text-base font-medium text-blue-700 dark:text-white">
                Age
              </span>
              <span class="text-sm font-medium text-blue-700 dark:text-white">
                14%
              </span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="w-[14%] bg-blue-600 h-2.5 rounded-full"></div>
            </div>
          </>
        ) : (
          <></>
        )}

        <ul className="max-w-[50vw] mt-4">
          {description1 ? (
            <Intro
              title={description1}
              className="mt-4"
              childrenClassName="text-3xl"
            />
          ) : (
            <></>
          )}
          {description2 ? (
            <Intro
              title={description2}
              className="mt-4"
              childrenClassName="text-3xl"
            />
          ) : (
            <></>
          )}
        </ul>
      </div>
    </main>
  );
}
