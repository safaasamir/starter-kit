import React, {useState,useEffect} from 'react'
import  Chart  from 'react-apexcharts'
import { Pie } from "react-chartjs-2 "








function PieChartDriver() {

    const [parentsobject,setParents]=useState([])
  return (
    <div className='bg-white border border-secondary'><Chart type="pie" series={[3,1]} options={{ 
      title:{
        text:["Total =4","verify = 3" , "NotVerify =1"],

        
        
       
      },
      colors:['#FFA500', '#778899'],
      dataLabels: {
        style: {
          colors: ['green', 'red']
        }
      },
      fill: {
        colors: ['#FFA500', '#778899']
      },
      noData:{
        text:"Empty Data"
      },

     
      labels:["Verify","NotVerify"]
     }}>
    
    
    </Chart></div>
  )
}

export default PieChartDriver