import React,{useState} from 'react'
import './PostWrite.css'
import { Button } from '@material-ui/core';
import {userWrite} from 'api';




const PostWrite = () => {
  const [writeInfo, setWriteInfo] = useState({
    title: '',
    content: ''
  })

  const {title, content} = `writeInfo`


  const handleSubmit = e => {
    e.preventDefault()
    alert(`전송 클릭: ${JSON.stringify({...writeInfo})}`)
    userWrite({...writeInfo})
    .then(res => {
      alert(`게시물 올리기 완료 : ${res.data.result} `)
      // history.push('login')
      
    })
    .catch(err => {
      alert(`게시물 올리기 실패 : ${err} `)

    })

  }

  const handleClick = e => {
    e.preventDefault()
    alert('취소 클릭')
  }

  const handleChange = e => {
    const { name, value } = e.target
    setWriteInfo({
      ...writeInfo,
      [name]: value
    })

  }

  return (<>
    <div className="Signup">
    <form onSubmit={handleSubmit} method="post" style={{border:"1px solid #ccc"}}>
      <div className="container">
        <h1>게시글 쓰기</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>

        <label for="title"><b>title</b></label>
        <input type="text" placeholder="Enter title" onChange={handleChange}   name="title" value={title}/>

        <label for="content"><b>content</b></label>
        <input type="text" placeholder="Enter Your content" onChange={handleChange}  name="content" value={content}/>

        <div class="clearfix">
          <button type="submit" className="signupbtn">게시물 올리기</button>
          <button type="button" className="cancelbtn" onClick={handleClick}>Cancel</button>
          
        </div>
      </div>
  </form>
</div>
</>)
}

export default PostWrite