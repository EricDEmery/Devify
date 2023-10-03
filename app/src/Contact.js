import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ltdnvuw', 'template_xnrljlm', form.current, 'y1qPBzn4JqiRGKYs2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
<>
<section>
<div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 text-center">
          <h3 className="contact-title">Lets Work Together!</h3>
          <p className="slogan">Email us today for your FREE consultation.</p>
        </div>
        <div className="col-md-6 text-center">
    <div className="row">
      <div className="col-md-6 mx-auto">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control border-dark"
              placeholder="Full Name"
              name="user_name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control border-dark"
              placeholder="Email"
              name="user_email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control border-dark"
              placeholder="Subject"
              name="subject"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control border-dark"
              placeholder="Message"
              name="message"
              rows="5"
            ></textarea>
          </div>
          <div className="text-center">
          <button type="submit" className="btn btn-dark">Send Message</button>
          </div>
        </form>

      </div>
    </div>
  </div>
  </div>
  </div>
</section>

</>
  )
}
