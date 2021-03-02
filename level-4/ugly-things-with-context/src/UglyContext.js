import React, {Component} from "react"
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class UglyContextProvider extends Component {
    constructor() {
        super()
        state = {
            uglyThingsList: []
        }
    }

    submitData = (inputs) => {
        axios.post("https://api.vschool.io/tristonfrischknecht/thing", inputs)
        .then(response => {
            this.setState(prevState => {
                return {uglyThingsList: [...prevState.uglyThingsList, response.data]}
            })
        })
        .catch(error => console.log(error))
    }

    // componentDidMount = () => {
    //     console.log("Its working")
    //     axios.get("https://api.vschool.io/tristonfrischknecht/thing")
    //     .then(response => this.setState({uglyThingsList: response.data}))
    //     .catch(error => console.log(error))
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.setState((prevState) => {
    //         return {uglyThingsList: [...prevState.uglyThingsList]}
    //     })
    // }

    getDataRequest = () => {
        console.log("Hello")
        axios.get("https://api.vschool.io/tristonfrischknecht/thing")
        .then(response => this.state({uglyThingsList: response.data}))
        .catch(error => console.log(error))
    }

    handleEdit = () => {

    }

    handleDelete = (index) => {
        const list = this.state.uglyThingsList
        list.splice(index, 1)
        this.setState({list})
    }

    render() {
        return (
            <Provider value={{uglythings: this.state.uglyThingsList,
                submission: this.submitData,
                getInfo: this.getDataRequest}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}

// import React from "react" 
// import axios from "axios"
// const {Provider, Consumer} = React.createContext()

// class UglyThingsProvider extends React.Component{
//     constructor(){
//         super()
//     this.state={
//          uglyThingsList: []
//     }
//     this.uglyListVariable = "https://api.vschool.io/tristonfrischknecht/thing"
// }
//     submitData=(inputs)=>{
//         axios.post(this.uglyListVariable, inputs)
//         .then(res => {
//             this.setState(prevState =>{
//                 return {
//                     uglyThingsList: [...prevState.uglyThingsList, res.data]
//                 }
//             }
//                 )
//         }
            
//             )
//         .catch(err => console.log(err))
//         }
    
//     getDataRequest =() =>{
//         console.log('hello')
//             axios.get(this.uglyListVariable)
//             .then(res => this.setState({uglythingsList: res.data}))
//             .catch(err => console.log(err))
//         }

//         // editButton = (passedThing, stringOne, stringTwo) => {
//         //     let newArr = this.state.uglyThingsList.map(thing => {
//         //         if(passedThing.id === thing.id){
//         //             // passedThing.topText = stringOne
//         //             // passedThing.bottomText = stringTwo
//         //             return passedThing
//         //         } else{
//         //             return thing //not sure what to return 
//         //         }
//         //     })
//         //     this.setState(prevState => ({...prevState, uglyThingsList: newArr}))

//         // }
//         // deleteButton = (thingId) => {
//         //     let newArray = this.state.uglyThingsList.filter(thing => thingId !== thing.id)
//         //     this.setState(prevState => ({...prevState, uglyThingsList: newArray}))   
//         // }

//     render(){
//         return(
//             <Provider value={{uglythings: this.state.uglyThingsList,
//                 submission: this.submitData,
//                 getInfo: this.getDataRequest
//             }}
//             >
//                 {this.props.children}
//             </Provider>
//         )
//     }
// }

// export {UglyThingsProvider, Consumer as UglyThingsConsumer}