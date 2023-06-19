import '@src/views/Css/Add.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
const AddDriver =()=>{
  
   

    
    const [name,nameChange]=useState("")
    const [code,codeChange]=useState("")
    const [phone,phoneChange]=useState("")
    const [validation,validationChange]=useState(false)
    const [busLicence,optchange]=useState(" ")
    const navigate=useNavigate();
    
    const [show,setShow]=useState(true)
    const [val,setVal]=useState([])

    const handleAdd=()=>{
       
        const abc=[...val,{busLicence:""}]
        setVal(abc)
        setShow(!show)
    }
    const handleChange=(e,i)=>{
        const {name,value}=e.target
        const inputdata =[...val]
        inputdata[i][name]=value
        setVal(inputdata)
    }

    const handleDelete=(i)=>{
       const deleteValue=[...val]
       deleteValue.splice(i)
       setVal(deleteValue)
       setShow(!show)
    }
   
   
    const options=[
        { label:"....select", value:"....."},
        { label:"b69", value:"b69"},
        { label:"h95", value:"h95"},
        { label:"kl6", value:"kl6"},
        
     ]
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
   const handleok=(e)=>{
   
   console.log(JSON.stringify(val))
  
  
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
         <input value={code}  onChange={e=>codeChange(e.target.value)} className='input' type="text" placeholder=" + country code" required ></input>
         {code.length==0 && validation &&  <span className='text-danger'> Enter the code</span>}
         </div>
         <div className="input-box">
         <span className="details">Driver phone</span>
         <input value={phone}  onChange={e=>phoneChange(e.target.value)} className='input' type="text" placeholder=" telephone" required  ></input>
         {phone.length==0 && validation &&  <span className='text-danger'> Enter the phone</span>}
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
           {

           show?<button  onClick={()=>handleAdd()} className='btn btns word'><span >New</span></button>:null
           }
           
         {val.map((databus,i)=>{
            
            return(
               
                <div className="input-box">
                <span className="details ms-1 ">New bus </span>
                <input name="busLicence"  className='input ms-1' type="text" placeholder=" New bus" value={databus.busLicence} onChange={e=>handleChange(e,i)}/>
                <div className='ms-4 '>
               <a> <Icon  onClick={()=>{handleDelete(i)}} icon="mdi:close-circle" color="red" width="20" height="20" /></a>
              <a> <Icon  onClick={()=>{handleok()}} icon="flat-color-icons:ok" color="red" width="20" height="20" /></a>
                </div>
                </div>
                
               
            )
           
    })}
         </div>
         </div>

         <div className='button'><input type="submit" name="" value=" Save"/></div>
          
        </form>
        </div>
        </div>
      
    )
}
export default AddDriver