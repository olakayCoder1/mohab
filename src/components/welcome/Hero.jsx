import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

import fashion  from "../../assets/fashion-4.jpeg"

export function Hero(props) {

    
    return (
        <>
            <section className="bg-lightbrawn text-white ">
                <div className="grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 py-32">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold text-headingFont tracking-tight leading-none md:text-5xl xl:text-6xl ">Artisanal Indigenous Attires for Nationwide Delivery</h1>
                        <p className="max-w-xl mb-6 font-light text-lightgray  lg:mb-8  ">
                        We produce ready to wear indigenous attires with a touch of elegance and cultural heritage, 
                        and we're committed to delivering them to any part of the country.
                        {/* We believe that making a good impression starts with a stunning 
                        outlook hence our commitment to design & style that oozes elegance & comfort. */}
                        </p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-diporange hover:bg-white hover:text-customblack ">
                            View Collection
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>  */}
                    </div>
                    <motion.div 
                        initial={{opacity: 0, x: 100}}
                        // animate={{opacity: 1, x: 0}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration: 1.5}}
                        className="hidden lg:mt-0 lg:col-span-5 lg:flex scale-y-75">
                        <img src={fashion} alt="mockup" className=' rounded-tl-[400px] rounded-tr-[400px]'/>
                    </motion.div>                
                </div>
                
            </section>
        </>
    )
}
