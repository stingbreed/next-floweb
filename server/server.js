const express = require('express');
const mongoose = require('mongoose');
const next = require('next');
const News = require('./models/News');
const multer = require('multer');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = 'mongodb+srv://ozoemenezubby:gwZGQnhsODgf9uCO@floweb-database-dev.tbt7py1.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

nextApp.prepare().then(() => {
  const app = express();

  app.use(express.json());
  app.use(upload.single('image'));

  // gwZGQnhsODgf9uCO


  app.post('/api/news', async (req, res) => {
    try {
      const { title, content } = req.body;
      const imageUrl = req.file ? saveImage(req.file) : '';
  
      const newNews = new News({ title, content, imageUrl });
      const savedNews = await newNews.save();
  
      res.status(201).json(savedNews);
    } catch (error) {
      console.error('Error posting news:', error);
  
      if (error.name === 'ValidationError') {
        res.status(400).json({ error: 'Validation Error', details: error.errors });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  });

  app.get('/api/news', async (req, res) => {
    try {
      const allNews = await News.find();
      res.status(200).json(allNews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});

function saveImage(file) {
  // Check if the file object is present
  if (!file) {
    return null;
  }

  // Define the directory where you want to save the images
  const uploadDirectory = 'uploads';

  // Ensure the directory exists, if not, create it
  if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
  }

  // Generate a unique filename for the image (you might use a library like uuid)
  const uniqueFilename = `${Date.now()}-${file.originalname}`;

  // Build the full path to save the image
  const filePath = `${uploadDirectory}/${uniqueFilename}`;

  // Use the file system to write the file
  fs.writeFileSync(filePath, file.buffer);

  // Return the path or URL of the saved image
  return filePath;
}

module.exports = saveImage;