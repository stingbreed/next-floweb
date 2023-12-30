const express = require('express');
const mongoose = require('mongoose');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = 'YOUR_MONGODB_URI';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

nextApp.prepare().then(() => {
  const app = express();

  // Add your API routes here (e.g., app.get, app.post)

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});