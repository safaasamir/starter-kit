import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import "@src/views/Css/Button.css"
import { Search } from "react-feather"
import { Fragment } from 'react'
import { Icon } from '@iconify/react'
import {Link}  from "react-router-dom"
import {  Trash } from 'react-feather'
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



function BusTable(props)
{
    const {onsubmit, onclick ,setvalue,values,dataTable,prev}= props

    return(
        <Fragment>
        <Card>
            <div className='invoice-list-table-header w-100 me-1 ms-10 mt-0 mb-30 '>
                <Row>
                    <Col xl='6' className='d-flex align-items-center p-1 '>
                    <Icon icon="bx:bus-school"  className='mx-1' color="#FEC628"  width="40" height="40"/>
                        <h2 style={{ color: "black" , marginTop:"15px"}}>Buses</h2>
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


                            <Button className=' mx-1  send-button' color="black" onClick={onclick}>
                                Reset
                            </Button>
                           
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

                                <th scope="col">ID</th>
                                <th scope="col">Lecense</th>
                                <th scope="col">Driver </th>
                                <th scope="col">BusLicense</th>
                                <th scope="col">Registered</th>
                                <th scope="col">action</th>
                                
                                
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
                            dataTable.map((item, index) => (
                                <MDBTableBody key={index}>
                                    <tr>

                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>{item.statue}</td>
                                        <td><Link to ="/"><Trash className='me-50' size={25} color="black" /> <span className='align-middle'>Delete</span> </Link></td>
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
export default BusTable