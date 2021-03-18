const express = require('express')
const bountyRouter = express.Router()
const {v4: uuid} = require('uuid')

const bounties = [
    {
        firstName: "Darth",
        lastName: "Bane",
        alive: true,
        amount: 150000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Bastila",
        lastName: "Shan",
        alive: true,
        amount: 17500,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Jolee",
        lastName: "Bindo",
        alive: true,
        amount: 6500,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Visas",
        lastName: "Marr",
        alive: false,
        amount: 5000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Malak",
        alive: true,
        amount: 115000,
        type: "Sith",
        _id: uuid()
    },
]

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(`successfully added ${newBounty.firstName} ${newBounty.lastName} to bounty list.`)
})

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully removed bounty.")
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

module.exports = bountyRouter