import '@src/views/Css/Add.css'
import {  Trash} from 'react-feather'
import {
    

    Button,

} from 'reactstrap'
const EditDriver =()=>{

    return (
        <div className='cards card'>
        <div className="container">
        <div className="title">Edit Driver </div>
        <form action="#">
         <div className="user-details" >
         <div className="input-box" style={{width:"800px"}}>
         <span className="details" >Driver Name </span>
         <input  className='input' type="text" placeholder=" name" required></input>

         </div>
         
         <div className="input-box">
         
         <span className="details">Country code</span>
         <input className='input' type="text" placeholder=" + country code" required></input>
         
         </div>
         <div className="input-box">
         <span className="details">Parent phone</span>
         <input  className='input' type="text" placeholder=" telephone" required></input>
         </div>
         <div className='child'>
         <div className="input-box" >

         <span className="details ">Bus </span>
         
         <select className='input'  name="drivers" id="driver">
         <option  value="ahmed">safaa samir abd elazem</option>
         <option value="amrsaab"> amr Saab elhany</option>
         <option value="hamed">hamed mahmoud</option>
         <option value="noah">noah kjjjjjjj</option>
         <option value="another">another </option>
      </select>
      
         </div>
         <a className='btn btns word'  href=""><span >New</span></a>
         </div>
         </div>

         <div className='button'><input type="submit" name="" value=" Save"/></div>
         <div className='button'><input type="submit" name="" value="Cancel" /></div>
        
        
          
        </form>
        </div>
        </div>
      
    )
}
export default EditDriver