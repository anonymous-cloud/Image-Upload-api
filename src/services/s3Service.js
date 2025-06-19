const AWS = require('aws-sdk');
const crypto = require('crypto');
const path = require('path');
require('dotenv').config();

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

async function uploadToS3(file) {
  const ext = path.extname(file.originalname);
  const uniqueName = `${crypto.randomUUID()}${ext}`;

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: uniqueName,
    Body: file.buffer,
    ContentType: file.mimetype,

  };

  const data = await s3.upload(params).promise();

  return {
    originalName: file.originalname,
    url: data.Location
  };
}

module.exports = { uploadToS3 };
