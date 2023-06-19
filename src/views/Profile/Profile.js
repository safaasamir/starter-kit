import "@src/views/Css/Profile.css"
import { User } from "react-feather"
import { Fragment } from "react";
import Select from 'react-select'
import { useRef,useState } from "react";
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, FormFeedback } from 'reactstrap'
import { JsonWebTokenError } from "jsonwebtoken";
const Profile = () => {
    const inputRef = useRef(null)
    const[image,setImage]=useState("")
    const handleImageClick=()=>{
        inputRef.current.click()
    }
    const handleImageChange=(event)=>{
        const file=event.target.files[0];
        console.log(file)
        setImage(event.target.files[0])
    }

//  const profileChange=()=>{
//     fetch("https://profile-e9de4-default-rtdb.firebaseio.com/profile.json",{
//         method:"POST",
//         body:JSON.stringify(),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })
//  }
    return (
        <Fragment >
        
            <Card >
            
                <CardHeader className='border-bottom'>
                    <CardTitle tag='h4'>Profile Details</CardTitle>
                </CardHeader>
                <CardBody  className='py-2 my-25 '>
                    <div   className='d-flex'>
                        <div className='me-25' >
                        {image ? <img src={URL.createObjectURL(image)} alt="" height='100' width='100'/>:<img className='rounded me-50' alt='Generic placeholder image' height='100' width='100' /> }
                            
                            <input ref={inputRef} type="file" onChange={handleImageChange} style={{ display:"none" }}/>
                        </div>
                        <div className='d-flex align-items-end mt-75 ms-1'>
                            <div>
                                <Button onClick={handleImageClick} className='mb-75 me-75' size='sm' color='primary'>
                                    Upload
                                    <Input type='file' hidden accept='image/*' />
                                </Button>
                                <Button className='mb-75' color='secondary' size='sm' outline >
                                    Reset
                                </Button>
                                <p className='mb-0'>Allowed JPG, GIF or PNG. Max size of 800kB</p>
                            </div>
                        </div>
                    </div>
                    
                    <Form   className='mt-2 pt-50' >
                        <Row >
                            <Col sm='6' className='mb-1'>
                                <Label className='form-label' for='firstName'>
                                    First Name
                                </Label>
                                <Input id='firstName' placeholder='John' />
                            </Col>
                            
                            <Col sm='6' className='mb-1'>
                                <Label className='form-label' for='lastName'>
                                    Last Name
                                </Label>
                                <Input id='lastName' placeholder='Doe' />
                            </Col>
                            </Row>
                            <Row>
                            { 
                                <Col sm='6' className='mb-1'>
                                <Label className='form-label' for='email'>
                                    Email
                                </Label>
                                <Input id='email'  className='form-control'
                                placeholder='email'  name='email' />

                                </Col> 
                            }
                           
                            <Col sm='6' className='mb-1'>
                              
                                
                                  <InputPasswordToggle
                                    label='Current Password'
                                    htmlFor='currentPassword'
                                    className='input-group-merge'
                                   
                                  />
                                
                            </Col>
                          
                          <Row>
                            <Col sm='6' className='mb-1'>
                              
                                  <InputPasswordToggle
                                    label='New Password'
                                    htmlFor='newPassword'
                                    className='input-group-merge'
                                    
                              />
                              
                            </Col>
                            
                            <Col sm='6' className='mb-1'>
                              
                                  <InputPasswordToggle
                                    label='Retype New Password'
                                    htmlFor='retypeNewPassword'
                                    className='input-group-merge'
                                   
                              />
                              
                            </Col>
                            <Col xs={12}>
                              <p className='fw-bolder'>Password requirements:</p>
                              <ul className='ps-1 ms-25'>
                                <li className='mb-50'>Minimum 8 characters long - the more, the better</li>
                                <li className='mb-50'>At least one lowercase character</li>
                                <li>At least one number, symbol, or whitespace character</li>
                              </ul>
                            </Col>

                            <Col className='mt-2' sm='12'>
                                <Button type='submit' className='me-1' color='primary'>
                                    Save changes
                                </Button>
                                <Button color='secondary' outline>
                                    Discard
                                </Button>
                            </Col>
                        </Row>
                       </Row>
                    </Form>
                    
                </CardBody>
               
            </Card>
            
        </Fragment>
    )
}
export default Profile


