import React from "react"

function Contact() {
    return (
        <div>
            <h1 className="contact-page-title">Contact Us!</h1>

            <h2 className="contact-summary">
                Want to tell us your thoughts? Curious about joining the team?
                Fill out the form below and we'll get back to you as soon
                as we can!
            </h2>

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