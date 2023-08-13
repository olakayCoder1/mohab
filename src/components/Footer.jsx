import React from 'react'

export function Footer(props) {
    

    return (
        <>
            
            <footer className=" bg-dipbrawn mt-12 py-12 text-sm  text-gray-400 ">
                <section className=" ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="mb-4 text-3xl tracking-tight font-extrabold  sm:text-4xl ">Sign up for our newsletter</h2>
                        <p className="mx-auto mb-8 max-w-2xl font-light  md:mb-12 sm:text-xl ">
                            {/* Be the first to know about our latest collections, trend updates, exciting announcements, 
                            and exclusive discounts.  */}
                            Join our fashion community today and step into a world where style meets innovation!"</p>
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label for="email" className="hidden mb-2 font-medium  ">Email address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input className="block p-3 pl-10 w-full text-darkgray rounded-lg focus:ring-0 hover:outline-none border-gray-300 sm:rounded-none sm:rounded-l-lg   " placeholder="Enter your email" type="email" id="email" required="" />
                                </div>
                                <div>
                                    <button type="submit" className="py-3 px-5 w-full font-medium text-center text-white rounded-lg border cursor-pointer  border-primary-600 sm:rounded-none sm:rounded-r-lg  bg-customblack hover:bg-darkgray ">Subscribe</button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-left  newsletter-form-footer ">We care about the protection of your data. <a href="#" className="font-medium text-primary-600  hover:underline">Read our Privacy Policy</a>.</div>
                        </form>
                    </div>
                </div>
                </section>
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className=" sm:text-center ">© 2023 <a href="/" className="hover:underline">olakayCoder1™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 font-medium   sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
                </div>
            </footer>
 
        </>
    )
}
