import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
    })

    const [loggedInUser, setLoggedInUser] = useState(null);

    const navigate = useNavigate();

    const getdata = (e) => {
        const { value, name } = e.target
        setInputValue(() => {
            return {
                ...inputValue, [name]: value
            }
        })
    }

    const getuserArr = JSON.parse(localStorage.getItem("user"));

    const checkIfUserMatch = (email, password) => {
        const user = getuserArr.find(user => user.email === email && user.password === password);
        return user ? user : null;
    };


    const submit = (e) => {
        e.preventDefault();
        const { email, password } = inputValue

        if (email === "") {
            alert("email is required")
        } else if (!email.includes('@')) {
            alert("please enter valid email address")
        } else if (password === "") {
            alert("password is required")
        } else if (password.length < 5) {
            alert(" password length must be greater than five")
        } else {
            const user = checkIfUserMatch(email, password);
            if (user) {
                console.log("login successful", user);
                setLoggedInUser(user);
                navigate('/', { state: { user } });
            } else {
                console.log("error sigining in ");
            }
        }
    }

    return (
        <div class=" h-[657px] m-0 justify-center max-w-[1366px] bg-[#8D99AE] flex  ">
            <div>

            </div>
            {/* making design */}
            <div class="w-[400px] h-[640px]   pt-[30px] " >

                <div class="bg-login bg-cover w-[400px] h-[600px]  bg-center  ">
                    <div class="w-[320px] h-[350px] bg-red-500  top-[150px] left-[42px] relative backdrop-blur-sm bg-white/50" >
                        <h1 class="text-xl text-[#555454] text-center align-middle relative top-[100px] ">"We've saved you a seat."</h1>
                        <h1 class="text-5xl text-[#573D1C] text-center align-middle relative font-semibold top-[100px]">Welcome back!</h1>
                        <div class="bg-logo w-[100px] h-[100px] bg-center bg-cover top-[110px] left-[100px] relative  " />
                    </div>

                </div>
            </div>
            {/* making form ui */}

            <div class=" w-[350px] m-0 pt-[30px]">
                <form class=" bg-[#2B2D42] w-[400px] h-[600px] relative  px-8 pt-[150px] inline-block align-middle ">
                    <div class="mb-4">
                        <label class="block text-white text-xl font-bold mb-2" for="email">
                            Email
                        </label>
                        <input onChange={getdata} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" placeholder="email" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-white text-xl font-bold mb-2" for="password">
                            Password
                        </label>
                        <input onChange={getdata} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="******************" />

                    </div>
                    <div class="flex items-center justify-between">
                        <button onClick={submit} class="bg-[#8D99AE] hover:bg-[#5a77a9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <p class=" text-white"  >
                            Don't have account <a class="font-bold cursor-pointer align-baseline text-sm text-[#8D99AE] hover:text-[#5a77a9]"><Link to="/signup">Sign Up</Link></a>
                        </p>
                    </div>
                    <div class="flex items-center justify-between pt-[120px] pl-[250px]">
                        <button class="bg-[#847f8213] mb-[50px] flex hover:bg-[#5a77a9] text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline" type="button">
                            <Link to='/'>Home</Link>
                        </button>
                    </div>

                </form>



            </div>

        </div>





    )
}

export default Login