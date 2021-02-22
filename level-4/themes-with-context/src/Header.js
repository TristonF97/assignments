import React from "react"
import {ThemeConsumer} from "./ThemeProvider"

function Header(props) {
    return (
        <ThemeConsumer>
            {context => (
                <div>
                    <navbar className={`${context.theme}-navbar`}>
                        <a>Home</a>
                        <a>About</a>
                        <a>Contact</a>
                    </navbar>

                    <main className={`${context.theme}-main`}>
                        <h1>Click the button to toggle the {context.theme === "light" ? "Light" : "Dark"} theme!</h1>
                    </main>
                </div>
            )}
        </ThemeConsumer>
    )    
}

export default Header
