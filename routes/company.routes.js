const express = require("express")
const router = express.Router()

const companyControllers = require("../controllers/company.controllers")

router.get("/new", companyControllers.createCompanies)



module.exports = router