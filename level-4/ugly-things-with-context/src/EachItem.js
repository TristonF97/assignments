import React from "react"
import UglyContextConsumer from "./UglyContext"

function EachItem() {
    return (
        <UglyContextConsumer>
            {({uglythings}) => {
                <img src={uglythings.imgUrl} alt="Error" />
            }}
        </UglyContextConsumer>
    )
}

export default EachItem

// import React from "react"
// import ConsumerUglyThings from "./UglyThings.js"

// function EachItem(){
//     return (
//         <ConsumerUglyThings>
//             {({uglythings}) => ( 
//                 <img src={uglythings.imgUrl} alt="Error" />
//                 )
//             }   
//         </ConsumerUglyThings>
//     )

// }


// export default EachItem 