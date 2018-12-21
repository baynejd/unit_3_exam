const express = require("express");
const router = express.Router();
const db = require("../db/queries/sightingQs.js");




router.get("/", db.getAllSightings);

router.get("/species/:id", db.getSpeciesSightings );
// //
router.get("/researchers/:id", db.getSightingsByResearcher);
// //
router.get("/habitats/:id", db.getSightingsByHabitat)
// //
router.post("/", db.addSighting);
//
router.delete("/:id", db.deleteSighting)








module.exports = router;
