import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import "./styles.css"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
    return (
        <div>
            <h1 className="website-title">Dungeons & Dragons 5th Edition SRD</h1>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>

        </div>
    )
}

export default App