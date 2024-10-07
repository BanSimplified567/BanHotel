import { faCircleArrowDown, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import '../styles/rooms.css';

import RoomsCategory2 from '../images/doubleroom.png'; // Sample image
import RoomsCategory from '../images/SingleRoomWithLaptop.png'; // Sample image
import RoomsCategory3 from '../images/frames-for-your-heart-FqqiAvJejto-unsplash.jpg'; // Sample image

function Rooms() {
   const details = [
      {
         title: 'SINGLE ROOM',
         price: '₱1,479 Avg/night',
         image: RoomsCategory,
         description:
            'Our Single Room is perfect for solo travelers and business guests, featuring a queen-size bed, free high-speed Wi-Fi, flat-screen TV, 24-hour room service, a work desk with ergonomic chair, en-suite bathroom with toiletries and bathrobes, and daily housekeeping—offering comfort, convenience, and affordability.',
      },
      {
         title: 'DOUBLE ROOM',
         price: '₱1,829 Avg/day',
         image: RoomsCategory2,
         description:
            'Our Double Room provides a cozy retreat for couples or friends, featuring two plush double beds with high-quality linens, a stylish and spacious layout with natural light, and a modern ensuite bathroom with complimentary toiletries. Enjoy in-room amenities like free Wi-Fi, a flat-screen TV with cable, a mini-fridge, a work desk, a coffee maker, a safe for valuables, and 24/7 room service for a relaxing stay after a day of exploration or work.',
      },
      {
         title: 'BIG ROOM',
         price: '₱2,659 Avg/night',
         image: RoomsCategory3,
         description:
            'Our Big Room offers spacious luxury for travelers, featuring a king-size bed, a separate sitting area with a sofa bed for up to four guests, and an elegant ensuite bathroom with a soaking tub and walk-in shower. Enjoy amenities like a large flat-screen TV, high-speed internet, a sound system, and a convenient kitchenette with dining space. With stunning views of the city skyline or serene landscapes and exclusive concierge service, it’s the perfect choice for both business and leisure travelers seeking an unforgettable stay.',
      },
   ];

   // State for toggling room details (for each room category)
   const [showDetails, setShowDetails] = useState([false, false, false]);
   const [showModal, setShowModal] = useState(false);
   const [selectedDetail, setSelectedDetail] = useState(null);
   const [notificationVisible, setNotificationVisible] = useState(false);

   const detailsToggle = (index) => {
      setShowDetails((prevDetails) => {
         const newDetails = [...prevDetails];
         newDetails[index] = !newDetails[index];
         return newDetails;
      });
   };

   const handlePriceClick = (index) => {
      setSelectedDetail(details[index]);
      setShowModal(true);
   };

   const closeModal = () => {
      setShowModal(false);
      setSelectedDetail(null);
   };

   const handleBookNowClick = () => {
      setNotificationVisible(true);
      setTimeout(() => {
         setNotificationVisible(false);
      }, 3000); // Hide notification after 3 seconds
   };

   const handleBuyNowClick = () => {
      const section = document.getElementById('home-section-two');
      if (section) {
         section.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <>
         <div className="rooms-Container">
            <div className="rooms-sectionOne">
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
               <motion.section
                  className="homesection-Two"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <Button classEx="home-button" onClick={handleBuyNowClick}>
                     {/* Attach the handler here */}
                     <FontAwesomeIcon icon={faHouse} />
                     BOOK NOW
                  </Button>
                  <a href="#home-section-two">
                     <FontAwesomeIcon icon={faCircleArrowDown} className="home-arrow-down" />
                  </a>
               </motion.section>
            </div>

            <motion.div
               className="home-section-two"
               id="home-section-two"
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
            >
               <section className="facilities-sectionTwo">
                  <h2 className="home-h2">ROOMS AND RATES</h2>
                  <p className="home-p">
                     Each of our bright, light-flooded rooms come with everything you could possibly
                     need for a comfortable stay. And yes, comfort isn’t our only objective, we also
                     value good design, sleek contemporary furnishing complemented by the rich tones
                     of nature’s palette as visible from our rooms’ sea-view windows and terraces.
                  </p>
               </section>
            </motion.div>

            {/* Image sliding section */}
            <div className="rooms-SectionCategory">
               {details.map((detail, index) => (
                  <motion.div
                     key={index}
                     className="rooms-Carousel"
                     initial={{ opacity: 0, x: 100 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     <AnimatePresence mode="wait">
                        <motion.div className="rooms-Slide">
                           <img
                              src={detail.image}
                              alt={`₱{,de9tail.title}`}
                              className="rooms-SlideImage"
                           />
                        </motion.div>
                     </AnimatePresence>

                     <motion.section
                        className="rooms-Details"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                     >
                        <div className="rooms-Title">
                           <h1 className="home-h1">{detail.title}</h1>
                        </div>
                        <div className="room-toggle-details">
                           <div className="room-toggle-button">
                              <Button classEx="home-button" onClick={() => detailsToggle(index)}>
                                 <FontAwesomeIcon icon={faPlus} />
                              </Button>
                              <p className="home-p">VIEW ROOM DETAILS</p>
                           </div>

                           <Button classEx="home-button" onClick={() => handlePriceClick(index)}>
                              {detail.price}
                           </Button>
                        </div>
                        {showDetails[index] && (
                           <p className="home-p rooms-toggle-description">{detail.description}</p>
                        )}
                     </motion.section>
                  </motion.div>
               ))}
            </div>

            {showModal && selectedDetail && (
               <div className="modal-overlay">
                  <div className="modal-content">
                     <Button classEx="close-modal" onClick={closeModal}>
                        &times;
                     </Button>
                     <div className="rooms-modal-description">
                        <img src={selectedDetail.image} alt={selectedDetail.title} />
                        <div className="modal-details">
                           <h2 className="home-h3">{selectedDetail.title}</h2>
                           <p>{selectedDetail.price}</p>
                           <p>{selectedDetail.description}</p>
                        </div>
                     </div>
                     <Button classEx="home-button" onClick={handleBookNowClick}>
                        BOOK NOW
                     </Button>
                  </div>
               </div>
            )}

            {notificationVisible && (
               <div className="notification">
                  Your booking request has been sent! We will contact you shortly.
               </div>
            )}
         </div>
         <Footer />
      </>
   );
}

export default Rooms;
