import React from "react"
import {UglyContextConsumer} from "./UglyContext"

class EditForm extends React.Component {
    state = {
        title: "",
        description: ""
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        const newObject = {
            title: this.state.title,
            description: this.state.description 
        }
        return (
            <UglyContextConsumer>
                {(context)=>(
                <form>
                    <input 
                        name="title"
                        className="edit-input"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input 
                        name="description"
                        className="edit-input"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />

                    <br />

                    <button
                        className="edit-delete"
                        onClick={(e)=>{
                        e.preventDefault()
                        context.handleEdit(this.props.uglyThing, newObject)    
                        }}
                        > Edit
                    </button>
                </form>
                )}
            </UglyContextConsumer>
        )
    }
}

export default EditForm