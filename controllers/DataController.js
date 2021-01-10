const getDataQuery = async (req, res) => {
  console.log(req.query)
  res.status(200).send('<!DOCTYPE html>\n' +
  '<html>\n' +
  '<head>\n' +
  '  <meta charset="utf-8" />\n' +
  '  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />\n' +
  '\n' +
  '  <title>vshymanskyy</title>\n' +
  '  \n' +
  '  <link rel="stylesheet" type="text/css" href="crt.css">\n' +
  '</head>\n' +
  '<body>\n' +
  '\n' +
  '  <div class="text">\n' +
  '    <div class="r">Nothing interesting here<br/>¯\\_(ツ)_/¯</div>\n' +
  '    <div class="g">Nothing interesting here<br/>¯\\_(ツ)_/¯</div>\n' +
  '    <div class="b">Nothing interesting here<br/>¯\\_(ツ)_/¯</div>\n' +
  '  </div>\n' +
  '\n' +
  '</body>\n' +
  '</html>\n')
}

module.exports = {
  getDataQuery
}