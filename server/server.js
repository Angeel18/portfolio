import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors({
  origin: ["https://angeel.dev", "https://www.angeel.dev", "http://localhost:5173"],
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "angeel1824@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});
// basic HTML-escape helper to avoid injection in email HTML
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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
app.get("/health", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS ok");
    res.json({ ok: rows[0].ok === 1 });
  } catch (e) {
    res.status(500).json({ ok: false, error: "DB connection failed" });
  }
});

async function sendEmail(name, email, message) {
  if (!transporter) {
    console.error("No mail transporter configured");
    return { ok: false, error: "No transporter" };
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Submission from ${name || "Guest"} (${email})`,
    text: `${message}\n\nFrom: ${name || "Guest"} <${email}>`,
    html: `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p><hr><p>From: ${escapeHtml(name || "Guest")} &lt;${escapeHtml(email)}&gt;</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return { ok: true, messageId: info.messageId };
  } catch (err) {
    console.error("Error sending email:", err);
    return { ok: false, error: err.message };
  }
}


// Contact endpoint
app.post("/contact", async (req, res) => {
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

    // Attempt to send notification email; don't fail the request if email fails
    const emailResult = await sendEmail(trimmedName, trimmedEmail, trimmedMessage);
    if (!emailResult.ok) {
      console.error("Notification email failed:", emailResult.error);
    }

    res.status(200).json({ success: true, message: "Message stored!" });

  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({ error: "Database error." });
  }
});

// Start
app.listen(process.env.PORT || 4000, "0.0.0.0", () => console.log("API up"));

