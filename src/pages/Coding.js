import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import coding from '../assets/coding.jpg';
import './Coding.css';

export default function Coding() {
  return (
    <>
      <Header />
      <main className="coding-main-content">
      <div className='container-two'>
          <div className='left-div coding-div'>
            <h1>About the Site</h1>
         
            <p className='paragraph'> 
            For my campaign for International Vice President of Division II in Phi Theta Kappa, I built the website myself. While I focused on the development and functionality, my talented friend Clark Silva designed the layout. We worked together to create a site that not only looks great but also helps share my vision and goals with the community. Thank you for taking the time to visit and explore the website!
            </p>
            <br></br>
            <Link to="/">
            <button className="form-button">Home</button>
          </Link>

          </div>

          <div className='right-div coding-div'> 
            <img src={coding} alt="Anna Correa" className="innovation" 
                width='456' height='307'/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}