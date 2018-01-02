var express = require('express')
var config = require('./config/index')
var axios = require('axios')
var appData = require('./data.json');
var web = appData.web;
var port = process.env.PORT || config.build.port

var app = express()

var apiRoutes = express.Router()

apiRoutes.get('/webs',(req,res)=>{
  res.json({
    code:0,
    data:web
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
