import "@src/views/Css/Profile.css"
import {User} from "react-feather"
import { Fragment } from "react";
import {Card ,Col,Row,Button} from 'reactstrap'
const Profile=()=>{
return (
    <Fragment>
    <Card>
    <div className='invoice-list-table-header w-100 me-1 ms-10 mt-0 mb-30 '>
        <Row>
            <Col xl='6' className='d-flex align-items-center p-1 '>
            <User size={30}  className='mx-1' color="#FEC628"/>
                <h2 style={{ color: "black" , marginTop:"15px"}}>Profile</h2>
            </Col>
            <Col
                xl='6'
                className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
            >

                <form
                    className='d-flex align-items-center mb-sm-0 mb-1 me-1'
                    
                >
                   
                   
            
                </form>
            </Col>
        </Row>
    </div>
</Card>
<div className="card">
<center>
<div className="box">
<img className="imgs" src="hussien.jpg" alt="photo"/>
<input type="file" name="" id="file" accept="image/*"/>
<label for="file"> Edit pic</label>
<input type ="text" name="" placeholder= "User Name"/>
<input type ="email" name="" placeholder= "Email ID"/>
<input type ="text" name="" placeholder= "Phone Number"/>
<button className="button1">Cancel</button>
<button className="button2">Save</button>
</div>
</center>
</div>
</Fragment>
    )
}
export default Profile