const mysql = require('mysql2');
require('dotenv').config();

console.log(typeof(process.env.DB_HOST),"process.env.DB_HOST")

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err.message);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL database');
});

module.exports = db;
