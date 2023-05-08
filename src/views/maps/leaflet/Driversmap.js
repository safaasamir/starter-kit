import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import "@src/views/Css/Button.css"
import "@src/views/Css/Map.css"
// import {  UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
// import { MoreVertical, Edit, Trash} from 'react-feather'
// import { FiSend ,FiUsers} from 'react-icons/fi'
// import { FaHistory } from 'react-icons/fa'
// import { GrNotification } from 'react-icons/gr'

// import { Search } from "react-feather"
import { Fragment } from 'react'
// import { Link} from "react-router-dom"
// import { User} from "react-feather"
import teslaData from "../../../../db.json"
import {
    Row,
    Col,
    Card,
    Input,

    Button,

} from 'reactstrap'

// import {
//     MDBTable,
//     MDBTableHead,
//     MDBTableBody,
//     MDBRow,
//     MDBCol,


// } from "mdb-react-ui-kit";


// function DriversMap()
// {



//     return(
//         <Fragment>
//         <Card>
//             <div className='invoice-list-table-header w-100 me-1 ms-10 mt-0 mb-30 '>
//                 <Row>
//                     <Col xl='6' className='d-flex align-items-center p-1 '>

//                         <h2 style={{ color: "black" , marginTop:"10px",marginLeft:"10px"}}>Drivers Location</h2>

//                     </Col>

//                 </Row>

//             </div>

//         </Card>
//         <Card > <div className='containers '>

//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54581.63446896323!2d32.25014990013874!3d31.23867330454308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99c3e939e6b99%3A0x4cae04550f7d4cb3!2sPort%20Said%2C%20Port%20Fouad%20City%2C%20Port%20Said%20Governorate!5e0!3m2!1sen!2seg!4v1678472866362!5m2!1sen!2seg" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//         </div></Card>
//        </Fragment>
//     )

// }
// export default DriversMap
// // import React, { useState, useEffect } from 'react';
// // import L from 'leaflet';

// // function DriversMap() {
// //   const [location, setLocation] = useState(null);

// //   useEffect(() => {
// //     fetch('https://example.com/api/location')
// //       .then(response => response.json())
// //       .then(data => setLocation(data));
// //   }, []);

// //   useEffect(() => {
// //     if (location) {
// //       const map = L.map('map').setView([location.latitude, location.longitude], 13);
// //       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
// //         maxZoom: 18,
// //       }).addTo(map);
// //       L.marker([location.latitude, location.longitude]).addTo(map);
// //     }
// //   }, [location]);

// //   return <div id="map" style={{ height: '400px' }}></div>;
// // }

// // export default DriversMap;

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "./Driversmap.css"


function DriversMap() {


  const{id,filter}=teslaData.maps;
  const filteredStations=teslaData.maps.filter(tsla=>tsla.address.country=="Italy")
  return (
  
    
    <Fragment>
        <Card>
            <div className='invoice-list-table-header w-100 me-1 ms-10 mt-0 mb-30 '>
                <Row>
                    <Col xl='6' className='d-flex align-items-center p-1 '>

                        <h2 style={{ color: "black" , marginTop:"10px",marginLeft:"10px"}}>Drivers Location</h2>

                    </Col>

                </Row>

            </div>

        </Card>
        <Card > <div className='containers '>

        
    <MapContainer center={[41.684399, 14.207605]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       {filteredStations.map(tsla=>(
         
        <Marker key={tsla.id} position={[tsla.gps.latitude, tsla.gps.longitude]}>
            <Popup position={[tsla.gps.latitude, tsla.gps.longitude]}>
                <div>
                <h4>
                {"Name: " + tsla.name}

                </h4></div>
            </Popup>
        

        </Marker>
       ))}
      
    </MapContainer>
    </div></Card>
        </Fragment>
   
  )
} export default DriversMap;