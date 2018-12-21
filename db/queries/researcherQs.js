const db = require("./connection.js");



const getAllResearchers = (req,res,next) =>{
  db.any('SELECT * FROM researchers')
    .then(researchers=>{
      res.status(200)
         .json({
           status: "success",
           message: "got all researchers",
           researchers: researchers
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

const getSingleResearcher = (req,res,next) =>{
  const myId = Number(req.params.id);
  db.one("SELECT * FROM researchers WHERE id=${id}",{id:myId})
    .then(researcher=>{
      res.status(200)
          .json({
            status:"success",
            message:"got single researcher",
            researcher: researcher
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

const addResearcher = (req,res,next) =>{
  const researcher = req.body;
  db.none("INSERT INTO researchers(name, job_title) VALUES (${name}, ${job_title})", researcher)
    .then(()=>{
      res.status(200)
          .json({
            status: "success",
            message: "added a user"
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

const updateResearcher = (req,res,next) =>{
  // const myId = Number(req.params.id);
  // const myName = req.body.name;
  // const myJob = req.body.job_title
  db.none("UPDATE researchers SET name=${name}, job_title=${job_title} WHERE id=${id}",{ name:req.body.name, job_title:req.body.job_title, id:Number(req.params.id) } )
    .then(()=>{
      res.status(200)
          .json({
            status: "success",
            message: "updated user"
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

const deleteResearcher = (req,res,next) =>{
  const myId = Number(req.params.id);
  db.none("DELETE FROM researchers WHERE id=${id}", {id:myId})
    .then(()=>{
      res.status(200)
          .json({
            status: "success",
            message: "researcher, pink-slipped"
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
getAllResearchers,
getSingleResearcher,
addResearcher,
updateResearcher,
deleteResearcher
}
