const express=require('express')
const bodyParser = require('body-parser')
const app = express()
const port =8007;

const produstsRoute = require('./src/routes/products.routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/',produstsRoute);

app.listen(port,()=>{
    console.log('application start at'+port)
})