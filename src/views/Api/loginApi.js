import Login from "../Login/Login"
import { useState, useEffect } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserDropdown from "../../@core/layouts/components/navbar/UserDropdown";
import { genComponentStyleHook } from "antd/es/theme/internal";
const LoginApi = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const usenavigate = useNavigate()
    let name="uu"
    useEffect(() => {
        sessionStorage.clear()
    }, [])
    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {

            fetch("http://localhost:5000/userEmail/" + email).then((res) => {
                return res.json()
            }).then((resp) => {
                if (Object.keys(resp).length === 0) {
                    toast.error("Please Enter Valid Email")
                } else {
                    if (resp.password === password) {
                        toast.success("Success to Login")
                        sessionStorage.setItem("email", email)
                        console.log("from login"+resp.userName,resp.id)
                        
                         usenavigate('/home')
                         {<UserDropdown  usernames={resp.userName} emails={resp.id}/>}
                         

                    } else {
                        toast.error("please Enter Valid credentials")
                    }
                }

            }).catch((err) => {
                toast.error("Login Failed due to :" + err.message)
            })
        }
        
    }
    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false
            toast.error("please Enter user name")

        }
        if (password === '' || password === null) {
            result = false
            toast.error("please Enter password")
        }
        if (!result) {
            toast.error("Enter right value")
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                result = false;
                toast.error("please Enter valid email")
            }

        }
        return result
    }
    return (
        <Login username={email} setUsername={setemail} password={password} setPassword={setPassword} ProceedLogin={ProceedLogin} />
    )
}
export default LoginApi
