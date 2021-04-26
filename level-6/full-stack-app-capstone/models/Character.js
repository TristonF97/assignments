const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    charclass: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Issue", characterSchema)