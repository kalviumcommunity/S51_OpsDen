const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { startDatabase, isConnected } = require('./db/database');
const {getRouter, postRouter, deleteRouter, putRouter,feedbackRouter} = require('./routes/opsden.route')
const {newsGetRouter} = require('./routes/News.route')
const app = express()
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use(getRouter)
app.use(postRouter)
app.use(deleteRouter)
app.use(putRouter)
app.use(feedbackRouter)
app.use(newsGetRouter)
app.get('/', (req, res) => {
  res.send({message:'Welcome to the amazing world of Tech'})
})
app.get('/home', (req, res) => {
  res.json({
    message: isConnected() ? 'Database is connected' : 'Disconnected from database'
  })
  })
app.get('/ping',(req,res)=>{
    res.send({message:'pong!, Welcome to the amazing world of Tech'})
})

startDatabase()

.then(()=>{
  app.listen(3000,async()=>{
    console.log('Starting Server ....🚀')
    console.log('Server started running on port 3000 🏃‍♂️')
})
})