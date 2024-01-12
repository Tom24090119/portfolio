import React from 'react';
import cv from '../Resume.pdf'
 
export default function NavBarLinks(props) {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link p-2 bd-highlight active " aria-current="page" href="/">{props.name}</a>
            </li>
        </>
    )
}

export const Resume = ()=>{
    return (
        <>
            <li className="nav-item">
                <a className="nav-link d-inline-block rounded text-bg-success px-3" aria-current="page" href={cv} download ="Aaryaman-Resume.pdf">Resume
                    <span className="ms-3 bi bi-arrow-down-circle"></span>
                </a>
            </li>
        </>
    )
}


