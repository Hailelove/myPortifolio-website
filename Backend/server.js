// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./models/Message");

const app = express();

// Middleware
app.use(cors()); // Allows frontend to send requests
app.use(express.json()); // Parses incoming JSON data

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => {
    console.error("CRITICAL MongoDB connection error:");
    console.error("Message:", err.message);
    console.error("Check your MONGO_URI in your .env file!");
  });

// API Route: Handle Contact Form Submission
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save to database
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
