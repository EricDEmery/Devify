import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DevPic from "./img/DevPic3.jpg";
import DevifyLogo from "./img/DevifyLogo.png";
import Ecom from "./img/ECom.png";
import Maintain from "./img/Maintain2.png";
import WebDev from "./img/WebDev3.jpg";

export default function Home(props) {
  return (
    <>
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 text-center">
          <h1 className="title">Devify</h1>
          <h3 className="slogan pt-3 pb-3">Your Vision, Our Code!</h3>
          <button type="button" class="btn btn-dark" onClick={() => props.setPage("Contact")}>Contact Us</button>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={DevPic}
            alt="Cartoon Software Engineer Photo"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="services pb-5">Our Services</h1>
      </div>
      <div className="row pt-5">
        <div className="col-sm-4 text-center">
          <div className="card custom-card" style={{ width: "20rem" }}>
            <img src={WebDev} className="card-img-top img-style" alt="Web Developer Graphic" />
            <div className="card-body">
              <h3 className="slogan">Website Development</h3>
              <p className="card-text pg">
                At Devify, we take pride in crafting websites with responsive
                user interfaces tailored to our clients' unique needs. Our team of 
                dedicated developers ensures that every website we create is not 
                only visually appealing but also functions flawlessly across various 
                platforms and screen sizes. We work directly with our clients every
                step of the way to ensure 100% satisfaction. Let us help you build the
                online presence of your dreams.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 text-center">
        <div className="card custom-card pb-5" style={{ width: "20rem" }}>
            <img src={Ecom} className="card-img-top" alt="Web Developer Graphic" />
            <div className="card-body">
          <h3 className="slogan">E-Commerce Solutions</h3>
          <p className="card-text pg">
            We specialize in crafting dynamic e-commerce solutions that redefine
            online shopping experiences for our clients. Our e-commerce sites
            are not just storefronts; they are interactive platforms where
            businesses thrive. Tailored to individual client needs, our sites
            blend intuitive navigation with secure payment gateways, ensuring
            seamless transactions and hassle-free browsing.
          </p>
        </div>
        </div>
        </div>
        <div className="col-sm-4 text-center">
        <div className="card custom-card" style={{ width: "20rem" }}>
            <img src={Maintain} className="card-img-top" alt="Web Developer Graphic" />
            <div className="card-body">
          <h3 className="slogan">Ongoing Website Maintenance</h3>
          <p className="card-text pg">
            Our commitment to our clients doesn't end with the launch of their
            websites; it's just the beginning. We offer comprehensive website
            maintenance services tailored to ensure the continued success of the
            online ventures we create. Our dedicated team of experts provides
            continuous support, handling updates, security enhancements, and
            content management.
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>


    </>
  );
}
