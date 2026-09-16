import React, { useState } from 'react'

const LoginSignup = () => {

const [isLogin,setIsLogin] = useState(true)
const[formData,setFormData] = useState({
   name:"",
   email:"",
   password:"",
   confirmPassword: ""
})

const changeHandler= (e)=>{
   setFormData({...formData,[e.target.name]:e.target.value})
}

const login = async (e)=>{
  e.preventDefault()
  console.log("login button pressed",formData)

  let response = await fetch('http://localhost:5000/api/auth/login',{
    method:"POST",
    headers:  {
      'Content-Type':'application/json',  
    },
      body:JSON.stringify(formData)
  })

    let data  = await response.json();
    console.log(data)

    if (response.ok){
      localStorage.setItem('auth-Token',data.authToken)
      window.location.replace('/')
    }
    else{
      if (data.errors){
        console.log(data.errors)
        alert(data.errors[0].msg)
      }
      else{
          alert(data.message)
      }

    }
}

// api use for signup function

const signUP= async (e)=>{
  e.preventDefault()
  console.log("signup button pressed",formData)

  try {
    let response = await fetch('http://localhost:5000/api/auth/createuser',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })

    let data = await response.json()
    if(response.ok){
      localStorage.setItem('auth-Token',data.authToken)
      window.location.replace('/')
    }
    else{
      if (data.errors){
          alert(data.errors[0].msg)

      }
      else{
        alert(data.message || "Signup Failed" )
      }
    }

    
  } catch (error) {
    console.log("signup Error",error)
    alert("Something Went Wrong. Please Try again")

  }
 
}


  return (
    <>
     <div className="min-h-screen mt-15 bg-[#f8f5ef] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3d3530]">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="text-gray-500 mt-2">
            {isLogin
              ? "Login to continue shopping"
              : "Sign up to start shopping with us"}
          </p>
        </div>

        {/* Form */}
        <form 
        onSubmit={isLogin? login: signUP} 
        className="space-y-5">
        {console.log(isLogin)}

          {/* Name - Signup only */}
          {!isLogin && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>

              <input
                type="text" name='name' value={formData.name} onChange={changeHandler}
                placeholder="Enter your name"
                className="w-full h-12 px-4 border border-gray-300 rounded-xl
                outline-none focus:border-[#c4a96e] transition"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email" name='email' value={formData.email} onChange={changeHandler}
              placeholder="Enter your email"
              className="w-full h-12 px-4 border border-gray-300 rounded-xl
              outline-none focus:border-[#c4a96e] transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password" name='password' value={formData.password} onChange={changeHandler}
              placeholder="Enter your password"
              className="w-full h-12 px-4 border border-gray-300 rounded-xl
              outline-none focus:border-[#c4a96e] transition"
            />
          </div>

          {/* Confirm Password - Signup only */}
          {!isLogin && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>

              <input
                type="password" name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler}
                placeholder="Confirm your password"
                className="w-full h-12 px-4 border border-gray-300 rounded-xl
                outline-none focus:border-[#c4a96e] transition"
              />
            </div>
          )}

          {/* Forgot Password */}
          {isLogin && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[#c4a96e] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit */}
          <button
         
            className="w-full h-12 bg-[#c4a96e] text-white
            rounded-xl font-semibold hover:bg-[#3d3530]
            transition duration-300"
           
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        {/* Toggle */}
        <div className="text-center mt-6 text-gray-600">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-[#c4a96e] font-semibold hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-[#c4a96e] font-semibold hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>

      </div>
    </div> 
    </>
  )
}

export default LoginSignup
