const Company = require("../models/company.model")
const Usuario = require("../models/usuario.model")





exports.createUsuario = (req, res) => {
    const newUser = new Usuario()
    res.status(200)
    res.json(newUser)
}

exports.createUsuarioAndCompany = (req, res) => {
    const response = {
        usuario: new Usuario(),
        empresa: new Company()
    }
    res.status(200)
    res.json(response)
}