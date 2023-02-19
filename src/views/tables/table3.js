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
      
        
      
      
    </MDBContainer>
  );
}

export default Table1 ;
