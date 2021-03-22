import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm.js"

export default function Bounty(props) {
    const { firstName, lastName, alive, amount, type, _id } = props
    const [editToggle, setEditToggle ] = useState(false)
    return (
        <div className="bounty">
            { !editToggle ?
                <>
                <span className="name">{ firstName }</span>
                <span className="name"> { lastName }</span>
                { alive === true ? <h3>Status: Alive </h3> : <h3>Status: Terminated </h3>}
                <h3 className="alignment">Alignment: { type }</h3>
                <h3 className="reward">Reward: { amount }</h3>
                <button
                className="delete-button"
                onClick={() => props.deleteBounty(_id)}>Delete</button>

                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
                </>
            :
                <>
                <AddBountyForm
                    firstName={firstName}
                    lastName={lastName}
                    alive={alive}
                    type={type}
                    amount={amount}
                    _id={_id}
                    btnText="Submit Edit"
                    submit={props.editBounty}
                />
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                </button>
                </>
            }
        </div>
    )
}