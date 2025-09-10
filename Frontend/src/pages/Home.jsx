import '../CSS/pageCSS/HomePage.css';
import Crousel from '../components/Crousel';
import Footer from '../components/Footer';
import Hero_Category from '../components/Hero_Category';
import Hero_feature from '../components/Hero_feature';
import Hero_testimonial from '../components/Hero_testimonial';
import Hero_top from '../components/Hero_top';

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <Hero_top/>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <Hero_Category/>
      </section>

      <section>
        <Crousel/>
      </section>

      {/* Featured Events Section */}
      <section className="featured-events">
        <Hero_feature/>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Create Your Event?</h2>
          <p>Join thousands of organizers who use our platform to create successful events</p>
          <button className="cta-button">Create Event</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <Hero_testimonial/>
      </section>
      
      <section className="footer">
        <Footer/>
      </section>
    </div>
  );
}

export default Home;