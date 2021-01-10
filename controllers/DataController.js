const { readData, readDataById, createData } = require('../services/')

const getDataQuery = async (req, res) => {
  const { temperature, humidity, pressure, gas } = req.query
  const data = {
    temperature,
    humidity,
    pressure,
    gas
  }
  try {
    const result = await createData(data)
    res.status(201).send(result)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}

const getData = async (req, res) => {
  if(req.query.id) {
    try {
      const result = await readDataById()
      res.status(200).send(result)
    } catch(e) {
      console.log(e)
      res.sendStatus(500)
    }
  } else {
    try {
      const result = await readData()
      res.status(200).send(result)
    } catch(e) {
      console.log(e)
      res.sendStatus(500)
    }
  }
}

module.exports = {
  getDataQuery,
  getData
}