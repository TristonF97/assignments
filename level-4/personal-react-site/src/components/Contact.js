import React from "react"

function Contact() {
    return (
        <div>
            <h1 className="page-title">Contact Page!</h1>

            <h3 className="contact-summary">
                Want to tell us your thoughts? Curious about joining the team?
                Well fill out the form below and we'll get back to you as soon
                as we can!
            </h3>

            <form className="contact-form">
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Phone Number"></input>

                <textarea
                    className="text-area"
                    placeholder="Tell us what you think!">
                </textarea>

                <button className="contact-button">Submit</button>
            </form>
        </div>
    )
}

export default Contact