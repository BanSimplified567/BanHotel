import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import Facilities from './pages/Facilities'; // Import directly
import Rooms from './pages/Rooms'; // Import directly
import Contact from './pages/Contact'; // Import directly
import Home from './pages/Home'; // Import directly

// Routes configuration
const routes = [
   { path: '/', element: <Home /> },
   { path: '/facilities', element: <Facilities /> },
   { path: '/rooms', element: <Rooms /> },
   { path: '/contact', element: <Contact /> },
];

const router = createBrowserRouter([
   {
      element: (
         <header className="header-section">
            <Header />
            <main className="appMain">
               <Outlet />
            </main>
         </header>
      ),
      children: routes.map(({ path, element }) => ({
         path,
         element,
      })),
   },
]);

function App() {
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;
