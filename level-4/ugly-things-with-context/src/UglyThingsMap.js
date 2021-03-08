import React from "react"
import {UglyContextConsumer} from "./UglyContext"
import EditForm from "./EditForm"

function UglyThingsMap() {
    return (
        <UglyContextConsumer>
            {({uglythings, handleDelete, handleEdit}) => {
                const uglyThingsList = uglythings.map(uglything => {
                    return (
                        <div>
                            <h3 className="img-title">{uglything.title}</h3>

                            <p className="img-description">{uglything.description}</p>

                            <img src={`${uglything.imgUrl}`} alt="Error" className="image" />

                            <EditForm
                                uglyThing = {uglything}
                            />
                            <button
                                className="edit-delete"
                                onClick ={() => handleDelete(uglything._id)}>
                                Delete
                            </button>

                            <hr />
                        </div>
                    )
                })

                return uglyThingsList
             }}
        </UglyContextConsumer>
    )
}

export default UglyThingsMap