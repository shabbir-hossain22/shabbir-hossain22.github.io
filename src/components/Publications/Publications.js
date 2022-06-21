import React from 'react';
import './publications.css';
import {Accordion} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';



const Publications = () => {
    return (
        <div className='container' id = 'publications'>
            <span className='head'>MY PUBLICATIONS</span>
            <hr></hr>
            <div className='row box'>
            
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Journal of Population and Social Studies (JPSS) [Scopus Indexed]</Accordion.Header>
    <Accordion.Body>
    Assessing the determinants of women’s age at first marriage in rural and urban areas of Bangladesh: Insights from Quantile Regression (QR) approaches
Journal of Population and Social Studies. <br></br>
Volume 30, 2022. pp. 602–624 <br></br>
DOI: http://doi.org/10.25133/JPSSv302022.034 <br></br>
      <a href='http://doi.org/10.25133/JPSSv302022.034'>Read</a>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Transfusion and Apheresis Science, Elsevier [Scopus Indexed]</Accordion.Header>
    <Accordion.Body>
    Factors influencing voluntary blood donation practice among university students of Bangladesh. <br></br>
DOI: https://doi.org/10.1016/j.transci.2022.103379 <br></br>
<a href='https://doi.org/10.1016/j.transci.2022.103379'>Read</a>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Review of General Management</Accordion.Header>
    <Accordion.Body>
    Investigation of satisfaction level of customers and hidden factors for selected retail shopping. <br></br>

<strong><i>Source: Review of General Management. 2018, Vol. 27 Issue 1, p22-43. 22p.</i></strong>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Conference Paper #1 </Accordion.Header>
    <Accordion.Body>
    Awareness and Impacts of Climate Change among the Farmer’s Livelihoods in Haor Area of Kishoreganj. <br></br>

<strong>Presented at 17th National Statistical Conference organized by Bangladesh Statistical Association.</strong>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Conference Paper #2</Accordion.Header>
    <Accordion.Body>
    Estimating Early Childhood Development Index in Bangladesh and Identifying the Associated Risk Factors.<br></br>
<strong>Presented at 17th National Statistical Conference organized by Bangladesh Statistical Association.</strong>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</ScrollAnimation>
            </div>
            </div>

    );
};

export default Publications;