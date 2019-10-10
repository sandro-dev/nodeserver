const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.json({ 
    message: "JSON Server is running...",
    port: req.query.port
  });
});

app.listen(3333);