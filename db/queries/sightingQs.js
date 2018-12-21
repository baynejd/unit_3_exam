const db = require("./connection.js");



const getAllSightings = (req,res,next) =>{
  db.any('SELECT * FROM sightings')
    .then(sightings=>{
      res.status(200)
          .json({
            status: "success",
            message: "all sightings",
            sightings: sightings
          })
    })
    .catch(err=>{
      res.status(400)
        .json({
          status: "failure",
          message:"Bad Request"

        })
        next(err);
    })
};


const getSpeciesSightings = (req,res,next) => {

  db.any('SELECT * FROM sightings WHERE species_id=${id}', {id: Number(req.params.id) })
    .then(speciesSighting =>{
      res.status(200)
          .json({
            status: "success",
            message: "all tags by this researcher",
            sighting: speciesSighting
          })
    })
    .catch(err =>{
      res.status(400)
          .json({
            status: "failure",
            message: "Bad Request"
          });
          next(err);
    })

};

const getSightingsByResearcher = (req,res,next) => {

  db.any('SELECT * FROM sightings WHERE researcher_id=${id}', {id: Number(req.params.id) })
    .then(researcherLog =>{
      res.status(200)
          .json({
            status: "success",
            message: "all sightings by this researcher",
            sighting: researcherLog
          })
    })
    .catch(err =>{
      res.status(400)
          .json({
            status: "failure",
            message: "Bad Request"
          });
          next(err);
    })

};

const getSightingsByHabitat = (req,res,next) => {

  db.any('SELECT * FROM sightings WHERE habitat_id=${id}', {id: Number(req.params.id) })
    .then(sightingsByHabitat =>{
      res.status(200)
          .json({
            status: "success",
            message: "all sightings in this habitat",
            sighting: sightingsByHabitat
          })
    })
    .catch(err =>{
      res.status(400)
          .json({
            status: "failure",
            message: "Bad Request"
          });
          next(err);
    })

};


const addSighting = (req, res, next) => {
db.none('INSERT INTO sightings(researcher_id, species_id, habitat_id) VALUES (${researcher_id}, ${species_id}, ${habitat_id})', { researcher_id: Number(req.body.researcher_id), species_id: Number(req.body.species_id), habitat_id: Number(req.body.habitat_id)})
.then(()=>{
  res.status(200)
      .json({
        status: "success",
        message: "added sighting"

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


const deleteSighting = (req,res,next) =>{
  const sightId = Number(req.params.id);
  db.none("DELETE FROM sightings WHERE id=${id}", {id:sightId})
    .then(()=>{
      res.status(200)
          .json({
            status: "success",
            message: "successfully removed"
          })
    })
    .catch(err=>{
      res.status(400)
          .json({
            status: "failure",
            message: "could not remove"
          })
        next();
    })
};


module.exports = {
getAllSightings,
getSpeciesSightings,
getSightingsByResearcher,
getSightingsByHabitat,
addSighting,
deleteSighting
};
