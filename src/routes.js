const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.index);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.delete('/spots/:id', SpotController.destroy);

routes.get('/spots', DashboardController.show)

module.exports = routes;