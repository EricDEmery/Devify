import React from 'react'
import Logo from './img/DevifyLogo.png'

export default function Navbar(props) {

    const logoStyle = {
        maxWidth: '160px',
        maxHeight: '53px',
    }

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="Home">
                    <img style={logoStyle} src={Logo} alt="Your Alt Text" className="img-fluid"/>
                </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" onClick={() => props.setPage("Home")} aria-current="page">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => props.setPage("Home")} aria-current="page">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => props.setPage("Home")} aria-current="page">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true" aria-current="page">Disabled</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    
    </>
  )
}
