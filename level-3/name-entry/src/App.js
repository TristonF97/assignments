import { render } from "@testing-library/react"
import React from "react"
import "./App.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            li: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({ name: event.target.value })
    }

    handleClick() {
        this.setState({
            li: [
                ...this.state.li,
                this.state.name
            ]
        })
    }

    render() {
        const list = this.state.li;
        return (
            <div className="form">
                <form>

                <input type="text" placeholder="Name" onChange={this.handleChange}/>

                </form>

                <h1>Name: {this.state.name}</h1>

                <button onClick={this.handleClick}>Add Name</button>

                <ol>
                    {list.map(e => (
                        <li>{e}</li>
                    ))}
                </ol>
                
            </div>
        )
    }

}

export default App