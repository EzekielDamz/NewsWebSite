import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
// app.use(cors());
const app = express();
const YOUR_API_KEY = process.env.NEWS_API_KEY;
const port = process.env.PORT || 5000;

const corsOptions = [
  "http://localhost:5173/",
  "https://news-web-site-ebon.vercel.app",
];
app.use(cors(corsOptions));
const fetchNewsData = async () => {
  const url = `https://newsapi.org/v2/everything?q=nigeria&apiKey=${YOUR_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return [];
  }
};
app.get("/api/news", async (req, res) => {
  try {
    const newsData = await fetchNewsData();
    res.json(newsData);
  } catch (error) {
    console.error("Error sending news data to frontend:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
