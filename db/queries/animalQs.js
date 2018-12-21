const db = require("./connection.js");



const getAllAnimals = (req,res,next) =>{
  db.any("SELECT * FROM animals")
    .then(animals=>{
      res.status(200)
          .json({
            status: "success",
            message: "got all animals",
            animals: animals
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

const getSingleAnimal = (req,res,next) =>{
  db.one("SELECT * FROM animals WHERE id=${id}", {id: req.params.id})
    .then(animal=>{
      res.status(200)
          .json({
            status: "success",
            message: "got single animal",
            animal: animal
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

const addAnimal = (req,res,next) =>{
  db.none("INSERT INTO animals(species_id, nickname) VALUES (${species_id}, ${nickname})", {species_id: Number(req.body.species_id), nickname:req.body.nickname})
    .then(()=>{
      res.status(200)
          .json({
            status: "success",
            message: "added an animal"
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

const updateAnimal = (req,res,next) =>{
  db.none("UPDATE animals SET species_id=${species_id}, nickname=${nickname} WHERE id=${id}",{
    id: Number(req.params.id),
    species_id: Number(req.body.species_id),
    nickname: req.body.nickname
  })
    .then(()=>{
      res.status(200)
          .json({
            status: "success",
            message: "successfully updated animal"
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

const deleteAnimal = (req,res,next) =>{
  db.none("DELETE FROM animals WHERE id=${id}", {id: Number(req.params.id)})
    .then(()=>{
      res.status(200)
          .json({
            status: "success",
            message:"animal removed"
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
getAllAnimals,
getSingleAnimal,
addAnimal,
updateAnimal,
deleteAnimal
};
