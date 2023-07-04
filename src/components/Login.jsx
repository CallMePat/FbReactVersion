import React from 'react';

function Login() {
    return (
        <div className="p-20 flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="content text-4xl text-center md:text-left">
                <h1 className="text-6xl text-blue-500 font-bold">FaceBook</h1>
                <p>Connect with friends and the world around you on Facebook.</p>
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
                    <input
                        className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
                        placeholder="Email or Phone Number" type="text" />
                    <input
                        className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
                        placeholder="Password" type="password" />
                    <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">
                        Login
                    </button>
                    <a href="#" className="text-blue-400 text-center my-2">Forget Password</a>
                    <hr />
                    <button className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">
                        Create New Account
                    </button>
                </form>
                <p className="text-center text-sm my-4">
                    <span className="font-semibold text-center w-full">Create a Page</span> for a celebrity, band or business
                </p>
            </div>
        </div>

    )
}

export default Login;