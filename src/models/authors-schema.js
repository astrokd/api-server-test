const mongoose = require('mongoose');

const authorsSchema = mongoose.Schema({
    name: { type: String, required: true },
    handle: { type: String }
})

module.exports = mongoose.model('authors', authorsSchema);