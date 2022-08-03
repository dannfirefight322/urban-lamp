const { Photo } = require('../models');

const photodata = [
    {
        title:'test title'
    }
];

const seedPhotos = () => Photo.bulkCreate(photodata);

module.exports = seedPhotos;