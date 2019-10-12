const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    await booking.populate('spot').populate('user').execPopulate();

    return res.json(booking);
  },

  async index(req, res) {
    const bookings = await Booking.find();
    
    return res.json(bookings);
  },

  async destroy(req, res) {
    const { _id } = req.params;
    
    const bookings = await Booking.find({_id: _id});
    
    return res.json(bookings);
  }
}