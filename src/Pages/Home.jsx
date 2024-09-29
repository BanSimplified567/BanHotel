import '../styles/home.css';
import Button from '../Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Home() {
   return (
      <>
         <div className="home-container">
            <div className="home-sectionOne">
               <section className="homesection-One">
                  <h3>WELCOME TO</h3>
                  <h1>LUXURY</h1>
                  <h2>HOTELS</h2>
                  <p>Book your stay and enjoy Luxury redefined at the most affordable rates.</p>
               </section>
               <section className="homesection-Two">
                  <Button classEx="home-button">
                     <FontAwesomeIcon icon={faHouse} />
                     BUY NOW
                  </Button>
               </section>
            </div>
         </div>
      </>
   );
}

export default Home;
