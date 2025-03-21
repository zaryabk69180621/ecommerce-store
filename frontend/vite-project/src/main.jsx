import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "../src/pages/Home.jsx"
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'
import Collection from './pages/Collection.jsx'
import Login from './pages/Login.jsx'
import Orders from './pages/Orders.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { ShopContextProvider,shopContext } from './context/shopcontext.jsx'
createRoot(document.getElementById('root')).render(<ShopContextProvider>

<BrowserRouter>
<Navbar />
<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Cart' element={<Cart />} />
     <Route path='/About' element={<About />} />
     <Route path='/Collection' element={<Collection />}/> 
     <Route path="/Conatact/" element={<Contact />} />
     <Route path='/Login' element={<Login />} />
     <Route path='/Orders' element={<Orders />} />
     <Route path='/Place-order' element={<PlaceOrder />} />
     <Route path='Product/:id' element={<Product />} />
     </Routes>
      <Footer />
  </BrowserRouter>
        </ShopContextProvider>

)
 