const request=require('request')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port =8004;
const usersRoute = require('./workers.routes')
const roomsRoute = require('./rooms.routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api/users',usersRoute);
app.use('/api/rooms',roomsRoute);


app.listen(port,()=>{
    console.log(`application start at ${port}`)
})