// src/router.tsx
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Facilities from './Pages/Facilities';
import Rooms from './Pages/Rooms';

const router = createBrowserRouter([
   {
      element: <Navbar />,
      children: [
         {
            path: '/',
            element: <Home />,
            errorElement: <div>Page not found</div>,
         },
         {
            path: '/facilities',
            element: <Facilities />,
         },
         {
            path: '/contact',
            element: <Contact />,
         },
         {
            path: '/rooms',
            element: <Rooms />,
         },
         {
            path: '/contact',
            element: <Contact />,
         },
      ],
   },
]);

function Navbar() {
   return (
      <div className=" ">
         <Header />
         <main>
            <Outlet /> {/* This is where nested routes will be rendered */}
         </main>
      </div>
   );
}

const App = () => <RouterProvider router={router}></RouterProvider>;

export default App;
