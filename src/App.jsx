import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Facilities from './pages/Facilities';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './Components/Header';

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
