import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from "./LandingPage.jsx"
import MyOwnCards from "./MyOwnCards.jsx"
import NotFound from "./NotFound.jsx"


const router =  createBrowserRouter([
{
    path: "/",
    element : <LandingPage/>,
    errorElement: <NotFound/>
},
{
    path: "/Cards",
    element : <MyOwnCards/>,
}


]);

createRoot(document.getElementById('root')!).render(
    // <App />
    <RouterProvider router={router} />
)
