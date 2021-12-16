import * as React from 'react'
import '../../dist/output.css'
import '../tailwind.css'
import Introcard from '../components/introcard'
import Timeline from '../components/timeline'
import Divider from '../components/divider'
import Knowledge from '../components/knowledge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

// markup
const IndexPage = () => {
  return (
    <body class="bg-zinc-700 pt-11">
        <Introcard />
        <Divider />
        <Timeline />
        <Knowledge />
  <div class="bg-gradient-to-br min-h-fit max-h-96 from-teal-400 to-indigo-400">
    <div>
      <h1 className="text-center p-16 text-zinc-700 text-8xl underline underline-offset-[20px]">Über diese Seite</h1>
      <p className="p-16">
      Diese Seite wurde gebaut mit <a href="https://www.gatsbyjs.com/docs" 
            target="_blank" 
            className="bg-neutral-300 rounded shadow p-1 hover:bg-zinc-700 hover:text-neutral-300 transition duration-300">
              Gatsby
          </a> und 
          <a href="https://tailwindcss.com/" 
              className="bg-neutral-300 rounded shadow p-1 hover:bg-zinc-700 hover:text-neutral-300 transition duration-300"
              target="_blank">Tailwind
          </a>.
      Alle benutzten elemente sind selbst entwickelt und in meinem 
        <a href="https://github.com/TwoBee" 
            className="bg-neutral-300 rounded shadow p-1 hover:bg-zinc-700 hover:text-neutral-300 transition duration-300" 
            target="_blank">
              <FontAwesomeIcon icon={ faGithub } />Github Repo
        </a> ersichtlich.
      </p>
    </div>
  </div>
    </body>
  )
}

export default IndexPage
