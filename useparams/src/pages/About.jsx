import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {

    return (
        <div><h1>this is about page</h1>
            <Link to='/user/sup'><h1>sup</h1></Link><br />
            <Link to='/user/gg'><h1>gg</h1></Link>
        </div>
    )
}

export default About