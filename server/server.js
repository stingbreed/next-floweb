const express = require('express');
const mongoose = require('mongoose');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = 'mongodb+srv://ozoemenezubby:gwZGQnhsODgf9uCO@floweb-database-dev.tbt7py1.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

nextApp.prepare().then(() => {
  const app = express();

  // gwZGQnhsODgf9uCO

  // mongodb+srv://ozoemenezubby:gwZGQnhsODgf9uCO@floweb-database-dev.tbt7py1.mongodb.net/?retryWrites=true&w=majority

  // Add your API routes here (e.g., app.get, app.post)

  app.post('/api/news', async (req, res) => {
    try {
      const { title, content } = req.body;
      const newNews = new News({ title, content });
      const savedNews = await newNews.save();
      res.status(201).json(savedNews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
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