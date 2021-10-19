import React from "react";
import './FooterStyle.css';
import img from '../../resources/index'

export default function Footer() {

    return (
        <>
            <footer className="footer-sec">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Attorney Profiles</a></li>
                                <li><a href="#">Firm Overview</a></li>
                                <li><a href="#">Practice Areas</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Maps & Directions</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <h4 className="footer-title">Practice Areas</h4>
                            <ul className="footer-links">
                                <li><a href="#">Criminal Defense</a></li>
                                <li><a href="#">DUI</a></li>
                                <li><a href="#">Estate Planning</a></li>
                                <li><a href="#">Family Law</a></li>
                                <li><a href="#">Traffic Tickets</a></li>
                                <li><a href="#">Estate Planning</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
                            <h4 className="footer-title">Find Us</h4>
                            <a href="https://goo.gl/maps/B3M2PPrc3uTVbogR9" className="footer-add-row" target="_blank">
                                <img src={img.MAP_PIN_ICON} alt="image not found" />
                                <div>2006 Old Greenbrier Road, Suite 4
                                    Chesapeake, VA 23320</div>
                            </a>
                            <a href="tel:7572885529" className="footer-add-row">
                                <img src={img.PHONE_ICON_WHITE} alt="image not found" />
                                <div>Phone: (757) 228-5529</div>
                            </a>
                            <a href="Fax:757.228.5856" className="footer-add-row">
                                <img src={img.FAX_ICON} alt="image not found" />
                                <div>Fax: 757.228.5856</div>
                            </a>
                            <a href="#" className="btn review-btn">Review Us</a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bar">
                <div className="container-xl">
                    <p>
                        Shannon & Bedois, P.C. is located in Chesapeake, VA and serves clients in and around Chesapeake,
                        Virginia Beach, Portsmouth, Norfolk, Fort Monroe,
                        Suffolk, Carrollton, Hampton, Chesapeake City County, Hampton City County, Norfolk City County,
                        Portsmouth City County, Suffolk City County, Virginia Beach City County.
                        <br /><br />
                        Website by: Precision Legal Marketing
                    </p>
                </div>
            </div>
        </>
    )
}