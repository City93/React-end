const mongoose = require('mongoose')

const objectSchema = {
    _id: {
        type: mongoose.Schema.ObjectId,
        select: false
        },
    id: {type: String},
    page: {type: String},
    text: {type: String},
    img: {type: String},
    options: {type: String},
    function: {type: String},
    move: {type: String}
};

const cardInfoSchema = mongoose.Schema(objectSchema)

const CardInfo = mongoose.model('Cardinfo', cardInfoSchema)

module.exports = CardInfo