const model = require("../models/maravilhosas-models")

const getMaravilhosas = (request, response) => {
    response.status(200).json(model.selectAllData())
}

const getMaravilhosaById = (request, response) => {
    const { id } = request.params;
    response.status(200).json(model.selectDataById(id))
}

const addMaravilhosa = (request, response) => {
    const novaMaravilhosa = request.body;
    response.status(200).json(model.insertData(novaMaravilhosa))
}

const updateMaravilhosa = (request, response) => {
    const { id } = request.params;
    const { subtitle } = request.body;
    response.status(200).json(model.updateData(id, subtitle))
}

const deleteMaravilhosa = (request, response) => {
    const { id } = request.params;
    response.status(200).json(model.deleteData(id))
}

module.exports = {
    getMaravilhosas,
    getMaravilhosaById,
    addMaravilhosa,
    updateMaravilhosa,
    deleteMaravilhosa
}