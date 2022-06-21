import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';
import R from '../images/skills/R.png'
import SQL from '../images/skills/sql.png'
import Excel from '../images/skills/excel.png'
import SPSS from '../images/skills/spss.png'
import powerBI from '../images/skills/powerBI.png'
import mongodb from '../images/skills/mongodb.png'
import docker from '../images/skills/docker.png'
import python from '../images/skills/python.png'
import cronjob from '../images/skills/cronjob.png'
import css from '../images/skills/css.png'
import bootstrap from '../images/skills/bootstrap.jpg'

export default class Slick extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section id = 'technical_skills'>
              
           <h3 className="heading">Technical Skills</h3>  
          {/* <div className="box d-flex justify-content-evenly">           */}
          
          <div className="slider_item_container">
          <Slider {...settings}>
          <li className="click-to-top"><img src = {R}></img><span>R programming</span></li> 
              <li className="click-to-top"><img src = {python}></img><span>Python programming</span></li>
              <li className="click-to-top"><img src = {SQL}></img><span>SQL</span></li>
              <li className="click-to-top"><img src = {mongodb}></img><span>MongoDB</span></li>
              <li className="click-to-top"><img src = {css}></img><span>CSS</span></li>
              <li className="click-to-top"><img src = {bootstrap}></img><span>Bootstrap</span></li>
              <li className="click-to-top"><img src = {SPSS}></img><span>SPSS</span></li>
              <li className="click-to-top"><img src = {powerBI}></img><span>PowerBI</span></li>
              <li className="click-to-top"><img src = {Excel}></img><span>Excel</span></li>           
              <li className="click-to-top"><img src = {docker}></img><span>Docker</span></li>    
              <li className="click-to-top"><img src = {cronjob}></img><span>CronJob</span></li>       
          </Slider>
          </div>
        
          </section>        
    );
  }
}