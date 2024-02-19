import { cn } from "@/lib/utils";
import { LucideGithub } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="mt-[24vh] flex flex-col w-full text-center px-6 sm:px-0 pb-72">
      <div className="absolute sm:fixed right-0 text-9xl text-zinc-400 opacity-65 spider">
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

        <hr className="border-zinc-500 mb-8" />

        <div className="flex flex-col gap-4">
          <DeadProject
            title="Daily Helper"
            description={
              <>
                This was meant to facilitate daily meetings in our team. You
                see, we used to do this thing where each person took a turn then
                "passed the ball" onto someone of their choosing. It was a fun
                way to keep everyone engaged and involved.
                <br />
                <br />
                The problem this app solves is that it helps people keep track
                of who's talked so far and allows the current speaker to pick
                the next one. Also, if anyone had a question or a topic to
                discuss, they could raise their hand.
                <br />
                <br />
                At least it would have, if I had finished it.
              </>
            }
            href="https://github.com/aziznal/daily-helper"
            startedAt="13/Dec/2023"
            endedAt="16/Dec/2023"
          />

          <DeadProject
            title="Habit Tracker"
            href="https://github.com/aziznal/habit-tracker-proof-of-concept"
            startedAt="13/Feb/2023"
            endedAt="18/Feb/2023"
            description={
              <>
                I'd finished reading the atomic habits book
                <span className="italic"> (great read, by the way) </span>
                and was feeling inspired to build a habit tracker. I was so
                motivated with this one.
                <br />
                <br />
                I started thinking of all the features I could add, like
                streaks, reminders, and a bunch of other stuff. I made a bunch
                of designs on figma and then ... nothing.
                <br />
                <br />
                I think working on the designs was the most fun part of this
                project. But I should've started coding it sooner.
                <br />
                <br />
                Lesson learned: don't get too caught up in the details.
              </>
            }
          />

          <DeadProject
            title="Dart Function Params Changer"
            description={
              <>
                This would've been a vscode extension that allowed the user to
                change the parameters of a dart function between named and
                positional, and vice versa.
                <br />
                <br />
                Made a bunch of decent progress on this one, and then got to a
                place where I realized that simply changing the function
                signature wasn't enough. I'd have to change all the calls to
                that function as well using the Dart language server aaaaaand
                <span className="italic font-bold"> that's </span> right about
                when I started procrastinating.
                <br />
                <br />
                And today, here it lies.
              </>
            }
            href="https://github.com/aziznal/dart-function-params-changer-vscode"
            startedAt="02/Dec/2022"
            endedAt="26/Jan/2023"
          />

          <DeadProject
            title="Udemy Clone in Multiple Frontend Frameworks"
            href="https://github.com/aziznal/udemy-in-many-flavors"
            startedAt="25/May/2023"
            endedAt="22/Jul/2023"
            description={
              <>
                Oh what ambitious plans I had for this one. I was going to
                recreate the Udemy website (with a minimal amount of working
                features) in multiple frontend frameworks. Angular, Vue, NextJS,
                Svelte Qwik, Solidjs.
                <br />
                <br />
                I made a backend with NestJS, then wrote the first frontend with
                Angular.
                <br />
                <br />
                Then I started the next frontend with nextjs (the pages router)
                and then things sort of started to slow down. The pages router
                was a bit difficult to work with compared to Angular's router.
                <br />
                <br />
                And then life happened. Job demands increased significantly, and
                I sort of blocked out the project from my mind.
              </>
            }
          />

          <DeadProject
            title="Elevator"
            href="https://github.com/aziznal/elevator"
            startedAt="07/Sep/2023"
            endedAt="14/Sep/2023"
            description={
              <>
                One day, I was getting in the elevator and someone was
                approaching it like 10 meters behind me. Being the polite person
                I am, I proceeded to try to close the door as quickly as
                possible so I save that person from an awkward silence.
                <br />
                <br />
                The elevator, of course, had other plans. The button to manually
                close the doors simply didn't give a crap at my sad attempts at
                avoiding the most basic of human interactions and wouldn't close
                the door.
                <br />
                <br />
                This button wasn't taking some sort of revenge on me, it had
                always had a mind of its own.
                <br />
                <br />
                It got me thinking,{" "}
                <span className="italic">
                  "How did this basic elevator get so messed up? What is so hard
                  about making an elevator circuit? I could probably do it in a
                  day!"
                </span>
                <br />
                <br />
                I got to making a really simple javascript app/site that allowed
                you to control an elevator.
                <br />
                <br />
                You can see it on https://... oh wait, I never finished it.
                <br />
                <br />
                Turns out, elevators are a bit more complicated than I thought.
              </>
            }
          />

          <DeadProject
            title="Custom HTML Video Player"
            href="https://github.com/aziznal/html-video-player-customizations"
            startedAt="05/Oct/2023"
            endedAt="06/Oct/2023"
            description={
              <>
                Again with the ambitious plans. I wanted to make a video player
                with my own customizations.
                <br />
                <br />
                I discovered that the HTML video player is actually quite
                customizable. You can change the controls, the colors, the
                layout, and a bunch of other stuff.
                <br />
                <br />
                The problem was that this video player was too shallow. Yeah it
                played videos, but it couldn't handle anything else, like
                subtitles, video streaming, different qualities, etc.
                <br />
                <br />
                Apparently, something like that would be a bit complicated. So
                complicated, in fact, that there is an entire library built by
                many people much smarter than me to handle it.
                <br />
                <br />
                Whatever tiny bit of motivation I had at this point was gone. It
                <br />
                <br />
                looks pretty though. also taught me how much we take for granted
                with software.
              </>
            }
          />

          <DeadProject
            title="Python PyQt Desktop App Framework"
            href="https://github.com/aziznal/pyqt-framework"
            startedAt="10/Jun/2021"
            endedAt="11/Jun/2021"
            description={
              <>
                Back in my college days, I'd found a nice and simple repeatable
                pattern for making desktop apps with python and pyqt. I wanted
                to make a framework out of it so that I could use it for future
                apps.
                <br />
                <br />
                The thing is, I left it so bare bones that it was barely a
                framework. It was just a bunch of random files with some code in
                them.
                <br />
                <br />
                So much manual labor is involved for adding even a simple
                button, let alone make an entire app.{` `}
                <br />
                <br />
                We have electron now, so whatever. It was a good learning
                experience.
              </>
            }
          />

          <DeadProject
            title="MongoDB GUI with PyQT"
            href="https://github.com/aziznal/pyqt-mongodb-interface"
            startedAt="08/Jul/2020"
            endedAt="27/Sep/2020"
            description={
              <>
                This was one of my first big boy projects. It taught me so much
                about programming, databases, interfaces, and state management.
                <br />
                <br />
                Looking back at it, I have no idea where I had the audacity to
                think I could make a GUI for a database. I didn't even know what
                a database really was.
                <br />
                <br />
                Nevertheless, I made a bunch of progress on it. I could connect
                to a database, see the collections, and even add and remove
                documents.
                <br />
                <br />
                At some point, I realized that I was just making a really bad
                version of MongoDB Compass. So I cut my losses and moved on.
                <br />
                <br />
                Makes me feel a bit nostalgic.
              </>
            }
          />

          <DeadProject
            title="Python Web Scraper Helper Library"
            href="https://github.com/aziznal/basic-web-scraper"
            startedAt="16/Nov/2020"
            endedAt="27/Sep/2020"
            description={
              <>
                Back in college, I started seriously obsessing about web
                scraping. It made me feel...{" "}
                <span className="font-bold">POWERFUL!</span> All the data in the
                world was at my fingertips.
                <br />
                <br />
                I made a lot of web scraper scripts but then I noticed I was
                re-writing a lot of the same code across them. Also, whenever I
                finished a script, I would learn something new that I would have
                to go back and add to all the other scripts.
                <br />
                <br />
                And so, the <code>basic-web-scraper</code> library was born.
                Used by a grand total of 1 people.
                <br />
                <br />
                It was my first ever published library. I'm still proud of it. I
                even wrote tests for it.
              </>
            }
          />
        </div>
      </div>

      <footer className="text-center w-full mt-16 flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-1">
          <span>Made by</span>
          <Link
            href="https://github.com/aziznal/project-graveyard"
            target="_blank"
            className="flex gap-2 hover:text-rose-700 text-rose-500"
          >
            aziznal <LucideGithub />
          </Link>
        </div>

        <span className="text-xs text-zinc-500">
          (and actually finished this time)
        </span>

        <div className="text-center text-xs text-zinc-500">Feb - 2024</div>
      </footer>
    </div>
  );
}

type DeadProjectProps = {
  title: string;
  description: ReactNode;
  href?: string;
  startedAt: string;
  endedAt: string;
};

const DeadProject = (props: DeadProjectProps) => {
  return (
    <Link
      href={props.href ?? "#"}
      className={cn(
        "relative flex flex-col sm:flex-row gap-2 py-4 border rounded-lg px-4 border-zinc-600",
        !props.href && "pointer-events-none",
        props.href && "transition-colors cursor-pointer hover:bg-zinc-800"
      )}
      target="_blank"
    >
      {props.href && (
        <div className="absolute top-4 right-4 opacity-50">🔗</div>
      )}

      <span className="text-6xl">⚰️</span>

      <div className="flex flex-col text-amber-600">
        <h1 className="text-xl">{props.title}</h1>

        <span className="text-sm opacity-50 mb-2">
          🪦 {props.startedAt} - {props.endedAt}
        </span>

        <p className="text-zinc-400 text-sm">{props.description}</p>
      </div>
    </Link>
  );
};
