import * as React from 'react'


const Timelineitem = ({ headline, text, date, colstart }) => {
    var col = "";
    if (colstart === 1) {
        col = "col-start-1"
    }
    else {
        col = "col-start-3"
    }
    return (

        <div className="grid grid-cols-timeline gap-4 my-5">
            <div className={"min-h-fit max-w-md row-start-1 " + col}>
                <div class="relative group">
                    <div class="absolute -inset-0.5 aspect-square bg-gradient-to-br from-teal-400 to-indigo-400 rounded-lg blur-lg opacity-95 group-hover:blur-3xl group-hover:duration-300 transition duration-1000 animate-tilt">
                    </div>
                    <div class="relative aspect-square bg-zinc-700 h-auto rounded-lg p-8">
                        <h1 class="text-2xl underline underline-offset-8 mb-8 decoration-1 font-semibold text-slate-200 break-words">{headline}</h1>
                        <p class="text-slate-200 break-words">{text}</p>
                    </div>
                </div>
            </div>
            <div className="min-h-fit min-w-fit flex max-w-mdcol-start-2 items-center justify-center h-auto break-words font-extralight">
                <span className="text-white text-9xl row-start-1 bg-inherit rounded break-words">{date}</span>
            </div>
        </div >
    )
}

export default Timelineitem;