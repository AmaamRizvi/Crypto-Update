const express = require("express");
const cors = require("cors"); // Import the cors package
const axios = require("axios");

const app = express();
const port = 3000; // Choose any available port

// Use the CORS middleware
app.use(cors());

app.get("/coins/markets", async (req, res) => {
  const { vs_currency } = req.query;
  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}`
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
