const Gallery = require("./Gallery");
const Photo = require("./Photo");

Gallery.hasMany(Photo, {
  foreignKey: "gallery_id",
});

Photo.belongsTo(Gallery, {
  foreignKey: "gallery_id",
});

module.exports = { Gallery, Photo };
