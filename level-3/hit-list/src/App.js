import React from "react"
import "./App.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hitList: []
        }
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                hitList: data
            })
        })
    }
    
    render() {
        return (
            <div>

                <div className="header">
                    <img className="headerImg" src="https://coursework.vschool.io/content/images/size/w2000/2015/05/a9806c34-730a-4f32-94ad-75bbf28c2be9.png" />
                    <h1 className="title">Don Corleone's Hit List</h1>
                </div>

                <div className="grid-container">

                    <div className="picture-grid">
                        {this.state.hitList.map(picture => <img className="photos" src={picture.image}/>)}
                    </div>

                    <div className="name-grid">
                        {this.state.hitList.map(person => <h1 className="names"> {person.name} </h1>)}
                    </div>
                    
                </div>
            
            </div>
        )
    }
}

export default App