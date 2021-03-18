const express = require("express")
const app = express()

// Middleware (for every request) //
app.use(express.json()) // Looks for a request body, and turns it into 'req.body'

app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    next()
})

app.use("/items", (req, res, next) => {
    req.body = { name: "Rick" }
})

app.get("/items", (req, res, next) => {
    console.log("GET REQUEST RECIEVED")
    res.send(req.body)
})

// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))

// Server Listen //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})