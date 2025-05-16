import React from 'react'
import {Home} from './pages/home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {About} from './pages/about';
import {Contact} from './pages/contact';
import {Services} from './pages/services';
import Product from './pages/product';
import {CartPage} from './pages/cartPage';
import { Layout } from './pages/layout';

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/abt' element={<About/>}></Route>
            <Route path='/cnt' element={<Contact/>}></Route>
            <Route path='/srv' element={<Services/>}></Route>
            <Route path='/prd' element={<Product/>}></Route>
            <Route path='/cart' element={<CartPage/>}></Route>
            </Route>
          </Routes>
        </Router>
      
    </>
  )
}

export default App
