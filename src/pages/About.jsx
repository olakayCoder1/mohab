import React from 'react'
import { TeamCard } from '../components/about/TeamCard'
import laptop from '../assets/fashion-1.jpeg'

export function About(props) {
    

    return (
        <>
            <Hero />
            <section className="bg-white ">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    
                    <div className="font-light text-gray-500 sm:text-lg ">
                        <div className='text-2xl font-light'>
                            <div className='flex gap-4 items-center py-4 text-diporange '>
                                <p className=' w-28 h-[2px] bg-diporange'></p>
                                <h2 className=' '>About Optimistic Limited</h2>
                                
                            </div>
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Mohab Empire Nig LTD</h2>
                        <p className="mb-4 text-base font-light">
                            We are Fashion Enthusiasts, Creators, and Visionaries. Trendsetters and Style Architects. 
                            Small enough to infuse every design with a personal touch, yet big enough to bring your 
                            fashion dreams to life at the speed of style.
                        </p>
                        <p className='text-base font-light'>
                            Our team thrives on the art of crafting unique and captivating fashion experiences. 
                            From envisioning cutting-edge designs to solving the puzzle of perfect pairings, 
                            we're dedicated to bringing your fashion aspirations to reality.
                            We're not just designers; we're storytellers who use fabrics, colors, and 
                            patterns to weave narratives that resonate with your individuality. 
                            We're the ones who turn runway inspiration into everyday elegance.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://i.pinimg.com/236x/be/02/f4/be02f4c6e2e15ef23244ba1a04ed05d4.jpg" alt="office content 2"/>
                    </div>
                </div>
            </section> 
            <section className="bg-white ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center">
                        <div className='text-2xl font-light items-center w-full '>
                            <div className='flex gap-4 items-center py-4 text-diporange mx-auto w-fit'>
                                <p className=' w-28 h-[2px] bg-diporange'></p>
                                <h2 className=''>Our Team</h2>
                            </div>
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-bold  ">Meet With Professional Designer</h2>
                        <p className="text-base font-light">
                            At Mohab Empire Nig LTD, we're proud to have a team of dedicated individuals 
                            who are passionate about fashion and committed to delivering the best for you. 
                            Our team is a blend of creativity, expertise, and a shared love for all things stylish.</p>
                    </div> 
                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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




const Hero = () => {

    return (
      <div className='flex items-center  h-96 mb-12 bg-fixed bg-center bg-cover relative' style={{ backgroundImage: `url(${laptop})`}}>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#342518]/90  z-[2]' />
            {/* <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <h2 className=' mb-4 text-4xl font-bold text-headingFont tracking-tight leading-none md:text-5xl xl:text-6xl'>Hey, follow your interest</h2>
                <p className='py-5 text-xl'>Get instance updates from your friends, quizes and what is happening around the world</p>
            </div> */}
      </div>
    );
  };