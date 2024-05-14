const express = require("express"); // Import express
const dotenv = require("dotenv").config(); // Import dotenv
const port = process.env.PORT || 5000; // Port

const app = express(); // Create app object from express

// Middleware
app.use("/api/goals", require("./routes/goalRoutes")); // Use goalRoutes for /api/goals

// Start express server on port 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
