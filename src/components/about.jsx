import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div class="justify-center items-center py-16">
      <div className="md:bg-white/10 px-4 md:mx-auto md:min-h-fit md:py-10 max-w-fit rounded-lg md:shadow-lg hover:scale-105 transition duration-500">
        <h1 className="text-center text-neutral-300 text-8xl font-extrabold">
          Über diese Seite
        </h1>
        <p className="p-4 text-white font-thin bg-white/20  shadow-md rounded mx-auto md:rounded-none md:bg-white/0 md:shadow-none">
          Diese Seite wurde gebaut mit{" "}
          <a
            href="https://www.gatsbyjs.com/docs"
            target="_blank"
            className="bg-teal-700 rounded shadow p-1 hover:bg-teal-600 hover:text-neutral-300 transition duration-300"
          >
            Gatsby
          </a>{" "}
          und &nbsp;
          <a
            href="https://tailwindcss.com/"
            className="bg-teal-700 rounded shadow p-1 hover:bg-teal-600 hover:text-neutral-300 transition duration-300"
            target="_blank"
          >
            Tailwind
          </a>
          . Alle benutzten elemente sind selbst entwickelt und in meinem&nbsp;
          <a
            href="https://github.com/TwoBee"
            className="bg-teal-700 rounded shadow p-1 hover:bg-teal-600 hover:text-neutral-300 transition duration-300"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
            Github Repo
          </a>{" "}
          ersichtlich.
        </p>
      </div>
    </div>
  );
};

export default About;
