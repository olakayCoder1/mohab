import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'

export function TeamCard(props) {
    

    return (
        <>
           <div className="text-center text-gray-500 ">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar"/>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                    <a href="#">olakayCoder1</a>
                </h3>
                <p>Web Designer</p>
                <ul className="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href="#" className="text-red-600 hover:text-gray-900 ">
                            <BsInstagram  className="w-6 h-6"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#39569c] hover:text-gray-900 ">
                            <BsFacebook  className="w-6 h-6"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#39569c] hover:text-gray-900 ">
                            <BsTwitter  className="w-6 h-6"/>
                        </a>
                    </li>
                </ul>
            </div> 
        </>
    )
}
