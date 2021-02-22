import React from "react"
import {ThemeConsumer} from "./ThemeProvider"

function Footer(props) {
    return (
        <ThemeConsumer>
            {context => (
                    <footer className={`${context.theme}-footer`}>
                        <p>This is the footer</p>
                    </footer>
            )}
        </ThemeConsumer>
    )    
}

export default Footer