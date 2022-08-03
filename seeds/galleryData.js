const { Gallery } = require("../models");

const gallerydata = [
    {
        name: "Test"
    }
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;