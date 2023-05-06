import '@src/views/Css/Add.css'
import {Link}  from "react-router-dom"
import { Icon } from '@iconify/react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddParent =()=>{
     const [id,idChange]=useState("")
    const [name,nameChange]=useState("")
    const [code,codeChange]=useState("")
    const [phone,phoneChange]=useState("")
    const [bus,busChange]=useState("select")
    const [child,childChange]=useState(" ")
    const [validation,validationChange]=useState(false)
    const navigate=useNavigate();
     const Addchild=()=>{
        e.preventDefault();
        <input value={child}  onChange={e=>childChange(e.target.value)} className='input ms-3' type="text" placeholder=" child name" required></input>   
     }
   const handlesubmit=(e)=>{
    e.preventDefault();
    const data ={name,code,phone,bus}
    
    fetch(" http://localhost:5000/parents",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    }).then((res)=>{
      alert("Saved success")
      navigate('/parent-page')
    }).catch((err)=>{
        console.log(err.message)
    })}

    return (
        <div className='cards card '>
        <div className="container">
        <div className="title">New parents </div>
        <form onSubmit={handlesubmit}>
         <div className="user-details">
         <div className="input-box">
         <span className="details" >Parent Name </span>
         <input  value={name} onMouseDown={e=>validationChange(true)} className='input' type="text" placeholder=" name" required onChange={e=>nameChange(e.target.value)}></input>

         </div>
         <div className="input-box">
         <span className="details ">Select driver </span>
         <select  value={bus}  onChange={e=>busChange(e.target.value)} className='input'  name="drivers" id="driver">
         <option  value="ahmed">safaa jjjjjjjj </option>
         <option value="amrsaab"> amr aaaaaa </option>
         <option value="hamed">hamed bbbbb </option>
         <option value="noah">noah yyyyy </option>
         <option value="another">another </option>
      </select>
         </div>
         <div className="input-box">
         
         <span className="details">Country code</span>
         <input value={code}  onChange={e=>codeChange(e.target.value)} className='input' type="text" placeholder=" + country code" required></input>
         
         </div>
         <div className="input-box">
         <span className="details">Parent phone</span>
         <input value={phone}  onChange={e=>phoneChange(e.target.value)} className='input' type="text" placeholder=" telephone" required></input>
         </div>
         
        <div className="child">
         <div className="input-box">
         <span className="details">child Name </span>
          <input value={child}  onChange={e=>childChange(e.target.value)} className='input' type="text" placeholder=" child name" required></input>
         </div>
        
         <Link className='btn btns'  ><Icon icon="fluent:subtract-circle-20-regular" color="red" width="60" height="60" /></Link>
         <Link className='btn btns' onClick={()=>{Addchild(item.id)}}><Icon icon="material-symbols:add-circle-outline-rounded" color="green" width="60" height="60" /></Link>
         
         </div>
         </div>
         <div className='button'><input type="submit" name="" value=" Save"/></div>
          
        </form>
        </div>
        </div>
      
    )
}
export default AddParent