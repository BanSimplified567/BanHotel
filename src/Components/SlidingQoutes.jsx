import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Button from './Button';

import './style/header.css';

function SlidingQuotes() {
   const quotes = [
      {
         text: 'Calm, Serene, Retro – What a way to relax and enjoy.',
         author: 'Mr. and Mrs. Bringcola, UK',
      },
      { text: 'A tranquil haven for your soul.', author: 'Ban Ban, USA' },
      { text: 'Experience luxury like never before.', author: 'BanSimplified, Australia' },
      { text: 'Peace and quiet in the lap of nature.', author: 'Patricia, Canada' },
      { text: 'A perfect escape from the ordinary.', author: 'Proline, New Zealand' },
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
         <div className="home-sectionThree">
            <h1 className="home-h1">Testimonials</h1>
            <section className="homesectionThree-One">
               <p className="home-p">{quotes[currentIndex].text}</p>
               <p>{quotes[currentIndex].author}</p>

               <div className="home-sectionThree-button">
                  <Button className="home-button h-sectionThree-button" onClick={handlePrevClick}>
                     <FontAwesomeIcon icon={faArrowLeft} />
                  </Button>
                  <Button className="home-button h-sectionThree-button" onClick={handleNextClick}>
                     <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
               </div>
            </section>
         </div>
      </>
   );
}

export default SlidingQuotes;
