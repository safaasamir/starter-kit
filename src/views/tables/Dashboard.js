import React from 'react'
//import"bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

 import LineChat from './LineChat'
 import PieChart  from './PieChart'

function Dashboard() {
    return (
        <div className=' bg-light'>
        <div className='container-fluid'>
            <div className='row'>


                    <div className=' col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-light'>
                    <div  className='d-flex justify-content-between p-2 align-items-center
                    bg-white border border-secondary shadow-sm'>
                            <i className='bi bi-person-circle fs-1 text-success'></i>
                            <div>
                            <span>Parents</span>
                            <h2>3</h2></div>
                            </div>
                    </div>

                    <div className=' col-12 col-sm- col-md-4 col-lg-3 p-2 bg-light'>
                    <div  className='d-flex justify-content-between p-2 align-items-center
                    bg-white border border-secondary shadow-sm'>
                            <i className='bi bi-file-person fs-1 text-warning'></i>
                            <div>
                            <span>Driver</span>
                            <h2>4</h2></div>
                            </div>
                    </div>

                    <div className=' col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-light'>
                            <div  className='d-flex justify-content-between p-2 align-items-center
                            bg-white border border-secondary shadow-sm'>
                                    <i className='bi bi-bus-front fs-1 text-primary' ></i>
                                    <div>
                                    <span>buses</span>
                                    <h2>5</h2></div>
                                    </div>
                    </div>


                    <div className=' col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-light'>
                    <div  className='d-flex justify-content-between p-2 align-items-center
                    bg-white border border-secondary shadow-sm'>
                            <i className='bi bi-currency-dollar fs-1 text-danger'></i>
                            <div>
                            <span>profit</span>
                            <h2>1500</h2></div>
                            </div>
                    </div>


                  
            </div>
            <div className='row'>
            <div className='col-12 col-md-8 col-lg-8  p-3'>
                <LineChat/>
            </div>
            <div className='col-12 col-md-6 col-lg-4 p-3'>
            <PieChart/>
            </div>
            </div>


        </div>
        </div>
    )
}

export default Dashboard