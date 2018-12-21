// **Habitats**
//  - GET `/habitats`: Get all habitats.
//  - GET `/habitats/:id`: Get single habitat.
//  - POST `/habitats`: Add new habitat.

const express = require("express");
const router = express.Router();
const db = require("../db/queries/habitatQs.js");




router.get("/", db.getAllHabitats);

router.get("/:id", db.getOneHabitat );
// //
router.post("/", db.addHabitat);
//





module.exports = router;
