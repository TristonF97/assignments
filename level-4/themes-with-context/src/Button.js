import React from "react"
import {ThemeConsumer} from "./ThemeProvider"

function Button(props) {
    return (
        <ThemeConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-button`}>Toggle Theme</button>
            )}
        </ThemeConsumer>
    )
}

export default Button