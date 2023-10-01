import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DevPic from "./img/DevPic3.jpg"
import DevifyLogo from "./img/DevifyLogo.png"


export default function Home() {

// const titleFont = {
//   fontFamily: 'Orbitron, sans-serif',
//   fontSize: '7rem',
// }

// const textFont = {
//   fontFamily: 'Russo One, sans-serif',
// }

// const imgStyle = {
//   maxWidth: '100%',
// }

return (
  <div className="container">
    <div className="row justify-content-center align-items-center min-vh-100">
      <div className="col-md-6 text-center">
        <h1 className = 'title'>Devify</h1>
        <h3 className="slogan pt-3">Your Vision, Our Code!</h3>
      </div>
      <div className="col-md-6 text-center">
      <img src={DevPic} alt="Cartoon Software Engineer Photo" className="img-fluid" 
          />
      </div>
    </div>
  </div>
);
}
