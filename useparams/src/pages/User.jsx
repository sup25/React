import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    //declare params
    const { fname } = useParams()

    console.log(fname)
    return (
        <div>
            <h1>This is {fname} page</h1>
        </div>

    )
}

export default User