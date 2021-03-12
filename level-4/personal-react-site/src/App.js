import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import "./styles.css"
import Home from "./components/Home"
import Spell from "./components/Spell"
import Contact from "./components/Contact"

function App() {
    return (
        <div>
            <div className="title">
                <h1 className="website-title">5E Spell Book</h1>

                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/spells">Spells</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/spells">
                    <Spell />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>

        </div>
    )
}

export default App