const { Router } = require('express')
const { getDataQuery } = require('../controllers/DataController')
const axios = require('axios')

const router = Router()

router.get('/', async (req, res) => {
  const response = await axios.get('http://localhost:3000/get')
  console.log(response)
  res.status(200).send('ok')
})

router.get('/get', getDataQuery)
//Router.get('/post', getData)

module.exports = router