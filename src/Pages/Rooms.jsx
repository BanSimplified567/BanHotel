import { faCircleArrowDown, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../Components/Button';
import '../styles/rooms.css';
import SlidingQoutes from '../Components/SlidingQoutes';
import Footer from '../Components/Footer';

import RoomsCategory2 from '../images/annie-spratt-Eg1qcIitAuA-unsplash.jpg'; // Sample image
import RoomsCategory from '../images/beachWide.png'; // Sample image
import RoomsCategory3 from '../images/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg'; // Sample image

function Rooms() {
   const details = [
      {
         title: 'SINGLE ROOM',
         price: '$147 Avg/night',
         image: RoomsCategory,
         description:
            'Our Single Room, designed for solo travelers or business guests, offers a queen-size bed, complimentary high-speed Wi-Fi, flat-screen TV, 24-hour room service, work desk with an ergonomic chair, en-suite bathroom with toiletries and bathrobes, and daily housekeeping—combining comfort, convenience, and affordability for a perfect stay.',
      },
      {
         title: 'DOUBLE ROOM',
         price: '$182 Avg/day',
         image: RoomsCategory2,
         description:
            'Our Double Room offers comfort and intimacy, ideal for couples or friends traveling together, featuring two plush double beds with high-quality linens, a spacious layout with stylish decor and ample natural light, a modern ensuite bathroom with complimentary toiletries and fluffy towels, in-room comforts like complimentary Wi-Fi, a flat-screen TV with cable channels, and a mini-fridge stocked with beverages, convenient extras including a work desk, coffee maker, and safe for valuables, and 24/7 room service for delicious meals in the comfort of your room—making it the perfect retreat to unwind after a day of exploring or working.',
      },
      {
         title: 'BIG ROOM',
         price: '$265 Avg/night',
         image: RoomsCategory3,
         description:
            'Our Big Room is the perfect choice for travelers seeking extra space and luxury, featuring a generous layout with a king-size bed and a separate sitting area with a sofa bed to accommodate up to four guests comfortably, an elegant ensuite bathroom with a soaking tub, walk-in shower, and premium bath products, state-of-the-art amenities including a large flat-screen TV, high-speed internet access, and a sound system for an enhanced entertainment experience, a convenient kitchenette with a microwave, sink, and dining table for casual dining, breathtaking views of the city skyline or serene landscapes, and exclusive access to a dedicated concierge service for assistance with reservations and personalized experiences—making it an ideal option for both business and leisure travelers looking for an unforgettable stay.',
      },
   ];

   // State for toggling room details (for each room category)
   const [showDetails, setShowDetails] = useState([false, false, false]);
   const [showModal, setShowModal] = useState(false);
   const [selectedDetail, setSelectedDetail] = useState(null);

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
               {details.map((detail, index) => (
                  <motion.div key={index} className="rooms-Carousel">
                     <AnimatePresence mode="wait">
                        <motion.div className="rooms-Slide">
                           <img
                              src={detail.image}
                              alt={`${detail.title}`}
                              className="rooms-SlideImage"
                           />
                        </motion.div>
                     </AnimatePresence>

                     <div className="rooms-Details">
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
                     </div>
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
                     <Button classEx="home-button">BOOK NOW</Button>
                  </div>
               </div>
            )}
         </div>
         <SlidingQoutes />
         <Footer />
      </>
   );
}

export default Rooms;
