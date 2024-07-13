import React from "react";

const Details = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-700 font-sans dark:text-gray-200 mb-4">
        Hii There, I'm Sarfraz Ashrafi
      </h1>
      <div className="flex flex-col items-start gap-y-1">
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

        <h1 className="text-xl font-bold text-gray-700 font-sans dark:text-gray-300 mb-3">
          I am a full stack web developer
        </h1>
        <p className="text-[15px] text-gray-600 dark:text-gray-300">
          I have been writing code for about 3 years, throughout this beautifull
          journey I have used so many tools/tech for building web apps such as
          Nextjs/reactjs for the frontend, javascript/typescript for backend,
          mongoDB and PostgreSQL as the database, Prisma as ORM, tailwind and
          shadcn for styling etc...
        </p>
    </div>
  );
};

export default Details;
