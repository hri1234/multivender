import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
// const footerLinks = [

// {
//   title: "about",
//   links: [
//     {
//       name: "Contact us",
//       redirect: "/contact",

//     },
//     {
//       name: "About Us",
//       redirect: "/about",
//     },
//     {
//       name: "Upstage Commerce Press",
//        redirect: "https://stories.flipkart.com/category/top-stories/news",
//     },
//     {
//       name: "Upstage Commerce Wholesale",
//       redirect: "/stories",
//     },
//     {
//       name: "Upstage Commerce Stories",
//       redirect: "/wholesale",
//     },

//   ]
// },
// {
//   title: "help",
//   links: [
//     {
//       name: "Payments",
//       redirect: "/payment",
//     },
//     {
//       name: "Shipping",
//       redirect: "/shiping",
//     },
//     {
//       name: "Cancellation & Returns",
//       redirect: "/cancle",
//     },
//   ]
// },
// {
//   title: "policy",
//   links: [
//     {
//       name: "PrivacyPolicy",
//       redirect: "/policy",
//     },
//     {
//       name: "Return Policy",
//       redirect: "/returnpolicy",
//     },
//     {
//       name: "Terms Condition",
//       redirect: "/condition",
//     },
//     {
//       name: "Disclaimer",
//       redirect: "/disclaimer",
//     },
//   ]
// },
// {
//   title: "social",
//   links: [
//     {
//       name: "Facebook",
//       redirect: "https://www.facebook.com/flipkart",
//     },
//     {
//       name: "Twitter",
//       redirect: "https://twitter.com/flipkart",
//     },
//     {
//       name: "YouTube",
//       redirect: "https://www.youtube.com/flipkart",
//     }
//   ]
// }
// ]

const Footer = () => {
  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);
  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);
  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">
              {/* {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}
                </div>
              ))} */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    <h2 className='mt-3 fs-5 text-primary-grey'>About Us</h2>
                    <Link to="/contact"><h6 className='mt-3'>Contact Us</h6></Link>
                    <Link to="/about"><h6 className='mt-3'>About Us</h6></Link>
                    <Link to="/stories"><h6 className='mt-3'>Upstage Commerce Stories</h6></Link>
                    <Link to="/wholesale"><h6 className='mt-3'>Upstage Commerce Wholesale</h6></Link>
                    <Link to="/sellpage"><h6 className='mt-3'>Sell On Upstage Commerce</h6></Link>
                  </div>
                  <div className="col-lg-3">
                    <h2 className='mt-3 fs-5 text-primary-grey'>Help</h2>
                    <Link to="/payment"><h6 className='mt-3'>Payments</h6></Link>
                    <Link to="/shiping"><h6 className='mt-3'>Shipping</h6></Link>
                    <Link to="/cancle"><h6 className='mt-3'>Cancellation & Returns</h6></Link>
                  </div>
                  <div className="col-lg-3">
                    <h2 className='mt-3 fs-5 text-primary-grey'>policy</h2>
                    <Link to="/policy"><h6 className='mt-3'>PrivacyPolicy</h6></Link>
                    <Link to="/returnpolicy"><h6 className='mt-3'>Return Policy</h6></Link>
                    <Link to="/condition"><h6 className='mt-3'>Terms Condition</h6></Link>
                    <Link to="/disclaimer"><h6 className='mt-3'>Disclaimer</h6></Link>
                  </div>
                  <div className="col-lg-3">
                    <h2 className='mt-3 fs-5 text-primary-grey'>Social</h2>
                    <Link to="https://www.facebook.com/"><h6 className='mt-3'>Facebook</h6></Link>
                    <Link to="https://twitter.com/"><h6 className='mt-3'>Twitter</h6></Link>
                    <Link to="https://www.youtube.com/"><h6 className='mt-3'>YouTube</h6></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Mail Us:</h2>
                <p className="mt-2 leading-5">Upstage Commerce Internet Private Limited,<br />
                  Support@streetroyalsa.co.za
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Registered Office Address:</h2>
                <p className="mt-2 leading-5">Upstage Commerce Internet Private Limited,<br />
                  Buildings Alyssa, Begonia &<br />
                  Clove Embassy Tech Village,<br />
                  Outer Ring Road, Devarabeesanahalli,<br />
                  capetown, 560103,<br />
                  , Southafrica <br />
                  CIN : U51109KA2012PTC066107<br />
                  Telephone: <a className="text-primary-blue" href="tel:18002029898">0126540465</a>
                </p>
              </div>
            </div>

          </footer>
          {/* <!-- footer ends --> */}

          <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            
            <Link to="/Form"><span className="text-yellow-400"><WorkIcon sx={{ fontSize: "20px" }} /></span> Sell On Upstage Commerce</Link>  
            

          <Link to="/giftcard">  
              <span className="text-yellow-400"><CardGiftcardIcon sx={{ fontSize: "20px" }} /></span> Gift Cards
              </Link>


           <Link to='/cancle'>
              <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Help Center
              </Link>

            <span>&copy; 2007-{new Date().getFullYear()}  Upstage Commerce.com</span>
            <img draggable="false" src={paymentMethods} alt="Card Payment" />
          </div>
        </>
      )}
    </>
  )
};

export default Footer;
