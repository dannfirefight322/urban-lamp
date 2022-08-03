const router = require("express").Router();
const sequelize = require("../config/connection");
const { Gallery, Photo } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Photo,
          attributes: ["filename"],
        },
      ],
    });

    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );

    res.render("homepage", {
      galleries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/photo/:id", async (req, res) => {
  try {
    const dbPhotoData = await Photo.findByPk(req.params.id);

    const photo = dbPhotoData.get({ plain: true });

    res.render("painting", { photo });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;