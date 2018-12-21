const db = require("./connection.js");



const getAllHabitats = (req,res,next) =>{
  db.any("SELECT * FROM habitats")
    .then(habitats=>{
      res.status(200)
          .json({
            status:"success",
            message: "got all habitats",
            habitats: habitats
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

const getOneHabitat = (req,res,next) =>{
  db.one("SELECT * FROM habitats WHERE id=${id}", {
    id:Number(req.params.id)
  })
    .then(habitat=>{
      res.status(200)
          .json({
            status: "success",
            message:"got one habitat",
            habitat: habitat
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

const addHabitat = (req,res,next) =>{
  db.none("INSERT INTO habitats(category) VALUES(${category})", {category: req.body.category})
    .then(()=>{
      res.status(200)
          .json({
            status: "success",
            message: "habitat added"
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
getAllHabitats,
getOneHabitat,
addHabitat
};
