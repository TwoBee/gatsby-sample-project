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

        <div className="block  my-10 lg:my-5 md:grid grid-cols-timeline gap-4">
            <div className={"min-h-fit max-w-md row-start-1 " + col}>
                <span className="md:hidden pb-8 text-teal-400 text-8xl md:text-9xl row-start-1 bg-inherit rounded break-words diagonal-fractions">{date}</span>
                <div class="relative group">

                    <div class="absolute -inset-0.5 bg-gradient-to-br from-teal-400 to-indigo-400 rounded-lg blur-lg opacity-95 group-hover:blur-3xl group-hover:duration-300 transition duration-1000 animate-tilt">
                    </div>
                    <div class="relative lg:aspect-square bg-zinc-700 h-auto rounded-lg p-8 mt-8 group-hover:bg-neutral-100 transition duration-700">
                        <h1 class="text-2xl underline underline-offset-8 mb-8 decoration-1 font-bold text-slate-200 break-words group-hover:text-zinc-700">{headline}</h1>
                        <p class="text-slate-200 break-words group-hover:text-zinc-700">{text}</p>
                    </div>
                </div>
            </div>
            <div className="min-h-fit min-w-fit flex max-w-mdcol-start-2 items-center justify-center h-auto break-words font-extralight">
                <span className="hidden md:block text-teal-400 pt-6 text-3xl md:text-9xl row-start-1 bg-inherit rounded break-words diagonal-fractions">{date}</span>
            </div>
        </div >
    )
}

export default Timelineitem;