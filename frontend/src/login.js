import { useState } from "react"
import axios from "axios"

function Login(){
    const [name, setName] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSignup = (e) => {
        e.preventDefault()
        const obj = {
            username : name
        }
        console.log("It is hitting")
        axios.post("http://localhost:3001/v1/signUp",obj).then((res) => console.log(res)).catch((err) => console.log(err))
        console.log("it is hitting 2nd time")
    }
    return(
        <>
            username :  <input type = "text" onChange={(e) => handleName(e)}></input>
            <button onClick={(e) => handleSignup(e)}>SignUp</button>
        </>
    )
}

export default Login