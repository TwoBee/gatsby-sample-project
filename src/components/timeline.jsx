import * as React from 'react'
import Timelineitem from './partials/timelineitem'
import timelinedata from '../data/timelinedata'

const Timeline = () => {
    return (
        <div className="pl-40 pr-40 pb-40">
            {timelinedata.map(timelinedata => (
                <Timelineitem headline={timelinedata.headline} text={timelinedata.text} date={timelinedata.date} colstart={timelinedata.colstart} />
            ))}
        </div>
    )
}

export default Timeline;