import cv from '../Resume.pdf'
import NavBarLinks from './NavBar-Links'
import React from 'react';

export default function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Aaryaman</a>

                    <div className="d-flex flex-row-reverse bd-highlight">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <NavBarLinks name = "Skills"></NavBarLinks>
                                <NavBarLinks name = "My Experience"></NavBarLinks>
                                <NavBarLinks name = "My Work"></NavBarLinks>

                                <li className="nav-item">
                                    <a href={cv} style = {{textDecoration: 'none'}} download ="Aaryaman-Resume.pdf">
                                    <button className="btn btn-sm btn-outline-success nav-link p-2 bd-highlight active">Resume <span className="bi bi-arrow-down-circle"></span></button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}