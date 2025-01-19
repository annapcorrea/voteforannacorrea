import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profileImage2 from '../assets/main_2.png';
import scholarship from '../assets/scholarship.png';
import leadership from '../assets/leadership.png';
import service from '../assets/service.png';
import fellow from '../assets/fellow.png';
import lit from '../assets/lit.png';
import './About.css';

export default function Coding() {
  return (
    <>
      <Header />
      <main>
        <br />
        <div className="container-two">
          <div className="left-div about-div">
            <h1>About Me</h1>
            <p className="paragraph-about">
              Hello everyone! My name is Anna Correa, and it is a pleasure to be running International Vice President for Division II, and I hope to meet all of you during my campaign. I was born in Rio de Janeiro and moved to the United States when I was 13. Since then, I have dedicated myself to being a voice and advocate for international students like me, striving to be a representation of the unique journeys and challenges we go through. My passion for creative writing and reading has always shaped my perspective, and I believe programming is simply another form of creative expression — a way of telling stories through logic and innovation. With dedication, I’ve worked hard to pursue my dreams of earning a higher education. Now, I am earning both an Associate of Arts in General Studies and an Associate of Science degree in Computer Programming at Valencia Honors College.
            </p>
          </div>
          <div className="right-div about-div">
            <img
              src={profileImage2}
              alt="Anna Correa Headshot"
              className="profile-image"
              width="425"
            />
          </div>
        </div>
        <br />
        <div id="flex-container">
       <div class="flex-item">
           <div class="header-with-icon">
           <img src={service} alt="Service Icon" className="icon" />            
               <h3 class="Service">Service</h3>
           </div>
           <ul>
               <li>2024 PTK Scholar Dash FL Captain</li>
               <li>2024 Most Donors in Scholar Dash</li>
               <li>Python Instructor / Learning Designer at BOT</li>
               <li>Service Learning Student (80 Hours)</li>
               <li>Honors In Action Execution</li>
               <li>Phoenix Magazine Reader</li>
               <li>100+ Hours of Service in High School</li>
           </ul>
       </div>


       <div class="flex-item">
           <div class="header-with-icon">
           <img src={leadership} alt="Leadership Icon" className="icon" />

               <h3 class="Leadership">Leadership</h3>
           </div>
           <ul>
               <li>PTK FL Region Co-Executive Officer</li>
               <li>PTK Vice-President of Scholarship</li>
               <li>International Student Ambassador</li>
               <li>Honors Student Moderator</li>
               <li>Internship at VC Learning Assessment Office</li>
               <li>Internship at TSG Global, Inc.</li>
               <li>Vice-President of "Source Code" (2024)</li>
           </ul>
       </div>


       <div class="flex-item">
           <div class="header-with-icon">
           <img src={scholarship} alt="Scholarship Icon" className="icon" />   
               <h3 class="Scholarship">Scholarship</h3>
           </div>
           <ul>
               <li>Honors Research Project Class</li>
               <li>HIA Write-up</li>
               <li>Career Action Distinction</li>
               <li>Seneff Honors Scholarship Recipient</li>
               <li>PTK Scholarship Workshop Organizer</li>
               <li>Valencia College Foundation Scholarships Recipient</li>
               <li>President's List</li>
               <li>Dean's List</li>
               <li>All PTK Edges Complete</li>
           </ul>
       </div>
   </div>


   <div id="flex-container-two">
       <div class="flex-item">
           <div class="header-with-icon">
           <img src={fellow} alt="Fellowship Icon" className="icon" />
               <h3 class="Fellowship">Fellowship</h3>
           </div>
           <ul>
               <li>Tabling Events with PTK</li>
               <li>College Project Events</li>
               <li>Intercollegiate Programming Competition, 3rd Place Team Trophy</li>
               <li>TADHack 2024, Honorable Mention</li>
               <li>Organizer of the First Presidential AI Conference at Valencia College</li>
               <li>Honors Student Moderator</li>
           </ul>
       </div>


       <div class="flex-item">
           <div class="header-with-icon">
           <img src={lit} alt="Literature Icon" className="icon" />
               <h3 class="Literature">Literature</h3>
           </div>
           <ul>
               <li>The Waves by Virginia Woolf</li>
               <li>Devotions by Mary Oliver</li>
               <li>The White Notebook by Han Kang</li>
               <li>Envelope Poems by Emily Dickinson</li>
               <li>Agua Viva by Clarice Lispector</li>
               <li>Beloved by Toni Morrison</li>
               <li>Wuthering Heights by Emily Brontë</li>
               <li>The House of the Spirits by Isabel Allende</li>
           </ul>
       </div>
   </div>

      </main>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}
