import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const navBar = ({ pageTitle, children }) => {
<nav class="bg-blue-400 sticky top-0 bg-opacity-90">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">
      <div class="py-5 px-2"><Link to="/"><StaticImage src='../images/logo_transparent.png' alt='the logo of Tobias Zimmer'></StaticImage></Link></div>
      <div class="flex items-center space-x-4">
        <div class="py-3 px-3 text-gray-700 hover:text-gray-600 hover:shadow">
            <Link to="/">Home</Link>
        </div>
        <div class="py-3 px-3 text-gray-700 hover:text-gray-600 hover:shadow">
            <Link to="/about">About Me</Link>
        </div>
        <div class="py-3 px-3 text-gray-700 hover:text-gray-600 hover:shadow">
            <Link to="/contact">Kontakt</Link>
        </div>
      </div>
    </div>
  </div>  
</nav>
}

export default navBar