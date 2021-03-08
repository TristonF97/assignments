import React, {Component} from "react"
import {UglyContextConsumer} from "./UglyContext"

class Form extends Component {
    state = {
        title: "",
        imgUrl: "",
        description: ""
    }

    handleChange = (e) => {
        const{name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <UglyContextConsumer>
                {(context)=> (
                    <div className="header-form">
                    <h1 className="header">Ugly Things</h1>
                    <form>
                        <input
                            className="input"
                            placeholder="Title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    
                        <input
                            className="input"
                            placeholder="Img URL"
                            name="imgUrl"
                            value={this.state.imgUrl}
                            onChange={this.handleChange}
                        />
                    
                        <input
                            className="input"
                            placeholder="Description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    
                        <br/>
                    
                        <button onClick={(e) => {
                            e.preventDefault()
                            context.handleSubmit(this.state)}}
                            className="submit-button">
                            Submit
                        </button>
                    </form>
                </div>
                )}
            </UglyContextConsumer>
        )
    }
}

export default Form