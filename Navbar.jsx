import React, { useState } from 'react';
import '/cetlogo.jpg';
import { Link } from 'react-router-dom';
function Navbar() {

      // const [isOpen, setIsOpen] = useState(false);
    
    
      return (
        <div className='side-nav'>
          <style>
            {`
              .sidenav {
                height: 100%;
                
                width: 250px;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                background-color: #e87223;
                overflow-x: hidden;
                transition: 0.5s;
                padding-top: 60px;
              }
    
              .sidenav a {
                padding: 8px 8px 8px 32px;
                text-decoration: none;
                font-size: 25px;
                color: #474343;
                display: block;
                transition: 0.3s;
              }
    
              .sidenav a:hover {
                color: #f1f1f1;
              }
    
              .sidenav .closebtn {
                position: absolute;
                top: 0;
                right: 25px;
                font-size: 36px;
                margin-left: 50px;
              }
    
              @media screen and (max-height: 450px) {
                .sidenav {padding-top: 15px;}
                .sidenav a {font-size: 18px;}
              }
            `}
          </style>
          <div className="sidenav" id="mySidenav">
            {/* <a href="#" className="closebtn" onClick={closeNav}>&times;</a> */}
            
            <img className='cet-logo' src="cetlogo.jpg" alt="" />
            {/* <a href="#">Home</a>
            <a href="#">Clubs</a>
            <a href="#">Maps</a>
            <a href="#">Event Calendar</a>
            <a href="#">Announcements</a>
            <a href="#">Social Integration</a>
            <a href="#">Student Resources</a>
            <a href="#">Contact Us</a>  */}
            
            <Link to="/">Home</Link>
            <Link to="/clubs">Clubs</Link>
            <Link to="/maps">Maps</Link>
            <Link to="/event-calendar">Event Calendar</Link>
            <Link to="/announcements">Announcements</Link>
            <Link to="/social-integration">Social Integration</Link>
            <Link to="/student-resources">Student Resources</Link>
            <Link to="/contact">Contact Us</Link>
           
           
          </div>
          {/* <h2>Animated Sidenav Example</h2> */}
          {/* <p>Click on the element below to open the side navigation menu.</p> */}
          {/* <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776; </span> */}
        </div>
      );
    };
    
    

export default Navbar;
