import { faCircleArrowDown, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Components/Button';
import RoomsCategory from '../images/Group 68.png'; // Sample image
import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/rooms.css';

function Rooms() {
   const details = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quidem.`;
   const [showDetails, setShowDetails] = useState(false); // State for toggling room details
   const detailsToggle = () => {
      setShowDetails((prev) => !prev); // Toggle details
   };

   // Images array for sliding
   const images = [RoomsCategory, RoomsCategory, RoomsCategory];

   // State to track current slide
   const [currentSlide, setCurrentSlide] = useState(0);

   // Handle drag functionality (framer-motion)
   const handleDragEnd = (event, info) => {
      if (info.offset.x < -100) {
         // Dragged to the left, go to the next slide
         setCurrentSlide((prev) => (prev + 1) % images.length);
      } else if (info.offset.x > 100) {
         // Dragged to the right, go to the previous slide
         setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      }
   };

   return (
      <>
         <div className="rooms-Container">
            <div className="rooms-sectionOne">
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
                  <h2 className="home-h2">ROOMS AND RATES</h2>
                  <p>
                     Each of our bright, light-flooded rooms come with everything you could possibly
                     need for a comfortable stay. And yes, comfort isn’t our only objective, we also
                     value good design, sleek contemporary furnishing complemented by the rich tones
                     of nature’s palette as visible from our rooms’ sea-view windows and terraces.
                  </p>
               </section>
            </div>

            {/* Image sliding section */}
            <div className="rooms-SectionCategory">
               <motion.div
                  className="rooms-Carousel"
                  drag="x"
                  onDragEnd={handleDragEnd} // Detect end of drag to change slide
                  dragConstraints={{ left: 0, right: 0 }} // Prevent overscrolling
               >
                  <motion.div
                     className="rooms-Slide"
                     key={currentSlide} // Update slide key to trigger animation
                     initial={{ opacity: 0, x: 300 }} // Slide in animation (from right)
                     animate={{ opacity: 1, x: 0 }} // Animate to visible
                     exit={{ opacity: 0, x: -300 }} // Slide out animation (to left)
                     transition={{ duration: 0.5 }}
                  >
                     <img src={images[currentSlide]} alt="Room" className="rooms-SlideImage" />
                  </motion.div>
               </motion.div>

               {/* Room details section */}
               <div className="rooms-Details">
                  <h1>SINGLE ROOM</h1>
                  <div className="room-toggle-details">
                     <div className="rooms-details-Toggle">
                        <Button onClick={detailsToggle}>
                           <FontAwesomeIcon icon={faPlus} />
                        </Button>
                        <p className="home-p">VIEW ROOM DETAILS</p>
                     </div>
                  </div>
                  {showDetails && <p>{details}</p>}
               </div>
            </div>
         </div>
      </>
   );
}

export default Rooms;
