import {
   faCircleArrowDown,
   faHouse,
   faArrowLeft,
   faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Components/Button';
import WideBeach from '../images/beachWide.png';
import DoubleRooms from '../images/doubleroom.png';
import '../styles/home.css';
import { useState } from 'react';
import Footer from '../Components/Footer';

function Home() {
   const quotes = [
      {
         text: 'Calm, Serene, Retro – What a way to relax and enjoy.',
         author: 'Mr. and Mrs. Baxter, UK',
      },
      { text: 'A tranquil haven for your soul.', author: 'John Doe, USA' },
      { text: 'Experience luxury like never before.', author: 'Jane Smith, Australia' },
      { text: 'Peace and quiet in the lap of nature.', author: 'Alex Johnson, Canada' },
      { text: 'A perfect escape from the ordinary.', author: 'Emily White, New Zealand' },
   ];

   // Set initial index to 0 (first quote)
   const [currentIndex, setCurrentIndex] = useState(0);

   // Function to go to the previous quote
   const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? quotes.length - 1 : prevIndex - 1));
   };

   // Function to go to the next quote
   const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === quotes.length - 1 ? 0 : prevIndex + 1));
   };
   return (
      <>
         <div className="home-Container">
            <div className="home-sectionOne">
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
            <br />
            <div className="home-sectionTwo" id="home-section-two">
               <p>All our room types are including complementary breakfast</p>
               <article className="homesectionTwo-One">
                  <div className="homesectionTwo-Paragraph">
                     <h1 className="home-h1">Luxury redefined</h1>
                     <p className="home-p">
                        Our rooms are designed to transport you into an environment made for
                        leisure. Take your mind off the day-to-day of home life and find a private
                        paradise for yourself.
                     </p>
                     <Button classEx="home-button">EXPLORE</Button>
                  </div>
                  <img src={DoubleRooms} alt="DoubleRooms" />
               </article>
               <article className="homesectionTwo-One">
                  <div className="homesectionTwo-Paragraph">
                     <h1 className="home-h1">Leave your worries in the sand</h1>
                     <p className="home-p">
                        We love life at the beach. Being close to the ocean with access to endless
                        sandy beach ensures a relaxed state of mind. It seems like time stands still
                        watching the ocean.
                     </p>
                     <Button classEx="home-button">EXPLORE</Button>
                  </div>
                  <img src={WideBeach} alt="WideBeach" />
               </article>
            </div>
            <div className="home-sectionThree">
               <h1 className="home-h1">Testimonials</h1>
               <section className="homesectionThree-One">
                  <p className="home-p">{quotes[currentIndex].text}</p>
                  <p>{quotes[currentIndex].author}</p>

                  <div className="home-sectionThree-button">
                     <Button
                        className="home-button h-sectionThree-button"
                        onClick={handlePrevClick}
                     >
                        <FontAwesomeIcon icon={faArrowLeft} />
                     </Button>
                     <Button
                        className="home-button h-sectionThree-button"
                        onClick={handleNextClick}
                     >
                        <FontAwesomeIcon icon={faArrowRight} />
                     </Button>
                  </div>
               </section>
            </div>
            <Footer />
         </div>
      </>
   );
}

export default Home;
