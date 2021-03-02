import React from "react"
import ReactDOM from "react-dom"

import App from "./context/App"
import {UglyContextProvider} from "./context/UglyContext"

ReactDOM.render(
    <UglyContextProvider>
        <App />
    </UglyContextProvider>,
    document.getElementById("root")
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {UglyThingsProvider} from "./UglyThings.js"
// import App from "./App"

// ReactDOM.render(
// <UglyThingsProvider>
//   <App />
//  </UglyThingsProvider>
//   , document.getElementById('root')
// )    