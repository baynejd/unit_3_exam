const db = require("./connection.js");


const getAllTags = (req, res, next) =>{
db.any('SELECT * FROM taggings')
  .then(taggings=>{
    res.status(200)
        .json({
          status: "success",
          message: "all tags",
          taggings: taggings
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


const getSingleTag = (req, res, next) =>{
  db.one('SELECT * FROM taggings WHERE id=${id}', {id:req.params.id})
    .then(tag=>{
      res.status(200)
          .json({
            status: "success",
            message: "got single tag",
            tag: tag
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


const getAllTagsByResearcher = (req,res,next) => {

  db.any('SELECT * FROM taggings WHERE researcher_id=${id}', {id: Number(req.params.id) })
    .then(researcherTag =>{
      res.status(200)
          .json({
            status: "success",
            message: "all tags by this researcher",
            tags: researcherTag
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


const getAllAnimalTags = (req,res,next) => {
  db.any('SELECT * FROM taggings WHERE animal_id=${id}', {id: Number(req.params.id)})
    .then(animalTag => {
      res.status(200)
          .json({
            status: "success",
            message: "all tags on this animal",
            tags: animalTag
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
}


const addTagging = (req, res, next) => {
db.none('INSERT INTO taggings(animal_id, researcher_id) VALUES (${animal_id}, ${researcher_id})', {animal_id: Number(req.body.animal_id), researcher_id: Number(req.body.researcher_id)})
.then(()=>{
  res.status(200)
      .json({
        status: "success",
        message: "added tag"

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
  getAllTags,
  getSingleTag,
  getAllTagsByResearcher,
  getAllAnimalTags,
  addTagging
};
