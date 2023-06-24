import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import "@src/views/Css/Button.css"
import { Search } from "react-feather"
import { Fragment } from 'react'
import { Link, Navigate} from "react-router-dom"
import { User} from "react-feather"
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect  } from 'react'
import {  UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MoreVertical, Edit, Trash } from 'react-feather'
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
import { getDatasetAtEvent } from 'react-chartjs-2'
import CheckDriverModal from './CheckDriverModal'

function CheckDriver(props)
{   
    const {onsubmit, onclick ,setvalue,values,dataTable,prev}= props
    const [model,setModel] = useState(false)
    // const [tempdata,setTempdata]=useState([])
    // const [Accept,setAccept]=useState({thing})
    // const {empid}=useParams();
    
     const getData=(empid)=>{
    //     let tempdata=[id,name,lic,licUrl,drag,identify,Accept]
    //     setTempdata(item=>[1,...tempdata])
    //     return setModel(true)

    fetch(" http://localhost:5000/check/"+empid).then((res)=>{
          return res.json();
        }).then((resp)=>{
            
           nameChange(resp.name)
           idChange(resp.id)
           licChange(resp.Liceance)
           acceptChange(resp.Acception)
           dragChange(resp.DragTesturl)
           licUrlChange(resp.LiceanceUrl)
           identifyChange(resp.IdentificationCardUrl)
          
         return setModel(true)
    
        }) .catch((err)=>{
       
            console.log(err.message)
        })
     }

    
    useEffect(()=>{
        fetch(" http://localhost:5000/check").then((res)=>{
          return res.json();
        }).then((resp)=>{
            
           nameChange(resp.name)
           idChange(resp.id)
           licChange(resp.Liceance)
           acceptChange(resp.Acception)
           dragChange(resp.DragTesturl)
           licUrlChange(resp.LiceanceUrl)
           identifyChange(resp.IdentificationCardUrl)
    
        }) .catch((err)=>{
       
            console.log(err.message)
        })
      },[])
     // let thing=" Not Accept"
      const [id,idChange]=useState("")
      const [name,nameChange]=useState("")
      const [Liceance,licChange]=useState("")
      const [Acception,acceptChange]=useState("")
      const [DragTesturl,dragChange]=useState("")
      const [LiceanceUrl,licUrlChange]=useState("")
      const [IdentificationCardUrl,identifyChange]=useState("")
      const navigate=useNavigate();


    const check=()=>{
        const data ={id,name,Liceance,LiceanceUrl,DragTesturl,Acception,IdentificationCardUrl}
      
        fetch(" http://localhost:5000/check/"+id,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        }).then((e)=>{
           
          setModel(false)
          window.location.reload(false);
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    return(
        <Fragment>
        <Card>
            <div className='invoice-list-table-header w-100 me-1 ms-10 mt-0 mb-30 '>
                <Row>
                    <Col xl='6' className='d-flex align-items-center p-1 '>
                    <User size={40}  className='mx-1' color="#FEC628"  />
                        <h2 style={{ color: "black" , marginTop:"15px"}}>Check Drivers</h2>
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

                                <th scope="col">ID </th>
                                <th scope="col">Name</th>
                                <th scope="col"> Profile Details </th>
                                <th scope="col">Acception </th>
                                
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

                                        <td value={id}>{item.id}</td>
                                        <td value={name}>{item.name}</td>
                                        <td><button onClick={()=>{getData(item.id) }} className='btn btn-warning' > View Details</button></td>
                                        <td value={Acception}><p >{item.Acception}</p></td>
                                        
                                       
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
{model===true? <CheckDriverModal id={id} name={name} lice={Liceance} licUrl={LiceanceUrl} drag={DragTesturl}  Acception={Acception} identify={IdentificationCardUrl} hide={()=>setModel(false)} licChange={licChange} nameChange={nameChange} licUrlChange={licUrlChange} dragChange={dragChange}
 identifyChange={identifyChange} acceptChange={acceptChange} check={check}/> :""}
       
    </Fragment>
    )

}
export default CheckDriver