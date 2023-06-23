import '@src/views/Css/Add.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';



import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from "styled-components"
const AddDriver =()=>{
    const Wrapper = styled.section`

    .Errorcontainer {
        padding: 9rem 0 ;
        text-align:center;
    
        h2 {
          font-size:10rem;
          color:#FEC628;
        }
        h3{
            font-size: 4.2rem;
            color:#FEC628;
        }
    
        p{
            margin:2rem 0;
            color:#FEC628;
        }
    }
    
    `
   
    const [loading, setIsLoading] = useState(true);
    const [load, setLoading] = useState(false);
    const [error, setError] = useState("");
    
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


    const getCurrentDate=(separator='/')=>{

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        }

        const getCurrentTimeDate=(separator='/')=>{

            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            let today = new Date()
            let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            
            return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}${"--"}${time}`
            }
    

   const handlesubmit=(e)=>{
    e.preventDefault();
    const data ={name,code,phone,busLicence}
    setLoading(true)
    data.created_at = getCurrentDate();
    data.updated_at = getCurrentTimeDate();
    data.lastlocation = //" elsmalia Suez Canal Univerisity"
    "portsaid elzohour"
    console.log(data);
    fetch("https://tables-da37f-default-rtdb.firebaseio.com/users.json",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then((res)=>{
      alert("Saved success")
      navigate('/driver')
    }).catch((err)=>{
        console.log(err.message)
        setIsLoading(false);
        setError(<Wrapper>
            <div className='Errorcontainer'>
                <div>
                    <h2>404</h2>
                    <h3>UH OH! you're not connect.</h3>
                    <p>
                       please check your connect and try again   </p>
                        <NavLink to="/driver">
                        <button type="button" className="btn btn-warning">Reload</button>
                    </NavLink>
                </div>
            </div>
        </Wrapper>);
    })
   }
   const handleok=(e)=>{
   
   console.log(JSON.stringify(val))
  
  
   }
   if (error) {
    return (
      <div className="alert alert-danger">
        <h3 className="text-center">{error}</h3>
       
      </div>
    );
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
         <input value={code}  disabled={load}  onChange={e=>codeChange(e.target.value)} className='input' type="text" placeholder=" + country code" required ></input>
         {code.length==0 && validation &&  <span className='text-danger'> Enter the code</span>}
         </div>
         <div className="input-box">
         <span className="details">Driver phone</span>
         <input value={phone}   disabled={load}  onChange={e=>phoneChange(e.target.value)} className='input' type="text" placeholder=" telephone" required  ></input>
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

           show?<button  disabled={load} onClick={()=>handleAdd()} className='btn btns word'><span >New</span></button>:null
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

         <div className='button' > <button className='inputs' type="submit" name="" disabled={load}>
         {load? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </>
          ) : (
            "Save"
          )}
         
         </button> </div>
          
        </form>
        </div>
        </div>
      
    )
}
export default AddDriver