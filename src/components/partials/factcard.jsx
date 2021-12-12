import * as React from 'react'


// markup
const Factcard = ({ headline, subline, text }) => {
  return (
    <div class="relative group w-full">
      <div class="absolute hidden w-8/12 mx-auto inset-1 bg-gradient-to-br from-teal-400 to-indigo-400 
          rounded-lg blur opacity-95 group-hover:blur-2xl group-hover:duration-300 group-hover:block transition duration-1000
          animate-tilt">
      </div>
      <div class="relative w-8/12 h-full bg-gradient-to-br from-teal-400 to-indigo-400  opacity-75 rounded-lg shadow p-2 mx-auto">
        <h1 class="text-xl text-white font-bold m-4 mb-0 md:opacity-0 group-hover:opacity-100 group-hover:duration-300 transition duration-500">{headline}</h1>
        <h2 class="text-lg text-white font-bold m-4 md:opacity-0 group-hover:opacity-100 group-hover:duration-300 transition duration-700">{subline}</h2>
        <p class="text-white m-4 md:opacity-0 group-hover:opacity-100 group-hover:duration-300 transition duration-1000">{text}</p>
      </div>
    </div>
  )
}

export default Factcard
