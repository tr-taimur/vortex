
"use client"
import { FcGoogle } from 'react-icons/fc'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
    <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl">
      <div className="w-full md:w-3/5 p-5 my-3 mx-3">
        <div className="text-left font-bold">
          vortex
        </div>
        <div className="py-10">
          <h2 className="text-2xl font-bold">Login to your account</h2>
          <br></br>
          <p className="mb-10">Continue tracking your progress after logging in to your account</p>
          <div className="flex justify-center items-center my-2 border-2 rounded-md">
            <a href="#" className="p-2">
              <FcGoogle className="text-sm"></FcGoogle>
            </a>
            <p className="flex justify-center pt-1 font-bold">Login with Google</p>
          </div>
          <div className="flex justify-between mt-5">
            <h3><span>OR</span></h3>
          </div>
          <div className="p-2 flex items-center mt-3">
            <input type="email" name="email" placeholder="Email address" className="outline-none text-sm flex-1 border-b-2"></input>
          </div>
          <div className="p-2 flex items-center mb-3 mt-3">
            <input type="password" name="password" placeholder="Password" className="outline-none text-sm flex-1 border-b-2"></input>
          </div>
          <div className="flex justify-between mb-5">
            <label className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-1' />Remember me</label>
            <a href='#' className='text-xs text-blue-900'>Forgot Password?</a>
          </div>
          <a
            href='#'
            className="rounded-xl flex justify-center pt-1 text-white bg-blue-900"> Login now</a>
          <div className="flex justify-start w-64 mt-5">
            <label className='flex items-center text-xs'>Don't have an account?</label>
            <a href='#' className="text-xs text-blue-900 ml-1">Create one now</a>
          </div>
        </div>
        <div>
      <p>&copy; <span className="text-sm">2023 Vortex. All rights reserved</span></p>
      </div>
      </div>
      
      <div id="imageSection" className="w-full md:w-2/5 p-5 my-3 mx-3 hidden md:block">
        <div className="w-full">
          <img src="example-image.jpg" alt="example image" />
        </div>
      </div>
    </div>
   
  </main>
  );
}
