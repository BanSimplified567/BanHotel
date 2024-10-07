import { faCircleArrowDown, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PoolSideBar from '../images/poolSideBar.png';
import Restaurant from '../images/restaurant.png';
import SwimmingPool from '../images/swimmingPool.png';
import TheGYM from '../images/theGym.png';
import TheSPA from '../images/theSPA.png';

import Button from '../Components/Button';
import Footer from '../Components/Footer';
import SlidingQuotes from '../Components/SlidingQuotes';
import '../styles/facilities.css';

function Facilities() {
   const [lightboxImage, setLightboxImage] = useState(null);
   const navigate = useNavigate(); // Initialize navigate

   const images = [
      { src: TheGYM, alt: 'The Gym' },
      { src: TheSPA, alt: 'The SPA' },
      { src: PoolSideBar, alt: 'Pool Side Bar' },
      { src: SwimmingPool, alt: 'Swimming Pool' },
      { src: Restaurant, alt: 'Restaurant' },
   ];

   const openLightbox = (imageSrc) => {
      setLightboxImage(imageSrc);
   };

   const closeLightbox = () => {
      setLightboxImage(null);
   };

   // Function to handle button click for navigating to the rooms page
   const handleButtonClick = () => {
      navigate('/rooms'); // Replace with your actual rooms page path
   };

   return (
      <>
         <div className="facilities-Container">
            {/* Animate the welcome section */}
            <motion.div className="facilities-sectionOne">
               <motion.section
                  className="homesection-One"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <h3 className="home-h3">WELCOME TO</h3>
                  <motion.h1
                     className="home-h1"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 }}
                  >
                     LUXURY
                  </motion.h1>
                  <motion.h2
                     className="home-h2"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1 }}
                  >
                     HOTELS
                  </motion.h2>
                  <p className="home-p">
                     Book your stay and enjoy Luxury <br />
                     redefined at the most affordable rates.
                  </p>
               </motion.section>
               <section className="homesection-Two">
                  <Button classEx="home-button" onClick={handleButtonClick}>
                     {/* Add onClick here */}
                     <FontAwesomeIcon icon={faHouse} />
                     BOOK NOW
                  </Button>
                  <a href="#home-section-two">
                     <FontAwesomeIcon icon={faCircleArrowDown} className="home-arrow-down" />
                  </a>
               </section>
            </motion.div>

            {/* Lazy-load images in the facilities section */}
            <div className="home-section-two" id="home-section-two">
               <section className="facilities-sectionTwo">
                  <motion.h2
                     className="home-h2"
                     initial={{ opacity: 0, x: -100 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     FACILITIES
                  </motion.h2>
                  <motion.p
                     initial={{ opacity: 0, x: -100 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     We want your stay at our lush hotel to be truly unforgettable. That is why we
                     give special attention to all of your needs so that we can ensure an experience
                     quite unique. Luxury hotels offers the perfect setting with stunning views for
                     leisure and our modern luxury resort facilities will help you enjoy the best of
                     all.
                  </motion.p>
               </section>

               <motion.section
                  className="facilities-sectionThree"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
               >
                  {images.map((image, index) => (
                     <motion.img
                        className="facilities-img"
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        onClick={() => openLightbox(image.src)}
                        whileHover={{ scale: 1.05 }} // Hover effect
                        whileTap={{ scale: 0.95 }} // Tap effect
                     />
                  ))}
               </motion.section>

               <motion.section
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <SlidingQuotes />
               </motion.section>
               <motion.section
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <Footer />
               </motion.section>
            </div>
            {/* Lightbox for viewing large images */}
            {lightboxImage && (
               <div className="lightbox" onClick={closeLightbox}>
                  <img src={lightboxImage} alt="Facility" className="lightbox-img" />
                  <button className="lightbox-close" onClick={closeLightbox}>
                     Close
                  </button>
               </div>
            )}
         </div>
      </>
   );
}

export default Facilities;
