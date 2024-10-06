import { faCircleArrowDown, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PoolSideBar from '../images/poolSideBar.png';
import Restaurant from '../images/restaurant.png';
import SwimmingPool from '../images/swimmingPool.png';
import TheGYM from '../images/theGym.png';
import TheSPA from '../images/theSPA.png';

import Button from '../Components/Button';
import '../styles/facilities.css';
import SlidingQuotes from '../Components/SlidingQoutes';
import Footer from '../Components/Footer';

function Facilities() {
   const images = [
      { src: TheGYM, alt: 'The Gym' },
      { src: TheSPA, alt: 'The SPA' },
      { src: PoolSideBar, alt: 'Pool Side Bar' },
      { src: SwimmingPool, alt: 'Swimming Pool' },
      { src: Restaurant, alt: 'Restaurant' },
   ];
   return (
      <>
         <div className="facilities-Container">
            <div className="facilities-sectionOne ">
               <section className="homesection-One">
                  <h3 className="home-h3">WELCOME TO</h3>
                  <h1 className="home-h1">LUXURY</h1>
                  <h2 className="home-h2">HOTELS</h2>
                  <p className="home-p">
                     Book your stay and enjoy Luxury <br />
                     redefined at the most affordable rates.
                  </p>
               </section>
               <section className="homesection-Two">
                  <Button classEx="home-button">
                     <FontAwesomeIcon icon={faHouse} />
                     BUY NOW
                  </Button>
                  <a href="#home-section-two">
                     <FontAwesomeIcon icon={faCircleArrowDown} className="home-arrow-down" />
                  </a>
               </section>
            </div>
            <div className="home-section-two" id="home-section-two">
               <section className="facilities-sectionTwo">
                  <h2 className="home-h2">FACILITIES</h2>
                  <p>
                     We want your stay at our lush hotel to be truly unforgettable. That is why we
                     give special attention to all of your needs so that we can ensure an experience
                     quite uniquw. Luxury hotels offers the perfect setting with stunning views for
                     leisure and our modern luxury resort facilities will help you enjoy the best of
                     all.
                  </p>
               </section>
               <section className="facilities-sectionThree">
                  {images.map((image, index) => (
                     <img className="facilities-img" key={index} src={image.src} alt={image.alt} />
                  ))}
               </section>
            </div>
            <SlidingQuotes />
            <Footer />
         </div>
      </>
   );
}

export default Facilities;
{
   /* <SlidingQuotes />
         <Footer /> */
}
