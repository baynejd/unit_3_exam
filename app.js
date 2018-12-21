
const express = require("express");
const app = express();
const port = 3000;
const bp = require("body-parser");

const researchers = require("./routes/researcherR.js");
const species  = require("./routes/speciesR.js");
const animals = require("./routes/animalR.js");
const habitats = require("./routes/habitatR.js");
const taggings = require("./routes/tagR.js");
const sightings = require("./routes/sightingR.js");


app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use("/researchers", researchers);
app.use("/species", species);
app.use("/animals", animals);
app.use("/habitats", habitats);
app.use("/taggings", taggings);
app.use("/sightings", sightings);


app.get('/', (req,res)=>{
  res.send("This is the Homepage")
})

app.get("*", (req, res) => {
  res.send("ERROR");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
