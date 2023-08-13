import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';



const StateContext = createContext({});

export const StateProvider = ({ children }) => {


    const [isHome, setIsHome] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(window.location.pathname);


    useEffect(() => {
        if (currentLocation === '/') {
          setIsHome(true);
        } else {
          setIsHome(false);
        }
        console.log('isHome', isHome);
    }, [currentLocation]);

    

    function displayNotification(type, text ){
        if(type==='success'){
            toast.success(`${text}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else if(type==='error'){
            toast.error(`${text}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else{
            toast(`${text}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }

    return (
        <StateContext.Provider value={{ currentLocation }}> 
            {children}
        </StateContext.Provider>
    )
}

export default StateContext;