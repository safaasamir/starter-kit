
import style from "../Css/Edit.module.css"
//import "@src/views/Css/Add.css"
import {Card} from "reactstrap"
const EditDriver =()=>{

    return (
        <Card>
        <div className={style.cards }>
        <div className={style.container}>
        <div className={style.title}>Edit Driver </div>
        <form action="#">
         <div className={style.userdetails} >
         <div className={style.inputbox} style={{width:"800px"}}>
         <span className={style.details} >Driver Name </span>
         <input  className={style.input} type="text" placeholder=" name" required></input>

         </div>
         
         <div className={style.inputbox}>
         
         <span className={style.details}>Country code</span>
         <input className={style.input} type="text" placeholder=" + country code" required></input>
         
         </div>
         <div className={style.inputbox}>
         <span className={style.details}>Parent phone</span>
         <input  className={style.input} type="text" placeholder=" telephone" required></input>
         </div>
         <div className={style.child}>
         <div className={style.inputbox}>

         <span className={style.details}>Bus </span>
         
         <select className={style.input}  name="drivers" id="driver">
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

         <div className={style.button}><input type="submit" name="" value=" Save"/></div>
         <div className={style.button}><input type="submit" name="" value=" Delete"/></div>
          
        </form>
        </div>
        </div>
        </Card>
      
    )
}
export default EditDriver