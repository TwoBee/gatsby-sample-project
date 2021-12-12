import * as React from 'react'
import '../../dist/output.css'
import '../tailwind.css'
import Introcard from '../components/introcard'
import Factcards from '../components/factcards'

// markup
const IndexPage = () => {
  return (
    <body class="">
      <div class="bg-zinc-700">
        <Introcard />
        <div class="flex justify-center mb-16">
          <hr class="w-2/4 border-gray-300 border-opacity-50" />
        </div>
        <Factcards />
        <div class="flex p-6 pb-16 justify-center items-center w-full">
          <div class="w-2/4">
            <h1 class="text-7xl text-white mb-16">Meine Hobbies</h1>
            <div class="h-auto bg-white bg-opacity-50 rounded-lg shadow-xl p-2">
              <p class="text-white break-words">Test</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default IndexPage
