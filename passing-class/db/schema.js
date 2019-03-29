const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const TipsSchema = new Schema({
    title: {
        type: String,
        default: 'New Title'
    },
    description: {
        type: String,
        default: 'New Description'
    },
    created: {
        type: Date,
        default: new Date()
    }
})



module.exports = mongoose.model('Tips',TipsSchema)
