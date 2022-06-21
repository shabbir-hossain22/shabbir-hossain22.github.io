import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { FaSchool } from 'react-icons/fa';
// import { MdDoorbell } from 'react-icons/md';

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY EDUCATION JOURNEY</span>
                    <hr></hr>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaUserGraduate />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Post Graduation (MSC)  <span>2016-2017</span></h2>
                                                    <p>I completed my post-graduation in Statistics with Distinction from Shahjalal University of Science & Technology, Sylhet, Bangladesh. I held the second position in the batch with CGPA 3.87 out of 4.00.
My master’s thesis was on: “Estimating Early Childhood Development Index in Bangladesh and Identifying Associated Risk Factors using Logit and Random Forest Modeling”
</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Graduation [BSc.] <span>2011-15</span></h2>
                                                    <p>My Bachelor's was in Statistics from the same university as the master’s where I also held the second position in my batch with a CGPA of 3.73 out of 4.00.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <FaSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Higher Secondary (HSC) <span>2008-09</span></h2>
                                                    <p>Successfully, Completed Higher Secondary from Gurudoyal Govt. College, Kishoreganj with a GPA of 5.00 out of 5.00.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <FaSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Secondary (SSC) <span>2006-07</span></h2>
                                                    <p>Completed Secondary School Certificate Exam from Kishoreganj Govt. Boys High School, Kishoreganj with a GPA of 5.00 out of 5.00.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Education;
