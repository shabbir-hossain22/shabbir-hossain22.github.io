import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import Lottie from 'react-lottie'
import data_analyst_lottie from '../images/lottie/data_analyst.json'
import hello from '../images/lottie/51971-hello.json'

class CarouselImages extends Component {
    
    render() {
        
        const styles = {
            data_analyst_lottie_option : {
                loop: true,
                autoplay: true,
                height: 300,
                animationData: data_analyst_lottie,
                rendererSettings: {
                  preserveAspectRatio: "TRUE"
                }

              },
              hello_lottie_option : {
                animationData: hello,
                rendererSettings: {
                  preserveAspectRatio: "TRUE"
                }
              }
        }
        return (
            <div className={classes.carousel_container} id="greeting">
                {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
                <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={3000} useKeyboardArrows={true} transitionTime={1000} emulateTouch showArrows={false} autoPlay showStatus={false} showThumbs={false} >
                    <div className={classes.image_container} >
                        {/* <img className={classes.image} src={Hello} alt="myImage" /> */}

                        <Lottie 
                        options={styles.hello_lottie_option}/>
                        <div className={classes.h1}>
                            <h1 >I’M SHABBIR,
A Storyteller with Data
</h1>

                        </div>
                    </div>
                    
                    <div className={classes.image_container}>
                        {/* <img className={classes.image} src={hacker} alt="myImage" /> */}
                        <Lottie
                            options={styles.data_analyst_lottie_option}
                        />
                        <div >
                            <h2 className={`${classes.h2}`} style={{top: '-730px', margin: '70px 0px'}}>
 <span style={{color: '#F7CE4C'}}>I Love Building Interactive BI Systems</span> <h4 className='normal_font'>which Relieve Organizations from Tedious Repetitive Tasks, Static Reporting and Analytics</h4>
 </h2>
                            
                        </div>
                    </div>
                    {/* <div className={classes.image_container}>
                    <img className={classes.image} src={laptop1} alt="myImage"/>
                    <div  className={classes.h1}> 
                    </div>
                </div> */}
                </Carousel>
                {/* </ScrollAnimation> */}
            </div>
        )
    }
}
export default CarouselImages