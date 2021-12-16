import * as React from 'react'
import '../../dist/output.css'
import '../tailwind.css'
import Introcard from '../components/introcard'
import Timeline from '../components/timeline'
import Divider from '../components/divider'

// markup
const IndexPage = () => {
  return (
    <body class="bg-zinc-700 pt-11">
      <div class="">
        <Introcard />
        <Divider />
        <Timeline />
      </div>
    </body>
  )
}

export default IndexPage
