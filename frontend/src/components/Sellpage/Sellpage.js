import React from 'react'
import './Sellpage.css'

import pic1 from '../../assets/images/celler/left-banner-image.jpg'
import pic2 from '../../assets/images/celler/baner-right-image-01.jpg'
import pic3 from '../../assets/images/celler/baner-right-image-02.jpg'
import pic4 from '../../assets/images/celler/baner-right-image-03.jpg'
import pic5 from '../../assets/images/celler/baner-right-image-04.jpg'
import pic6 from '../../assets/images/celler/instagram-01.jpg'
import pic7 from '../../assets/images/celler/instagram-02.jpg'
import pic8 from '../../assets/images/celler/instagram-03.jpg'
import pic9 from '../../assets/images/celler/instagram-04.jpg'
import pic10 from '../../assets/images/celler/instagram-05.jpg'
import pic11 from '../../assets/images/celler/instagram-06.jpg'
import pic12 from '../../assets/images/celler/explore-image-01.jpg'
import pic13 from '../../assets/images/celler/explore-image-02.jpg'
import Form from './Form'

const Sellpage = () => {
    return (
        <>

            {/* Main Banner Area Start */}
            <div class="main-banner" id="top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>Shale on Upstage Commerce </h4>
                                        <span>20 crore+ customers across India trust Smshdeals to be their number 1 online shopping destination. It is no surprise that more
                                            than a million sellers trust their products to be made available 24x7 on Flip</span>
                                        <div class="main-border-button">

                                        </div>
                                    </div>
                                    <img src={pic1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Women</h4>
                                                    <span>Best Clothes For Women</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Women</h4>
                                                        <p>Showcase a wide range of women's dresses, categorized by style, occasion, size, and color.</p>
                                                        <div class="main-border-button">

                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={pic2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Men</h4>
                                                    <span>Best Clothes For Men</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Men</h4>
                                                        <p>Showcase a wide range of men's clothing and accessories, categorized by type (e.g., shirts, pants, shoes) and style.</p>
                                                        <div class="main-border-button">

                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={pic3} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Kids</h4>
                                                    <span>Best Clothes For Kids</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Kids</h4>
                                                        <p>Showcase a wide range of children's clothing, toys, accessories, and other kids' products, organized by age group and category.</p>
                                                        <div class="main-border-button">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={pic4} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Accessories</h4>
                                                    <span>Best Trend Accessories</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Accessories</h4>
                                                        <p>Organize accessories by categories (e.g., jewelry, bags, scarves, hats, sunglasses).
                                                            Include high-resolution images and clear product descriptions.
                                                            Display prices, sizes, colors, and material information</p>
                                                        <div class="main-border-button">
                                                          
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={pic5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Explore Area Starts  */}
            <section class="section" id="explore">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <h2>Shell Our Products</h2>
                                <h4 className='mt-4'>Why do sellers love  selling on Upstage Commerce?</h4>
                                <div className="row mt-5">
                                    <div className="col-lg-6 mt-4">
                                        <div class="card">
                                        <i class="fa fa-hand-o-right text-center text-black mt-3" style={{fontSize:"35px"}}></i>
                                                <div class="card-body">
                                                    <h5 class="card-title text-center" style={{fontWeight:"600"}}>Opportunity</h5>
                                                    <p class="card-text">25 crore+ of customers across 19000+ pincodes, and access to shopping festivals like The Big Billion Days, and more.</p>
                                                </div>      
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <div class="card">
                                        <i class="fa fa-line-chart text-center text-black mt-3" style={{fontSize:"35px"}}></i>
                                                <div class="card-body">
                                                    <h5 class="card-title text-center" style={{fontWeight:"600"}}>Ease of Doing Business</h5>
                                                    <p class="card-text">Create your Upstage Commerce seller account in under 10 minutes with just 1 product and a valid GSTIN number.</p>
                                                </div>
                                                
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <div class="card">
                                        <i class="fa fa-area-chart text-center text-black mt-3" style={{fontSize:"35px"}}></i>
                                                <div class="card-body">
                                                    <h5 class="card-title text-center" style={{fontWeight:"600"}}>Growth</h5>
                                                    <p class="card-text">Sellers see an average 2.8X spike in growth, 2.3X more visibility, and up to 5X growth in The Big Billion Days Sale.</p>
                                                </div>
                                                
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <div class="card">
                                        <i class="fa fa-support text-center text-black mt-3" style={{fontSize:"35px"}}></i>
                                                <div class="card-body">
                                                    <h5 class="card-title text-center" style={{fontWeight:"600"}}>Additional Support</h5>
                                                    <p class="card-text">Account management services, exclusive training programs, business insights, catalogue/photoshoot support.</p>
                                                </div>            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="leather">
                                            <h4>Leather Bags</h4>
                                            <span>Latest Collection</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="first-image">
                                            <img src={pic12} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="second-image">
                                            <img src={pic13} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="types">
                                            <h4>Different Types</h4>
                                            <span>Over 304 Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Explore Area Ends */}


            {/* Social Area Starts  */}
            <section class="section" id="social">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>Social Media</h2>
                                <span>Details to details is what makes Upstage Commerce different from the other the Shops.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row images">
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>Fashion</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic6} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>New</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic7} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>Brand</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic8} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>Makeup</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic9} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>Leather</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic10} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>Bag</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic11} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Social Area Ends  */}


            {/* Subscribe Area Starts */}
            <div class="subscribe">
                <div class="container">
                    <div class="row">
                        <h1 className='mb-4 text-center fs-3' style={{fontWeight:"600"}} >Contact Us</h1>
                        <h1 className='mb-4 text-center fs-5' style={{fontWeight:"600"}} >Thank you for reaching out to us
                         through our website's "Contact Us" form. We appreciate your interest in
                          Your feedback is
                         important to us, and we're committed to providing you with a prompt response</h1>
                        <div class="col-lg-8">
                          <Form/>
                        </div>
                        <div class="col-lg-4">
                            <div class="row">
                                <div class="col-6">
                                    <ul>
                                        <li>Store Location:<br /><span>Annpurna,road indore(mp) </span></li>
                                        <li>Phone:<br /><span>010-020-0340</span></li>
                                        <li>Office Location:<br /><span>Pratig Beach</span></li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul>
                                        <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                                        <li>Email:<br /><span>info@company.com</span></li>
                                        <li>Social Media:<br /><span>Facebook,Instagram,<br/>Behance, Linkedin</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Subscribe Area Ends */}

   {/* <Form/> */}
          

        </>
    )
}

export default Sellpage;
