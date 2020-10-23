import React, { Component } from 'react'
import {Link} from "react-scroll"

class Navbar extends Component {
    state = {};
    render (){
        return (
            <div className="navbar">
        <ul>
        <li><Link
        activeclass="active"
        to="main"
        smooth={true}
        offset={0}
        duration= {500}
        >Main</Link> </li>



<li><Link
        activeclass="active"
        to="about"
        smooth={true}
        offset={0}
        duration= {500}
        >About</Link></li> 

         <li><Link
        activeclass="active"
        to="work"
        smooth={true}
        offset={0}
        duration= {500}
        >Work</Link></li>    
          
        <li><Link
        activeclass="active"
        to="contact"
        smooth={true}
        offset={0}
        duration= {500}
        >Contact</Link></li>  
       </ul>
    </div>
        )
    }
}

export default Navbar