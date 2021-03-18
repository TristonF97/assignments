const express = require('express')

module.exports = {
    addProp: (req, res, next) => {
        console.log(req.book)
        req.book = {title: 'The Lightning Thief', genre: 'fantasy'}
        console.log(req.book)
        next()
    }
}