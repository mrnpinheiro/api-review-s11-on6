let maravilhosas = require('../data/data')

const selectAllData = () => {
    return maravilhosas
}

const selectDataById = (id) => {
    const maravilhosa = maravilhosas.find(maravilhosa => maravilhosa.id == id);
    return maravilhosa;
}

const insertData = (novaMaravilhosa) => {
    maravilhosas.push(novaMaravilhosa);
    return maravilhosas;
}

const updateData = (id, subtitle) => {
    const maravilhosa = maravilhosas.find(maravilhosa => maravilhosa.id == id);
    maravilhosa.subtitle = subtitle;
    return maravilhosa;
}

const deleteData = (id) => {
    const maravilhosaFiltrada = maravilhosas.filter(maravilhosa => {
    return maravilhosa.id == id;
    })[0];

    const index = maravilhosas.indexOf(maravilhosaFiltrada);

    maravilhosas.splice(index, 1)

    return maravilhosas;
}

module.exports = {
    selectAllData,
    selectDataById,
    insertData,
    updateData,
    deleteData
}