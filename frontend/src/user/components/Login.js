import React, { useState } from 'react'
import './Login.css'
import { userLogin } from 'api';
import { useHistory } from 'react-router'
import { userSignup } from 'api';

const Login = () => {
  const history = useHistory()
  const [tryLogin, serUserLogin] = useState({
    login_name: '',
    login_password:''
  })
 
  
  const handleSubmit = e => {
    e.preventDefault()
    alert(`전송 클릭: ${JSON.stringify({...tryLogin})}`)
    userLogin({...tryLogin})
    .then(res => {
      alert(`로그인 완료 : ${res.data.result} `)
      // history.push('login')
      
    })
    .catch(err => {
      alert(`로그인 실패 : ${err} `)

    })



  }

  const handleClick = e => {
    e.preventDefault()
    alert('취소 클릭')
  }

  const handleChange = e => {
    const { name, value } = e.target
    serUserLogin({
      ...tryLogin,
      [name]: value
    })

  }
  return (<>
    <div className="Login">
    <form onSubmit={handleSubmit} method="get" style={{border:"1px solid #ccc"}}>
      <div className="container">
        <h1>Login</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>

        <label for="login_name"><b>User ID</b></label>
        <input type="text" placeholder="Enter ID" onChange={handleChange}   name="login_name" value={login_name}/>

        <label for="login_password"><b>Password</b></label>
        <input type="text" placeholder="Enter Password" onChange={handleChange}  name="login_password" value={login_password}/>

        <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

        <div class="clearfix">
          <button type="submit" className="signupbtn">Sign Up</button>
          <button type="button" className="cancelbtn" onClick={handleClick}>Cancel</button>
          
        </div>
      </div>
  </form>
</div>
</>)
}

export default Login