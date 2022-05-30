require('dotenv').config()
const express = require('express');
const router = express.Router();
const Game = require('../models/gameSchema');
import React from 'react';


//Find all games
// router.get('/game', (req, res) => {
//    console.log(Game)
//     Game.find()
//       .then((foundGame) => {
//         res.status(200).json(foundGame);
//       })
//       .catch((err) => {
//         res.status(404).json({
//           message: "page not found in index",
//           error: err
//         });
//       });
//   });

  //Find game by name
  router.get('/name', async (req, res) => {
    Game.find({}, (err, result) => {
        if(err){
            res.send(err)
        }
        res.send(result)
    })
  })

  router.get('/', (req, res) => {
    res.send('GET /games')
  })
module.exports = router;