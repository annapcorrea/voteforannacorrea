import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Thanks.css';

export default function ThankYou() {
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="thank-you-section">
          <h1>Thank You!</h1>
          <p>Your message has been sent successfully. I'll get back to you soon!</p>
          <br></br>
          <Link to="/"> {/* Use Link instead of href */}
            <button className="form-button">Home</button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}