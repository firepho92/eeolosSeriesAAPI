const mongoose = require('mongoose')
const dataSchema = require('../models/Data')
const DataModel = mongoose.model('Data')

const readData = async () => {
	try {
		return await DataModel.find({})
	} catch(e) {
		throw e
	}
}

const readDataById = async (id) => {
	try {
		return await DataModel.findById(id)
	} catch(e) {
		throw e
	}
}

const createData = async (data) => {
	try {
		const newData = new DataModel(data)
		return await newData.save()
	} catch(e) {
		throw e
	}
}

module.exports = {
	readData,
	readDataById,
	createData
}