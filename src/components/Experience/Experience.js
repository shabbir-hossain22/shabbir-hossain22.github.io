import React, { Component } from 'react';
import classes from './Experience.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdWork } from 'react-icons/md';
import { RiSurveyLine } from 'react-icons/ri';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BiAnalyse } from 'react-icons/bi';

class Experience extends Component {
    render() {
        return (
            <div className={classes.box} id="experience">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY WORK EXPERIENCE</span>
                    <hr></hr>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>

                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Team Lead, Data Science & Business Intelligence <span>2020 - Present</span></h2>
                                                    <p>Started my journey at DOER Services Limited, a Fintech Company, as the only Data Scientist in the company in late 2020. As more projects were coming, started recruiting, training and building a team of Data Scientists and Business Intelligence System Developers. So far, we have worked for Agrani Bank, IDRA and serving Celloscope Limited too.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >                                                  
                                             
                                                <FaChalkboardTeacher />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Lecturer in Statistics <span>2019 - 2020 </span></h2>
                                                    <p>Worked at the <strong>Daffodil International University (DIU)</strong> as a Lecturer in Statistics for more than one and a half years and took courses like Business Statistics, Probability, Applied Statistics, Data Mining, etc., and often perform the role of Student Mentorship </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <AiOutlineFileSearch />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Research Consultant <span>2019 - 2020</span></h2>
                                                    <p>During my time at the DIU, I worked as a consultant (co-investigator) on 2 NGO (ESDO, MJF) funded projects. From questionnaire design to data analysis and report submission, I carried out the projects with my ex-collegue and Department Head Dr Syed Mizanur Rahman (Raju).</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_6}`} >
                                                <RiSurveyLine />                                                   
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Research Officer <span>2018 - 2019</span></h2>
                                                    <p>For several periods between 2018-19, I worked as a Research Officer on two of the major projects [Suchana, re(solve)] of Save the Children, Bangladesh and Pathfinder International</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_1}`} >
                                                    <BiAnalyse />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Data Analyst & Research Assistant	 <span>2014/15- 2018</span></h2>
                                                    <p>Since my academic years, I have been actively involved in several Govt. funded research projects as a research assistant between that period. To carry out the projects successfully, I worked as a research study designer, data collector, data analyst and project report writer under the supervision of my University Faculties. </p>
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

export default Experience;
