import '@src/views/Css/Add.css'
import { options } from 'preact'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddDriver =(props)=>{
  
    const options=[
       { label:"b69", value:"b69"},
       { label:"h95", value:"h95"},
       { label:"kl6", value:"kl6"},
    ]

    const [id,idChange]=useState("")
    const [name,nameChange]=useState("")
    const [code,codeChange]=useState("")
    const [phone,phoneChange]=useState("")
    const {dataTables}=props
    const [validation,validationChange]=useState(false)
    const [busLicence,optchange]=useState(" ")
    const navigate=useNavigate();
    
    
   const handlesubmit=(e)=>{
    e.preventDefault();
    const data ={name,code,phone,busLicence}
    
    fetch(" http://localhost:5000/users",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    }).then((res)=>{
      alert("Saved success")
      navigate('/driver')
    }).catch((err)=>{
        console.log(err.message)
    })
   }

    return (
        <div className='cards card'>
        <div className="container">
        <div className="title">New Driver </div>
        <form onSubmit={handlesubmit}>
         <div className="user-details" >
         <div className="input-box" style={{width:"800px"}}>
         <span className="details" >Driver Name </span>
         <input value={name} onMouseDown={e=>validationChange(true)}  onChange={e=>nameChange(e.target.value)}className='input' type="text" placeholder=" name" ></input>
         {name.length==0 && validation &&  <span className='text-danger'> Enter the name</span>}
         </div>
         
         <div className="input-box">
         
         <span className="details">Country code</span>
         <input value={code}  onChange={e=>codeChange(e.target.value)}className='input' type="text" placeholder=" + country code" required></input>
         
         </div>
         <div className="input-box">
         <span className="details">Driver phone</span>
         <input value={phone}  onChange={e=>phoneChange(e.target.value)} className='input' type="text" placeholder=" telephone" required></input>
         </div>
         <div className='child'>
         <div className="input-box" >

         <span className="details ">Select Bus </span>
         
         <select  value ={busLicence} onChange={e=>optchange(e.target.value)} className='input'  name="drivers" id="driver">
        {options.map((option,id)=>(
            <option value={option.value} key={id} >{option.label}</option>
        ))}
      </select>
      
         </div>
         <a className='btn btns word'  href=" "><span >New</span></a>
         </div>
         </div>

         <div className='button'><input type="submit" name="" value=" Save"/></div>
          
        </form>
        </div>
        </div>
      
    )
}
export default AddDriver