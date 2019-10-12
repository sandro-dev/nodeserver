const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res)=>{
  return res.json(req.body);
});

routes.get('/users', (req, res)=>{
  return res.json({
    "users": 
    [
      {
        "id": "62515963",
        "name": "Elmore Altenwerth",
        "phone": "(433) 203-9327",
        "address": {
          "street": "2447 Colten Trail",
          "city": "Jamarside",
          "state": "Arizona"
          }
      },

      {
        "id": "77437088",
          "name": "Bert Flatley",
          "phone": "(071) 403-5391",
          "address": {
            "street": "47688 Trantow Mills",
            "city": "Weberfort",
            "state": "Virginia"
          }
      }
    ]

  }
  );
});

module.exports = routes;