import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaArrowCircleDown } from 'react-icons/fa'
import rossi from '../images/rossi_2.jpg'
import "./info.css"

const Info = () => {
    return (
        <div id = 'sidebar' className='text-center'>
            <div style={{ color: 'black', fontWeight: 'bold', fontStyle : 'italic' }} className="tagtop"> # Data Scientist
 </div>
                <div style={{ color: 'black', fontWeight: 'bold', fontStyle : 'italic' }} className=""> # Business Intelligence System Developer </div>
                <h1><Link smooth to="/#start" className="h1_links">Md. Shabbir Hossain Bhuiyea</Link></h1>

                <img src={rossi} />
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL" rel="opener noreferrer" target="_blank" className="fa fa-envelope"> shabbir.hossain22@gmail.com</a></p>
                <p style={{letterSpacing:'5px'}}>+8801684796261</p>
                    <ul className="d-flex m-0 justify-content-evenly top-0">
                    <li className="sidebar-nav-icons"> <a href="mailto:shabbir.hossain22@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a></li>
                    <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/md-shabbir-hossain-bhuiyea-rossi-91a723239/" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                    <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/shabbirhossain.rossi" rel="opener noreferrer" target="_blank" className="fa fas fa-facebook fa-lg"></a></li>
                    {/* <li className="sidebar-nav-icons"> <a href="" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a></li> */}
                    {/* <li className="sidebar-nav-icons"> <a href="" rel="opener noreferrer" target="_blank" className="fa fas fa-instagram fa-lg"></a></li> */}
                    </ul>
                <a href="https://docs.google.com/document/d/1K7USFjqjDL5POlrq6GAaLkupS2rhMbVo/edit" rel="opener noreferrer" target="_blank" className='data_analyst_a d-block'
                            style={{backgroundImage: 'linear-gradient(0deg, rgba(252,249,0,1) 0%, rgba(255,97,0,.5) 100%)'
                            }}>VIEW CV   <FaArrowCircleDown /></a>
                            {/* <a href="https://github.com/" rel="opener noreferrer" target="_blank" className='data_analyst_a d-block'
                            style={{backgroundImage: 'linear-gradient(0deg, rgba(252,249,0,1) 0%, rgba(255,97,0,.5) 100%)'
                        }}>VIEW PROJECTS<GoProject /></a> */}

        </div>
    );
};

export default Info;