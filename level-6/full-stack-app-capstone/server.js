const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/dnd-app",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connect to the DB")
)

// Routes
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/character', require('./routes/characterRouter.js'))

// Error Handling
app.use((err, req, res, next) => {
	console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
	return res.send({errMsg: err.message})
}) 

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})