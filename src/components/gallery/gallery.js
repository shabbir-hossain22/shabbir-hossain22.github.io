// src/Contact.js
import React from "react";
// import Example from "../mixitup/mixitup.js"
import {Card} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import img_1 from "../images/projects/1.png"
import img_2 from "../images/projects/2.png"
import img_3 from "../images/projects/3.png"
import img_4 from "../images/projects/4.png"
import BKB from "../images/projects/BKB.png"
import insurance from "../images/projects/insurance.png"
import powerBI from "../images/projects/powerBI.png"
import responseTime from "../images/projects/responseTime.png"
import idra from "../images/projects/idra.png"
import "./gallery.css"

const Gallery = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container" id = "gallery">

            <button className="btn btn-primary align-center" style={{width: '100%'}} onClick={() => navigate(-1)}>Go Back</button>

    <h2 className="text-warning my-3 text-center">Projects ShowCase</h2>

    <hr></hr>

      <div className="row d-flex justify-content-center">
      <Card style={{ width: '25%', margin: '2rem' }} className="card">
        <Card.Img variant="top" src={img_1} alt = "Tableau Dashboard image" />
      </Card>
      <Card style={{ width: '25%', margin: '2rem' }} className="card">
        <Card.Img variant="top" src={img_2} alt = "Tableau Dashboard image" />
      </Card>
      <Card style={{ width: '25%', margin: '2rem' }} className="card">
        <Card.Img variant="top" src={img_3} alt = "Tableau Dashboard image" />
      </Card>
      <Card style={{ width: '25%', margin: '2rem' }} className="card">
        <Card.Img variant="top" src={img_4} alt = "Tableau Dashboard image" />
      </Card>
      <Card style={{ width: '25%', margin: '2rem' }} className="card">
        <Card.Img variant="top" src={BKB} alt = "Tableau Dashboard image" />
      </Card>
      <Card style={{ width: '25%', margin: '2rem' }} className="card">
        <Card.Img variant="top" src={insurance} alt = "Tableau Dashboard image" />
      </Card>
      <Card style={{ width: '25%', margin: '2rem' }} className="card">
        <Card.Img variant="top" src={powerBI} alt = "Tableau Dashboard image" />
      </Card>
      <Card style={{ width: '25%', margin: '2rem' }} className="card">
        <Card.Img variant="top" src={responseTime} alt = "Tableau Dashboard image" />
      </Card>
      <Card style={{ width: '25%', margin: '2rem' }} className="card">
        <Card.Img variant="top" src={idra} alt = "Tableau Dashboard image" />
      </Card>

     
      </div>
      </div>

      

  );
};

export default Gallery;