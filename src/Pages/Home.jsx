import { faCircleArrowDown, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import SlidingQuotes from '../Components/SlidingQuotes';
import WideBeach from '../images/beachWide.png';
import DoubleRooms from '../images/doubleroom.png';
import '../styles/home.css';

function Home() {
   // Initialize navigate function
   const navigate = useNavigate();

   // Handler for explore button click to navigate to rooms page
   const handleExploreClick = () => {
      navigate('/rooms'); // Navigate to the rooms page
   };

   return (
      <>
         <div className="home-Container">
            <div className="home-sectionOne">
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
                  <Button classEx="home-button" onClick={handleExploreClick}>
                     <FontAwesomeIcon icon={faHouse} />
                     BOOK NOW
                  </Button>
                  <a href="#home-section-two">
                     <FontAwesomeIcon icon={faCircleArrowDown} className="home-arrow-down" />
                  </a>
               </motion.section>
            </div>

            {/* Section Two - with slide-in animation */}
            <motion.section className="home-sectionTwo" id="home-section-two">
               <motion.p
                  initial={{ opacity: 0, x: -100 }} // Start off-screen with 0 opacity
                  whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
                  transition={{ duration: 0.5 }} // Duration of 0.5 seconds
               >
                  All our room types are including complementary breakfast
               </motion.p>
               <motion.article
                  className="homesectionTwo-One"
                  initial={{ opacity: 0, x: -100 }} // Start off-screen with 0 opacity
                  whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
                  transition={{ duration: 0.5 }} // Duration of 0.5 seconds
               >
                  <motion.div className="homesectionTwo-Paragraph">
                     <h1 className="home-h1">Luxury redefined</h1>
                     <motion.p
                        className="home-p"
                        initial={{ opacity: 0, x: 100 }} // Start off-screen with 0 opacity
                        whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
                        transition={{ duration: 0.5 }} // Duration of 0.5 seconds
                     >
                        Our rooms are designed to transport you into an environment made for
                        leisure. Take your mind off the day-to-day of home life and find a private
                        paradise for yourself.
                     </motion.p>
                     <Button classEx="home-button" onClick={handleExploreClick}>
                        EXPLORE
                     </Button>
                  </motion.div>
                  <img src={DoubleRooms} alt="DoubleRooms" />
               </motion.article>

               <motion.article
                  className="homesectionTwo-One"
                  initial={{ opacity: 0, x: -100 }} // Start off-screen with 0 opacity
                  whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
                  transition={{ duration: 0.5 }} // Duration of 0.5 seconds
               >
                  <motion.div className="homesectionTwo-Paragraph">
                     <h1 className="home-h1">Leave your worries in the sand</h1>
                     <p className="home-p">
                        We love life at the beach. Being close to the ocean with access to endless
                        sandy beach ensures a relaxed state of mind. It seems like time stands still
                        watching the ocean.
                     </p>
                     <Button classEx="home-button" onClick={handleExploreClick}>
                        EXPLORE
                     </Button>
                  </motion.div>
                  <img src={WideBeach} alt="WideBeach" />
               </motion.article>
            </motion.section>
            <motion.section
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
            >
               <SlidingQuotes />
            </motion.section>
            <motion.section
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
            >
               <Footer />
            </motion.section>
         </div>
      </>
   );
}

export default Home;
