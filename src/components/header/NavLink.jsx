import React from 'react'
import { Link } from "react-router-dom"

export function NavLink(props) {
    

    return (
        <li className=' cursor-pointer hover:text-customblue py-2 md:py-0'>
            <Link to={props.href}>{props.text}</Link>
        </li>
    )
}
