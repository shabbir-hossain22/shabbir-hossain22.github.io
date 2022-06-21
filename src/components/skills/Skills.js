import React, { Component } from 'react'
import classes from './skills.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Slick from '../skills_slider';
import Language from '../languages/language';

class Skills extends Component {
  render() {
    return (
      <div className={classes.box} id="skills">
        {/* <div>
      <IconAmazonwebservices width={100} height={100}/>
    </div> */}


        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className={classes.head}>WHAT DO I DO?</span>
          <hr></hr>
          
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.web}>
                <h3>BI Tools Develpoment</h3>
                <p>I Develop Business Intelligence Systems
Using R (Shiny), Flexdashboard, Tableau/PowerBI.
Additional Skills that are Required:
ETL, Data Warehousing, SQL, NoSQL (MongoDB),
CI/CD Pipeline, Docker, Crontab, Shell Scripting etc.
</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Data Analysis</h3>
                <p>Along with analyzing & making insightful visualizations 
for Agrani Agent Banking Business Team and IDRA, I run 
Train up Program on Data Analytics to empower the employees 
from non-technical fields with analytical skills.
For analysis and visualization, I frequently use R/Python & SQL.
</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>deployment</h3>
                <p>Deploying BI Systems in a cost-effective way is a major challenge. 
I publish my developed BI on the Cloud (on-premises or rented VM)
using Docker, free tiered ShinyServer/ShinyProxy.
</p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
        <Slick />
        <Language />
      </div>
    )
  }
}

export default Skills;