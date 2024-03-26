import React from 'react'

import  {BrowserRouter,Routes,Route} from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/bootstrap.min.css"
import LoginRegister from './Inscription/LoginRegister';
import AddProductPage from './AddProduct/ProductAddPage'
import './css/style.css';
import Navbar from './Components/Navbar/Navbar';
import Modalsearch from './Components/ModalSearch/Modalsearch';
import Hero from './Components/Hero/Hero';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
   
     
      <Navbar/>
      <Hero/>
        <Section/> 
      
       <Routes>
        <Route path="/loginregister" element={<LoginRegister />} />
       <Route path='/modal' element = {<Modalsearch/>}/>
       
    
     
        <Route path="/add" element={< AddProductPage/>} />

      </Routes>
      <Footer/>

    </div>
  )
}

export default App