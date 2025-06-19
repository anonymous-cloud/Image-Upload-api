const express = require('express');
const multer = require('multer');
const { uploadToS3 } = require('../services/s3Service');
const db = require('../config/db');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload-product-image', upload.single('image'), async (req, res) => {
  try {
    console.log("jhjhjhjhjh")
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const { originalName, url } = await uploadToS3(req.file);

    const sql = 'INSERT INTO product_images (original_name, s3_url) VALUES (?, ?)';
    db.query(sql, [originalName, url], (err) => {
      if (err) {
        console.error('DB insert error:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      res.json({
        message: 'Image uploaded to S3 successfully',
        url
      });
    });
  } catch (err) {
    console.error('Upload failed:', err);
console.error('Upload failed:', err.message, err.stack);
  }
});

module.exports = router;
