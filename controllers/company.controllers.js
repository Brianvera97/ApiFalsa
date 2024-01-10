const Company = require("../models/company.model")






exports.createCompanies = (req, res) => {
    const newCompany = new Company()
    res.status(200)
    res.json(newCompany)
}