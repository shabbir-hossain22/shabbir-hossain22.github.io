import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import classes from '../Projects/projects.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {Card} from 'react-bootstrap';
import Modal_1 from '../Modals/modal_1';
import bidemo from '../images/projects/bidemo.png'
import custombi from '../images/projects/customBI.png'
import tableau from '../images/projects/tableau.png'

import Gallery from '../gallery/gallery.js'



const Projects = () => {
  
    return (
      <div className={classes.box} id="projects">

        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className='head'>WHAT HAVE I BUILT SO FAR?</span>
          <hr></hr>
          <h2 className= 'heading'>Here are some of my projects</h2>
          <div className={classes.projects}>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                <div className='row'>
                    
                    
                    <Card style={{ width: '18rem', margin: '2rem' }}>
  <Card.Img variant="top" src={custombi} alt="Custom Insurance BI image"/>
  <Card.Body>
    <Card.Title>Custom Insurance BI</Card.Title>
    <Card.Text>
    An Insurance Industry Centric Sample Interactive Dashboard/BI hosted on shinyaaps.io, which you can try on your own to get the Idea.
    </Card.Text>
    <a href='https://celloscope.shinyapps.io/custom_app_experiment/' className='btn btn-warning d-block' target='_blank'>See Live</a>
   
  </Card.Body>
</Card>

<Card style={{ width: '18rem', margin: '2rem' }}>
  <Card.Img variant="top" src={bidemo} alt="Custom Banking BI"/>
  <Card.Body>
    <Card.Title>Custom Banking BI</Card.Title>
    <Card.Text>
    A Banking Industry Centric Demo Interactive Dashboard/BI which have Admin and User role and is hosted on our own Server using R-Shiny and Docker.
    </Card.Text>
    <a type="button" class="btn btn-primary d-block text-white" data-toggle="modal" data-target="#exampleModalLong">
      Live Demo
    </a>
    <Modal_1 />
  </Card.Body>
</Card>

  <Card style={{ width: '18rem', margin: '2rem' }}>
  <Card.Img variant="top" src={tableau} alt = "Tableau Dashboard image" />
  <Card.Body>
    <Card.Title>Tableau Dashboard</Card.Title>
    <Card.Text>
    An impression of a BI Toal/Dashboard with Dummy Data, that are being developed in Tableau for Agrani Smart Banking.
    </Card.Text>
    <a href='https://public.tableau.com/app/profile/sabbir.hossain/viz/Internet_Banking/Dashboard2' className='btn btn-warning d-block mt-4' target='_blank'>See Live</a>

  </Card.Body>
</Card>
                    
                </div>
            
            </ScrollAnimation>            
          </div>

          <a className='btn btn-primary d-block' href = '/gallery' id='screenshots'>More</a> 

            
       
        </ScrollAnimation> 
        
      </div>
    )
  }


export default Projects;