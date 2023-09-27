import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import About from './components/About/About.jsx';
import Test from './components/Test/Test.jsx';
import ContactDetail from './components/ContactDetail/ContactDetail.jsx';

// const router =  createBrowserRouter([
//   {
//     path: '/main',
//     element: <div>This is main page from router</div>
//   },
//   {
//     path: '/',
//     element: <App />
//   }
// ])


const router = createBrowserRouter([
  // test without reload
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: 'home/',
        element: <Home />
      },
      {
        path: 'about/',
        element: <About />
      },
      {
        path: 'contacts/',
        element: <Contacts />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'contacts/:contactId',
        element: <ContactDetail />,
        // loader: ({params}) => console.log(params)
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.contactId}`)
      },
      
    ]
  },
  
  // test with reload
  {
    path: '/test',
    element: <Test />,
  },

  // * means all path except our mentioned path
  {
    path: '*',
    element: <ErrorPage />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
