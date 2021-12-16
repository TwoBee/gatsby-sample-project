import * as React from 'react'
import knowledge from '../data/knowledge';

const Timeline = () => {
    return (
        <div className="p-4 md:pl-40 md:pr-40 md:pb-40 bg-gradient-to-b from-transparent via-white to-white">
            {knowledge.map(knowledge => (
                <div>{knowledge.text}</div>
            ))}
        </div>
    )
}

export default Timeline;