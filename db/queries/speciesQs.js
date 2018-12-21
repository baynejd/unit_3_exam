const db = require("./connection.js");


const getAllSpecies = (req,res,next) => {
  db.any("SELECT * FROM species")
    .then(species=>{
      res.status(200)
          .json({
            status:"success",
            message: "got all species",
            species: species
          })
    })
    .catch(err => {
      res.status(400)
          .json({
            status: "failed",
            message: "Bad Request"
          })
          next(err);
    })
};

const getSingleSpecies = (req,res,next) => {
  db.one("SELECT * FROM species WHERE id=${id}", {id: Number(req.params.id)})
    .then(species=>{
      res.status(200)
          .json({
            status: "success",
            message: "got one species",
            species: species
          })
    })
    .catch(err => {
      res.status(400)
          .json({
            status: "failed",
            message: "Bad Request"
          })
          next(err);
    })
};

const addNewSpecies = (req,res,next) => {
  const species = req.body;
  db.none("INSERT INTO species(name, is_mammal) VALUES (${name}, ${is_mammal})", species)
    .then(()=>{
      res.status(200)
          .json({
            status:"success",
            message:"added new species"
          })
    })
    .catch(err => {
      res.status(400)
          .json({
            status: "failed",
            message: "Bad Request"
          })
          next(err);
    })
};



module.exports = {
getAllSpecies,
getSingleSpecies,
addNewSpecies
};
