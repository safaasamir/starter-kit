import React from "react";
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import { Fragment } from 'react'
import {  Share, Printer, FileText, File, Grid, Copy } from 'react-feather'
import Table1  from "./table3";

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
  
const Userdata =()=>
{
    
    return (
       // <Fragment>
        //  <Card>
        //     <CardHeader>
        //       <CardTitle tag='h4'>Filters</CardTitle>
        //     </CardHeader>
        //     <CardBody>
        //       <Row>
        //         <Col md='4'>
        //           <Label for='role-select'>Role</Label>
        //           <Select
        //             isClearable={false}
        //             className='react-select'
        //             classNamePrefix='select'
        //             theme={selectThemeColors}
        //           />
        //         </Col>
        //         <Col className='my-md-0 my-1' md='4'>
        //           <Label for='plan-select'>Plan</Label>
        //           <Select
        //             theme={selectThemeColors}
        //             isClearable={false}
        //             className='react-select'
        //             classNamePrefix='select'
                   
        //           />
        //         </Col>
        //         <Col md='4'>
        //           <Label for='status-select'>Status</Label>
        //           <Select
        //             theme={selectThemeColors}
        //             isClearable={false}
        //             className='react-select'
        //             classNamePrefix='select'
                    
        //           />
        //         </Col>
        //       </Row>
        //     </CardBody>
        //   </Card>
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
              <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
                <label className='mb-0' htmlFor='search-invoice'>
                  Search:
                </label>
                <Input
                  id='search-invoice'
                  className='ms-50 w-100'
                  type='text'
                  
                 
                />
              </div>
    
              <div className='d-flex align-items-center table-header-actions'>
                <UncontrolledDropdown className='me-1'>
                  <DropdownToggle color='secondary' caret outline>
                    <Share className='font-small-4 me-50' />
                    <span className='align-middle'>Export</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem className='w-100'>
                      <Printer className='font-small-4 me-50' />
                      <span className='align-middle'>Print</span>
                    </DropdownItem>
                    <DropdownItem className='w-100' onClick={() => downloadCSV(store.data)}>
                      <FileText className='font-small-4 me-50' />
                      <span className='align-middle'>CSV</span>
                    </DropdownItem>
                    <DropdownItem className='w-100'>
                      <Grid className='font-small-4 me-50' />
                      <span className='align-middle'>Excel</span>
                    </DropdownItem>
                    <DropdownItem className='w-100'>
                      <File className='font-small-4 me-50' />
                      <span className='align-middle'>PDF</span>
                    </DropdownItem>
                    <DropdownItem className='w-100'>
                      <Copy className='font-small-4 me-50' />
                      <span className='align-middle'>Copy</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
    
                <Button className='add-new-user m-1 ' color='primary' >
                  Add New User
                </Button>
              </div>
            </Col>
          </Row>
        </div>
          </Card>

      <Card>
      <Table1/>
      </Card>
         
          
        </Fragment>
        
      )
}
export default Userdata