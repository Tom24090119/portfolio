import React from 'react'
import NavBarLinks from './NavBar-Links';
import { Resume } from './NavBar-Links';


export default function NavBar() {
    return (
        <>
            <header>
                <nav className={`navbar navbar-dark bg-dark navbar-expand-md`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Aaryaman Pol</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Aaryaman Pol</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav align-items-center justify-content-center flex-grow-1 pe-3">
                                    <NavBarLinks name="Skills"></NavBarLinks>
                                    <NavBarLinks name="My Experience"></NavBarLinks>
                                    <NavBarLinks name="My Projects"></NavBarLinks>
                                    <NavBarLinks name="Contact Me"></NavBarLinks>
                                    <Resume></Resume>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}