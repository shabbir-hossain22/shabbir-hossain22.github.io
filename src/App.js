import React, { useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Education from './components/Education/Education';
import Skills from './components/skills/Skills'
import CarouselImages from './components/carousel/CarouselImages.js'
import Publications from './components/Publications/Publications';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import ScrollToTop from "react-scroll-to-top";
import Info from './components/info/info';
import Small_Nav from './components/small_screen_nav/small_nav';

import './components/small_screen_nav/small_nav.css'
import Gallery from './components/gallery/gallery';




const App = () => {


  // const nav_toggler = document.getElementsByClassName("navbar-toggler")
  const [navValue, setnavValue] = useState(false)

  const handleNav = () => {
    setnavValue( !navValue )
    console.log(navValue)
  }

     // This effect runs once, after the first render
  // useEffect(() => {
  //   document.title = "Sabbir Portfolio"
  // }, [])
  
    return (
   
              
        <div className="App">
        <ScrollToTop smooth />
          <div className="side" >
            <nav className="navbar side navbar-expand-lg navbar-light p-0" >
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" style={{ zIndex: '1' }}
              onClick = {() => handleNav()}>
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* className="collapse navbar-collapse" id="navbarSupportedContent" */}
              <div >
              <Sidebar />
              </div>
            </nav>
          </div>

          
          
          <div className="main">            
          {/* <div className='d-lg-none'><Info /></div> */}
          {/* {navValue == true && (() => ( <Small_Nav />) )  } */}
          
          <Small_Nav style = {{"display": navValue ? "" : 'none'}} />
         
          <div>
          <CarouselImages />
            </div>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Publications />            
          </div>
          
          
        </div>


    );
  }


export default App;
