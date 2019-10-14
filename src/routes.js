const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig)

/** Sessions routes */
routes.get('/sessions', SessionController.index);
routes.post('/sessions', SessionController.store);
routes.delete('/sessions/:_id', SessionController.destroy);

/** Spots routes */
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.delete('/spots/:id', SpotController.destroy);

/** More spots routes  */
routes.get('/spots', DashboardController.show);
routes.post('/spots/:spot_id/booking', BookingController.store);

/** Bookings routes */
routes.get('/bookings', BookingController.index);
routes.delete('/bookings/:_id', BookingController.destroy);

module.exports = routes;