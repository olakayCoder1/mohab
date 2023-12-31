import { useState , useEffect} from "react"
import { NavLink } from "./NavLink"
import {RxHamburgerMenu} from 'react-icons/rx'


export function Header() {

    const [showNav, setShowNav] = useState(false)
    const [nav, setNav] = useState(false);
    const [textColor, setTextColor] = useState('white');
    const [changeBgColor, setChangeBgColor] = useState(false);
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 300) {
            setChangeBgColor(true);
            
          } else {
            // setColor('transparent');
            setChangeBgColor(false);
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);

    return (
        <>
            <header
                 className={`${changeBgColor ? "bg-[#eae3df] md:bg-[#eae3df]": "text-diporange bg-[#eae3df] md:bg-transparent"} fixed left-0 top-0 w-full z-10 ease-in duration-300`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                    <a href="#" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Optimistic Limited</span>
                    </a>
                    <button onClick={()=> setShowNav(!showNav)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-darkgray rounded-lg md:hidden hover:bg-superextralight focus:outline-none " >
                        <span className="sr-only">Open main menu</span>
                        <RxHamburgerMenu className=" w-10 h-10" /> 
                    </button>
                    <div className={`${showNav ? "" : "hidden"} w-full text-sm font-normal md:block md:w-auto`}>
                        <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 ">
                            <NavLink href='/' text='Home' />
                            <NavLink href='/about' text='About' />
                            <NavLink href='/' text='Shop' />
                            <NavLink href='/articles' text='Articles' />
                            <NavLink href='/contactus' text='Contact Us' />
                            <button type="button" className="w-fit text-white bg-customblack hover:bg-darkgray focus:outline-none rounded-lg px-5 py-2  my-2 md:my-0  ">
                                Subscribe
                            </button>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
