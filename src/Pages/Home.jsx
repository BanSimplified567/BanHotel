import { faCircleArrowDown, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Components/Button';
import WideBeach from '../images/beachWide.png';
import DoubleRooms from '../images/doubleroom.png';
import '../styles/home.css';

function Home() {
   return (
      <>
         <div className="home-Container">
            <div className="home-sectionOne">
               <section className="homesection-One">
                  <h3 className="home-h3">WELCOME TO</h3>
                  <h1 className="home-h1">LUXURY</h1>
                  <h2 className="home-h2">HOTELS</h2>
                  <p className="home-p">
                     Book your stay and enjoy Luxury redefined at the most affordable rates.
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
            <div className="home-sectionTwo" id="home-section-two">
               <p className="home-p">All our room types are including complementary breakfast</p>
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
         </div>
      </>
   );
}

export default Home;
