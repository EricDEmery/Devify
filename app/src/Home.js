import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {

const titleFont = {
  fontFamily: 'Orbitron, sans-serif',
}

const textFont = {
  fontFamily: 'Russo One, sans-serif',
}

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col text-center">
            <h1 style={titleFont}>Devify</h1>
            <h3 style={textFont}>Your Vision, Our Code!</h3>
          </div>
        </div>
      </div>
    </>
  )
}
