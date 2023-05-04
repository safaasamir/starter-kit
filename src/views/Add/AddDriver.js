import '@src/views/Css/Add.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddDriver =()=>{

    const [id,idChange]=useState("")
    const [name,nameChange]=useState("")
    const [code,codeChange]=useState("")
    const [phone,phoneChange]=useState("")
    const [bus,busChange]=useState("select")
    const [validation,validationChange]=useState(false)
    const navigate=useNavigate();
    
   const handlesubmit=(e)=>{
    e.preventDefault();
    const data ={name,code,phone,bus}
    
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
         
         <select value={bus}  onChange={e=>busChange(e.target.value)} className='input'  name="drivers" id="driver">
         <option  value="ahmed">safaa jjjj </option>
         <option value="amrsaab"> amr uuuuu </option>
         <option value="hamed">hamed pppp </option>
         <option value="noah">noah hhhh </option>
         <option value="another">another </option>
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