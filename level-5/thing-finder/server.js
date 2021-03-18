const express = require("express")
const app = express()

app.use(express.json())

app.use("/comics", require("./routes/comicRouter"))

app.listen(9000, () => {
    console.log("Server is running")
})