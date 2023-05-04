import '@src/views/Css/Add.css'
import {Link}  from "react-router-dom"
import { Icon } from '@iconify/react';
import { useState,useEffect } from 'react'
import {  Trash} from 'react-feather'
import { useNavigate, useParams } from 'react-router-dom'
const EditParent =()=>{
    const {empid}=useParams();
    // const {empdata,empdataChange}=useState({});
    
      useEffect(()=>{
        fetch(" http://localhost:5000/users/"+empid).then((res)=>{
          return res.json();
        }).then((resp)=>{
            
           nameChange(resp.name)
           codeChange(resp.code)
           phoneChange(resp.phone)
           busChange(resp.bus)
           childChange(resp.child)
    
        }) .catch((err)=>{
       
            console.log(err.message)
        })
      },[])
    
      const [id,idChange]=useState("")
      const [name,nameChange]=useState("")
      const [code,codeChange]=useState("")
      const [phone,phoneChange]=useState("")
      const [bus,busChange]=useState("select")
      const [validation,validationChange]=useState(false)
      const [child,childChange]=useState(false)
      const navigate=useNavigate();
      
     const handlesubmit=(e)=>{
      e.preventDefault();
      const data ={id,name,code,phone,bus}
      
      fetch(" http://localhost:5000/parents/"+empid,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(data)
      }).then((res)=>{
        alert("Saved success")
        navigate('/parent-page')
      }).catch((err)=>{
          console.log(err.message)
      })
     }
    return (
        <div className='cards card '>
        <div className="container">
        <div className="title">Edit parents </div>
        <form onSubmit={handlesubmit}>
         <div className="user-details">
         <div className="input-box">
         <span className="details" >Parent Name </span>
         <input value={name} onMouseDown={e=>validationChange(true)}  onChange={e=>nameChange(e.target.value)} className='input' type="text" placeholder=" name" required></input>
         {name.length==0 && validation &&  <span className='text-danger'> Enter the name</span>}
         </div>
         <div className="input-box">
         <span className="details ">Driver </span>
         <select value={bus}  onChange={e=>busChange(e.target.value)} className='input'  name="drivers" id="driver">
         <option  value="ahmed">safaa lll</option>
         <option value="amrsaab"> amr yyyyyy</option>
         <option value="hamed">hamed kkkk</option>
         <option value="noah">noah kjjjjjjj</option>
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
         <input value={child}  onChange={e=>phoneChange(e.target.value)} className='input' type="text" placeholder=" child name" required></input>
         </div>
        
         <Link className='btn btns' to=""><Icon icon="fluent:subtract-circle-20-regular" color="red" width="60" height="60" /></Link>
         <Link className='btn btns' to=""><Icon icon="material-symbols:add-circle-outline-rounded" color="green" width="60" height="60" /></Link>
         
         </div>
         
         </div>
         
         <div className='button'><input type="submit" name="" value=" Save"/></div>
         <div className='button'><input type="submit "   on Click={(e)=>{navigate("/parent-page")}} name="" value=" Cancel"/></div>
        
        </form>
        </div>
        </div>
      
    )
}
export default EditParent