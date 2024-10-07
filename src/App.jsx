import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './pages/Contact'; // Import directly
import Facilities from './pages/Facilities'; // Import directly
import Home from './pages/Home'; // Import directly
import Rooms from './pages/Rooms'; // Import directly

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

/*
You can follow me on social media:
GitHub: https://github.com/bansimplified567
Portfolio: https://bansimplified567.vercel.app/
Facebook: https://www.facebook.com/him.blacklion567
YouTube Channel: https://youtube.com/@bisdakwithcode
LinkedIn: https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/
Instagram: https://instagram.com/nocodearea?igshid=NzZlODBkYWE4Ng==
Twitter: https://twitter.com/JBringcola
TikTok: https://www.tiktok.com/@bisdakwithcode?_t=8oVlucIwybV&_r=1
You can also send me a message or email me at: bansimplified567@gmail.com
*/
