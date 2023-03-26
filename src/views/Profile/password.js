
import '@src/views/Css/Add.css'
import { Lock} from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'

import {
    

    Button,
    Label

} from 'reactstrap'
const Password =()=>{

    return (
        <div className='cards card'>
        <div className="container">
        
        <div className="title"><Lock size={20}/>Password</div>
        <form action="#">

         <div className="user-details" >
        
          <div className='mb-1 ' style={{width:"800px"}}>
          
          
            <Label className='form-label details' for='register-password' placeholder=" 

            You must provide your current password in order to change it.">
            Current password
            </Label>
            <InputPasswordToggle className='input-group-merge input' id='register-password' style={{backgroundColor:"#FCFEB2"}}/>
          </div>

          <div className='mb-1 ' style={{width:"800px"}}>
          
          
          <Label className='form-label details' for='register-password'>
         New password
          </Label>
          <InputPasswordToggle className='input-group-merge input' id='register-password' style={{backgroundColor:"#FCFEB2",}}/>
        </div>
        <div className='mb-1 ' style={{width:"800px"}}>
          
          
            <Label className='form-label details' for='register-password'>
            password confirmation
            </Label>
            <InputPasswordToggle className='input-group-merge input' id='register-password' style={{backgroundColor:"#FCFEB2"}}/>
          </div>
         </div>

         <div className='button'><input type="submit" name="" value=" Save"/></div>
         <div className='button'><input type="submit" name="" value="Cancel" /></div>
        
        
          
        </form>
        </div>
        </div>
      
    )
}
export default Password

