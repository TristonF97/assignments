import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: ""
        }
    }

    componentDidMount() {
        fetch(`http://www.colr.org/json/color/random?
        timestamp=${new Date().getTime()}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.new_color)
            this.setState ({
                color: data
            })
        })
    }

    render() {
        return (
            <div style={{
                    width: 400,
                    height: 400,
                    border: "2px solid black",
                    borderRadius: 10,
                    backgroundColor: `#${this.state.color.new_color}`,
                }}>
            </div>
        )
    }
}

export default App