import React from 'react'
import { Header } from '../Common/Header'
import './Contact.css'

export function Contact() {
  return (
    <>
        <Header/>
        <div className="contact_section">
            <div className="contactForm">
              <div className="titles">
                <h1>Get in Touch</h1>
                <p>Want to get in touch? we'd love to hear from you. Here's how you can reach us.</p>
              </div>
              <div className="form_elements">
                <input type="text" placeholder='Name' />
              </div>
              <div className="form_elements">
                <input type="text" placeholder='Email' />
              </div>
              <div className="form_elements">
                <input type="text" placeholder='Phone' />
              </div>
              <div className="form_elements">
                <textarea placeholder='Message' rows={10} cols={50}/>
              </div>
              <button className='send_btn'>Send Message</button>
            </div>
        </div>
    </>
  )
}
