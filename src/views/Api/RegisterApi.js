import React , {useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

import Register from '../Login/Register';
function RegisterApi()
{
   
    const [userName,setUserName]=useState('');
    const[id,setid]=useState('');
    const[phone,setPhone]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate()
    
    const IsValidate=()=>{
        let isproceed=true
        let errormessage="please enter the value in "
        if(userName===null|| userName===''){
            isproceed=false;
            errormessage+='Username -'
        }
        if(id==null|| setid===''){
            isproceed=false;
            errormessage+='Email -'
        }
        if(phone===null|| phone===''){
            isproceed=false;
            errormessage+='phone -'
        }
        if(password===null|| password===''){
            isproceed=false;
            errormessage+='Password -'
        }

        if(!isproceed){
            toast.error(errormessage)
        }else {
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(id)){
           
            }else{
                isproceed=false;
                toast.error("please Enter valid email")
            }
            if(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phone)){

            }else{
                isproceed=false;
                toast.error("please Enter valid phone")
            }
        }
        return isproceed
}
   function signUp(e){
   
        e.preventDefault()
        let item ={userName,id,phone,password}
        if (IsValidate()){
        fetch("http://localhost:5000/userEmail",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                "Accept": 'application/json'            },
                 body:JSON.stringify(item)

        })
        .then((res)=>{
           navigate("/login") 
          toast.success('Registered successfully')
         
          
        
        }).catch((err)=>{
            toast.error('Failed'+err.message);
        })
        
        
    }
    }
 return(
    <Register userName={userName} setUserName={setUserName} email={id} setEmail={setid} phone={phone} setPhone={setPhone} 
    password={password} setPassword={setPassword} signUp={signUp} />)
 
}
export default RegisterApi