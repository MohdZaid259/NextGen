import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import ProductPage from './pages/Product.jsx'
import ContactPage from './pages/Contact.jsx'
import Cart from './components/Cart.jsx'
import Profile from './components/Profile.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import Herby from './components/Herby.jsx'
import {FirebaseProvider} from './context/Firebase.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='product' element={<ProductPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
    </Route>
    <Route path='/herby' element={<Herby/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-atvz1zj76jo2minq.us.auth0.com"
    clientId="WeCAZo2lZplhY8BA4AL56dQzop7NWeXN"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <FirebaseProvider>
        <RouterProvider router={router}/>
      </FirebaseProvider>
    </Provider>
  </Auth0Provider>
)