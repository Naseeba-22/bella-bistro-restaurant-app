import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Award, Heart, Leaf } from "lucide-react";

function About() {
  return (
    <div className="inner-page">
      <header className="inner-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Back Home
        </Link>

        <Link to="/" className="inner-logo">
          BELLA <span>BISTRO</span>
        </Link>

        <Link to="/reservations" className="inner-button">
          Reserve Table
        </Link>
      </header>

      <section className="page-hero about-hero">
        <p className="section-label">OUR STORY</p>

        <h1>Made with passion.</h1>

        <p>
          A neighborhood restaurant built around good food, warm hospitality
          and unforgettable moments.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-image"></div>

        <div className="about-story-content">
          <p className="section-label">BELLA BISTRO</p>

          <h2>
            More than a restaurant.
            <br />
            <span>A place to belong.</span>
          </h2>

          <p>
            Bella Bistro began with a simple belief: the best memories are
            often made around a table.
          </p>

          <p>
            Our kitchen brings together fresh ingredients, thoughtful
            techniques and recipes inspired by both classic and modern
            cuisine.
          </p>

          <p>
            From a quick lunch with friends to a long evening with family,
            every guest is invited to slow down, enjoy the food and stay a
            little longer.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="values-heading">
          <p className="section-label">WHAT WE BELIEVE</p>

          <h2>
            Simple things,
            <br />
            <span>done beautifully.</span>
          </h2>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <Leaf size={30} />
            <h3>Fresh Ingredients</h3>
            <p>
              We choose quality ingredients and let their natural flavors
              shine.
            </p>
          </div>

          <div className="value-card">
            <Heart size={30} />
            <h3>Made with Care</h3>
            <p>
              Every dish is prepared with attention to detail and genuine
              passion.
            </p>
          </div>

          <div className="value-card">
            <Award size={30} />
            <h3>Great Experiences</h3>
            <p>
              Beautiful food is only part of the experience. Hospitality
              matters too.
            </p>
          </div>
        </div>
      </section>

      <section className="chef-section">
        <div className="chef-image"></div>

        <div className="chef-content">
          <p className="section-label">MEET OUR CHEF</p>

          <h2>
            Cooking is
            <br />
            <span>our language.</span>
          </h2>

          <p>
            Our chef believes that great cooking doesn't need to be
            complicated. It needs good ingredients, patience and a little
            creativity.
          </p>

          <p>
            Every plate leaving our kitchen is designed to feel familiar,
            exciting and memorable at the same time.
          </p>

          <Link to="/menu" className="primary-button">
            Explore Our Menu <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer>
        <div className="footer-logo">BELLA BISTRO</div>

        <p>Good food. Good moments.</p>

        <div className="footer-bottom">
          <span>© 2026 Bella Bistro</span>
          <span>Made with passion.</span>
        </div>
      </footer>
    </div>
  );
}

export default About;