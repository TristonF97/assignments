const express = require('express');
const tvshowRouter = express.Router();
const { v4: uuid } = require("uuid");

const tvShows = [
    {title: "Rick and Morty", _id: uuid()},
    {title: "star wars the clone wars", _id: uuid()},
    {title: "batman the animated series",_id: uuid()},
    {title: "scooby doo", _id: uuid()}
];

tvshowRouter.get("/", (req, res) => {
    res.send(tvShows)
});

// Get One
tvshowRouter.get("/:tvshowId", (req, res) => {
    const tvShowId = req.params.tvshowId
    const foundShow = tvShows.find(show => show._id === tvShowId)
    res.send(foundShow)
})

tvshowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuid()
    tvShows.push(newShow)
    res.send(`Successfully added ${newShow.title} to the database.`)
});

module.exports = tvshowRouter