import React from "react"
import Header from "./Header"
import BlogList from "./BlogList"
import Footer from "./Footer"

function App() {
    return (
        <div>
            <Header />
                
            <BlogList />
            <hr className="btnDivider"></hr>
            <Footer />
        </div>
    )
}

export default App