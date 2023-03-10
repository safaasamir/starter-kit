
import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/react/libs/react-select/_react-select.scss'

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    
    MDBBtn,
    MDBPaginationItem,

    MDBPaginationLink,
    MDBPagination,
} from "mdb-react-ui-kit";

import ParentTable from '../tables/Parenttable'
function Parent() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [operation, setOperation] = useState("");
    const [pageLimit] = useState(10);

    useEffect(() => {
        loadUserData(0, 10, 0);
    }, []);


    const loadUserData = async (start, end, increas, optType = null) => {
        switch (optType) {
            case "search":
                setOperation(optType);


                return await axios
                    .get(`http://localhost:5000/users?q=${value}&_start=${start}&_end=${end}`)
                    .then((response) => {
                        setData(response.data);
                        setCurrentPage(currentPage + increas);
                    })
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
    return (


        <ParentTable onsubmit={handleSearch} onclick={handleReset} setvalue={setValue} values={value} dataTable={data} prev={renderPagination()}/>

    );
}

export default Parent;

