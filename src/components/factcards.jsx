import * as React from 'react'
import facts from '../data/facts'
import Factcard from './partials/factcard'


// markup
const Factcards = () => {
  return (
    <div class=" flex">
      <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 justify-items-strech">
        {facts.map(fact => (
          <Factcard headline={fact.headline} subline={fact.subline} text={fact.text} />
        ))}
      </div>
    </div>
  )
}

export default Factcards
