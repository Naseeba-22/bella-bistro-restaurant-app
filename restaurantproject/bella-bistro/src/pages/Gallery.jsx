import { Link } from "react-router-dom";
import { ArrowLeft, Maximize2 } from "lucide-react";

function Gallery() {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      title: "Dining Experience",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
      title: "Truffle Pasta",
    },
    {
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=80",
      title: "Wood Fired Pizza",
    },
    {
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
      title: "Fresh Salmon",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      title: "Restaurant Interior",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
      title: "Our Kitchen",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      title: "Evening at Bella",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      title: "Fresh Pizza",
    },
  ];

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

      <section className="page-hero gallery-hero">
        <p className="section-label">BELLA BISTRO</p>

        <h1>Our Gallery</h1>

        <p>
          A glimpse of our food, our space and the moments that happen around
          the table.
        </p>
      </section>

      <main className="gallery-content">
        <div className="gallery-grid">
          {images.map((item, index) => (
            <article
              className={`gallery-card ${
                index === 0 || index === 5 ? "gallery-large" : ""
              }`}
              key={item.title}
            >
              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">
                <div>
                  <p>{item.title}</p>
                </div>

                <Maximize2 size={20} />
              </div>
            </article>
          ))}
        </div>
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

export default Gallery;