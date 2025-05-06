
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home';
import Favorite from './pages/favorite';
import Category from './pages/categories';
import Search from './pages/search';
import SinleGif from './pages/singl-gif';
import Applayouts from './layouts/app-layouts';
import { GifProvider } from './context/gif-context';



const router = createBrowserRouter([
  {
    element: <Applayouts />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:category",
        element: <Category />
      },
      {
        path: "/search/:query",
        element: <Search />
      },
      {
        path: "/:type/:slug",
        element: <SinleGif />
      },
      {
        path: "/favorite",
        element: <Favorite />
      }
    ]
  }
]);
function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>

  )
}

export default App
