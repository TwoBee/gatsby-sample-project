import * as React from "react";
import Highlight from "./highlight";

// markup
const Intro = () => {
  return (
    <React.Fragment>
      <div className="w-auto h-64 lg:mb-6  rounded px-auto bg-profil-bubble bg-contain bg-bottom bg-no-repeat"></div>
      <div className="flex pb-16 px-8 font-fira font-thin md:py-6">
        <div className="w-full px-6">
          <div className="relative group">
            <div id="Backgroundblur" className="absolute -inset-0.5 bg-gradient-to-br from-teal-400 to-indigo-400 
          rounded-lg blur-3xl opacity-95 group-hover:blur group-hover:duration-300 transition duration-1000
          animate-pulse"></div>
            <div id="Contentwrapper" className="relative bg-zinc-100/25 h-auto rounded-lg p-8">
              <p>
                Willkommen auf meiner eigenen kleinen Webseite. Hier möchte ich
                nicht demonstrieren, wie gut ich designen kann - wie man sieht
                kann ich das nicht allzu gut - sondern möchte mich nur kurz
                vorstellen. Meine Name ist  
                <Highlight content="Tobias Zimmer"/>
                und ich bin ein Entwickler aus dem kleinen Saarland.
                Ursprünglich komme ich aus der Anwendungsentwicklung und landete
                schließlich in der Webentwicklung
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
