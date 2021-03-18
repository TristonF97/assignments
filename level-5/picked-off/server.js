const express = require('express')
const app = express()
const middleware = require('./middleware')

app.use(middleware.addProp)

app.get('/', (req, res) => {
    res.send({title: 'The Lightning Thief', genre: 'fantasy'})
})

app.listen(9000, () => {
    console.log("The server is running")
})