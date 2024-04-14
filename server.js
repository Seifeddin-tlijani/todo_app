// server.js
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Middleware
app.use(express.json());


const MONGODB_URI = "mongodb://127.0.0.1:27017/todoListDB";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


// Routes
app.use('/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
