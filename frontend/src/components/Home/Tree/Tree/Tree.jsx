import React from 'react'
//import "../Home/Home.css"
import Dettol from '../image/dettol.jpg'
import Pears from '../image/pears.jpg'
import Lemon from '../image/lemon.jpg'
import Dettol1 from '../image/dettol1.jpg'
import Appliances from '../image/appliances.jpg'
import Cycles from '../image/cycles.jpg'
import Inverter from '../image/inverterbatteries.jpg'
import EVS from '../image/EVs.jpg'
import Cloth1 from '../image/cloth1.jpg'
import Cloth2 from '../image/cloth2.jpg'
import Cloth3 from '../image/cloth3.jpg'
import Cloth4 from '../image/cloth4.jpg'
import Prod1 from '../image/prod1.jpg'
import Prod2 from '../image/prod2.jpg'
import Prod3 from '../image/prod3.jpg'
import Prod4 from '../image/prod4.jpg'





const Tree = () => {
  return (
    <>




      <div className="container-fluid my-1" style={{backgroundColor:"#fff"}}>
        <div className="row">

          <div className="col-md-3 col-sm-6 p-1">
            <div className="card" >
              <div className="card-body">
                <h4 className="card-title mb-3 pb-1">Keep shopping for</h4>
                <div className="row pt-3">
                  <div className="col-md-6 ">

                    <img src={Dettol} alt="" className='img-fluid' />
                    <p style={{ fontSize: "13px" }}>Dettol Original Germ...
                      <p> <sup>₹</sup><b style={{ fontSize: "20px" }}>224</b><sup>00</sup> </p>
                    </p>

                  </div>

                  <div className="col-md-6 ">

                    <img src={Pears} alt="" className='img-fluid mt-2 mb-3' />
                    <p style={{ fontSize: "13px" }}>Pears Pure & Gentle S...
                      <p> <sup>₹</sup><b style={{ fontSize: "20px" }}>297</b><sup>00</sup> </p>
                    </p>
                  </div>


                  <div className="col-md-6">
                    <img src={Lemon} alt="" className='img-fluid' />
                    <p style={{ fontSize: "13px" }}>Liril Lemon & Tea Tre...
                      <p> <sup>₹</sup><b style={{ fontSize: "20px" }}>213</b><sup>60</sup> </p>
                    </p>

                  </div>


                  <div className="col-md-6">
                  <img src={Dettol1} alt="" className='img-fluid' />
                    <p style={{ fontSize: "13px" }}>Dettol Original Germ...
                      <p> <sup>₹</sup><b style={{ fontSize: "20px" }}>138</b><sup>00</sup> </p>
                    </p>

                  </div>

                  <a href="#" className="card-link pt-1 ml-3">See more</a>


                </div>

              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 p-1">
            <div class="card" >
              <div class="card-body">
                <h4 class="card-title">Up to 50% off | Appliances, Cycles,Inverter batteries&...</h4>
                <div className="row mt-4 ">
                  <div className="col-md-6 ">

                    <img src={Appliances} alt="" className='img-fluid '  />
                    <p style={{ fontSize: "13px" }}>Appliances
                    </p>

                  </div>

                  <div className="col-md-6 mb-3">

                    <img src={Cycles} alt="" className='img-fluid ' />
                    <p style={{ fontSize: "13px" }}>Cycles
                      
                    </p>
                  </div>


                  <div className="col-md-6 ">
                    <img src={Inverter} alt="" className='img-fluid' />
                    <p style={{ fontSize: "13px" }}>Inverter batteries
                     
                    </p>

                   

                  </div>


                  <div className="col-md-6">
                  <img src={EVS} alt="" className='img-fluid' />
                    <p style={{ fontSize: "13px" }}>Electric vehicles
                      
                    </p>

                  </div>

                  <a href="#" className="card-link pt-1 ml-3 mt-4">See all offers</a>

                </div>

              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 p-1 ">
            <div class="card" >
              <div class="card-body">
                <h4 class="card-title">Bestsellers in Women's Indian Clothing</h4>
                <div className="row text-center">
                  <div className="col-md-6 ">

                    <img src={Cloth1} alt="" className='img-fluid' style={{height:"157px"}} />
                    
                  </div>

                  <div className="col-md-6 ">

                    <img src={Cloth2} alt="" className='img-fluid '  style={{height:"157px"}}/>
                   
                  </div>


                  <div className="col-md-6 pb-1">
                    <img src={Cloth3} alt="" className='img-fluid' style={{height:"157px"}} />
                   
                  </div>

                  <div className="col-md-6 pb-1">
                  <img src={Cloth4} alt="" className='img-fluid'  style={{height:"157px"}}/>
                   
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 p-1 ">
            <div class="card" >
              <div class="card-body">
                <h4 class="card-title mb-3">Customers’ Most-Loved Fashion for you</h4>
                <div className="row text-center mt-4">
                  <div className="col-md-6 pt-1">

                    <img src={Prod1} alt="" className='img-fluid'  />
                    
                  </div>

                  <div className="col-md-6 pt-1">

                    <img src={Prod2} alt="" className='img-fluid ' />
                   
                  </div>


                  <div className="col-md-6 pt-2 mt-5">
                    <img src={Prod3} alt="" className='img-fluid' />
                   
                  </div>

                  <div className="col-md-6 pt-2 mt-4">
                  <img src={Prod4} alt="" className='img-fluid' />
                   
                  </div>

                  <a href="#" className="card-link pt-3 ml-3 mt-4">Explore more</a>

                </div>

              </div>
            </div>
          </div>


        </div>
      </div>

    </>

  )
}

export default Tree