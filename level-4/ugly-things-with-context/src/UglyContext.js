import React, {Component} from "react"
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class UglyContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            uglyThingsList: []
        }
    }

    handleSubmit = (inputs) => {
        axios.post("https://api.vschool.io/tristonfrischknecht/thing", inputs)
        .then(response => {
            this.setState(prevState => {
                return {uglyThingsList: [...prevState.uglyThingsList, response.data]}
            })
        })
        .catch(error => console.log(error))
    }

    handleEdit = (passedThing, newEdit) => {
        axios.put(`https://api.vschool.io/tristonfrischknecht/thing/${passedThing._id}`, newEdit)
        let editArray = this.state.uglyThingsList.map(thing => {
            if(passedThing._id === thing._id) {
                thing.title = newEdit.title
                thing.description = newEdit.description
                return thing
            } else {
                return thing
            }
        })
        this.setState(prevState => ({...prevState, uglyThingsList: editArray}))
    }

    getDataRequest = () => {
        console.log("Hello")
        axios.get("https://api.vschool.io/tristonfrischknecht/thing")
        .then(response => this.state({uglyThingsList: response.data}))
        .catch(error => console.log(error))
    }

    handleDelete = (thingId) => {
        axios.delete(`https://api.vschool.io/tristonfrischknecht/thing/${thingId._id}`)
        let deleteArray =this.state.uglyThingsList.filter(thing => thingId !== thing._id)
        this.setState(prevState => ({...prevState, uglyThingsList: deleteArray }))
    }

    render() {
        return (
            <Provider value={{uglythings: this.state.uglyThingsList,
                handleSubmit: this.handleSubmit,
                getInfo: this.getDataRequest,
                handleEdit: this.handleEdit,
                handleDelete: this.handleDelete
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}