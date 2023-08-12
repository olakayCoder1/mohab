import React from 'react'
import { TeamCard } from '../components/about/TeamCard'

export function About(props) {
    

    return (
        <>
           <section class="bg-white ">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div class="font-light text-gray-500 sm:text-lg ">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Mohab Empire Nig LTD</h2>
                        <p class="mb-4">
                            We are Fashion Enthusiasts, Creators, and Visionaries. Trendsetters and Style Architects. 
                            Small enough to infuse every design with a personal touch, yet big enough to bring your 
                            fashion dreams to life at the speed of style.
                        </p>
                        <p>
                            Our team thrives on the art of crafting unique and captivating fashion experiences. 
                            From envisioning cutting-edge designs to solving the puzzle of perfect pairings, 
                            we're dedicated to bringing your fashion aspirations to reality.
                            We're not just designers; we're storytellers who use fabrics, colors, and 
                            patterns to weave narratives that resonate with your individuality. 
                            We're the ones who turn runway inspiration into everyday elegance.
                        </p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="office content 1"/>
                        <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://i.pinimg.com/236x/be/02/f4/be02f4c6e2e15ef23244ba1a04ed05d4.jpg" alt="office content 2"/>
                    </div>
                </div>
            </section> 
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            At Mohab Empire Nig LTD, we're proud to have a team of dedicated individuals 
                            who are passionate about fashion and committed to delivering the best for you. 
                            Our team is a blend of creativity, expertise, and a shared love for all things stylish.</p>
                    </div> 
                    <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                    </div>  
                </div>
            </section>
        </>
    )
}
