import React, { useState } from 'react'

function Register() {
  const [registerData,setRegisterData] = useState({
    userName : "",
    password : "",
    fName : "",
    lName : ""
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted data",registerData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <label>
        UserName
        <input type='text' name='userName' value={registerData.userName} onChange={handleChange}></input>
       </label>
       <label>
        Password
        <input type='password' name='password' value={registerData.password} onChange={handleChange}></input>
       </label>
       <label>
        FirstName
        <input type='text' name='fName' value={registerData.fName} onChange={handleChange}></input>
       </label>
       <label>
        LastName
        <input type='text' name='lName' value={registerData.lName} onChange={handleChange}></input>
       </label>
       <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register