import React,{useState} from 'react'
import '../styles/MemberLogin.css'
import { memberLogin } from 'api'
import { useHistory } from 'react-router'

const MemberLogin = () => {
  const history = useHistory()
  const [memberinfo, setMemberInfo] = useState({
    username: '',
    password: ''
  })
  const {username, password} = 'memberInfo'

  const handleSubmit = e => {
    e.preventDefault()
    alert(`전송클릭: ${JSON.stringify({...memberinfo})}`)
    memberLogin({...memberinfo})
    .then(res => {
      alert(`로그인 완료 : ${res.data.result}`)

    })
    .catch(err => {
      alert(`로그인 실패 : ${err}`)
    })


  }
  const handleClick = e => {
    e.preventDefault()
    alert('취소클릭')
  }
  const handleChange = e => {
    const {name, value} =e.tatget
    setMemberInfo({
      ...memberinfo,
      [name]: value
    })
  }

    return (<>
    <div className="MemberLogin">
      <div className="Login">
        <form onSubmit={handleSubmit} method="post" action="/action_page.php" >
          <div className="imgcontainer">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" style={{width: "300px"}} alt="Avatar" className="avatar"/>
          </div>

          <div className="container">
          <h1>Login</h1>
            <label labelFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" onChange={handleChange} name="username" value={username}/>

            <label labelFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="pswpassword" required/>
                
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
          </div>

          <div className="container" style={{backgroundColor: "#f1f1f1"}}>
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
      </div>
   
    </>)
}

export default MemberLogin