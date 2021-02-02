import React from "react"
import "./App.css"
import Square from "./Square";

class Squares extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: ["white", "white", "white", "white"]
        }

        this.smallTime = this.smallTime.bind(this);
        this.party = this.party.bind(this);
        this.proOne = this.proOne.bind(this);
        this.proTwo = this.proTwo.bind(this);
        this.bigTime1 = this.bigTime1.bind(this);
        this.bigTime2 = this.bigTime2.bind(this);
        this.bigTime3 = this.bigTime3.bind(this);
        this.bigTime4 = this.bigTime4.bind(this);
        this.music = this.music.bind(this);
    }

    smallTime() {
        if (this.state.squares[0] === "white") {
            this.setState({ squares: ["black", "black", "black", "black"] });
        } else {
            this.setState({ squares: ["white", "white", "white", "white"] });
        }
    }

    party() {
        let items = [...this.state.squares];
        items[0] = items[1] = "purple";
        this.setState({ squares: items });
    }

    proOne() {
        let items = [...this.state.squares];
        items[2] = "blue"; 
        this.setState({ squares: items });
    }

    proTwo() {
        let items = [...this.state.squares];
        items[3] = "blue"; 
        this.setState({ squares: items });
    }

    bigTime1() {
        let items = [...this.state.squares];
        items[1] = "red"
        items[2] = "red"; 
        this.setState({ squares: items });
    }

    bigTime2() {
        let items = [...this.state.squares];
        items[0] = "green"; 
        items[3] = "green"; 
        this.setState({ squares: items });
    }

    bigTime3() {
        let items = [...this.state.squares];
        items[0] = "dodgerblue"; 
        items[1] = "dodgerblue"; 
        this.setState({ squares: items });
    }

    bigTime4() {
        let items = [...this.state.squares];
        items[2] = "yellow"; 
        items[3] = "yellow"; 
        this.setState({ squares: items });
    }

    music() {
        new Audio("https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/SAMPLED%20MUSIC%20LOOPS/1724[kb]096_mellow-melodic-techno.wav.mp3").play();
    }

    render() {
        const squares = this.state.squares.map(square => {
            return <Square color={square} />
        })

        return (
           <div>
                {squares}
                <div className="buttons">
                    <button onClick={this.smallTime}>Small Time DJ</button>
                    <button onClick={this.party}> Party DJ</button>
                    <button onClick={this.proOne}>Pro DJ Left</button>
                    <button onClick={this.proTwo}>Pro DJ Right</button>
                    <button onClick={this.bigTime1}>Big Time DJ One</button>
                    <button onClick={this.bigTime2}>Big Time DJ Two</button>
                    <button onClick={this.bigTime3}>Big Time DJ Three</button>
                    <button onClick={this.bigTime4}>Big Time DJ Four</button>
                    <button onClick={this.music} className="musicBtn">Music!</button>
                </div>
           </div>
        )
    }
}

export default Squares