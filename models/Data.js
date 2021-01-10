const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Data = new Schema ({
	temperature: { type: Number, default: 0 },
	humidity: { type: Number, default: 0 },
	pressure: { type: Number, default: 0 },
	gas: { type: Number, default: 0 }
})

module.exports = mongoose.model('Data', Data)