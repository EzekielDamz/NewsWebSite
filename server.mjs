// server.mjs (or server.js if not using ES modules)
import express from "express";
import axios from "axios";
import dotenv from "dotenv"; // For environment variables (optional)

dotenv.config(); // Load environment variables (if using)

const app = express();
const YOUR_API_KEY = process.env.NEWS_API_KEY;
const port = process.env.YOUR_API_KEY || 5000;

// Function to fetch news data from the News API
const fetchNewsData = async () => {
  const url = `https://newsapi.org/v2/everything?q=nigeria&apiKey=${YOUR_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return []; // Handle errors gracefully, potentially returning an empty array
  }
};

// API endpoint to retrieve news data
const allowedOrigins =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5174"
    : "https://news-web-site-ebon.vercel.app";
app.get("/api/news", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", allowedOrigins);
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5174");
  // res.setHeader("Access-Control-Allow-Methods", "GET");
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const newsData = await fetchNewsData();
    res.json(newsData);
  } catch (error) {
    console.error("Error sending news data to frontend:", error);
    res.status(500).send("Internal Server Error"); // Handle errors appropriately
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
