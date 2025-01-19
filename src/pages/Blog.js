import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Blog.css';

export default function ComingSoon() {
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="coming-soon-section">
          <h1>Coming Soon</h1>
          <p>Hello! I plan on having a blog portion in this website very soon. Thank you for your patience and interest in my website!</p>
          <br></br>
          <Link to="/Home"> {/* Use Link instead of href */}
            <button className="form-button">Home</button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}