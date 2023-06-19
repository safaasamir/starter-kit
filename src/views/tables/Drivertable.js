import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import "@src/views/Css/Button.css"
import {  UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MoreVertical, Edit, Trash} from 'react-feather'
import { FiSend ,FiUsers} from 'react-icons/fi'
import { FaHistory } from 'react-icons/fa'
import { GrNotification } from 'react-icons/gr'
import AddDriver from '../Add/AddDriver'
import { Search } from "react-feather"
import { Fragment } from 'react'
import { Link, useNavigate} from "react-router-dom"
import { User} from "react-feather"
import {
    Row,
    Col,
    Card,
    Input,

    Button,

} from 'reactstrap'

import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBRow,
    MDBCol,

   
} from "mdb-react-ui-kit";



function DRTable(props)
{
   
    
    const {onsubmit, onclick ,setvalue,values,dataTable,prev,}= props
    const navigate=useNavigate();
    const LoadEdit=(id)=>{
     navigate("/edit-driver/"+id)
    }
    const RemoveFunction=(id)=>{
        if(window.confirm('Do You Want to remove?')){
            fetch(" http://localhost:5000/users/"+id,{
                method:"DELETE",
                
            }).then((res)=>{
              alert("Remove success")
              window.location.reload()
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }
    
  
    return(
        <Fragment>
        <Card>
            <div className='invoice-list-table-header w-100 me-1 ms-10 mt-0 mb-30 '>
                <Row>
                    <Col xl='6' className='d-flex align-items-center p-1 '>
                    <User size={40}  className='mx-1' color="#FEC628"  />
                        <h2 style={{ color: "black" , marginTop:"15px"}}>Drivers</h2>
                    </Col>
                    <Col
                        xl='6'
                        className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
                    >

                        <form
                            className='d-flex align-items-center mb-sm-0 mb-1 me-1'
                            onSubmit={onsubmit}
                        >
                            <button type="submit" style={{ backgroundColor: "#FEC628", marginLeft: "20px" }}>
                                <Search size={30} />
                            </button>

                            <Input
                                type="text"
                                placeholder="Search Name..."
                                value={values}
                                onChange={(e) => setvalue(e.target.value)}
                            />


                            <Button className=' ms-1 send-button' color="black" onClick={onclick}>
                                Reset
                            </Button>
                           
                           <Link className=' mx-1  send-button btn d-block'  color="black" to={"/AddDriver"}  >Add</Link>
                            
                            <Link className='   send-button btn d-block'  color="black" to="/drivers-map">Map</Link>
                        </form>
                    </Col>
                </Row>
            </div>
        </Card>
        <div style={{ marginTop: "10px" }}>
            <MDBRow>
                <MDBCol size="12">
                    <MDBTable responsive hover variant="dark">
                        <MDBTableHead dark>
                            <tr>

                                <th scope="col">Name </th>
                                <th scope="col">Telephone</th>
                                <th scope="col">last-Location </th>
                                <th scope="col">Bus-License</th>
                                <th scope="col">Created</th>
                                <th scope="col">Last Update</th>
                                <th scope="col">action </th>
                                
                            </tr>
                        </MDBTableHead>
                        {dataTable.length === 0 ? (
                            <MDBTableBody className="align-center mb-0">
                                <tr>
                                    <td colSpan={8} className="text-center mb-0">
                                        No Data Found
                                    </td>
                                </tr>
                            </MDBTableBody>
                        ) : (
                            dataTable.map((item, id) => (
                                <MDBTableBody key={id}>
                                    <tr>
                                        
                                        <td>{item.name}</td>
                                        <td>+({item.code}){item.phone}</td>
                                        <td >{item.lastlocation}</td>
                                        <td>{item.busLicence}</td>
                                        <td>{item.created}</td>
                                        <td>{item.lastUpdate}</td>
                                        <td><UncontrolledDropdown>
                                        <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                                          <MoreVertical size={15} />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                         <DropdownItem onClick={()=>{LoadEdit(item.id)}}> 
                                            <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                          </DropdownItem>
                                          <DropdownItem onClick={()=>{RemoveFunction(item.id)}}>
                                            <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                          </DropdownItem>
                                          <DropdownItem href='/driver-map' >
                                          <FiSend  className='me-50 my-10' size={15}  /> <span className='align-middle'>map</span>
                                        </DropdownItem>
                                       
                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                        <GrNotification className='me-50 my-10' size={15}  /> <span className='align-middle'>notify</span>
                                      </DropdownItem>
                                      <DropdownItem href='/Driver-parent' >
                                        <FiUsers className='me-50 my-10' size={15}  /> <span className='align-middle'>Parent</span>
                                      </DropdownItem>
                                        
                                        </DropdownMenu>
                                      </UncontrolledDropdown></td>

                                    </tr>
                                </MDBTableBody>
                            ))
                        )}
                    </MDBTable>
                </MDBCol>
            </MDBRow>
            <div style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "250px",
                alignCenter: "center",
            }}>{prev}</div>
        </div>
        
    </Fragment>
    )

}
export default DRTable