import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './small_nav.css'

const Small_Nav = (props) => {
    return (
        <div id = 'small_nav' style={props.style}>
            <ul className="small_nav">
                    <li className="nav-item nav-link"><Link smooth to="#greeting" className="links">Greeting</Link></li>
                    <li className="nav-item nav-link"><Link smooth to="#about" className="links">About</Link></li>
                    <li className="nav-item nav-link"><Link smooth to="#skills" className="links">Skills</Link></li>
                    <li className="nav-item nav-link"><Link smooth to="#projects" className="links">Key Projects</Link></li>
                    <li className="nav-item nav-link"><Link smooth to="#experience" className="links" >Experience</Link></li>
                    <li className="nav-item nav-link"><Link smooth to="#education" className="links" >Education</Link></li>
                    <li className="nav-item nav-link"><Link smooth to="#publications" className="links">Publications</Link></li>

                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>
        </div>
    );
};

export default Small_Nav;