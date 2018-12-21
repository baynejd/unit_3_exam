const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/marine_bio");




module.exports = db ;
