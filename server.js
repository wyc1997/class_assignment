const express = require('express')
const bodyParser = require('body-parser')
const engines = require('consolidate')

let app = express()
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')
app.use(bodyParser.json())
app.use('/views', express.static(__dirname + '/views'))

app.get('/', (req, res)=>{
    res.render('index.html')
})
app.listen(3000)