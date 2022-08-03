const sequelize = require("../config/connection");
const seedGallery = require("./galleryData");
const seedPhotos = require("./photoData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPhotos();

  process.exit(0);
};

seedAll();
