#  Image Upload API

Hi! This is a simple Node.js + Express API I built for the Mediversal technical assignment. The goal of this project was to create an endpoint that lets users upload product images. Those images are stored in AWS S3, and the image URLs are saved in a MySQL database hosted on AWS RDS. The whole thing is deployed using Docker on an EC2 instance.

---

##  Features

- Upload product images using a REST API
- Store images in AWS S3 with unique, public URLs
- Save image metadata (original name + S3 URL) to a MySQL database
- Dockerized for easy deployment
- Deployed on AWS (EC2, S3, RDS)
- Environment-based configuration (using `.env` and Docker)

---

##  Live Deployment

This API is deployed on an AWS EC2 instance. You can test the upload endpoint using the instructions below.

---

##  Tech Stack

- Node.js + Express
- AWS S3 (file storage)
- AWS RDS (MySQL)
- Docker (containerization)
- EC2 (API hosting)

---

##  API Endpoint

### `POST /upload-product-image`

Upload an image using `multipart/form-data`. The file key should be named `image`.

**Example using Postman**:
- Method: `POST`
- URL: `http://<your-ec2-ip>:3000/upload-product-image`
- Body: `form-data`
  - Key: `image` (type: File)
  - Value: Select an image from your computer

#### Response (Success):
```json
{
  "success": true,
  "imageUrl": "https://your-bucket-name.s3.amazonaws.com/unique-filename.jpg"
}


### Response (Error):

{ "error": "No file uploaded" }
