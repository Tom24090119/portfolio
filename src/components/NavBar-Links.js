import React from 'react';
 
export default function NavBarLinks(props) {
    return (
        <>
                <li className="nav-item">
                    <a className="nav-link p-2 bd-highlight active " aria-current="page" href="/">{props.name}</a>
                </li>
        </>
    )
}