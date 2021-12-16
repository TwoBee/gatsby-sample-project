import * as React from 'react'
import Timelineitem from './partials/timelineitem'
import timelinedata from '../data/timelinedata'

const Timeline = () => {
    return (
        <div className="p-4 md:pl-40 md:pr-40 md:pb-40 bg-gradient-to-b from-transparent via-white to-white">
            {timelinedata.map(timelinedata => (
                <Timelineitem headline={timelinedata.headline} text={timelinedata.text} date={timelinedata.date} colstart={timelinedata.colstart} />
            ))}
        </div>
    )
}

export default Timeline;