import React from 'react';
import './HeaderStyle.css';
import img from '../../resources/index.js';

export default function Header() {
    return (
        <header>
            {/* Start Web View */}
            <div className="container-fluid">
                <div className="row align-items-cetner">
                    <div className="col-9 col-sm-3">
                        <a href="#">
                            <img src={img.LOGO} className="site-logo img-fluid" alt="image not found" />
                        </a>
                    </div>
                    <div className="col-3 col-sm-9 ps-sm-0">
                        <div className="d-lg-none text-end mt-4">
                            <a className="btn btn-blue text-white" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <i className="fas fa-bars"></i>
                            </a>
                        </div>
                        <div className="d-lg-block d-none">
                            <div className="header-contact-row">
                                <a href="tel:7572285529" className="header-contact">
                                    <img src={img.PHONE_ICON} className="site-logo img-fluid" alt="image not found" />
                                    <div className="header-contact-col">
                                        <span>Chesapeake</span>
                                        <span className="text-blue">(757) 228-5529</span>
                                    </div>
                                </a>
                                <a href="tel:7574833040" className="header-contact">
                                    <img src={img.PHONE_ICON} className="site-logo img-fluid" alt="image not found" />
                                    <div className="header-contact-col">
                                        <span>Suffolk</span>
                                        <span className="text-blue">(757) 483-3040</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="main-navigation d-none d-lg-block">
                            <nav className="navbar navbar-expand-lg">
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Home</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Attorney Profiles
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Firm Overview</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Practice Areas
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Testimonials</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Web View */}

            {/* Start Mobile View */}
            <div className="mobile-menu d-lg-none">
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header border-bottom">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                            <img src={img.LOGO} className="site-logo img-fluid" alt="image not found" />
                        </h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="main-navigation">
                            <nav className="navbar navbar-expand-lg">
                                <div className="" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Home</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Attorney Profiles
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Firm Overview</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Practice Areas
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Testimonials</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="header-contact-row d-block">
                            <a href="tel:7572285529" className="header-contact ms-0">
                                <img src={img.PHONE_ICON} className="site-logo img-fluid" alt="image not found" />
                                <div className="header-contact-col">
                                    <span>Chesapeake</span>
                                    <span className="text-blue">(757) 228-5529</span>
                                </div>
                            </a>
                            <a href="tel:7574833040" className="header-contact ms-0 mt-3">
                                <img src={img.PHONE_ICON} className="site-logo img-fluid" alt="image not found" />
                                <div className="header-contact-col">
                                    <span>Suffolk</span>
                                    <span className="text-blue">(757) 483-3040</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Mobile View */}
        </header>
    )
}