import React,{useState} from 'react'
import axios from "axios";

function App(){
  const [data,setData]=useState({
  userName:"",
  gmail:"",
  password:"",
  confirmPassword:""
  });
  const {userName,gmail,password,confirmPassword} = data;
  const handler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e => {
    e.preventDefault()
    // if (password!==confirmPassword){
    //   alert("passwords are not matching!!")
    // }
    // else if(userName.length<5){
    //   alert("username must be atleast 5 characters..")
    // }
    // else{
    //   console.log(data)
    // }

    axios.post(
      "https://sign-in-84e1c-default-rtdb.firebaseio.com/register.json",
      data).then(() => alert("submitted sucessfully"))

  }


  return(
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" name="userName" value={userName} onChange={handler} placeholder="username" /> <br/>
          <input type="email" name="gmail" value={gmail} onChange={handler} placeholder="gmail" /> <br/>
          <input type="text" name="password" value={password} onChange={handler} placeholder="password" /> <br/>
          <input type="text" name="confirmPassword" value={confirmPassword} onChange={handler} placeholder="confirmpassword" /> <br/>
          {password !== confirmPassword ? <p style={{"color":"red"}}>passwords not matching</p>:null }
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  )

}


export default App;
