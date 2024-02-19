import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="mt-[24vh] flex flex-col w-full text-center px-6 sm:px-0 pb-72">
      <div className="absolute sm:fixed right-0 text-9xl text-zinc-400 opacity-20 spider">
        🕷️
      </div>

      <div className="absolute sm:fixed -top-24 -left-12 text-[200px] text-zinc-400 opacity-20">
        🕸️
      </div>

      <div className="flex items-start flex-col mx-auto">
        <span className="text-xl mx-auto sm:-ml-12 text-zinc-400">
          Welcome to my
        </span>

        <h1 className="text-center mx-auto text-6xl sm:text-7xl mb-8">
          <span className="graveyard-theme-text">Project Graveyard</span>
          <span className="mt-4 block sm:inline">💀</span>
        </h1>

        <span className="text-9xl text-center mx-auto mb-8">🪦</span>

        <div className="flex flex-col mx-auto w-[250px]">
          <span className="text-[70px] leading-none text-zinc-500 self-start select-none">
            ❞
          </span>

          <span className="italic leading-[-16px] text-zinc-400 -mt-6 mb-4">
            We do these things not because they're easy, but because we thought
            they'd be easy
          </span>

          <span className="italic leading-[-16px] text-zinc-400 text-right">
            - The engineer's{" "}
            <Link
              href="https://www.google.com/search?q=lament+definition"
              target="_blank"
              className="underline group"
            >
              lament <span className="hidden group-hover:inline">🥲</span>
            </Link>
          </span>

          <span className="text-[70px] leading-none text-zinc-500 self-end select-none">
            ❝
          </span>
        </div>
      </div>

      <div className="text-start mx-auto w-full max-w-[500px]">
        <h2 className="text-4xl mb-1">Projects</h2>

        <span className="text-zinc-500 mb-2 block">
          that have never seen the light of day
        </span>

        <hr className="border-zinc-500" />
      </div>
    </div>
  );
}
