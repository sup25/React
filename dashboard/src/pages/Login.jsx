import React from 'react'

const Login = () => {
    return (
        <div class="w-[85.375rem] h-[49rem] m-0 bg-[#8D99AE] flex justify-center ">

            {/* making design */}
            <div class="w-[30rem] h-[40rem]  relative top-[5rem] bg-red-500   " >

                <div class="bg-login bg-cover w-[480px] h-[640px]  bg-center  ">
                    <div class="w-[350px] h-[400px] bg-red-500  top-[150px] left-[65px] relative backdrop-blur-sm bg-white/50" >
                        <h1 class="text-xl text-[#555454] text-center align-middle relative top-[150px] ">"We've saved you a seat."</h1>
                        <h1 class="text-5xl text-[#573D1C] text-center align-middle relative font-semibold top-[150px]">Welcome back!</h1>
                        <div class="bg-logo w-[100px] h-[100px] bg-center bg-cover top-[190px] left-[120px] relative  " />
                    </div>

                </div>
            </div>
            {/* making form ui */}

            <div class="w-full max-w-xs">
                <form class=" bg-[#2B2D42] w-[30rem] h-[40rem] relative top-[5rem]  px-8 pt-[200px] inline-block align-middle ">
                    <div class="mb-4">
                        <label class="block text-white text-xl font-bold mb-2" for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-white text-xl font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-[#8D99AE] hover:bg-[#5a77a9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <p class=" text-white"  >
                            Don't have account <a class="font-bold cursor-pointer align-baseline text-sm text-[#8D99AE] hover:text-[#5a77a9]">Sign Up</a>
                        </p>
                    </div>
                </form>

            </div>

        </div>





    )
}

export default Login