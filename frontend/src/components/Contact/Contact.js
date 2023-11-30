import React from "react";

function Contact() {
  return (
    <>
    <div class="container-fluid px-5" style={{marginTop:"90px"}}>
  <div class="row justify-content-center">
    <div class="col-xl-10">
      <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
        <div class="card-body p-0">
          <div class="row g-0">
            <div class="col-sm-6  d-sm-block ">
			<iframe class="position-relative w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0"  allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
			</div>
            <div class="col-sm-6 p-4">
              <div class="text-center">
                <div class="h3 fw-dark">Contact Form</div>

              </div>

              <form id="contactForm">

   
                <div class="form-floating mb-3">
                  <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                  <label for="name">Name</label>
                  <div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                </div>

            
                <div class="form-floating mb-3">
                  <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                  <label for="emailAddress">Email Address</label>
                  <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                  <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                </div>

               
                <div class="form-floating mb-3">
                  <input class="form-control" id="message" type="text" placeholder="Mobile No." ></input>
                  <label for="message">Mobile  No.</label>
                  <div class="invalid-feedback" data-sb-feedback="message:required">Mobile No. is required.</div>
                </div>
                <div class="form-floating mb-3">
                  <textarea class="form-control" id="message" type="text" placeholder="Message" ></textarea>
                  <label for="message">Message</label>
                  <div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                </div>

                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>

            
                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3">Error sending message!</div>
                </div>

              
                <div class="d-grid">
                  <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
                </div>
              </form>
			  <div className='p-4'>
			  <div class="h3 fw-dark mt-5 text-center">Get in Touch</div>
									<p class="mb-4 text-center">We're open for any suggestion or just to have a chat</p>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker me-3 mt-2"></span>
				        		</div>
				        		<div class="text pl-3 text">
					            <p className='text-center'><span>Address:</span> 198 West Suite 721 New York NY 10016</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone me-3 mb-1"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Phone:</span> + 1235 2355 98</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane me-3"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
					          </div>
		
            
</div></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
    </>
    );
  }
  
  export default Contact;
