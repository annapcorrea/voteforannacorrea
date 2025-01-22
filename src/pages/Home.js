import Header from '../components/Header';
import Footer from '../components/Footer';
import profileImage from '../assets/main.png';
import inclusivity from '../assets/inclusivity.jpg';
import innovation from '../assets/innovation.jpg';
import ian from '../assets/Ian.jpg';
import testimonials_2 from '../assets/testimonials_2.png';
import './Home.css'; 

const Testimonial = ({ name, role, content, imgSrc }) => (
  <div className="testimonial-card">
    <p className="testimonial-content">
      {content}
    </p>
    <div className="testimonial-author">
      <img 
        src={imgSrc || "/api/placeholder/40/40"} 
        alt={name} 
        className="author-image"
      />
      <div className="author-info">
        <h4 className="author-name">{name}</h4>
        <p className="author-role">{role}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const testimonials = [
    {
      name: "Ian O'Toole",
      role: "Professor, Software Development",
      content: "Anna exemplifies a collaborative approach to leadership: she leads by example and ensures that everyone has an opportunity to contribute to the team effort.",
      imgSrc: ian
    },
    {
      name: "Jerry Reed",
      role: "Professor of Computer Programming",
      content: "She is one of the two or three best students with whom I have had the pleasure of working, across multiple classes and through multiple years.",
      imgSrc: testimonials_2
    }
  ];

  return (
    <>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <section>
        <div className='container'> 
          <div className="left-div">
            <p className='chi-epsilon'>Chi Epsilon | Valencia College West Campus | Orlando, FL</p>
            <span className='slogan'>
              Writing our
            </span>
            <p className='slogan'> story <b>together</b></p>
            <p className='anna-correa'>
              <b>Anna Correa</b> For International Division II Vice President
            </p>
            <br></br>
            <p className='paragraph'>
              Originally from Rio de Janeiro and now at Valencia Honors College,
              I'm passionate about advocating for international students. As a Phi
              Theta Kappa leader, I work to foster inclusivity and empower others
              to share their unique stories.
            </p>
            <br></br>
            <button className='main-button'> <b>About me ➔</b></button>
          </div>
          
          <div className="right-div">
            <img src={profileImage} alt="Anna Correa Headshot" className="profile-image" 
            width='425'/>
          </div>
        </div>

        <div className='container-two'>
          <div className='right-div inclusivity-div'>
            <img src={inclusivity} alt="Induction Cerimony" className="inclusivity" 
                width='456' height='307'/>
          </div>

          <div className='left-div inclusivity-div'>
            <button className='border-button'>
              INCLUSIVITY
            </button>
            
            <h2 className='sub-titles-main'>For all the people</h2>
            
            <p className='paragraph'>Our community grows stronger when every voice is valued. I'm dedicated to creating a space where international students and minorities feel supported and heard. By breaking barriers and embracing our diverse backgrounds, we can ensure everyone has the chance to share their unique stories.</p>
          </div>
        </div>

        <br></br>

        <div className='container-two'>
          <div className='left-div innovation-div'>
            <button className='border-button'>
              INNOVATION
            </button>
           
            <h2 className='sub-titles-main'>Pioneering change</h2>
         
            <p className='center-a'>I believe in blending creativity and logic to find new solutions that enhance our community. By embracing fresh ideas and staying adaptable, we can drive progress and inspire others to think beyond limits. Together, let's build a forward-thinking environment where everyone has the chance to contribute to something greater. </p>
          </div>

          <div className='right-div innovation-div'> 
            <img src={innovation} alt="Anna Correa" className="innovation" 
                width='456' height='307'/>
          </div>
        </div>
        <br></br>
        <br></br>
        {/* Testimonials Section */}
        <div className="testimonials-container">
          <div className="testimonials-wrapper">
            <h2 className="testimonials-title">
              Testimonials
            </h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      <br></br>
      <br></br>
      </section>
      <Footer />
    </>
  );
}
