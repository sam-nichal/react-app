import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label>
          Username:
          <input type='text' name='userName' value={formData.userName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type='password' name='password' value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}


export default Login;
