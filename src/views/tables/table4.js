import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import { Search } from "react-feather"
import { Fragment } from 'react'
import {  Share, Printer, FileText, File, Grid, Copy } from 'react-feather'
import {
    Row,
    Col,
    Card,
    Input,
    Label,
    Button,
    CardBody,
    CardTitle,
    CardHeader,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown
  } from 'reactstrap'
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtn,
    MDBPaginationItem,
    MDBBtnGroup,
    MDBPaginationLink,
    MDBPagination,
  } from "mdb-react-ui-kit"; 

  function Table4() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [operation, setOperation] = useState("");
    const [pageLimit] = useState(4);
   
    useEffect(() => {
      loadUserData(0, 4, 0);
    }, []);
  
  
    const loadUserData = async (start, end, increas, optType = null) => {
      switch (optType) {
        case "search":
          setOperation(optType);
         
          
          return await axios
            .get(`http://localhost:5000/users?q=${value}&_start=${start}&_end=${end}`)
            .then((response) => {
              setData(response.data);
              setCurrentPage(currentPage + increas);})
              .catch((err) => console.log(err)
              
              );
             
            default: 
              return await axios
            .get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
            .then((response) => { setData(response.data); setCurrentPage(currentPage + increas) })
            .catch((err) => console.log(err));
      }
     
    };
  
  
    const handleReset = async (e) => {
    setOperation('');
      
      setValue('');
      loadUserData(0, 4, 0,'');
      
    };

    const handleSearch = async (e) => {
      e.preventDefault();
      loadUserData(0, 4, 0, "search");
      
      
    };
  
    
  
    const renderPagination = () => {
      if(data.length < 4 && currentPage===0) return null
      if (currentPage === 0) {
        return (
          <MDBPagination className="mb-0">
            <MDBPaginationItem>
              <MDBPaginationLink>1</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBBtn onClick={() => loadUserData(4, 8, 1, operation)}> Next</MDBBtn>
            </MDBPaginationItem>
          </MDBPagination>
        );
      } else if (currentPage < pageLimit && data.length == pageLimit) {
        return (
          <MDBPagination className="mb-0">
  
            <MDBPaginationItem>
              <MDBBtn onClick={() => loadUserData((currentPage - 1) * 4, (currentPage) * 4, -1, operation)}> prev</MDBBtn>
            </MDBPaginationItem>
            <MDBPaginationItem><MDBPaginationLink>{currentPage + 1}</MDBPaginationLink></MDBPaginationItem>
  
  
            <MDBPaginationItem>
              <MDBBtn onClick={() => loadUserData((currentPage + 1) * 4, (currentPage + 2) * 4, 1, operation)}> Next</MDBBtn>
            </MDBPaginationItem>
          </MDBPagination>
        );
      } else {
        return (
          <MDBPagination className="mb-0">
  
            <MDBPaginationItem>
              <MDBBtn onClick={() => loadUserData((currentPage - 1) * 4, (currentPage) * 4, -1, operation)}> prev</MDBBtn>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink>{currentPage}</MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
        );
      }
    };
    return (
      

        <Fragment>
          <Card>
          <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
          <Row>
            <Col xl='6' className='d-flex align-items-center p-1'>
              <div className='d-flex align-items-center w-100'>
                <label htmlFor='rows-per-page'>Show</label>
                <Input
                  className='mx-50'
                  type='select'
                  id='rows-per-page'
                  style={{ width: '5rem' }}
                >
                  <option value='10'>10</option>
                  <option value='25'>25</option>
                  <option value='50'>50</option>
                </Input>
                <label htmlFor='rows-per-page'>Entries</label>
              </div>
            </Col>
            <Col
              xl='6'
              className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
            >
             
            <form
               className='d-flex align-items-center mb-sm-0 mb-1 me-1'
              onSubmit={handleSearch}
            >
              <Input
                type="text"
                className='ms-50 w-100'
                placeholder="Search Name..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit" style={{backgroundColor:"#FEC628"}}>
              <Search size={30} />
            </button>
              
            <Button className='add-new-user m-1 ' color='primary' onClick={() => handleReset() }>
            Reset
          </Button>
          <Button className='add-new-user ' color='primary' >
                  Add 
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
                
                    <th scope="col">Name </th>
                    <th scope="col">Email</th>
                    <th scope="col">Telephone </th>
                    <th scope="col">Location</th>
                    <th scope="col">NoChild</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Created </th>
                    <th scope="col">Wallet</th>
                    <th scope="col">payDate</th>
                    <th scope="col">edit</th>
                  </tr>
                </MDBTableHead>
                {data.length === 0 ? (
                  <MDBTableBody className="align-center mb-0">
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        No Data Found
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  data.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.statue}</td>
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
          }}>{renderPagination()}</div>
        </div>
        </Fragment>
    
    );
  }
  
  export default Table4;
  
