const express = require("express")
const todoRouter = express.Router()
const {v4: uuid} = require("uuid")

const todos = [
    {
        name: "Car Wash",
        description: "Take the car to a car wash.",
        imageUrl: "https://images.unsplash.com/photo-1565689876697-e467b6c54da2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyd2FzaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuid()
    },
    {
        name: "Grocery Shopping",
        description: "Take a trip to the grocery store.",
        imageUrl: "https://images.unsplash.com/photo-1540340061722-9293d5163008?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuid()
    },
    {
        name: "Feed Dog",
        description: "Put food in dog bowl.",
        imageUrl: "https://images.unsplash.com/photo-1596491112146-f442e098810f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nJTIwZm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuid()
    },
    {
        name: "Homework",
        description: "Finish homework before school.",
        imageUrl: "https://images.unsplash.com/photo-1585432959389-67f059cf1e41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXdvcmt8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuid()
    },
]

todoRouter.get("/", (req, res) => {
    res.send(todos)
})

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const oneTodo = todos.find(todo => todo._id === todoId)
    res.send(oneTodo)
})

todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(`Added ${newTodo.name} to your todo list.`)
})

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully removed todo.")
})

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todo.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

module.exports = todoRouter