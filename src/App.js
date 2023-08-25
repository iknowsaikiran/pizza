import Navbar from './navbar';

import Home from './navbar-comonents/home'
import AboutUs from './navbar-comonents/aboutus';
import Menu from './navbar-comonents/menu';
import Footer from './footer'
import Contact from './navbar-comonents/contact';
import'bootstrap/dist/css/bootstrap.css'
import './App.css';


import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
       <header className="headercontent">
         <Navbar/> 
       </header>
      
      <main className="maincontent">
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>

      </main>
      <Footer/>
      
      
      

    
    </>
  );

  
};

export default App;
