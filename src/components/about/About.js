import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                <h2 className={classes.heading}>About Me</h2>
                    <hr></hr>                    
                    <div className={classes.About}>
                        <p> “I am <b>Md. Shabbir Hossain Bhuiyea (Rossi)</b> , a young Data Enthusiast, who is always up to take on new challenges for problem-solving in accordance with learning new competencies and wants to contribute to the Fintech and other industrial sectors by applying Statistical & Data Science Methodologies and Tools to Visualize and get actionable insight from massive amounts of unstructured data. <br></br><br></br>

I completed my Graduation & Post-Graduation (with a Thesis on Machine Learning) with a Distinction in Statistics from Shahjalal University of Science & Technology. Since then I have worked on several Govt. funded Research Projects, in the Development Sector (Save the Children & Pathfinder Internation) as Research Officer, in the Daffodil Internation University as a Lecturer in Statistics, and finally found my true interest and started working in the field of Data Science, Big Data Engineering & Business Intelligence System Development. <br></br><br></br>
For the last two years, I have been working as a Data Scientist and Lead of a Business Intelligence System Development Team for two Fintech Companies [Celloscope Limited & DOER Services Limited]. I developed one Customized BI for Agrani Bank’s Agent Banking and another BI for Insurance Development & Regulatory Authority (IDRA) using R, Shiny, HTML, CSS & SQL which are in production. In these projects, I dealt with the whole Insurance industry (83 companies) enormous volume of data and Agent Banking’s Transactional Data. Now, working with Tableau and other BI solutions to develop another system for Agrani Smart Banking.” 
                        </p>

                        <h3 >
                        <strong className='mt-3'>Recent Accomplishment: </strong>
                        </h3>
                        <ul>
                            <li className='text-success fw-bold'>
                            ⮚ Developed a BI System [Shiny Web Application] for the Insurance Development & Regulatory Authority (IDRA), Bangladesh to monitor the progress of the whole Insurance Industry in Bangladesh
                            <li>⮚ Developed an Automated Reporting System and BI Tool for Agrani Bank’s Agent Banking using R, Shiny, HTML, CSS & JavaScript.</li>
                            <li>⮚ Built a System Performance Analysis Dashboard for Agrani Bank’s Agent Banking System and CBS [Core Banking System].</li>
                            <li>⮚ Worked with NBR [National Board of Revenue] to develop Predictive and Time Series Models using Oracle Analytics. </li>
                            <li>⮚ Currently, working on Agrani Smart Banking BI using Tableau.</li>
                            </li>
                        </ul>
                    </div>

                     
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;