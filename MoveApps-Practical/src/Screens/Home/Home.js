import React from "react";
import './HomeStyle.css';
import img from "../../resources";
import TextInput from "../../Components/Atoms/TextInput/TextInput";
import CheckBox from "../../Components/Atoms/TextInput/CheckBox/CheckBox";

export default function Home() {
    return (
        <>
            {/* START BANNER SECTION */}
            <section class="hero-banner">
                <div class="container-xl">
                    <div class="hero-banner-content">
                        <h2>Family Law</h2>
                        <h4>Family and Criminal Law Attorneys</h4>
                        <h5>Hampton Road</h5>
                        <a href="#" class="btn btn-blue">Read More</a>
                    </div>
                </div>
            </section>
            {/* END BANNER SECTION  */}

            {/*START ESTATE PLANING SECTION */}
            <section class="estate-planning-sec">
                <div class="container-xl">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-5 d-none d-md-block">
                            <img src={img.ESTATE_PLANING} class="img-fluid" alt="image not found" />
                        </div>
                        <div class="col-lg-8 col-md-7">
                            <div class="estate-planning-content">
                                <h4>Estate Planning</h4>
                                <div className="d-md-none">
                                    <img src={img.ESTATE_PLANING} class="img-fluid" alt="image not found" />

                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been
                                    the industry's standard dummy text ever since the 1500s, when an unknown a galley of type
                                    and
                                    scrambled it to make a type specimen book. It has survived not only five centuries, but also
                                    the
                                    leap into electronic typesetting.
                                </p>
                                <a href="#" class="btn px-0">
                                    Read More
                                    <i class="far fa-arrow-alt-circle-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* START ESTATE PLANING SECTION  */}

            {/*  START DIVORCE SECTION  */}
            <section class="divorce-sec">
                <div class="container-xl">
                    <div class="row">
                        <div class="col-md-12 mx-auto">
                            <h3>
                                Dedicated Divorce and Criminal Lawyers in Chesapeake, <br class="d-none d-md-block" /> VA and
                                Suffolk, VA
                            </h3>
                            <p class="sub-para">
                                Providing effective divorce, family and criminal law solutions in Chesapeake for you and your
                                family
                            </p>
                            <span class="fancy-devider"></span>
                            <p>
                                Hiring an attorney is an important step in protecting your rights and interests, and you can
                                trust the legal team of Shannon & Associates, P.C. to act in your best interests and tell it to
                                you straight. Whether we’re representing you in divorce proceedings, defending you against
                                criminal charges and traffic tickets or drafting your will, our combined 20 years of experience
                                allows us to approach your case aggressively and compassionately in either negotiation or
                                litigation.
                            </p>
                            <p class="sub-para mb-0">
                                To speak to an experienced Family Law or Criminal Defense attorney (757) 228-5529 or contact
                                <br class="d-none d-md-block" />
                                an attorney from Shannon & Associates, P.C. online today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* END DIVORCE SECTION  */}

            {/*  START TESTIMONIAL SECTION  */}
            <section class="testimonial-sec">
                <div class="container-xl">
                    <h3 class="section-title text-blue">
                        Testimonials
                    </h3>
                    <div class="owl-carousel testimonial-slider">
                        <div class="client-row">
                            <div class="client-img">
                                <img src={img.CLIENT_IMG1} alt="image not found" />
                            </div>
                            <figure>
                                <blockquote class="blockquote">
                                    <p>"My family and I would like to thank you for all that you and your firm has done for us
                                        over
                                        these past few months. We are truly grateful for your help in representing us, referring
                                        us
                                        to
                                        others who could handle cases which you did not, and for the wonderful outcome of the
                                        case
                                        itself. We will not hesitate to refer you to others."</p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    H.G.
                                    <div class="stars">
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="client-row">
                            <div class="client-img">
                                <img src={img.CLIENT_IMG1} alt="image not found" />
                            </div>
                            <figure>
                                <blockquote class="blockquote">
                                    <p>"My family and I would like to thank you for all that you and your firm has done for us
                                        over
                                        these past few months. We are truly grateful for your help in representing us, referring
                                        us
                                        to
                                        others who could handle cases which you did not, and for the wonderful outcome of the
                                        case
                                        itself. We will not hesitate to refer you to others."</p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    H.G.
                                    <div class="stars">
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            {/* END TESTIMONIAL SECTION  */}

            {/*  START OFFER SECTION  */}
            <section class="offer-sec">
                <div class="container-xl">
                    <h3 class="section-title">
                        What We Offer Our Clients
                    </h3>
                    <div class="row">
                        <div class="col-6 col-lg-2 col-md-4 pb-4 pb-md-0">
                            <div class="offer-content">
                                <div class="img-wrap">
                                    <img src={img.OFFER_ICON1} class="img-fluid" alt="image not found" />
                                </div>
                                <h5>Help for local Residents</h5>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-md-4 pb-4 pb-md-0">
                            <div class="offer-content">
                                <div class="img-wrap">
                                    <img src={img.OFFER_ICON2} class="img-fluid" alt="image not found" />
                                </div>
                                <h5>Genuine Interest in
                                    the Law We Practice</h5>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-md-4 py-4 py-md-0">
                            <div class="offer-content">
                                <div class="img-wrap">
                                    <img src={img.OFFER_ICON3} class="img-fluid" alt="image not found" />
                                </div>
                                <h5>A Balanced <br /> Approach</h5>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-md-4 py-4 py-lg-0">
                            <div class="offer-content">
                                <div class="img-wrap">
                                    <img src={img.OFFER_ICON4} class="img-fluid" alt="image not found" />
                                </div>
                                <h5>Assistance in Military Family Matters</h5>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-md-4 py-4 py-lg-0">
                            <div class="offer-content">
                                <div class="img-wrap">
                                    <img src={img.OFFER_ICON5} class="img-fluid" alt="image not found" />
                                </div>
                                <h5>Recognized <br /> Excellence</h5>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-md-4 py-4 py-lg-0">
                            <div class="offer-content">
                                <div class="img-wrap">
                                    <img src={img.OFFER_ICON6} class="img-fluid" alt="image not found" />
                                </div>
                                <h5>Prompt <br /> Communication</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  END OFFER SECTION */}

            {/* START CONTACT US SECTION  */}
            <section class="contact-sec">
                <div class="container-xl">
                    <h3 class="section-title">
                        Get in Touch!
                    </h3>
                    <form action="#" class="form contact-form">
                        <div class="row">
                            <div class="col-md-4 mb-4">
                                <div class="form-group">
                                    <TextInput type="text" id="uname" placeholder="Name:" />
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="form-group">
                                    <TextInput type="text" id="email" placeholder="E-mail:" />
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="form-group">
                                    <TextInput type="text" id="uphone" placeholder="Phone #:" />
                                </div>
                            </div>
                            <div class="col-md-12 mb-4">
                                <textarea class="form-control" id="umsg" placeholder="Message:" rows="3"></textarea>
                            </div>
                            <div class="col-md-8 mb-4 mb-md-0">
                                <div class="input-label">Please check the box below.*</div>
                                {/* <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="read" id="read" />
                                    <label class="form-check-label" for="read">
                                        I have read the <a href="#">disclaimer.</a>
                                    </label>
                                </div> */}
                                <CheckBox type="checkbox" label="I have read the" labelLink="disclaimer." id="read" />
                            </div>
                            <div class="col-md-4 text-md-end">
                                {/* <Button class="btn btn-blue">Submit</Button> */}
                                <a href="#" class="btn btn-blue">Submit</a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/*  END CONTACT US SECTION  */}
        </>
    )
}