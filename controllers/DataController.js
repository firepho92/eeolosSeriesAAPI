const getDataQuery = async (req, res) => {
  console.log(req.query)
  res.status(200).send(req.query)
}

module.exports = {
  getDataQuery
}