import '@src/views/Css/Add.css'
import {Link}  from "react-router-dom"
import { Icon } from '@iconify/react';
const AddParent =()=>{

    return (
        <div className='cards card '>
        <div className="container">
        <div className="title">New parents </div>
        <form action="#">
         <div className="user-details">
         <div className="input-box">
         <span className="details" >Parent Name </span>
         <input  className='input' type="text" placeholder=" name" required></input>

         </div>
         <div className="input-box">
         <span className="details ">Select driver </span>
         <select className='input'  name="drivers" id="driver">
         <option  value="ahmed">safaa jjjjjjjj </option>
         <option value="amrsaab"> amr aaaaaa </option>
         <option value="hamed">hamed bbbbb </option>
         <option value="noah">noah yyyyy </option>
         <option value="another">another </option>
      </select>
         </div>
         <div className="input-box">
         
         <span className="details">Country code</span>
         <input className='input' type="text" placeholder=" + country code" required></input>
         
         </div>
         <div className="input-box">
         <span className="details">Parent phone</span>
         <input  className='input' type="text" placeholder=" telephone" required></input>
         </div>
         
        <div className="child">
         <div className="input-box">
         <span className="details">child Name </span>
         <input  className='input' type="text" placeholder=" child name" required></input>
         </div>
        
         <Link className='btn btns' to=""><Icon icon="fluent:subtract-circle-20-regular" color="red" width="60" height="60" /></Link>
         <Link className='btn btns' to=""><Icon icon="material-symbols:add-circle-outline-rounded" color="green" width="60" height="60" /></Link>
         
         </div>
         </div>
         <div className='button'><input type="submit" name="" value=" Save"/></div>
          
        </form>
        </div>
        </div>
      
    )
}
export default AddParent