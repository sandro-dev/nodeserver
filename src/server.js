const express = require('express');
const mongoose = require('mongoose'); 

const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack9@cluster0-hk4sr.mongodb.net/semana09?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use(routes);

app.listen(3333);