import React from "react";
import "/cmr-nref.jpg";
import "/in-campus.jpg";
import "/block-image.jpg";
import '/cmrcet-actual-logo.jpg';
function Home () {
  return (
    <div >
      {/* <h1 className="home-contents">CMR COLLEGE OF ENGINEERING & TECHNOLOGY</h1> */}
      <img className="cmrcet-actual-logo" src="cmrcet-actual-logo.jpg" alt="" />
      <div className="images">
        <img className="campus" src="cmr-nref.jpg" alt="" />
        <img className="campus" src="in-campus.jpg" alt="" />
        <img className="campus" src="block-image.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
