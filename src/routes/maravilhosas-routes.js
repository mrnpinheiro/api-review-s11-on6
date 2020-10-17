const express = require('express');
const router = express.Router();
const cors = require('cors');
const controller = require("../controllers/maravilhosas-controller")
const models = require("../models/maravilhosas-models")

//get /maravilhosas
router.get("/maravilhosas", cors(), controller.getMaravilhosas)

//post /maravilhosas
router.post("/maravilhosas", cors(), controller.addMaravilhosa)

//get /maravilhosas/id
router.get("/maravilhosas/:id", cors(), controller.getMaravilhosaById)

//put /maravilhosas/id
router.put("/maravilhosas/:id", cors(), controller.updateMaravilhosa)

//delete /maravilhosas/id
router.delete("/maravilhosas/:id", cors(), controller.deleteMaravilhosa)

module.exports = router