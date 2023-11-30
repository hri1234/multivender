import React from 'react'
import './GiftCard.css'
import gift from '../../assets/images/Gift/giftcardimg.png'
import gift1 from '../../assets/images/Gift/gift1.jpg'
import gift2 from '../../assets/images/Gift/gift2.jpg'
import gift3 from '../../assets/images/Gift/gift3.jpg'
import gift4 from '../../assets/images/Gift/gift4.jpg'
import gift5 from '../../assets/images/Gift/gift5.png'

const GiftCard = () => {
    return (
        <>
            <div className="container-fluid px-lg-0" style={{ marginTop: "70px" }}>
                <div class="aboutme-section">
                    <div className="me">
                        <h2 className="text-center p-5" style={{ marginTop: "90px" }}>
                            <strong style={{ fontSize: "40px" }}>Gift Card Store</strong><br /><br /> 
                             
                            <strong className='fs-5'>At Upstage Commerce, we understand that finding the perfect gift can be a daunting task. <br />
                                That's why we've created our Gift Card Store, your go-to destination for hassle-free gifting on any occasion. <br /> Whether it's a birthday, anniversary, graduation, or simply a way to say 'thank you,' our gift cards have got you covered.
                                
                            </strong>
                        </h2>
                    </div>
                </div>
            </div>
            <div className='container mt-5 '>
                <div className='row' >
                    <div className='col-md-12'>
                        <div className='text-center' >
                            <h1 style={{ fontSize: "45px" }}> <b> Occasion-based Gift Cards</b> </h1>
                            <p style={{ fontSize: "30px" }}>There's Something For Every Occasion!</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-6 col-lg-3 mt-4' >
                        <div class="card"  style={{height:"250px"}}>
                            <a href="/">
                                <img src={gift1} class="card-img-top" alt="..." style={{height:"190px"}} />
                                <div class="card-body text-center">
                                    <a href='/' class="card-text "> <b> Birthday  </b> </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-4' >
                        <div class="card" >
                            <a href="/">
                                <img src={gift2} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <a href='/' class="card-text "> <b>Anniversary </b> </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-4' >
                        <div class="card" style={{height:"250px"}} >
                            <a href='/'>
                                <img  src={gift3} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <a href='/' class="card-text "> <b> Generic </b> </a>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-3 mt-4'>
                        <div class="card"  style={{height:"250px"}}>
                            <a href="/">
                                <img src={gift4} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <a href='/' class="card-text "> <b> More </b> </a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='container mt-5'>
                <div className='row' >
                    <div className='col-lg-6'>
                        <img className='img-fluid' src={gift} alt="" />
                   </div>
                        <div className='col-lg-6 mt-5'>
                            <h1 className='fs-4'> <b> Welcome to the Upstage Commerce Gift Card Store</b> </h1>
                            <h2 className='mt-2 fs-5'>Special Occasions Deserve Special Gifts!</h2>
                            <br />
                            <p><b>Versatile Gifting:</b> <span style={{ fontSize: "14px" }} > Our gift cards and vouchers cater to a wide range of tastes and preferences. From fashion and jewelry to travel, groceries, and more, there's something for everyone.
                            </span> </p>
                            <br />
                            <p><b>Personalization:</b> <span style={{ fontSize: "14px" }} > Select the perfect denomination or enter a custom amount, ranging from Rs 25 to Rs 10,000. Tailor your gift to suit your budget and the recipient's desires.
                            </span> </p>
                            <br />
                            <p><b>Instant Gratification: </b> <span style={{ fontSize: "14px" }} > No more waiting for shipping or delivery. Upstage Commerce gift cards are delivered instantly through email, making last-minute gifting a breeze.
                            </span> </p>
                            <br />
                            <p><b>Freedom to Choose:</b> <span style={{ fontSize: "14px" }} >Give your loved ones the freedom to shop for what they truly want. With Upstage Commerce gift cards, they can explore our vast product catalog and pick their favorites.
                            </span> </p>
                        </div>
                </div>
            </div>
            <div className='container mt-5 '>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3 text-center'>
                            <img className='img-fluid rounded' src={gift5} alt="" />
                    </div>
                </div>
            </div>
            <div className='container' style={{ marginTop: "50px" }}>
                <div style={{ marginLeft: "25px" }}>
                    <h1 style={{ fontSize: "20px" }}> <b> Gift Card Store </b></h1>

                    <p style={{ fontSize: "13px" }}>Special occasions call for special gifts. Whether it's a birthday or an anniversary, finding the perfect present for your loved ones can be a challenging task. Plus, there's always that uncertainty about whether they'll love your gift choice. But fret not! We have a hassle-free solution for you - Upstage Commerce Gift Cards! At Upstage Commerce, you can surprise your friends and family with gift cards and vouchers for various occasions, granting them the freedom to shop for whatever their heart desires. Why wait? Grab your Upstage Commerce gift vouchers online today, gift them, or redeem them to unlock an incredible shopping experience. Upstage Commerce Gift Card Store offers a wide array of gift cards spanning categories like travel, jewelry, fashion, groceries, apps, and more. You can select from a diverse range of denominations available or enter your preferred amount, ranging from Rs 25 to Rs 10,000. The information you're reading is up-to-date.</p>

                </div>
            </div>

            <div className='container' style={{ marginTop: "25px" }}>
                <div style={{ marginLeft: "25px" }}>
                    <h1 style={{ fontSize: "20px" }}> <b> Upstage Commerce Gift Cards - Elevate Every Occasion </b></h1>
                    <p style={{ fontSize: "13px" }}>Gift Cards: The Perfect Solution for Special Moments  <br />
                        When it comes to gifting, it's not always easy to find the perfect present. That's where Upstage Commerce Gift Cards come in. They offer an ideal gifting solution for all occasions, providing the recipient with the freedom to choose what they desire, whenever they want.
                        <br />
                        <b> Versatile Gifting:</b> Can't decide what to get someone? No worries! Visit the Upstage Commerce Gift Cards Section. Whether it's fashion accessories, groceries, travel coupons, or jewelry vouchers, our gift vouchers offer a fantastic way to let your loved ones select what suits them best.
                        <br />
                        <b> Flexible Denominations: </b> Upstage Commerce Gift Cards come in a wide range of denominations, starting from Rs. 50 and going up to Rs. 10,000 and beyond. Pick the one that matches your preference and the category you want to explore.
                        <br />
                        <b>Diverse Brands: </b>  Not only can you gift Upstage Commerce Gift Cards, but you can also choose from our extensive selection of 100+ brands. Explore names like Myntra, Tanishq, Croma, Google Play, Big Bazaar, and many more across various categories such as Fashion, Travel, Jewellery, Grocery, Apps, and Subscriptions.
                    </p>

                </div>
            </div>
            <div className='container' style={{ marginTop: "25px" }}>
                <div style={{ marginLeft: "25px" }}>
                    <h1 style={{ fontSize: "20px" }}> <b> Purchase Upstage Commerce Gift Cards & Vouchers Online</b></h1>

                    <p style={{ fontSize: "13px" }}>Buying gift vouchers online at Upstage Commerce is a breeze. Here's how:
                        <br />
                        Select Your Value: On the product page, pick the value of the gift card you'd like to purchase. <br />

                        <b>Add to Cart: </b>  Click on "Buy Now" to add the chosen gift card to your cart. <br />

                        <b> Recipient Details:</b>  Enter the recipient's details and address (if required). <br />

                        <b> Proceed to Payment:</b>  Click on "Proceed to Pay" to complete your purchase. <br />

                        <b>Payment Options: </b>  Choose your preferred payment method from a range of options including credit card, debit card, net banking, and UPI. <br />

                        <b> Email Confirmation: </b> After completing the checkout process, keep an eye on your email. You'll receive an email with all the details of your Upstage Commerce Gift Card.
                    </p>

                </div>
            </div>
        </>
    )
}

export default GiftCard