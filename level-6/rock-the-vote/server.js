const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/moviesdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

// Routes
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))

// Error handling
app.use((err, req, res, next) => {
	console.log(err)
    if(err.name === "UnauthrerizedError") {
        res.status(err.status)
    }  
	return res.send({errMsg: err.message})
}) 

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})