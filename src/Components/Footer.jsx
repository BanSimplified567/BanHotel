import { NavLink } from 'react-router-dom';
import Luxury from '../images/LogoName.png'; // Adjust the import path as necessary
import Button from './Button';
import './style/footer.css';

function Footer() {
   return (
      <>
         <footer className="footer">
            <section className="footer-logo">
               <img src={Luxury} alt="Luxury Hotels" />
               <p className="home-p">497 Evergreen Rd. Roseville, CA 95673</p>
               <p className="home-p">+44 345 678 903</p>
               <p className="home-p">luxury.hotels@gmail.com</p>
            </section>
            <section className="footer-navigation">
               <ul>
                  <li>
                     <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                     <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                     <NavLink to="/terms">Terms & Conditions</NavLink>
                  </li>
               </ul>
            </section>
            <section className="footer-social">
               <ul>
                  <li>
                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        Facebook
                     </a>
                  </li>
                  <li>
                     <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        Twitter
                     </a>
                  </li>
                  <li>
                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        Instagram
                     </a>
                  </li>
               </ul>
            </section>
            <section className="footer-newsletter">
               <h4>Subscribe to our newsletter</h4>
               <div className="footer-input">
                  <input type="email" placeholder="Email Address" />
                  <Button classEx="footer-button">OK</Button>
               </div>
            </section>
         </footer>
      </>
   );
}

export default Footer;
