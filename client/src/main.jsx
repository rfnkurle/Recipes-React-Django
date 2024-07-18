import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import Home from './components/Home.jsx';
import Recipe from './components/Recipe.jsx';
import Manage from './components/Manage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/recipes',
        element: <Recipe />
      },
      {
        path: '/manage',
        element: <Manage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
