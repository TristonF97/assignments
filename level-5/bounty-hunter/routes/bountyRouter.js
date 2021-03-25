const express = require('express')
const bountyRouter = express.Router()
const Bounty = require("../models/data.js")

bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete(
        {_id: req.params.bountyId},
        (err, deletedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully removed ${deletedBounty.firstName} ${deletedBounty.lastName} from the list.`)
        })
})

bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

module.exports = bountyRouter