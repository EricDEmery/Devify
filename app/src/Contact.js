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
<section>
  <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="user_name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="user_email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
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
</section>

  )
}
