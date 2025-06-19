const express = require('express');
const path = require('path');
const uploadRoute = require('./routes/upload');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Parse JSON
app.use(express.json());

// Routes
app.use('/', uploadRoute);

app.listen(PORT,'0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
