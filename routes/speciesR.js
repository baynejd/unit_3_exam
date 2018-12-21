// - **Species**
//   - GET `/species`: Get all species.
//   - GET `/species/:id`: Get single species.
//   - POST `/species`: Add new species.


const express = require("express");
const router = express.Router();
const db = require("../db/queries/speciesQs.js");




router.get("/", db.getAllSpecies);

router.get("/:id", db.getSingleSpecies);

router.post("/", db.addNewSpecies);











module.exports = router;
