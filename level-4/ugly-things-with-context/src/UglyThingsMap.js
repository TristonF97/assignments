import React from "react"
import {UglyContextConsumer} from "./UglyContext"

function UglyThingsMap() {
    return (
        <UglyContextConsumer>
            {({uglythings}) => {
                console.log(uglythings)
                return (
                    uglythings.map(
                        (uglything) => {
                            <div>
                                <h3>{uglything.title}</h3>

                                <p>{uglything.description}</p>

                                <img src={`${uglything.imgUrl}`} alt="Error" />


                            </div>
                        }
                    )
                ) }}
        </UglyContextConsumer>
    )
}

export default UglyThingsMap


  
// import React from "react"
// import {UglyThingsConsumer} from "./UglyThings.js"

// function MappedUglyThings(){


//     return (
//         <UglyThingsConsumer>
//             {
//             ({uglythings}) => {

//                 console.log(uglythings)

//                 const uglyThingsList = uglythings.map(uglything => { 
//                     return (
//                         <div key={uglything._id}>
//                             <h1>{uglything.title}</h1>
//                             <img src={`${uglything.imgUrl}`} />
//                             <h1>{uglything.description}</h1>
//                             {/* <button onClick ={() =>editButton}>Edit</button> 
//                             <button onClick ={() =>deleteButton}> Delete</button> */}
//                         </div>
//                     )
//                 })
                
//                 return uglyThingsList
//             }}   
//         </UglyThingsConsumer>
//     )
// }
// export default MappedUglyThings