const Spot = require('../models/Spot');

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;
    const { user_id } = req.headers;

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      price,
      techs: techs.split(',').map(tech => tech.trim()),
    });

    return res.json(spot);
  },
  
  async index(req, res) {
    const spots = await Spot.find();
    return res.json(spots);
  },

  async destroy(req, res) {
    const { _id } = req.params;
    const spot = await Spot.find(_id);
    return res.json(spot);

  }

}