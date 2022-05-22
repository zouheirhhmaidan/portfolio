import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r6s33ik', 'template_els1py2', form.current, 'Eu25iy3iC2FgbTUbo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact' className='c'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>Zouheir.hm@hotmail.com</h5>
              <a href="mailto: zouheir.hm@hotmail.com" target='_blank'>Send a message</a>
          </article>
      
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+961 76041879</h5>
              <a href="https://api.whatsapp.com/send?phone+=+96176041879" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary bbb'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact