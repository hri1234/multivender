import React from "react";

function Front() {
  return (
    <div className="container-fluid mt-1" style={{backgroundColor:"#fff"}}>
      <div className="row ">
        <div class="col-sm-6">
          <div  style={{ height: "335px" }}>
            <div className=" m-5 d-flex justify-content-center align-items-center  ">
              <div>
                <h2 className=" fs-2 "> Start selling with Shopify today</h2>
                <p className="fs-6 ">
                  Try Shopify for free, and explore all the tools and services
                  you need to start, run, and grow your business.
                </p>
            <button className="btn btn-success ms-4"> Start Free Trial</button>
              </div>
            </div>

          </div>
        </div>
        <div class="col-sm-6">
          <div className="">
            <img
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/content-marketing/blog/blog_header/redesign/cta-blog-small-83826fb88f35dc2fb54aba4d74514088e113410c15f50cfe0703749d9190a5d3.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
