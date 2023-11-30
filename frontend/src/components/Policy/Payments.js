import react from "react";

function Payments() {
    return (
        <>
            <div className="container border ml-5 mt-5">
                <div className="container-fluid  py-5 px-lg-0">
                    <h1 className="text-center mb-5">Payment</h1>

                    <h5 className=" text-dark mb-3">
                        
                    Payment Methods and Security at Upstage Commerce
                    </h5>
                    <p>
                    Welcome to Upstage Commerce, where we offer a variety of secure payment methods for your convenience. We prioritize the security of your transactions. Below, you'll find details on how to pay for your purchases.
                    <br /><br />
                        
                        You may use Internet Banking, Gift Card, Cash on Delivery and Wallet to make your purchase.
                        <br /><br />
                        Upstage Commerce also accepts payments made using Visa, MasterCard, Maestro and American Express credit/debit cards in India and 21 other countries.</p>

                    <h5 className=" text-dark mb-3">
                        Are there any hidden charges (Octroi or Sales Tax) when I make a purchase on Upstage Commerce?
                    </h5>
                    <p>
                        There are NO hidden charges when you make a purchase on Upstage Commerce. The prices listed for all the items are final and all-inclusive. The price you see on the product page is exactly what you pay.
                        <br /><br />
                        Delivery charges may be extra depending on the seller policy. Please check individual seller for the same. In case of seller WS Retail, the ₹50 delivery charge is waived off on orders worth ₹500 and over.
                    </p>

                    <h5 className=" text-dark mb-3">What is Cash on Delivery?</h5>
                    <p>
                        If you are not comfortable making an online payment on Upstage Commerce.com, you can opt for the Cash on Delivery (C-o-D) payment method instead. With C-o-D you can pay in cash at the time of actual delivery of the product at your doorstep, without requiring you to make any advance payment online.
                        <br /><br />
                        The maximum order value for a Cash on Delivery (C-o-D) payment is ₹50,000. It is strictly a cash-only payment method. Gift Cards or store credit cannot be used for C-o-D orders. Foreign currency cannot be used to make a C-o-D payment. Only Indian Rupees accepted.
                    </p>

                    <h5 className=" text-dark mb-3">How do I pay using a credit/debit card?</h5>
                    <p>
                        We accept payments made by credit/debit cards issued in India and 21 other countries.
                    </p>
                    <h6 className=" text-dark mb-3">Credit cards</h6>
                    <p>
                        We accept payments made using Visa, MasterCard and American Express credit cards.
<br/><br/>
                        To pay using your credit card at checkout, you will need your card number, expiry date, three-digit CVV number (found on the backside of your card). After entering these details, you will be redirected to the bank's page for entering the online 3D Secure password.
                    </p>
                    <h6 className=" text-dark mb-3">Debit cards</h6>
                    <p>
                        We accept payments made using Visa, MasterCard and Maestro debit cards.
<br/><br/>
                        To pay using your debit card at checkout, you will need your card number, expiry date (optional for Maestro cards), three-digit CVV number (optional for Maestro cards). You will then be redirected to your bank's secure page for entering your online password (issued by your bank) to complete the payment.
<br/><br/>
                        Internationally issued credit/debit cards cannot be used for Flyte, Wallet and eGV payments/top-ups.
                    </p>
                    <h5 className=" text-dark mb-3">
                        Is it safe to use my credit/debit card on Upstage Commerce?
                    </h5>
                    <p>
                        Your online transaction on Upstage Commerce is secure with the highest levels of transaction security currently available on the Internet. Upstage Commerce uses 256-bit encryption technology to protect your card information while securely transmitting it to the respective banks for payment processing.
<br/><br/>
                        All credit card and debit card payments on Upstage Commerce are processed through secure and trusted payment gateways managed by leading banks. Banks now use the 3D Secure password service for online transactions, providing an additional layer of security through identity verification.
                    </p>
                    <h5 className=" text-dark mb-3">

                        What steps does Upstage Commerce take to prevent card fraud?
                    </h5>
                    <p>
                       Upstage Commerce realizes the importance of a strong fraud detection and resolution capability. We and our online payments partners monitor transactions continuously for suspicious activity and flag potentially fraudulent transactions for manual verification by our team.
<br/><br/>
                        In the rarest of rare cases, when our team is unable to rule out the possibility of fraud categorically, the transaction is kept on hold, and the customer is requested to provide identity documents. The ID documents help us ensure that the purchases were indeed made by a genuine card holder. We apologise for any inconvenience that may be caused to customers and request them to bear with us in the larger interest of ensuring a safe and secure environment for online transactions.
                    </p>
                    <h5 className=" text-dark mb-3">

                        What is a 3D Secure password?
                    </h5>
                    <p>
                        The 3D Secure password is implemented by VISA and MasterCard in partnership with card issuing banks under the "Verified by VISA" and "Mastercard SecureCode" services, respectively.
<br/><br/>
                        The 3D Secure password adds an additional layer of security through identity verification for your online credit/debit card transactions. This password, which is created by you, is known only to you. This ensures that only you can use your card for online purchases.
                    </p>
                    <h5 className=" text-dark mb-3">


                        How can I get the 3D Secure password for my credit/debit card?
                    </h5>
                    <p>
                        You can register for the 3D Secure password for your credit/debit card by visiting your bank's website. The registration links for some of the banks have been provided below for easy reference:
                    </p><br />

                    <table class="table border">
                        <thead>
                            <tr>
                                <th scope="col">State Bank of India</th>
                                <th scope="col">ICICI Bank</th>
                                <th scope="col">HDFC Bank</th>
                                <th scope="col">Punjab National Bank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">Axis Bank</td>
                                <td>Corporation Bank</td>
                                <td>Andhra Bank</td>
                                <td>Bank of Baroda</td>
                            </tr>
                            <tr>
                                <td scope="row">Standard Chartered India</td>
                                <td>	Union Bank of India</td>
                                <td>Central Bank of India</td>
                                <td>Citibank</td>
                            </tr>
                            <tr>
                                <td scope="row">Deutsche Bank</td>
                                <td >Dhanlakshmi Bank</td>
                                <td>IDBI Bank</td>
                                <td>Canara Bank</td>
                            </tr>
                        </tbody>
                    </table>
 <br/>
                    <h5 className=" text-dark mb-3">
                        How does 'Instant Cashback' work?</h5>

                    <p>
                        The 'Cashback' offer is instant and exclusive to Upstage Commerce.com. You only pay the final price you see in your shopping cart.
                    </p>
                    <h5 className=" text-dark mb-3">
                        How do I place a Cash on Delivery (C-o-D) order?
                    </h5>
                    <p>
                        All items that have the "Cash on Delivery Available" icon are valid for order by Cash on Delivery.
<br/><br/>
                        Add the item(s) to your cart and proceed to checkout. When prompted to choose a payment option, select "Pay By Cash on Delivery". Enter the CAPTCHA text as shown, for validation.
<br/><br/>
                        Once verified and confirmed, your order will be processed for shipment in the time specified, from the date of confirmation. You will be required to make a cash-only payment to our courier partner at the time of delivery of your order to complete the payment.
<br/><br/>
                        Terms & Conditions:-<br/><br/>
  
                        <ul>
                            <li>
                                The maximum order value for C-o-D is ₹50,000<br/></li>
                        <li> Gift Cards or Store Credit cannot be used for C-o-D orders<br/></li>
                        <li>Cash-only payment at the time of delivery.</li>
                
                        </ul>
                    </p>







                    <br /><br />
                </div>
            </div>
        </>
    );
}
export default Payments;