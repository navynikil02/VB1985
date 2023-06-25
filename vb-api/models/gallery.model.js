const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({

    gallery_name: String,
    image: String

});

const galleryModel = mongoose.model('Gallery', gallerySchema);

module.exports = galleryModel;