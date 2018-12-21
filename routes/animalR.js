// **Animals**
//  - GET `/animals`: Get all animals.
//  - GET `/animals/:id`: Get single animal.
//  - POST `/animals`: Add new animal.
//  - PATCH `/animals/:id`: Update single animal.
//  - DELETE `/animals/:id`: Delete single animal.

const express = require("express");
const router = express.Router();
const db = require("../db/queries/animalQs.js");




router.get("/", db.getAllAnimals);

router.get("/:id",db.getSingleAnimal );
// //
router.post("/",db.addAnimal);
// //
router.patch("/:id",db.updateAnimal)
// //
router.delete("/:id",db.deleteAnimal );










module.exports = router;
