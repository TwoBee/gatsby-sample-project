import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import  navBar  from './nav'
import {
    fullsite,
    siteWrapper,
    footerContent
  } from '../styles/layout.module.css'
  import * as settings from '../styles/settings.css'
  import '../styles/typography.css'
  import '../index.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={fullsite}>
      <div className={siteWrapper}>
      <title>{pageTitle}</title>
      <div>
        <navBar />
        <main>
          {children}
        </main>
        <footer>
            <div className={footerContent}>
              <p> Mail: <a href="mailto:mail@tobiaszimmer.dev">mail@tobiaszimmer.dev</a></p>
            </div>
        </footer>
      </div>
      </div>
    </div>
  )
}

export default Layout