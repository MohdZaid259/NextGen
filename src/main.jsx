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
import { FirebaseProvider } from './context/Firebase.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import Herby from './components/Herby.jsx'
import SignUp from './components/Signup.jsx'
import Login from './components/Login.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import ReturnPolicy from './pages/ReturnPolicy.jsx'
import ShippingDelivery from './pages/ShippingDelivery.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import Dashboard from './pages/Dashboard.jsx'

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
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='return-policy' element={<ReturnPolicy/>}/>
      <Route path='shipping-delivery' element={<ShippingDelivery/>}/>
      <Route path='terms-conditions' element={<TermsConditions/>}/>
    </Route>
    <Route path='/herby' element={<Herby/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <FirebaseProvider>
        <RouterProvider router={router}/>
      </FirebaseProvider>
    </Provider>
)