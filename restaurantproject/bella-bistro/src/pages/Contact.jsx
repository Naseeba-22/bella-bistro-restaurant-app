import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <div className="inner-page">
      <header className="inner-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Back Home
        </Link>

        <div className="inner-logo">
          BELLA <span>BISTRO</span>
        </div>

        <Link to="/reservations" className="inner-button">
          Reserve Table
        </Link>
      </header>

      <section className="page-hero contact-hero">
        <p className="section-label">BELLA BISTRO</p>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Visit us, call us, or send us a message.
        </p>
      </section>

      <main className="contact-content">
        <section className="contact-intro">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's stay
            <br />
            <span>connected.</span>
          </h2>

          <p>
            Whether you have a question, want to plan a special dinner, or
            simply want to say hello, our team is always happy to hear from
            you.
          </p>
        </section>

        <section className="contact-grid">
          <div className="contact-card">
            <MapPin size={30} />
            <h3>Visit Us</h3>
            <p>
              123 Bistro Street
              <br />
              Downtown
            </p>
          </div>

          <div className="contact-card">
            <Phone size={30} />
            <h3>Call Us</h3>
            <p>
              +1 234 567 890
              <br />
              +1 234 567 891
            </p>
          </div>

          <div className="contact-card">
            <Mail size={30} />
            <h3>Email Us</h3>
            <p>
              hello@bellabistro.com
              <br />
              reservations@bellabistro.com
            </p>
          </div>

          <div className="contact-card">
            <Clock size={30} />
            <h3>Opening Hours</h3>
            <p>
              Monday – Sunday
              <br />
              11:00 AM – 11:00 PM
            </p>
          </div>
        </section>

        <section className="contact-bottom">
          <div className="contact-message">
            <p className="section-label">FOLLOW US</p>
            <h2>
              Good food is
              <br />
              <span>better shared.</span>
            </h2>

            <p>
              Follow Bella Bistro for new dishes, special events and moments
              from our kitchen.
            </p>

            <div className="social-link">
            
              <span>@bellabistro</span>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-content">
              <MapPin size={42} />
              <h3>Bella Bistro</h3>
              <p>123 Bistro Street, Downtown</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </section>
      </main>

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

export default Contact;