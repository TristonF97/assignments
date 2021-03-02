import React from "react"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import {Link, Switch, Route} from "react-router-dom"
import "./App.css"

function App() {
    return(
        <div>
            <nav className="navbar">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </nav>

            <main className="main">
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>

                    <Route exact path="/about">
                        <About />
                    </Route>

                    <Route exact path="/services">
                        <Services />
                    </Route>
                </Switch>
            </main>

            <footer className="footer">
                <p>This is the footer for this plumbing website!</p>
            </footer>
        </div>
    )
}

export default App