import React from 'react'
import {Person,Mail} from "@material-ui/icons";

import "./topbar.scss";
export default function Topbar({menuOpen , setmenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">welcome</a>

                  <div className="itemContainer">
                  <Person className="icon"/>
                  <span>+91 7985639578</span>
                  </div>
                  <div className="itemContainer">
                  <Mail className="icon"/>
                  <span>thisisritik3000@gmail.com</span>
                  </div>

                </div>

                <div className="right">
                 <div className="hamburger" onClick = {()=> setmenuOpen(!menuOpen)} > 
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                 
                 </div>
                </div>

            </div>

        </div>
    )
}
