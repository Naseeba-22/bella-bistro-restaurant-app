import {
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const dishes = [
    {
      name: "Truffle Pasta",
      price: "$18",
      description:
        "Creamy pasta with parmesan and fresh truffle.",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Margherita Pizza",
      price: "$16",
      description:
        "Fresh mozzarella, basil and tomato sauce.",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Grilled Salmon",
      price: "$24",
      description:
        "Fresh salmon with herbs and seasonal vegetables.",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <Link to="/" className="logo">
          BELLA <span>BISTRO</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/reservations" className="nav-button">
            Reserve Table
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-chef-cooking-in-a-restaurant-1575/1080p.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">
            WELCOME TO BELLA BISTRO
          </p>

          <h1>
            Good food.
            <br />
            <span>Good moments.</span>
          </h1>

          <p className="hero-description">
            Fresh ingredients, unforgettable flavors and
            a warm atmosphere made for memorable evenings.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="primary-button">
              Explore Menu
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/reservations"
              className="secondary-button"
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div>
          <p className="section-label">
            OUR PHILOSOPHY
          </p>

          <h2>
            Food made with
            <br />
            <span>passion.</span>
          </h2>
        </div>

        <p>
          At Bella Bistro, every plate tells a story.
          We combine fresh, locally inspired ingredients
          with modern cooking techniques to create dishes
          you'll want to come back for.
        </p>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="menu-section">
        <div className="section-heading">
          <div>
            <p className="section-label">
              SIGNATURE DISHES
            </p>

            <h2>Our favorites</h2>
          </div>

          <Link to="/menu">
            View full menu
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="dish-grid">
          {dishes.map((dish) => (
            <article
              className="dish-card"
              key={dish.name}
            >
              <div
                className="dish-image"
                style={{
                  backgroundImage: `url(${dish.image})`,
                }}
              >
                <span>HOUSE FAVORITE</span>
              </div>

              <div className="dish-info">
                <div>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>

                <strong>{dish.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-image"></div>

        <div className="about-content">
          <p className="section-label">
            OUR STORY
          </p>

          <h2>
            A table is
            <br />
            <span>where stories begin.</span>
          </h2>

          <p>
            Bella Bistro was created from a simple idea:
            great food brings people together. Our kitchen
            celebrates honest ingredients, creative recipes
            and the joy of sharing a meal.
          </p>

          <Link
            to="/about"
            className="primary-button"
          >
            Discover Our Story
          </Link>
        </div>
      </section>

      {/* INFORMATION */}
      <section className="info-section">

        <div className="info-card">
          <MapPin />

          <h3>Find us</h3>

          <p>
            123 Bistro Street
            <br />
            Downtown
          </p>
        </div>

        <div className="info-card">
          <Clock />

          <h3>Opening hours</h3>

          <p>
            Monday – Sunday
            <br />
            11:00 AM – 11:00 PM
          </p>
        </div>

        <div className="info-card">
          <Phone />

          <h3>Reservations</h3>

          <p>
            +1 234 567 890
            <br />
            hello@bellabistro.com
          </p>
        </div>

      </section>

      {/* REVIEW */}
      <section className="review">

        <Star size={28} fill="currentColor" />

        <blockquote>
          “One of the best dining experiences we've
          ever had. Every dish was absolutely incredible.”
        </blockquote>

        <p>— A HAPPY GUEST</p>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          BELLA BISTRO
        </div>

        <p>
          Good food. Good moments.
        </p>

        <div className="footer-bottom">
          <span>
            © 2026 Bella Bistro
          </span>

          <span>
            Made with passion.
          </span>
        </div>

      </footer>

    </div>
  );
}

export default App;