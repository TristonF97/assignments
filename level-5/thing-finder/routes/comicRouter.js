const express = require("express")
const comicRouter = express.Router()
const {v4: uuid} = require("uuid")

const comics = [
    {
        hero: "Batman",
        brand: "DC",
        _id: uuid()
    },
    {
        hero: "The Flash",
        brand: "DC",
        _id: uuid()
    },
    {
        hero: "Spider-Man",
        brand: "Marvel",
        _id: uuid()
    },
    {
        hero: "Iron Man",
        brand: "Marvel",
        _id: uuid()
    },
    {
        hero: "Wonder Woman",
        brand: "DC",
        _id: uuid()
    },
    {
        hero: "Wolverine",
        brand: "Marvel",
        _id: uuid()
    }
]

comicRouter.get("/", (req, res) => {
    res.send(comics)
})

comicRouter.get("/search/brand", (req, res) => {
    const brand = req.query.brand
    const filteredComics = comics.filter(comic => comic.brand === brand)
    res.send(filteredComics)
})

module.exports = comicRouter