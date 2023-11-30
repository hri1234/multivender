import React from "react";
import "./SellerBeauty.css";
import Dettole from "./image/Dettol.jpg";
import Facewash from "./image/facewash.jpg";
import Bodymilk from "./image/bodymilk.jpg";
import Handwash from "./image/handwash.jpg";
import Kitchen from "./image/Kitchen.jpg";
import Soft from "./image/soft.jpg";
import Facepowder from "./image/facepowder.jpg";

function Target()
{
    return(
        <>
        <div style={{backgroundColor:"#fff"}}>
        <h3 className="mt-3 m-2">BestSellers in Beauty</h3>     
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators mt-5" >
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active row">
   
    <div className="row mt-4 m-3">
                            <div className="col-md-3 col-sm-3">
                            <div class="parallelogram">&nbsp; &nbsp;<b>#1</b></div><br/>
                                <img class="d-block  img-fluid" src={Dettole} alt="First slide" style={{ width: "12rem",height:"10rem"}} /><br/>
                                <p style={{ fontSize:"15px"}}>Dettol Original Germ Protection Bathing Soap Bar (600gm) | Kills 99.99% germs, 125gm + 20% Extra Free, Pack of 4

                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i>  34,412
                                    <p style={{color :"red"}}>$10</p>
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                
                            <div class="parallelogram">&nbsp; &nbsp;<b>#2</b></div><br/>
                                <img class="d-block  img-fluid" src={Facewash} alt="First slide" style={{ width: "12rem", height:"10rem" }} /><br/>
                                <p style={{ fontSize:"15px" }}>
                                 Cetaphil Face Wash Gentle Skin Cleanser for Dry to Normal, Sensitive Skin, 125 ml Hydrating Face Wash with Niacinamide.....

                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i> 11,080
                                    <p style={{color :"red"}}>$24</p>
                                    
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-3">
                            <div class="parallelogram">&nbsp; &nbsp;<b>#3</b></div><br/>
                                <img class="d-block  img-fluid" src={Bodymilk} alt="First slide" style={{ width: "12rem", height:"10rem" }} /><br/>
                                <p style={{ fontSize:"15px" }}>NIVEA Nourishing Body Milk 600ml Body Lotion | 48 H Moisturization | With 2X Almond Oil | Smooth and Healthy.....
                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i> 33,489
                                    <p style={{color :"red"}}>$34</p>
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-3">
                            <div class="parallelogram">&nbsp; &nbsp;<b>#4</b></div><br/>
                                <img class="d-block  img-fluid" src={Dettole} alt="First slide" style={{ width: "12rem",height:"10rem" }} /><br/>
                                <p style={{ fontSize:"15px" }}>Dettol Original Germ Protection Bathing Soap Bar (300gm) | Kills 99.99% germs, 75gm - Pack of 4

                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i> 17,889
                                    <p style={{color :"red"}}>$50</p>
                                   
                                   
                                </span>
                            </div>

                        </div>
    </div>
    <div class="carousel-item">
     
    <div className="row mt-4 m-3">
                            <div className="col-md-3 col-sm-3">
                            <div class="parallelogram">&nbsp; &nbsp;<b>#5</b></div><br/>
                                <img class="d-block  img-fluid" src={Handwash} alt="First slide" style={{ width: "12rem",height:"10rem"}} /><br/>
                                <p style={{ fontSize:"15px"}}>
                                Dettol Liquid Handwash Refill – Skincare Hand Wash- 1500ml | pH Balanced | 10x Better Germ Protection



                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i>  34,412
                                    <p style={{color :"red"}}>$10</p>
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                
                            <div class="parallelogram">&nbsp; &nbsp;<b>#6</b></div><br/>
                                <img class="d-block  img-fluid" src={Kitchen} alt="First slide" style={{ width: "12rem", height:"10rem" }} /><br/>
                                <p style={{ fontSize:"15px" }}>
                                 Cetaphil Face Wash Gentle Skin Cleanser for Dry to Normal, Sensitive Skin, 125 ml Hydrating Face Wash with Niacinamide.....

                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i> 11,080
                                    <p style={{color :"red"}}>$24</p>
                                    
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-3">
                            <div class="parallelogram">&nbsp; &nbsp;<b>#7</b></div><br/>
                                <img class="d-block  img-fluid" src={Soft} alt="First slide" style={{ width: "12rem", height:"10rem" }} /><br/>
                                <p style={{ fontSize:"15px" }}>NIVEA Nourishing Body Milk 600ml Body Lotion | 48 H Moisturization | With 2X Almond Oil | Smooth and Healthy.....
                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i> 33,489
                                    <p style={{color :"red"}}>$34</p>
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-3">
                            <div class="parallelogram">&nbsp; &nbsp;<b>#8</b></div><br/>
                                <img class="d-block  img-fluid" src={Facepowder} alt="First slide" style={{ width: "12rem",height:"10rem" }} /><br/>
                                <p style={{ fontSize:"15px" }}>
                                 Maybelline New York Oil Control Powder, With SPF to Protect Skin from Sun, Absorbs Oil, Fit Me, 128 Warm Nude....

                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i> 17,889
                                    <p style={{color :"red"}}>$50</p>
                                   
                                   
                                </span>
                            </div>

                        </div>
    </div>
    <div class="carousel-item">
    <div className="row mt-4 m-3">
                            <div className="col-md-3 col-sm-3">
                            <div class="parallelogram">&nbsp; &nbsp;<b>#9</b></div><br/>
                                <img class="d-block  img-fluid" src={Handwash} alt="First slide" style={{ width: "12rem",height:"10rem"}} /><br/>
                                <p style={{ fontSize:"15px"}}>
                                Dettol Liquid Handwash Refill – Skincare Hand Wash- 1500ml | pH Balanced | 10x Better Germ Protection



                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i>  34,412
                                    <p style={{color :"red"}}>$10</p>
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                
                            <div class="parallelogram"><b> #10</b></div><br/>
                                <img class="d-block  img-fluid" src={Kitchen} alt="First slide" style={{ width: "12rem", height:"10rem" }} /><br/>
                                <p style={{ fontSize:"15px" }}>
                                 Cetaphil Face Wash Gentle Skin Cleanser for Dry to Normal, Sensitive Skin, 125 ml Hydrating Face Wash with Niacinamide.....

                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i> 11,080
                                    <p style={{color :"red"}}>$24</p>
                                    
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-3">
                            <div class="parallelogram"><b>#11</b></div><br/>
                                <img class="d-block  img-fluid" src={Soft} alt="First slide" style={{ width: "12rem", height:"10rem" }} /><br/>
                                <p style={{ fontSize:"15px" }}>NIVEA Nourishing Body Milk 600ml Body Lotion | 48 H Moisturization | With 2X Almond Oil | Smooth and Healthy.....
                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i> 33,489
                                    <p style={{color :"red"}}>$34</p>
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-3">
                            <div class="parallelogram"><b>#12</b></div><br/>
                                <img class="d-block  img-fluid" src={Facepowder} alt="First slide" style={{ width: "12rem",height:"10rem" }} /><br/>
                                <p style={{ fontSize:"15px" }}>
                                 Maybelline New York Oil Control Powder, With SPF to Protect Skin from Sun, Absorbs Oil, Fit Me, 128 Warm Nude....

                                </p>
                                <span>
                                    <i className="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-solid fa-star fa-sm" style={{ color: "#efcf01" }}></i>
                                    <i class="fa-regular fa-star-half-stroke fa-sm" style={{ color: " #efcf01" }}></i> 17,889
                                    <p style={{color :"red"}}>$50</p>
                                   
                                   
                                </span>
                            </div>

                        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
    <span class="carousel-control-prev-icon bg-dark rounded-pill p-3" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark rounded-pill p-3" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
        </>
    );
}
export default Target;