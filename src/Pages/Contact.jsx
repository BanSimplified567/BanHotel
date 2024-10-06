import { faArrowRight, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import '../styles/contact.css';

function Notification({ message, type, onClose }) {
   useEffect(() => {
      const timer = setTimeout(onClose, 3000); // Hide notification after 3 seconds
      return () => clearTimeout(timer);
   }, [onClose]);

   return <div className={`notification ${type}`}>{message}</div>;
}

function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      message: '',
   });

   const [notification, setNotification] = useState({ message: '', type: '' });
   const [loading, setLoading] = useState(false); // New loading state

   // Framer Motion - Slide-in animation
   const slideInVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 1 } },
   };

   const [refForm, inViewForm] = useInView({ triggerOnce: true, threshold: 0.1 });
   const [refDetails, inViewDetails] = useInView({ triggerOnce: true, threshold: 0.1 });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true); // Start loading

      try {
         // Simulate form submission
         await new Promise((resolve) => setTimeout(resolve, 2000));
         console.log('Form submitted successfully:', formData);

         // Set notification to success
         setNotification({
            message: 'Form submitted successfully!',
            type: 'success',
         });

         // Clear form fields
         setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
         });
      } catch (error) {
         console.error('Error submitting form:', error);

         // Set notification to error
         setNotification({
            message: 'Error submitting form. Please try again.',
            type: 'error',
         });
      } finally {
         setLoading(false); // Stop loading
      }
   };

   return (
      <>
         <div className="contact-container">
            {/* Contact Title */}
            <section className="contact-header-title">
               <h1 className="home-h2">CONTACT US</h1>
            </section>

            {/* Contact Intro */}
            <motion.section
               className="contact-section-header"
               initial={{ opacity: 0, x: -100 }} // Animation start state
               whileInView={{ opacity: 1, x: 0 }} // Animation when it comes into view
               transition={{ duration: 0.5 }} // Animation duration
            >
               <h1 className="home-h2">WE ARE HERE FOR YOU</h1>
               <p className="home-p">
                  At Luxury Hotels, we take our customers seriously. If you have any enquiries,
                  complaints, or requests, please forward them to our support desk, and we will get
                  back to you as soon as possible.
               </p>
            </motion.section>

            {/* Animated Form and Contact Details */}
            <div className="contact-form-container">
               {/* Contact Details - Slide In from the Left */}
               <motion.section
                  className="contact-section-details"
                  ref={refDetails}
                  initial={{ opacity: 0, y: 100 }} // Animation start state
                  whileInView={{ opacity: 1, x: 0 }} // Animation when it comes into view
                  transition={{ duration: 0.5 }} // Animation duration
               >
                  <h5>567 Sibonga Pandan Cebu, Postal 6020</h5>
                  <div className="contact-view-button">
                     <a
                        href="https://www.google.com/maps/place/Sibonga,+Cebu/@10.0312144,123.4907009,12z/data=!4m6!3m5!1s0x33abda009b307345:0x6b7eeafa2fa8fc38!8m2!3d10.0431063!4d123.5951925!16zL20vMDZoNG55?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Button classEx="contact-button">View Map</Button>
                     </a>
                     <FontAwesomeIcon icon={faArrowRight} className="contact-arrow-right" />
                  </div>
                  <div>
                     <p className="home-p">Contact: +63 93 1028 2926</p>
                     <p className="home-p">Email: bansimplified567@gmail.com</p>
                  </div>
               </motion.section>

               {/* Form Section - Slide In from the Right */}
               <motion.section
                  className="form-container"
                  ref={refForm}
                  variants={slideInVariants}
                  initial="hidden"
                  animate={inViewForm ? 'visible' : 'hidden'}
               >
                  <form id="contactForm" onSubmit={handleSubmit}>
                     <h2 className="contact-h2">Contact Us</h2>

                     <div className="contact-input-group">
                        <div className="input-icon">
                           <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Enter your name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                           />
                           <FontAwesomeIcon className="contact-icons" icon={faUser} />
                        </div>
                     </div>

                     <div className="contact-input-group">
                        <div className="input-icon">
                           <input
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="Enter your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                           />
                           <FontAwesomeIcon className="contact-icons" icon={faPhone} />
                        </div>
                     </div>

                     <div className="contact-input-group">
                        <div className="input-icon">
                           <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                           />
                           <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
                        </div>
                     </div>

                     <div className="contact-input-group">
                        <textarea
                           id="message"
                           name="message"
                           rows="5"
                           placeholder="Enter your message"
                           value={formData.message}
                           onChange={handleChange}
                           required
                        ></textarea>
                     </div>

                     <Button className="contact-button-submit" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                     </Button>
                  </form>
               </motion.section>
            </div>
         </div>

         {/* Notification Popup */}
         {notification.message && (
            <Notification
               message={notification.message}
               type={notification.type}
               onClose={() => setNotification({ message: '', type: '' })}
            />
         )}


         <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
         >
            <Footer />
         </motion.section>
      </>
   );
}

export default Contact;
