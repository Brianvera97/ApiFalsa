const {faker} = require("@faker-js/faker")


class Company {
    constructor() {
        this._id = faker.database.mongodbObjectId(),
            this.nombre = faker.company.name(),
            this.direccion = {
                calle: faker.location.street(),
                ciudad: faker.location.city(),
                estado: faker.location.state(),
                codigoPostal: faker.location.zipCode(),
                pais: faker.location.country()
            }

    }
}

module.exports= Company
