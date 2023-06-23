
import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import "@styles/base/core/menu/menu-types/vertical-menu.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    
    MDBBtn,
    MDBPaginationItem,

    MDBPaginationLink,
    MDBPagination,
} from "mdb-react-ui-kit";
import { Link, useNavigate} from "react-router-dom";

import DRTable from '../tables/Drivertable'


function Driver() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [operation, setOperation] = useState("");
    const [pageLimit] = useState(10);
    const navigate=useNavigate();
    const [isLoading,setIsLoading]= useState(true)
    const [errors,setErrors]=useState([])
    useEffect(() => {
        setIsLoading(true);
        loadUserData(0, 10, 0);
        
       
    }, []);


    const loadUserData = async (start, end, increas, optType = null) => {

        
        switch (optType) {
            case "search":
                setOperation(optType);


                return await axios
                    .get(`https://tables-da37f-default-rtdb.firebaseio.com/users.json?q=${value}&_start=${start}&_end=${end}`)
                    
                    .then((response)=> { 
                            
                        const driverDatas=[];
                        for(const key in response.data)
                        {   console.log([key])
                            const driverData={
                                id:key,
                                ...response.data[key]
                            }
                            driverDatas.push(driverData)
                            console.log(value)
                            
                        }

                        
                        setData(driverDatas);
                         setCurrentPage(currentPage + increas);
                         setIsLoading(false) 
                         
                        })
                    .catch((err) => {
                        console.log(err)
                        
                    
                    }
                    

                    );
                    
                  
            default:
                return await axios
                    .get(`https://tables-da37f-default-rtdb.firebaseio.com/users.json?_start=${start}&_end=${end}`)
                    
                      .then((response)=> { 
                            
                        const driverDatas=[];
                        for(const key in response.data)
                        {   
                            const driverData={
                                id:key,
                                ...response.data[key]
                            }
                            driverDatas.push(driverData)
                            
                            
                        }

                        
                        setData(driverDatas);
                         setCurrentPage(currentPage + increas);
                         setIsLoading(false) 
                         
                        })
                    .catch((err) =>
                     {
                        console.log(err)
                        setErrors(err.response.data)
                        
                    });
                    
        }
        
               
    };


    const handleReset = async (e) => {
        setOperation('');

        setValue('');
        loadUserData(0, 10, 0, '');

    };

    const handleSearch = async (e) => {
        e.preventDefault();
        loadUserData(0, 10, 0, "search");


    };

    
    const renderPagination = () => {
        if (data.length < 10 && currentPage === 0) return null
        if (currentPage === 0) {
            return (
                <MDBPagination className="mb-0">
                    <MDBPaginationItem>
                        <MDBPaginationLink>1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBBtn onClick={() => loadUserData(10, 20, 1, operation)}> Next</MDBBtn>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        } else if (currentPage < pageLimit && data.length == pageLimit) {
            return (
                <MDBPagination className="mb-0">

                    <MDBPaginationItem>
                        <MDBBtn onClick={() => loadUserData((currentPage - 1) * 10, (currentPage) * 10, -1, operation)}> prev</MDBBtn>
                    </MDBPaginationItem>
                    <MDBPaginationItem><MDBPaginationLink>{currentPage + 1}</MDBPaginationLink></MDBPaginationItem>


                    <MDBPaginationItem>
                        <MDBBtn onClick={() => loadUserData((currentPage + 1) * 10, (currentPage + 2) * 10, 1, operation)}> Next</MDBBtn>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        } else {
            return (
                <MDBPagination className="mb-0">

                    <MDBPaginationItem>
                        <MDBBtn onClick={() => loadUserData((currentPage - 1) * 10, (currentPage) * 10, -1, operation)}> prev</MDBBtn>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink>{currentPage}</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        }
    };
    if (isLoading){
        return (<div className="fallback-spinner app-loader">
        
        <div className="loading">
          <div className="effect-1 effects"></div>
          <div className="effect-2 effects"></div>
          <div className="effect-3 effects"></div>
        </div>
      </div>)
      
    }

    
    return (

        
        <DRTable onsubmit={handleSearch} onclick={handleReset} setvalue={setValue} values={value} setdata={setData} dataTable={data} prev={renderPagination()} />
        
      
        
     
    );
}

export default Driver;