// // ** React Imports
// import { Fragment, useState } from 'react'

// // ** Third Party Components
// import Select from 'react-select'
// import Cleave from 'cleave.js/react'
// import { useForm, Controller } from 'react-hook-form'
// //import 'cleave.js/dist/addons/cleave-phone.us'

// // ** Reactstrap Imports
// import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, FormFeedback } from 'reactstrap'

// // ** Utils
// import { selectThemeColors } from '@utils'

// // ** Demo Components
// //import DeleteAccount from './DeleteAccount'

// const Profile = () => {

//     return (
//         <Fragment>
//             <Card>
//                 <CardHeader className='border-bottom'>
//                     <CardTitle tag='h4'>Profile Details</CardTitle>
//                 </CardHeader>
//                 <CardBody className='py-2 my-25'>
//                     <div className='d-flex'>
//                         <div className='me-25'>
//                             <img className='rounded me-50' src="" alt='Generic placeholder image' height='100' width='100' />
//                         </div>
//                         <div className='d-flex align-items-end mt-75 ms-1'>
//                             <div>
//                                 <Button className='mb-75 me-75' size='sm' color='primary'>
//                                     Upload
//                                     <Input type='file' hidden accept='image/*' />
//                                 </Button>
//                                 <Button className='mb-75' color='secondary' size='sm' >
//                                     Reset
//                                 </Button>
//                                 <p className='mb-0'>Allowed JPG, GIF or PNG. Max size of 800kB</p>
//                             </div>
//                         </div>
//                     </div>
//                     <Form className='mt-2 pt-50' >
//                         <Row>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='firstName'>
//                                     First Name
//                                 </Label>


//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='lastName'>
//                                     Last Name
//                                 </Label>


//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='emailInput'>
//                                     E-mail
//                                 </Label>
//                                 <Input id='emailInput' type='email' name='email' placeholder='Email' />
//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='company'>
//                                     Company
//                                 </Label>
//                                 <Input id='company' name='company' placeholder='Company Name' />
//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='phNumber'>
//                                     Phone Number
//                                 </Label>
//                                 <Cleave
//                                     id='phNumber'
//                                     name='phNumber'
//                                     className='form-control'
//                                     placeholder='1 234 567 8900'

//                                 />
//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='address'>
//                                     Address
//                                 </Label>
//                                 <Input id='address' name='address' placeholder='12, Business Park' />
//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='accountState'>
//                                     State
//                                 </Label>
//                                 <Input id='accountState' name='state' placeholder='California' />
//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='zipCode'>
//                                     Zip Code
//                                 </Label>
//                                 <Input id='zipCode' name='zipCode' placeholder='123456' maxLength='6' />
//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='country'>
//                                     Country
//                                 </Label>
//                                 <Select
//                                     id='country'


//                                 />
//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='language'>
//                                     Language
//                                 </Label>
//                                 <Select
//                                     id='language'


//                                 />
//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='timeZone'>
//                                     Timezone
//                                 </Label>
//                                 <Select
//                                     id='timeZone'


//                                 />
//                             </Col>
//                             <Col sm='6' className='mb-1'>
//                                 <Label className='form-label' for='currency'>
//                                     Currency
//                                 </Label>
//                                 <Select
//                                     id='currency'


//                                 />
//                             </Col>
//                             <Col className='mt-2' sm='12'>
//                                 <Button type='submit' className='me-1' color='primary'>
//                                     Save changes
//                                 </Button>
//                                 <Button color='secondary' outline>
//                                     Discard
//                                 </Button>
//                             </Col>
//                         </Row>
//                     </Form>
//                 </CardBody>
//             </Card>

//         </Fragment>
//     )
// }

// export default Profile
