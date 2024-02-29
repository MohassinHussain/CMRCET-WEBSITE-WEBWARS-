// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import "./App.css";
// import Navbar from "./components/Navbar";
// import "/cover.webp";
// import Footer from "./components/Footer";
// import Home from "./webComponents/Home";
import Navbar from "./components/Navbar";
import Home from "./webComponents/Home";
import Footer from "./components/Footer";
import Announcements from "./webComponents/Announcements";
import Clubs from "./webComponents/Clubs";
import Contact from "./webComponents/Contact";
import EventCalendar from "./webComponents/EventCalendar";
import Socialintegration from "./webComponents/Socialintegration";
import StudentResources from "./webComponents/StudentResources";
import Maps from "./webComponents/Maps";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <div>
          <div className="cmrcet-logo">
            <img src="/cover.webp" alt="" />
          </div>
        </div>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements /> }  />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event-calendar" element={<EventCalendar />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/social-integration" element={<Socialintegration />} />
          <Route path="/student-resources" element={<StudentResources />} />
        </Routes>
      </>
      <Footer />
    </Router>
  );
}
export default App;
