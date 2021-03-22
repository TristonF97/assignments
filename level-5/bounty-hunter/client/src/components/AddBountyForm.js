import React, { useState } from "react"

export default function AddBountyForm(props) {
    const initialInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "",
        alive: props.alive || true,
        type: props.type || "",
        amount: props.amount || ""
    }
    const [ inputs, setInputs ] = useState(initialInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initialInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />

            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />

            <input
                type="radio"
                name="alive"
                value={inputs.alive}
                onChange={handleChange}
            />
            <label for="alive">Alive</label>

            <input
                type="radio"
                name="alive"
                value={inputs.alive}
                onChange={handleChange}
            />
            <label for="alive">Terminated</label>

            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Alignment"
            />

            <input
                type="number"
                name="amount"
                value={inputs.amount}
                onChange={handleChange}
                placeholder="Reward"
            />

            <br/>

            <button>{ props.btnText }</button>
        </form>
    )
}