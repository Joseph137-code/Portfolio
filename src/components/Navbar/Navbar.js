import React from 'react'

const Navbar = () => {
    return (
    

     <nav id="mainNavbar" className="navbar navbar-expand-lg navbar-dark bg-dark p-2 text-dark bg-opacity-85 fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">Jose Sierra</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Port">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contact</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a className="navbar-brand" href="#Contact">
                            <span style={{color: "white", fontSize: "20px"}}>
                                <i className="fab fa-linkedin"></i>
                            </span>
                        </a>
                        <a className="navbar-brand" href="#Contact">
                            <span style={{color: "white", fontSize: "20px"}}>
                            <i className="fab fa-github-square"></i>
                            </span>
                        </a>
                        <a className="navbar-brand" href="#Contact">
                            <span style={{color: "white", fontSize: "20px"}}>
                            <i className="fas fa-envelope-open-text"></i>
                            </span>
                        </a>
                    </div>
                </div>
               
            </div>
        </nav>
    )
}

export default Navbar
