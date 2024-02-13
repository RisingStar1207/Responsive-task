import React from 'react'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-xl bg-body-tertiary">
                <div className="container" >
                    <img src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GNdCZoXVgJ2Eztmo8~kv-I7e6XLooTLbiCfRkIXTYNXBi7yHik1nGTfuVMwVTlgxPmEqS6Rh72dEZbbzYbc1BAlnu9fXiwa2bAMvl4SnK7fVRcGLr2R58tAQ3Abog24hUox9Ur4d4bc5fyK75PXxoAQuiXlkJbOZeaJgsp34m0Np12jqsN33xSAtTiMOIRCcSvbRYPGDJY17DtgwpyBYXv-qmo4YpW9CeJsNRt6vczo2EEuXUsB6dJtRT-ld2~OYwHWeCQbP3XoszPktb-0NInT-ewF-0U2NM4qlTwJ196Fm0QobgF-Mg6ugatjCIBu4jrLwh93Tl4HuvOYw3ECmUw__" style={{ height: "60px" }}></img>
                    <form className="d-flex search" role="search">
                        <input className="hid form-control searchInput" type="search" style={{ width: "15vw" }} placeholder="Search Here..." aria-label="Search" />
                        <button className="new btn searchButton" style={{ backgroundColor: "#8064A2" }} type="submit"><i className="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }}></i></button>
                    </form>
                    <svg className="sho" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_10895_105)">
                            <path d="M12 22C13.1 22 14 21.1 14 20H9.99999C9.99999 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.62999 5.36 5.99999 7.92 5.99999 11V16L4.70999 17.29C4.07999 17.92 4.51999 19 5.40999 19H18.58C19.47 19 19.92 17.92 19.29 17.29L18 16Z" fill="#8064A2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_10895_105">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-compass fa-xl me-1" style={{ color: "#8064a2" }}></i>Explore
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">People - Community</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">People - Venues</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">People - Events</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">People - Store</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-star fa-xl me-1" style={{ color: "#8064a2" }}></i>Hobbies
                                </a>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">People - Community</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">People - Venues</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">People - Events</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">People - Store</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-bookmark fa-xl me-2" style={{ color: "#8064a2" }}></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-bell fa-xl me-2" style={{ color: "#8064a2" }}></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping fa-xl me-2" style={{ color: "#8064a2" }}></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><button className="btn " style={{ borderColor: "#8064A2", width: "100px", color: "#8064A2" }} type="submit">SignIn</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
