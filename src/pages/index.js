import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

// markup
const IndexPage = () => {
  return (
<Layout pageTitle="Home Page">
  <p>Yaba daba doo das isn Fülltext</p>
  <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/icon.png"
      />
</Layout>
  )
}

export default IndexPage
