import '@src/views/Css/Add.css'
import { useState,useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'


import { NavLink } from 'react-router-dom';
import styled from "styled-components"
const EditDriver =()=>{
 const {empid}=useParams();
 const [name,nameChange]=useState("")
 const [code,codeChange]=useState("")
 const [phone,phoneChange]=useState("")
 const [busLicence,busChange]=useState("")
 const [updated_at,updateChange]=useState("")
 const [created_at,createChange]=useState("")
 const [lastlocation,locationChange]=useState("")
 const [validation,validationChange]=useState(false)
 const navigate=useNavigate();

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

 const options=[
  { label:"....select", value:"....."},
  { label:"b69", value:"b69"},
  { label:"h95", value:"h95"},
  { label:"kl6", value:"kl6"},
  
]

  useEffect(()=>{
    fetch(` https:/tables-da37f-default-rtdb.firebaseio.com/users/${empid}.json`).then((res)=>{
      return res.json();
    }).then((resp)=>{
        
       nameChange(resp.name)
       codeChange(resp.code)
       phoneChange(resp.phone)
       busChange(resp.busLicence)
       updateChange(resp.updated_at)
       createChange(resp.created_at)
       locationChange(resp.lastlocation)

    }) .catch((err)=>{
   
        console.log(err.message)
    })
  },[])

  
  
  


  



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
  const data ={name,code,phone,busLicence,created_at,lastlocation}
  data.updated_at = getCurrentTimeDate();
  setLoading(true)
  fetch(`https://tables-da37f-default-rtdb.firebaseio.com/users/${empid}.json`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
  }).then((res)=>{
    alert("Saved success")
    navigate('/driver')

    
      console.log(err.message)
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
    return (
        <div className='cards card'>
        <div className="container">
        <div className="title">Edit Driver </div>
        <form onSubmit={handlesubmit}>
         <div className="user-details" >
         <div className="input-box" style={{width:"800px"}}>
         <span className="details" >Driver Name </span>
         <input  disabled={load} value={name} onMouseDown={e=>validationChange(true)}  onChange={e=>nameChange(e.target.value)} className='input' type="text" placeholder=" name" required></input>
         {name.length==0 && validation &&  <span className='text-danger'> Enter the name</span>}
         </div>
         
         <div className="input-box">
         
         <span className="details">Country code</span>
         <input  value={code}   disabled={load} onChange={e=>codeChange(e.target.value)} className='input' type="text" placeholder=" + country code" required></input>
         
         </div>
         <div className="input-box">
         <span className="details">Parent phone</span>
         <input  value={phone} disabled={load}  onChange={e=>phoneChange(e.target.value)} className='input' type="text" placeholder=" telephone" required></input>
         </div>
         <div className='child'>
         <div className="input-box" >

         <span className="details ">Bus </span>
         
        
       <select  value ={busLicence} onChange={e=>busChange(e.target.value)} className='input'  name="drivers" id="driver">
        {options.map((option,id)=>(
            <option value={option.value} key={id} >{option.label}</option>
        ))}
      </select>
         </div>
         <a className='btn btns word'  href=""><span >New</span></a>
         </div>
         </div>

         <div className='button'><button className='inputs' type="submit" name="" disabled={load}>
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
         
         </button></div>
         <div className='button'><input  className='inputs' onClick={(e)=>{navigate("/driver")}} type="submit" name="" value="Cancel"  disabled={load} /></div>
        
        
          
        </form>
        </div>
        </div>
      
    )
}
export default EditDriver