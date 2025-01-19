import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';
import sol from '../assets/Sol.png';

export default function Home() {
  return (
    <>
      <Header/>
      <main className="main-container">
        <section className="contact-section">
          <div className="contact-content">
            <div className="form-container">
              <h1>Contact me</h1>
              <form
                action="https://formsubmit.co/apereiracorrea@mail.valenciacollege.edu"
                method="POST"
                className="contact-form"
              >
                <input type="hidden" name="_subject" value="New submission!" />
                <input type="hidden" name="_next" value="http://localhost:3000/thanks" />
                
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Email"
                  required
                />
                
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Name"
                  required
                />
                
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Message"
                  required
                ></textarea>
                
                <button type="submit" className="form-button">
                  Submit
                </button>
              </form>
            </div>
            <div className="image-container">
              <img src={sol} alt="Profile" className="contact-image" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}