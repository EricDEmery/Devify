import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DevPic from "./img/DevPic3.jpg"


export default function Home() {

const titleFont = {
  fontFamily: 'Orbitron, sans-serif',
  fontSize: '7rem',
}

const textFont = {
  fontFamily: 'Russo One, sans-serif',
}

const imgStyle = {
  maxWidth: '100%',
}

return (
  <div className="container">
    <div className="row justify-content-center align-items-center min-vh-100">
      <div className="col-md-6 text-center">
        <h1 style={titleFont}>Devify</h1>
        <h3 className="pt-3" style={textFont}>Your Vision, Our Code!</h3>
      </div>
      <div className="col-md-6 text-center">
      <img src={DevPic} alt="Your Alt Text" className="img-fluid" style={imgStyle}
          />
      </div>
    </div>
  </div>
);
}