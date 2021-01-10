const { Router } = require('express')
const { getDataQuery } = require('../controllers/DataController')

const router = Router()

router.get('/', async (req, res) => {
  res.status(200).send('ok')
})

router.get('/get', getDataQuery)
//Router.get('/post', getData)

module.exports = router