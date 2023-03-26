import React, { Fragment } from 'react'
import {Route,Routes} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Service from './components/Service.jsx';

// import About from './components/About.js'


import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";
// import "./styles/service.scss";

function App(){

 return (
  <Fragment>
    <Header/>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/service' element={<Service/>}/>
      </Routes>
      <Footer/>
  </Fragment>
);
   
}

export default App;