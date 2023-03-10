
import "@src/views/Css/School.css"
import { Fragment } from "react";
import {Card ,Col,Row,Button} from 'reactstrap'
import { Icon } from '@iconify/react'


const School =()=>
{
 return(
    <Fragment>
    <Card>
    <div className='invoice-list-table-header w-100 me-1 ms-10 mt-0 mb-30 '>
        <Row>
            <Col xl='6' className='d-flex align-items-center p-1 '>
            <Icon icon="teenyicons:school-outline"  className='mx-1' color="#FEC628"  width="40" height="40" />
                <h2 style={{ color: "black" , marginTop:"15px"}}>School</h2>
            </Col>
            <Col
                xl='6'
                className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
            >

                <form
                    className='d-flex align-items-center mb-sm-0 mb-1 me-1'
                    
                >
                   
                    <Button className=' mx-2  send-button' color="black" >
                        Save
                    </Button>
            
                </form>
            </Col>
        </Row>
    </div>
</Card>

    <div className="body card">
    <div className="contact-container"> 
    <div className="form-container">
   
    <form action="" className="contact-form">
    <label> School Name : </label>
     <input type="text" placeholder="School Name" required/>
     <label> School Address: </label>
     <input type="text" placeholder= "Click on map to find tune the school address"  required/>
     

     </form>
   
     </div>
     <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54581.634468963835!2d32.25014990013874!3d31.23867330454308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99c3e939e6b99%3A0x4cae04550f7d4cb3!2sPort%20Said%2C%20Port%20Fouad%20City%2C%20Port%20Said%20Governorate!5e0!3m2!1sen!2seg!4v1678206345677!5m2!1sen!2seg"  style = {{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
    </div>
    </Fragment>
 );


}
export default School