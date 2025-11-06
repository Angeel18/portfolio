import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Health check
app.get("/api/health", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS ok");
    res.json({ ok: rows[0].ok === 1 });
  } catch (e) {
    res.status(500).json({ ok: false, error: "DB connection failed" });
  }
});

// Contact endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // (Optional) tiny validation
    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim().toLowerCase();
    const trimmedMessage = String(message).trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return res.status(400).json({ error: "Invalid email." });
    }

    // Insert with prepared statement
    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    await pool.execute(sql, [trimmedName, trimmedEmail, trimmedMessage]);

    res.status(200).json({ success: true, message: "Message stored!" });
  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({ error: "Database error." });
  }
});

// Start
app.use(cors({ origin: "https://angeel.dev" })); // or remove if same-origin via proxy
app.listen(process.env.PORT || 4000, "0.0.0.0", () => console.log("API up"));

