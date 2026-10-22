const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "445254",
  database: "bella_bistro",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }

  console.log("MySQL connected successfully!");
});

app.get("/", (req, res) => {
  res.send("Bella Bistro server is running!");
});
app.post("/api/orders", (req, res) => {
  const {
    customer_name,
    phone,
    table_number,
    items,
    subtotal,
    tax,
    service_charge,
    grand_total
  } = req.body;

  const sql = `
    INSERT INTO orders
    (customer_name, phone, table_number, items, subtotal, tax, service_charge, grand_total)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      customer_name,
      phone,
      table_number,
      JSON.stringify(items),
      subtotal,
      tax,
      service_charge,
      grand_total
    ],
    (err, result) => {
      if (err) {
        console.error("Order save error:", err);
        return res.status(500).json({ error: "Failed to save order" });
      }

      res.json({
        message: "Order saved successfully",
        orderId: result.insertId
      });
    }
  );
});
app.post("/api/reservations", (req, res) => {
  const {
    customer_name,
    phone,
    reservation_date,
    reservation_time,
    guests,
    special_request
  } = req.body;

  const sql = `
    INSERT INTO reservations
    (customer_name, phone, reservation_date, reservation_time, guests, special_request)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      customer_name,
      phone,
      reservation_date,
      reservation_time,
      guests,
      special_request
    ],
    (err, result) => {
      if (err) {
        console.error("Reservation save error:", err);
        return res.status(500).json({
          error: "Failed to save reservation"
        });
      }

      res.json({
        message: "Reservation saved successfully",
        reservationId: result.insertId
      });
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
