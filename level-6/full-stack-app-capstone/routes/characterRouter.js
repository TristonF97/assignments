const express = require('express')
const characterRouter = express.Router()
const Character = require('../models/Character.js')

// Get All Characters
characterRouter.get("/", (req, res, next) => {
    Character.find((err, characters) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(characters)
    })
})

// Get character by user id
characterRouter.get("/user", (req, res, next) => {
    Character.find({ user: req.user._id }, (err, characters) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(characters)
    })
})

// Add new character
characterRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newCharacter = new Character(req.body)
    newCharacter.save((err, savedCharacter) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCharacter)
    })
})

// Delete character
characterRouter.delete("/:characterId", (req, res, next) => {
    Character.findOneAndDelete(
        { _id: req.params.characterId, user: req.user._id },
        (err, deletedCharacter) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted isse: ${deletedCharacter.title}`)
        }
    )
})

// Update character
characterRouter.put("/:characterId", (req, res, next) => {
    Character.findOneAndUpdate(
        { _id: req.params.characterId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedCharacter) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedCharacter)
        }
    )
})

module.exports = characterRouter