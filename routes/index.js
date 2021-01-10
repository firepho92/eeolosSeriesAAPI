const { Router } = require('express')
const { getDataQuery, getData } = require('../controllers/DataController')

const router = Router()

router.get('/', async (req, res) => {
  res.status(200).send('ok')
})

router.get('/get', getDataQuery)

router.get('/getData', getData)

module.exports = router