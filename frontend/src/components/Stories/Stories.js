import React from "react";
import image from '../../assets/images/smsdeals/images/aSale.jpg'
import image1 from '../../assets/images/smsdeals/images/aSale2.jpg'
import image2 from '../../assets/images/smsdeals/images/aSale4.jpg'
import image3 from '../../assets/images/smsdeals/images/aSale5.png'
import image4 from '../../assets/images/smsdeals/images/aSale3.png'
import image5 from '../../assets/images/smsdeals/images/aSale5.png'
import image6 from '../../assets/images/smsdeals/images/aSale7.png'
import image7 from '../../assets/images/smsdeals/images/aSale8.png'
import image8 from '../../assets/images/smsdeals/images/aSale9.png'
import image9 from '../../assets/images/smsdeals/images/aSale10.png'
import image10 from '../../assets/images/smsdeals/images/aSale11.png'
import image11 from '../../assets/images/smsdeals/images/aSale12.png'
import image12 from '../../assets/images/smsdeals/images/aSale15.jpg'
import image13 from '../../assets/images/smsdeals/images/aSale16.jpg'
import image14 from '../../assets/images/smsdeals/images/aSale17.jpg'
import image15 from '../../assets/images/smsdeals/images/aSale18.jpg'
import image16 from '../../assets/images/smsdeals/images/aSale19.jpg'
import image17 from '../../assets/images/smsdeals/images/aSale20.jpg'
import image18 from '../../assets/images/smsdeals/images/aSale17.jpg'
import image19 from '../../assets/images/smsdeals/images/aSale22.jpg'


function Stories()
{
  return(
    <>
       <div className="container" style={{marginTop:"90px"}}>
          <div className="container">
                
          <img src={image} class="img-fluid"  
           alt="..."/>
          <img src={image1} class="img-fluid" alt="..."/>


          {/* image slider */}

          <div id="carouselExampleControls" class="carousel slide"  data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="row g-2 mt-2 p-2 border-light">
        <div className="col-lg-2">
        <img src={image4} class="img-fluid" alt="..."/>
       </div>
       <div className="col-lg-2">
        <img src={image3} class="img-fluid"  
        alt="..."/>
       </div>
       <div className="col-lg-2">
        <img src={image5} class="img-fluid"  
        alt="..."/>
       </div>
       <div className="col-lg-2">
        <img src={image6} class="img-fluid"  
        alt="..."/>
       </div>
       <div className="col-lg-2">
        <img src={image7} class="img-fluid"  
        alt="..."/>
       </div>
       <div className="col-lg-2">
        <img src={image8} class="img-fluid"  
        alt="..."/>
       </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="row g-2 mt-2 p-2 border-light">
        <div className="col-lg-2">
        <img src={image9} class="img-fluid" 
        alt="..."/>
       </div>
       <div className="col-lg-2">
        <img src={image10} class="img-fluid" 
        alt="..."/>
       </div>
       <div className="col-lg-2">
        <img src={image11} class="img-fluid"  
        alt="..."/>
       </div>
       <div className="col-lg-2">
        <img src={image6} class="img-fluid"  
        alt="..."/>
       </div>
       <div className="col-lg-2">
        <img src={image7} class="img-fluid"  
        alt="..."/>
       </div>
       <div className="col-lg-2">
        <img src={image3} class="img-fluid"  
        alt="..."/>
       </div>
      </div>
    </div>
    
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* image */}

  <img src={image2} class="img-fluid" alt="..."/> 
 <div className="row">
    <div className="col-lg-6">
    <img src={image12} class="img-fluid"  style={{height:"600px", width:"600px"}}alt="..."/>  
    </div>
    <div className="col-lg-6">
    <img src={image13} class="img-fluid"  style={{height:"600px", width:"600px"}}alt="..."/>  
    </div>
 </div>

 <div className="row">
    <div className="col-lg-6">
    <img src={image14} class="img-fluid"  style={{height:"600px", width:"600px"}}alt="..."/>  
    </div>
    <div className="col-lg-6">
    <img src={image15} class="img-fluid"  style={{height:"600px", width:"600px"}}alt="..."/>  
    </div>
 </div>
 <div className="row">
    <div className="col-lg-6">
    <img src={image16} class="img-fluid"  style={{height:"600px", width:"600px"}}alt="..."/>  
    </div>
    <div className="col-lg-6">
    <img src={image17} class="img-fluid"  style={{height:"600px", width:"600px"}}alt="..."/>  
    </div>
 </div>
 <div className="row">
    <div className="col-lg-6">
    <img src={image19} class="img-fluid"  style={{height:"600px", width:"600px"}}alt="..."/>  
    </div>
    <div className="col-lg-6">
    <img src={image18} class="img-fluid"  style={{height:"600px", width:"600px"}}alt="..."/>  
    </div>
 </div>
 

                
          </div>
       </div>
    </>
  );
}
export default Stories;
