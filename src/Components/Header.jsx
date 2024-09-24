import { Link } from 'react-router-dom';

export default function Header() {
   return (
      <nav className="">
         <Link to="/">Ban2Motel </Link>
         <ul className="">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/facilities">Facilities</Link>
            </li>
            <li>
               <Link to="/rooms">Rooms</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
         </ul>
      </nav>
   );
}
