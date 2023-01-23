import MainContext from "./MainContext";
import React, { useState } from 'react'
const MainState = (props) => {
    //create a function 
    const state = {
        "name": "sup",
        "place": "Ktm"
    }
    //create useState to update the method
    const [first, setfirst] = useState(state)
    const update = () => {
        setTimeout(() => {
            setfirst({
                "name": "Max",
                "place": "spain"
            })
        }, 2000)

    }
    return (
        //pass the info inside value
        //whenever you wrap anything inside the context, all the children will come between 
        //them automatically
        <MainContext.Provider value={{ first, update }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainState