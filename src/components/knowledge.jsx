import * as React from "react";
import knowledge from "../data/knowledge";

const Knowledge = () => {
  return (
    <React.Fragment>
      <div className="px-4 py-16 gap-2 md:px-40 md:pb-40 grid grid-cols-2 md:grid-cols-4 md:gap-4 md:auto-rows-fr">
        <h1 className="text-center text-neutral-300 text-8xl font-extrabold md:underline underline-offset-[0.25em] col-span-2 md:col-span-4 pb-12">
          Skillset
        </h1>
        {knowledge.map((knowledge) => (
          <div
            className="bg-neutral-200 break-words flex text-lg h-auto min-w-full justify-center items-center text-center rounded shadow transition duration-700 
                    hover:shadow-lg hover:scale-105 text-zinc-700 mx-auto max-w-md hover:bg-neutral-300"
          >
            {knowledge.text}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Knowledge;
