
const express = require("express");
const router = express.Router();
const db = require("../db/queries/tagQs.js");




router.get("/", db.getAllTags)

router.get("/:id", db.getSingleTag);
// //
router.get("/researchers/:id", db.getAllTagsByResearcher);
// //
router.get("/animals/:id", db.getAllAnimalTags )
// //
router.post("/", db.addTagging );




// - **Taggings**
// - GET `/taggings`: Get all taggings.
// - GET `/taggings/:id`: Get single tagging.
// - GET `/taggings/researchers/:id`: Get all taggings performed by a specific researcher.
// - GET `/taggings/animals/:id`: Get all taggings performed on a specific animal.
// - POST `/taggings`: Add new tagging.





module.exports = router;
