import * as React from 'react'


// markup
const Introcard = () => {
  return (
    <React.Fragment>
      <div class="w-auto h-64 mb-6  rounded px-auto bg-profil-bubble bg-contain bg-bottom bg-no-repeat">
      </div>
      <div class="flex p-6 pb-16 justify-center items-center w-full font-fira font-thin">
        <div class="w-full md:w-2/4 p-16">
          <h1 class="hidden md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-indigo-600 mb-16">tobiaszimmer.dev</h1>
          <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-br from-teal-400 to-indigo-400 
          rounded-lg blur-3xl opacity-95 group-hover:blur group-hover:duration-300 transition duration-1000
          animate-pulse">
            </div>
            <div class="relative bg-zinc-700 h-auto rounded-lg p-8">

              <p class="text-slate-200 break-words">Willkommen auf meiner eigenen kleinen Webseite. Hier möchte ich nicht demonstrieren, wie gut ich
                designen kann - wie man sieht kann ich das nicht allzu gut - sondern möchte mich nur kurz vorstellen.
                Meine Name ist <span className="bg-gradient-to-br from-teal-400 to-indigo-600 mb-16">Tobias Zimmer</span> und ich bin ein Entwickler aus dem kleinen Saarland.
                Ursprünglich komme ich aus der Anwendungsentwicklung und landete schließlich in der Webentwicklung</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Introcard
