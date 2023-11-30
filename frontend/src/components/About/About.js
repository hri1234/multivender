import React from 'react';
import pic from '../../assets/images/Banners/img.jpg';
import pic2 from '../../assets/images/Banners/img2.png';
import pic3 from '../../assets/images/Banners/img3.png';
import pic4 from '../../assets/images/Banners/img4.png';
import pic7 from '../../assets/images/Banners/pic7.jpg';
function About() {
  return (
    <div className="container-fluid bg-light overflow-hidden my-4 px-lg-0 mt-5">
      <div className="container about px-lg-0">
        <div className="row g-4 mx-lg-0">
          <div className="col-lg-6">
            <div className="row  align-items-center">
              <div className="col-md-12">
                <div className="row g-3">
                  <div>
                    <h2 className="text-dark text-center  mt-5"><b>About Us</b></h2>
                    <p className="m-2 mt-4">We are a forward-thinking company dedicated to innovation and customer satisfaction. With a passion for excellence, we strive to create meaningful solutions that make a positive impact.
                    </p>
                  </div>
                  <div className="col-lg-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className=" rounded py-1 px-1">
                      <div className=" bg-light rounded-circle  ">
                        <h4 className="dark"><b>Our Mission</b></h4>
                      </div>
                      <p>Our mission is simple yet profound: to empower entrepreneurs, artisans, and small businesses by providing them with a platform to showcase their products and reach a global audience. We strive to make online selling accessible and rewarding for everyone, while also offering customers a diverse and enjoyable shopping experience.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className=" rounded py-1 px-1"
                    >
                      <div className=" bg-light rounded-circle">
                        <h2 className="text-dark"><b>Who We Are</b></h2>
                      </div>
                      <p> Our Company is a dedicated team of passionate individuals who share a common goal – to make online shopping more personalized, sustainable, and enjoyable. We come from diverse backgrounds, cultures, and expertise, but we are united by our commitment to excellence and innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" >
            <img className="img-fluid  mt-5 " src={pic} alt="" />
          </div>
        </div>
        <div className="row g-5 mt-4 my-4">
          <h2 className="text-dark text-center"><b>What We Offer</b></h2>
          <div className="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="0.1s">
            <div className="store-item  text-center" >
              <div className="my text-center">
              <img className="img-fluid w-25 mt-1" src={pic3} alt="img" />
              </div>
              <div className="p-2">
                <h4 className="mb-2 m-0 p-0 text-primary">Diverse Marketplace</h4>
                <p className="m-0 p-0">
                  Our platform hosts a wide array of products, ranging from handmade crafts and vintage treasures to modern gadgets and fashion trends. We believe in celebrating diversity .</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="0.3s">
            <div className="store-item  text-center" >
              <img className="img-fluid w-25    mt-1" src={pic4} alt="img" height={105} />
              <div className="p-2">
                <h4 className="mb-2 m-0 p-0 text-primary">Customer Satisfaction</h4>
                <p className="m-0 p-0">
                  Our priority is ensuring that customers have a seamless and enjoyable shopping experience. We are committed to delivering quality, reliability, and exceptional customer service.
                </p>
              </div>
            </div>
          </div> <div className="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="0.3s" >
            <div className="store-item  text-center" >
              <img className="img-fluid w-25  h-50  mt-1" src={pic2} alt="img" />
              <div className="p-2">
                <h4 className="mb-2 m-0 p-0 text-primary">Seller Support</h4>
                <p className="m-0 p-0">
                  We offer comprehensive support to our sellers, providing them with the tools, resources, and guidance they need to succeed in the online marketplace. Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-1 mx-lg-0">
          <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" >
            <img className=" img-fluid  mt-5 " src={pic7} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="row  align-items-center">
              <div className="col-md-12">
                <div className="row g-3">
                  <div>
                    <h1 className="text-dark text-center  mt-5"><b>Join Us on Our Journey</b></h1>
                  </div>
                  <div className="col-lg-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className=" rounded py-1 px-1">
                      <div className=" bg-light rounded-circle  ">
                      </div>
                      <p>We invite you to be part of our exciting journey at Our company. Whether you're a seller looking for a platform to grow your business or a customer seeking unique and quality products, we welcome you to explore our marketplace and become a part of our growing community.
                      </p>
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col-lg-6 wow fadeIn border " data-wow-delay="0.5s">
                      <div className=" rounded py-1 px-1">
                        <div className=" bg-light rounded-circle">
                          <h5 className="text-primary text-center ">Together, We Thrive</h5>
                        </div>
                        <p className='text-center'>Together, we're building a vibrant community where success knows no bounds.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn border" data-wow-delay="0.5s">
                      <div className=" rounded py-1 px-1">
                        <div className=" bg-light rounded-circle ">
                          <h5 className="text-primary text-center ">Support Local Dreams</h5>
                        </div>
                        <p className='text-center'>Be part of our mission to empower local businesses and artisans.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col-lg-6 wow fadeIn border " data-wow-delay="0.5s">
                      <div className=" rounded py-1 px-1">
                        <div className=" bg-light rounded-circle">
                          <h5 className="text-primary text-center ">Discover Unique Treasures</h5>
                        </div>
                        <p className='text-center'> Explore our diverse marketplace and uncover one-of-a-kind products.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn border" data-wow-delay="0.5s">
                      <div className=" rounded py-1 px-1">
                        <div className=" bg-light rounded-circle ">
                          <h5 className="text-primary text-center ">Experience Innovation</h5>
                        </div>
                        <p className='text-center'>Join us on our journey of constant innovation as we redefine online shopping.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row g-4 d-flex justify-content-center'>      
            <div className='col-lg-3 border  m-4 p-4 ' style={{borderRadius: '10%'}}>
                  <h5 className='text-center'> <b>Connecting Dreams to Doorsteps</b> </h5>
                  <p>We're the bridge that connects talented sellers with savvy shoppers, making dreams and unique products accessible to all.</p>
            </div>
            <div className='col-lg-3 border  m-4 p-4 ' style={{borderRadius: '10%'}} >
                  <h5 className='text-center'><b>Community-Driven Commerce</b></h5>
                  <p>Our platform thrives on community support, empowering small businesses, and fostering a vibrant online marketplace.</p>
            </div>
            <div className='col-lg-3 border m-4  p-4 ' style={{borderRadius: '10%'}}>
                  <h5 className='text-center'> <b>Your Trust, Our Commitment </b></h5>
                  <p>We're committed to trust, transparency, and satisfaction. Join us in creating a dynamic hub for commerce and creativity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
