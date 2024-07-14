import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsMedium, BsTwitterX } from "react-icons/bs";
import { FaHashnode } from "react-icons/fa6";
const Details = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-700 font-sans dark:text-gray-200 mb-4">
        Hii There, I'm Sarfraz Ashrafi
      </h1>
      <div className="flex flex-col gap-y-1">
        <div className="flex gap-3">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            ={">"} My name is{" "}
            <span className="font-semibold">Sarfraz Ashrafi.</span>
          </p>
        </div>
        <div className="flex gap-3">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {" "}
            ={">"} A self taught{" "}
            <span className="font-semibold">programmer</span>, reader and write.
          </p>
        </div>
        <div className="flex gap-3">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {" "}
            ={">"} mastery on building{" "}
            <span className="font-semibold">web apps</span>.
          </p>
        </div>
        <div className="flex gap-3">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            ={">"} I mainly work with{" "}
            <span className="font-semibold">
              Typescript/javascript, python and Golang
            </span>{" "}
            on a daily basis.
          </p>
        </div>
        <div className="flex gap-3">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            ={">"} currently living in beautifull city{" "}
            <span className="font-semibold">Noida</span> In Delhi.
          </p>
        </div>
      </div>

      <div className="my-4">
        <h1 className="text-xl font-bold text-gray-700 font-sans dark:text-gray-300 mb-3">
          I am a full stack web developer
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          I have been writing code for about 3 years, throughout this beautifull
          journey I have used so many tools/tech for building web apps such as
          Nextjs/reactjs for the frontend, javascript/typescript for backend,
          mongoDB and PostgreSQL as the database, Prisma as ORM, tailwind and
          shadcn for styling etc...
        </p>
      </div>

      <div className="my-4">
        <h1 className="text-xl font-bold text-gray-700 font-sans dark:text-gray-300 mb-3">
          find me on social media
        </h1>
        <div className="flex gap-7">
          <Link href={"https://github.com/SarfrazAlame"}>
            <BsGithub className="h-6 w-6" />
          </Link>
          <Link href={"https://www.linkedin.com/in/sarfraz-ashrafi-25a262236/"}>
            <BsLinkedin className="h-6 w-6" />
          </Link>
          <Link href={"https://x.com/sarfrazk7858"}>
            <BsTwitterX className="h-6 w-6" />
          </Link>
          <Link href={"https://medium.com/@sarfrazk7858"}>
            <BsMedium className="h-6 w-6" />
          </Link>
          <Link href={"https://hashnode.com/@MohammedSarfraz"}>
            <FaHashnode className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <div className="my-7">
        <h1 className="text-xl font-bold text-gray-700 font-sans dark:text-gray-300 mb-3">
          My Tech Stack
        </h1>

        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Reactjs, Nextjs, Tailwind, Javascript, Typescript, Shadcn, Nodejs,
            Expressjs, MongoDB, PostgreSQL, PrismaORM, WebSocket, Societ.io,
            Redis, Docker, AWS, kubernetes
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold text-gray-700 font-sans dark:text-gray-300 mb-3">
          Projects which I've built
        </h1>
        <div className="flex gap-4">
          <Link
            href={"https://instagram-chi-seven.vercel.app"}
            className="cursor-pointer text-sm underline"
          >
            Pinstagram
          </Link>
          <Link
            href={"https://twitter-clone-sepia-gamma.vercel.app"}
            className="cursor-pointer text-sm underline"
          >
            Twitter clone
          </Link>
          <Link
            href={"https://medium-five-pi.vercel.app"}
            className="cursor-pointer text-sm underline"
          >
            Medium clone
          </Link>
          <Link
            href={"https://myblog-pi-nine.vercel.app"}
            className="cursor-pointer text-sm underline"
          >
            bloging web
          </Link>
          <Link
            href={"https://github.com/SarfrazAlame/chatApp"}
            className="cursor-pointer text-sm underline"
          >
            messaging app
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-xl font-bold text-gray-700 font-sans dark:text-gray-200 mb-4">
          Contact me
        </h1>

        <div>
          <p className="text-sm">sarfrazk7858@gmail.com</p>
          <p className="text-sm">+917858016352</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
