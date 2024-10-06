import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';

// Lazy load the pages
const Facilities = lazy(() => import('./pages/Facilities'));
const Rooms = lazy(() => import('./pages/Rooms'));
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

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
            {/* Suspense to show fallback while assets are being loaded */}
            <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
               <main className="appMain">
                  <Outlet />
               </main>
            </Suspense>
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
