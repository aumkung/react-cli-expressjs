const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express gg' });
});

app.get('/api/test', (req, res) => {
 res.send({ express: 'test' });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '/build')));
  
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));