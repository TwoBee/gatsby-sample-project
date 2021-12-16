import * as React from 'react'
import knowledge from '../data/knowledge';

const Knowledge = () => {
    return (
        <React.Fragment >
            <h1 className="text-center text-neutral-300 text-8xl underline underline-offset-[20px]">Kenntnisse</h1>
            <div className="p-16 md:pl-40 md:pr-40 md:pb-40 grid grid-cols-4 gap-y-5 bg-zinc-700">

                {knowledge.map(knowledge => (
                    <div class="bg-neutral-300 rounded shadow transition duration-700 hover:shadow-teal-400/50 hover:scale-150 text-zinc-700 mx-auto max-w-md px-4 hover:bg-teal-400 hover:text-zinc-700">{knowledge.text}</div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Knowledge;