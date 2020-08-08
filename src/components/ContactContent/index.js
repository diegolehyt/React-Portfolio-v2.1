import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import * as emailjs from "emailjs-com";
import "./style.css";

const styles = {
  sec: {
    marginTop: '120px',
    marginBottom: '40px'
  }
}

function ContactContent() {

  const [nameP, setNameP] = useState("")
  const [emailP, setEmailP] = useState("")
  const [subjectP, setSubjectP] = useState("")
  const [messageP, setMessageP] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    let templateParams = {
      name: 'James',
      email: 'saasfa',
      subject: 'Check this out!',
      messages: 'hola hola hola safsfafasf'
    };
    emailjs.sendForm(
      "gmail",
      "diego_template",
      "envio",
      "user_1pUq5ZXbIAK6WgdunBcWE"
    )
    .then()
    .catch()
  };

  const handleNameChange = (e) => {
    // e.preventDefault();
    setNameP(e.target.value)
    console.log(nameP)
 
  };

  const handleEmailChange = (e) => {
    // e.preventDefault();
    setEmailP(e.target.value)
    console.log(emailP)
 
  };

  const handleSubjectChange = (e) => {
    // e.preventDefault();
    setSubjectP(e.target.value)
    console.log(subjectP)
 
  };

  const handleMessageChange = (e) => {
    // e.preventDefault();
    setMessageP(e.target.value)
    console.log(messageP)
 
  };

  return (
    <div className="col-12 animated fadeInRight" > 
      <section className="text-center px-md-5 mx-md-5 white-text" style={styles.sec}>

        <h3 className="font-weight-bold mb-4">Contact Me</h3>
        
        <div className="row">
    
        
          <div className="col-md-9 mb-md-0 mb-5">
    
            <form className="form-group" id="envio" onSubmit={handleSubmit}>
    
              <div className="row">
        
                
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input onChange={handleNameChange} value={nameP} type="text" id="name" name="name" className="form-control white-text"/>
                    <label for="name" className="white-text">Your name</label>
                  </div>
                </div>
                

                
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input onChange={handleEmailChange} value={emailP} type="text" id="email" name="email" className="form-control white-text"/>
                    <label for="email" className="white-text">Your email</label>
                  </div>
                </div>
                

              </div>
              
              <div className="row">

                
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input onChange={handleSubjectChange} value={subjectP} type="text" id="subject" name="subject" className="form-control white-text"/>
                    <label for="subject" className="white-text">Subject</label>
                  </div>
                </div>
                

              </div>

              <div className="row">

                
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea onChange={handleMessageChange} value={messageP} id="message" name="message" className="form-control md-textarea white-text" rows="3"></textarea>
                    <label for="message" className="white-text">Your message</label>
                  </div>
                </div>
                

              </div>

              <div className="text-center text-md-left">
                <button className="btn btn-primary btn-md btn-rounded btn-outline-white" htmlType="submit">Send</button>
              </div>
    
            </form>
    
    
    
          </div>
        
    
        
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x blue-text"></i>
                <p>754 Saint Andre Drive, Orleans ON, CANADA</p>
              </li>
              <li>
                <i className="fas fa-phone fa-2x mt-4 blue-text"></i>
                <p>+ 1 613 263 2192</p>
              </li>
              <li>
                <i className="fas fa-envelope fa-2x mt-4 blue-text"></i>
                <p className="mb-0">diegolehy00@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>                    
  )

}

export default ContactContent;
