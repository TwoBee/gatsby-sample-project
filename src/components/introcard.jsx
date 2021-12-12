import * as React from 'react'


// markup
const Introcard = () => {
  return (
    <React.Fragment>
      <div class="w-auto h-64 mb-6  rounded px-auto bg-profil-bubble bg-contain bg-bottom bg-no-repeat">
      </div>
      <div class="flex p-6 pb-16 justify-center items-center w-full">
        <div class="w-full md:w-2/4 p-16">
          <h1 class="hidden md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-indigo-600 mb-16">tobiaszimmer.dev</h1>
          <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-br from-teal-400 to-indigo-400 
          rounded-lg blur-lg opacity-95 group-hover:blur-3xl group-hover:duration-300 transition duration-1000
          animate-tilt">
            </div>
            <div class="relative bg-zinc-700 h-auto rounded-lg p-8">

              <p class="text-slate-200 break-words">Mein Name ist Tobias Zimmer. Ich bin 25 Jahre alt und seit der 9. Klasse interessiert an allen IT-Themen. <br />
                In den folgenden Abschnitten wird noch so einiges über mich erklärt.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Introcard
