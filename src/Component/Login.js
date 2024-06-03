import React,{useState} from 'react'
import '../Style/Login.css'
import Home from './Home'
import fasalLogo from '../img/fasalLogo.jpeg'
function Login() {
  const [user,setUser]=useState('');
  const [password,setPassword]=useState('');
  const [state,setState]=useState(false)

  const authenticate=()=>{
    ((user==='user')&&(password==='123'))?setState(true):alert("Incorrect Username or Password");
    }
  
  if (state){
    return(<Home/>)
  }

  return (
    <div className='page_structure'>
      <div className='structure'>
        <div className='loginHead'>
          <div className="logoContainer">
            <img src={fasalLogo} className="logo" alt="logo"/><br/><br/><br/><br/>
          </div>
          <br/>
        </div>
        <input type='text' placeholder='Username' value={user} onChange={(e)=>{setUser(e.target.value)}} className='textField'/><br/><br/>
        <input type='text' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='textField'/><br/><br/>
        <button className='button' onClick={authenticate} >Log In</button>
      </div>
    </div>
  )
}

export default Login
