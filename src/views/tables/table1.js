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
  MDBBtnGroup,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBPagination,
} from "mdb-react-ui-kit";
function Table1() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [sortValueFilter, setsortValueFilter] = useState("");
  const [operation, setOperation] = useState("");
  const [pageLimit] = useState(4);
  const sortOption = ["name", "address", "email", "phone", "statue"];
  useEffect(() => {
    loadUserData(0, 4, 0);
  }, []);


  const loadUserData = async (start, end, increas, optType = null) => {
    switch (optType) {
      case "search":
        setOperation(optType);
        setSortValue("");
        
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

  console.log("data", data);

  const handleReset = () => {
    
    setOperation("");
    setValue("");
    console.log("value",value)
    loadUserData(0, 4, 0);
    console.log("value2",value)
    
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    loadUserData(0, 4, 0, "search");
    // return await axios
    //   .get(`http://localhost:5000/users?q=${value}`)
    //   .then((response) => {
    //     setData(response.data);
    //     setValue("");
    //   })
    //   .catch((err) => console.log(err));
    
  };

  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    return await axios
      .get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };
  const handleFilter = async (value) => {
    return await axios
      .get(`http://localhost:5000/users?statue=${value}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  const renderPagination = () => {
    if(data.length<4 && currentPage===0)return null
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
    <MDBContainer>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignCenter: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search Name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <MDBBtn type="submit" color="dark">
          Search
        </MDBBtn>
        <MDBBtn className="mx-2" color="info" onnClick={() => handleReset()}>
          Reset
        </MDBBtn>
      </form>
      <div style={{ marginTop: "10px" }}>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable responsive hover variant="dark">
              <MDBTableHead dark>
                <tr>
                  <th scope="col">No.</th>
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
                      <th scope="row">{index + 1}</th>
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
      <MDBRow>
        <MDBCol size="8">
          <h5>Sort BY:</h5>
          <select
            style={{ width: "50%", borderRadius: "2px", height: "35px" }}
            onChange={handleSort}
            value={sortValue}
          >
            <option>please select value</option>
            {sortOption.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </MDBCol>
        <MDBCol size="4">
          <h5> Filter By Status:</h5>
          <MDBBtnGroup>
            <MDBBtn color="success" onClick={() => handleFilter("Active")}>
              Active
            </MDBBtn>
            <MDBBtn
              color="danger"
              style={{ marginLeft: "2px" }}
              onClick={() => handleFilter("InActive")}
            >
              InActive
            </MDBBtn>
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
// <Col xl='6' className='d-flex align-items-center p-1'>
// <div className='d-flex align-items-center w-100'>
//   <label htmlFor='rows-per-page'>Show</label>
//   <Input
//     className='mx-50'
//     type='select'
//     id='rows-per-page'
//     style={{ width: '5rem' }}
//   >
//     <option value='10'>10</option>
//     <option value='25'>25</option>
//     <option value='50'>50</option>
//   </Input>
//   <label htmlFor='rows-per-page'>Entries</label>
// </div>
// </Col>

export default Table1;
