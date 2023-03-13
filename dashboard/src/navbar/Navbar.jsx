import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div class="bg-[#8D99AE]   h-20  ">
            <div class="top-5 text-[#EDF2F4]  text-2xl justify-end flex right-20 space-x-5 relative">

                <span>Home</span>
                <span>Properties</span>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>


            </div>
        </div>
    )
}

export default Navbar