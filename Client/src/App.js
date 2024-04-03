import React from 'react'
import "./App.css"
import  {Routes,Route} from "react-router-dom";
import "./css/bootstrap.min.css"
import LoginRegister from './Inscription/LoginRegister';
import AddProductPage from './AddProduct/ProductAddPage'
import './css/style.css';
import Navbar from './Components/Navbar/Navbar';
import Modalsearch from './Components/ModalSearch/Modalsearch';
import Home from './Components/Home/homepage';
import Conditions from './Components/StepsComponent/StepsComponent'
import Categorie from './categorie/CategoryPage'
import Cart from  './Components/Cart/Cart'
import Admin from './AdminDashboard/Admin'
import Chat from './chat/chat';
function App() {
  return (
    <div>
      <Navbar/>
      <Chat/>
       <Routes>
        <Route path="/loginregister" element={<LoginRegister />} />
       <Route path='/modal' element = {<Modalsearch/>}/>
       <Route path='/home' element = {<Home/>}/>
        <Route path ='/conditions' element ={<Conditions/>}/> 
        <Route path="/categorie" element={<Categorie />}/>
        <Route path='/cart' element = {<Cart/>} />
        <Route path="/add" element={< AddProductPage/>} />
        <Route path='/admin' element = {<Admin/>}/>  
      

      </Routes>
      

    </div>
  )
}

export default App