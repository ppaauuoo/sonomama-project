
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Chatbot from './components/RootLayout/Chatbot';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      // { path: "/services", element: <Services /> },
    ],
  },
]);


function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
