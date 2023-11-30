import react from "react";

function Shiping() {
    return (
        <>
            <div className="container border ml-5 mt-5">
                <div className="container-fluid  py-5 px-lg-0">
                    <h1 className="text-center mb-5">Shipping</h1>
                    <h5 className=" text-dark mb-3">
                        What are the delivery charges?
                    </h5>
                    <p>
                        At Upstage Commerce, we understand that delivery charges can vary depending on the seller and the items you purchase. We aim to provide transparent information about these charges to ensure you have a clear understanding.</p>
                        
                    <h6 className=" text-dark mb-3">
                        Delivery Charges by Seller:
                    </h6>
                    <p>
                        Delivery charges are determined by each individual seller on our platform.
                        Sellers may incur higher shipping costs for low-value items, and in such cases, a nominal delivery charge may be applied to cover logistics expenses.
                    </p>
                    <h6 className=" text-dark mb-3">
                        Order Summary:
                    </h6>
                    <p>
                        To find out the specific delivery charges for the products you've selected, please review your order summary during the checkout process.
                    </p>

                    <h6 className=" text-dark mb-3">
                        Upstage Commerce Plus Membership:
                    </h6>
                    <p>
                        <ul>
                            <li>
                                If you're a Upstage Commerce Plus member, you may benefit from reduced delivery charges.</li>
                                <li>For Upstage Commerce Plus members, a Rs 40 delivery charge per item may apply if the order value is less than Rs 500.</li>
                                <li>Orders with a total value of Rs 500 or above enjoy free delivery.
                            </li>
                        </ul>
                    </p>
                    <h5 className=" text-dark mb-3">
                        Why does the delivery date not correspond to the delivery timeline of X-Y business days?
                    </h5>
                    <p>
                    Welcome to Upstage Commerce! We're dedicated to providing you with transparency and clarity regarding our delivery charges and timelines. Below, you'll find answers to common questions.
                    </p>
                    <h6 className=" text-dark mb-3">
                       
                    Delivery Charges Overview:
                    </h6>
                    <p>
                    At Upstage Commerce, we believe in fair and competitive delivery charges.
These charges may vary depending on factors such as the seller, product type, and your delivery location.
                    </p>
                    <h6 className=" text-dark mb-3">
                    Delivery Date vs. Delivery Timeline:
                    </h6>
                    <p>
                    Sometimes, you may notice a difference between the delivery date and the initial delivery timeline of X-Y business days shown on the product page.
This variance can occur due to holidays, non-working days, or other factors that affect the delivery process.
                    </p>
                    <h6 className=" text-dark mb-3">
                    Holidays and Non-Working Days:
                    </h6>
                    <p>
                    It's important to note that both the seller and our courier partners may have holidays or non-working days between the day you place your order and the actual delivery date.<br/><br/>
To account for these factors, we may add an extra day to the estimated delivery date to ensure accuracy.
                    </p>
                    <h6 className=" text-dark mb-3">
                       
                    Sunday Deliveries:
                    </h6>
                    <p>
                    Some courier partners and sellers do not operate on Sundays.
This non-working day is factored into the delivery dates provided to you during the checkout process.
                    </p>
                      <h5 className=" text-dark mb-3">
                        What is the estimated delivery time?
                    </h5>

                    <p>
                        Sellers generally procure and ship the items within the time specified on the product page. Business days exclude public holidays and Sundays.
                        <br /><br />
                        Estimated delivery time depends on the following factors:
                        <ul>
                            <li>
                                The Seller offering the product</li>
                            <li>Product's availability with the Seller</li>
                            <li>The destination to which you want the order shipped to and location of the Seller.</li>
                        </ul>
                    </p>
                    <h5 className=" text-dark mb-3">
                        Are there any hidden costs (sales tax, octroi etc) on items sold by Sellers on Upstage Commerce ?
                    </h5>
                    <p>
                        There are NO hidden charges when you make a purchase on Upstage Commerce . List prices are final and all-inclusive. The price you see on the product page is exactly what you would pay.
                        <br /><br />
                        Delivery charges are not hidden charges and are charged (if at all) extra depending on the Seller's shipping policy.
                    </p>

                    <h5>
                        Why does the estimated delivery time vary for each seller?
                    </h5>
                    <p>
                        You have probably noticed varying estimated delivery times for sellers of the product you are interested in. Delivery times are influenced by product availability, geographic location of the Seller, your shipping destination and the courier partner's time-to-deliver in your location.
                        <br /><br />
                        Please enter your default pin code on the product page (you don't have to enter it every single time) to know more accurate delivery times on the product page itself.
                    </p>

                    <h5>
                        Seller does not/cannot ship to my area. Why?
                    </h5>

                    <p>
                        Please enter your pincode on the product page (you don't have to enter it every single time) to know whether the product can be delivered to your location.
                        <br /><br />
                        If you haven't provided your pincode until the checkout stage, the pincode in your shipping address will be used to check for serviceability.
                        <br /><br />
                        Whether your location can be serviced or not depends on

                        <ul>
                            <li>Whether the Seller ships to your location</li>
                            <li>Legal restrictions, if any, in shipping particular products to your location</li>
                            <li>The availability of reliable courier partners in your location</li>
                        </ul>
                        At times Sellers prefer not to ship to certain locations. This is entirely at their discretion.
                    </p>

                    <h5 className=" text-dark mb-3">
                        Why is the CoD option not offered in my location?
                    </h5>
                    <p>
                        Availability of CoD depends on the ability of our courier partner servicing your location to accept cash as payment at the time of delivery.

                        Our courier partners have limits on the cash amount payable on delivery depending on the destination and your order value might have exceeded this limit. Please enter your pin code on the product page to check if CoD is available in your location.
                    </p>

                    <h5 className=" text-dark mb-3">
                        I need to return an item, how do I arrange for a pick-up?
                    </h5>

                    <p>
                        Returns are easy. Contact Us to initiate a return. You will receive a call explaining the process, once you have initiated a return.

                        Wherever possible Ekart Logistics will facilitate the pick-up of the item. In case, the pick-up cannot be arranged through Ekart, you can return the item through a third-party courier service. Return fees are borne by the Seller.
                    </p>

                    <h5 className=" text-dark mb-3">
                        I did not receive my order but got a delivery confirmation SMS/Email.
                    </h5>
                    <p>
                        In case the product was not delivered and you received a delivery confirmation email/SMS, report the issue within 7 days from the date of delivery confirmation for the seller to investigate.
                    </p>

                    <h5 className=" text-dark mb-3">
                        Does Upstage Commerce deliver internationally?
                    </h5>

                    <p>
                        As of now, Upstage Commerce  doesn't deliver items internationally.
                        <br /><br />
                        You will be able to make your purchases on our site from anywhere in the world with credit/debit cards issued in India and 21 other countries, but please ensure the delivery address is in India.
                    </p>







                </div>
            </div>
            <br/><br/><br/>
        </>
    );
}
export default Shiping;