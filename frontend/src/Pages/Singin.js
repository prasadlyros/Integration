import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css"

const Signin = () => {

    const [name, setName] = useState('')
    const [mail,setMail] = useState('')
    const [pwd,setPwd] = useState('')
    const [conPwd, setConPwd] = useState('')
    const [pwdErr, setPwdEr] = useState('')
    const [msgErr, setMsgErr] = useState('')
    const [mailErr, setMailErr] = useState('')
    const [value, setValue] = useState(false)
    const [dropdown, setDropdown] = useState('')
    const navigate = useNavigate()

    const handleChange = (e,keyword) => {
        e.preventDefault()
        if(keyword === 'uname'){
            setName(e.target.value)
        }
        else if (keyword === 'mail'){
            setMail(e.target.value)
        }
        else if(keyword === 'pwd'){
            setPwd(e.target.value)
        }
        else{
            setConPwd(e.target.value)
        }
      };

    const handledropdown =(e) => {
        setDropdown(e.target.value)
    }
    
    const handleSubmit = (e) => {
        const obj = {
            username : name,
            password : pwd,
            email : mail 
        }
        if(pwd === conPwd){
            if(dropdown === 'admin'){
                if(name === ''){
                    setValue(true)
                    setMsgErr('Feild required')
                }
                else if (mail === ''){
                    setValue(true)
                    setMailErr("Feild required")
                }
                else{
                    axios.post(`http://localhost:3001/v1/signup`,obj).then((res) => console.log(res)).catch((err) => console.log(err));
                    console.log(obj)
                    navigate('/login')
                }
            }
            else if (dropdown === 'user'){
                if(name === ''){
                    setValue(true)
                    setMsgErr('Feild required')
                }
                else if (mail === ''){
                    setValue(true)
                    setMailErr("feild required")
                }
                else{
                    axios.post(`http://localhost:3001/v1/signup`,obj).then((res) => console.log(res)).catch((err) => console.log(err));
                    console.log(obj)
                    navigate('/login')
                }
            }
            else{
                alert('Please select Register Type')
            }
        }
        else{
            setValue(true)
            setPwdEr("Password is not matching")
        }
    }

    return(
        <>
            <form className='form-container'>
                <h2 className='form-header'>Registration Form</h2>
                <label className="form-label">Register type :</label>
                    <select name="interference" className="select" onChange={(e) => handledropdown(e)}>
                        <option selected>select type</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                <label className='form-label'>Username:</label>
                <input type="text" className='form-input' name="username" onChange={(e) => handleChange(e,'uname')} placeholder="Please enter username" required/>
                {value ? <p>{msgErr}</p> : ''}
                <label className='form-label'>Email:</label>
                <input className='form-input' type="email" name="email" required onChange={(e) => handleChange(e,'mail')} placeholder="Please enter your email"/>
                {value ? <p>{mailErr}</p> : ''}
                <label className='form-label'>Password:</label>
                <input className='form-input' type="password" name="password" onChange={(e) => handleChange(e,'pwd')} placeholder="Please enter your password"/>
                <label className='form-label'>Confirm Password:</label>
                <input className='form-input' type="password" name="confirmPassword" onChange={(e) => handleChange(e,'conPwd')} placeholder="Re-enter your password"/>
                {value ?<p className='form-error'>{pwdErr}</p> : ''}
                <button type="button" className='form-button' onClick={(e) => handleSubmit(e)}>Register</button>
            </form>
        </>
    )
}

export default Signin