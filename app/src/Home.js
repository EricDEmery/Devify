import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DevPic from "./img/DevPic3.jpg";
import DevifyLogo from "./img/DevifyLogo.png";

export default function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 text-center">
          <h1 className="title">Devify</h1>
          <h3 className="slogan pt-3">Your Vision, Our Code!</h3>
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
      <div className="row">
        <div className="col-sm-4 text-center">
          <h3 className="slogan">Website Development</h3>
          <p className="heading">
            At Devify, we take pride in crafting websites with responsive user
            interfaces tailored to our clients' unique needs. We understand the
            importance of a seamless user experience in today's digital
            landscape, where users access websites on a myriad of devices. Our
            team of dedicated developers ensures that every website we create is
            not only visually appealing but also functions flawlessly across
            various platforms and screen sizes.
          </p>
        </div>
        <div className="col-sm-4 text-center">
          <h3 className="slogan">E-Commerce Solutions</h3>
          <p className="heading">
            We specialize in crafting dynamic e-commerce solutions that redefine
            online shopping experiences for our clients. Our e-commerce sites
            are not just storefronts; they are interactive platforms where
            businesses thrive. Tailored to individual client needs, our sites
            blend intuitive navigation with secure payment gateways, ensuring
            seamless transactions and hassle-free browsing.
          </p>
        </div>
        <div className="col-sm-4 text-center">
          <h3 className="slogan">Ongoing Website Maintenance</h3>
          <p className="heading">
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
  );
}
