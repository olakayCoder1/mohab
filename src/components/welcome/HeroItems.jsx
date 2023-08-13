import React from 'react'
import { motion } from 'framer-motion'

export function HeroItems(props) {
    

    return (
        <>
            <h2 className=''>Popular</h2>
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                <div 
                    className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    width="6000"
                    height="4000"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    style={{ color: 'transparent' }} // Update the style attribute
                    />
                </div>
                <div
                initial={{opacity: 0, x: 100}}
                    whileHover={{scale: 0.8}}
                    animate={{opacity: 1, x: 0}} className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    src="https://t4.ftcdn.net/jpg/04/84/87/61/360_F_484876187_u6HIlCgA2iZdfkoOamuQa43OJH2zaDVR.jpg"
                    width="6000"
                    height="4000"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    style={{ color: 'transparent' }} // Update the style attribute
                    />
                </div>
                <div 
                    className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/0685531/1.jpg?2796"
                    width="6000" 
                    height="4000"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    style={{ color: 'transparent' }} // Update the style attribute
                    />
                </div>

                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/0685531/1.jpg?2796"
                    width="6000" 
                    height="4000"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    style={{ color: 'transparent' }} // Update the style attribute
                    />
                </div>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                <img
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    src="https://i.pinimg.com/236x/be/02/f4/be02f4c6e2e15ef23244ba1a04ed05d4.jpg"
                    width="6000"
                    height="4000"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    style={{ color: 'transparent' }} // Update the style attribute
                    />
                </div>
            </div>
        </>
    )
}
