import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock3, Users } from "lucide-react";

function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    customer_name: "",
    phone: "",
    email: "",
    reservation_date: "",
    reservation_time: "",
    guests: "",
    special_request: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSaving(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/reservations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to save reservation"
        );
      }

      console.log("Reservation saved:", data);

      setSubmitted(true);
    } catch (error) {
      console.error("Reservation error:", error);

      alert(
        "Could not save the reservation. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  function makeAnotherReservation() {
    setSubmitted(false);

    setFormData({
      customer_name: "",
      phone: "",
      email: "",
      reservation_date: "",
      reservation_time: "",
      guests: "",
      special_request: "",
    });
  }

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

        <Link to="/menu" className="inner-button">
          View Menu
        </Link>
      </header>

      <section className="page-hero reservation-hero">
        <p className="section-label">BELLA BISTRO</p>

        <h1>Reserve a Table</h1>

        <p>
          Choose your preferred date and time. We look forward to welcoming
          you.
        </p>
      </section>

      <main className="reservation-content">
        <div className="reservation-info">
          <p className="section-label">YOUR EVENING STARTS HERE</p>

          <h2>
            Make it
            <br />
            <span>memorable.</span>
          </h2>

          <p>
            Whether you're celebrating something special or simply enjoying
            dinner with people you love, we'll make sure your table is ready.
          </p>

          <div className="reservation-details">
            <div>
              <CalendarDays size={22} />
              <div>
                <strong>Available daily</strong>
                <p>Monday – Sunday</p>
              </div>
            </div>

            <div>
              <Clock3 size={22} />
              <div>
                <strong>Opening hours</strong>
                <p>11:00 AM – 11:00 PM</p>
              </div>
            </div>

            <div>
              <Users size={22} />
              <div>
                <strong>Group dining</strong>
                <p>Up to 12 guests</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reservation-form-box">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>

              <p className="section-label">RESERVATION REQUESTED</p>

              <h2>Thank you!</h2>

              <p>
                Your reservation request has been received. We will contact
                you shortly to confirm your table.
              </p>

              <button
                className="primary-button"
                onClick={makeAnotherReservation}
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Your Name
                  <input
                    type="text"
                    name="customer_name"
                    placeholder="Enter your name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+92 300 0000000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="form-row">
                <label>
                  Date
                  <input
                    type="date"
                    name="reservation_date"
                    value={formData.reservation_date}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Time
                  <select
                    name="reservation_time"
                    value={formData.reservation_time}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select time
                    </option>
                    <option value="12:00:00">12:00 PM</option>
                    <option value="13:00:00">1:00 PM</option>
                    <option value="14:00:00">2:00 PM</option>
                    <option value="18:00:00">6:00 PM</option>
                    <option value="19:00:00">7:00 PM</option>
                    <option value="20:00:00">8:00 PM</option>
                    <option value="21:00:00">9:00 PM</option>
                    <option value="22:00:00">10:00 PM</option>
                  </select>
                </label>
              </div>

              <label>
                Number of Guests
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select guests
                  </option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7–12 Guests</option>
                </select>
              </label>

              <label>
                Special Request
                <textarea
                  name="special_request"
                  rows="4"
                  placeholder="Birthday, anniversary, dietary request..."
                  value={formData.special_request}
                  onChange={handleChange}
                ></textarea>
              </label>

              <button
                type="submit"
                className="primary-button form-submit"
                disabled={saving}
              >
                {saving ? "Saving Reservation..." : "Request Reservation"}
              </button>
            </form>
          )}
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

export default Reservations;