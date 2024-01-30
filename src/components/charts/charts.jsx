import React, { useEffect, useRef } from 'react';
import { ChartContainer, ChartTitle } from './charts.e'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useMain } from '../../context/main-context';

const Charts = ({id}) => {


  const main = useMain()

  useEffect(()=>{
    main.getOneUserData(id)
  },[])
  console.log(main.drawerData)
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
 const options = {
    responsive: true,
    interaction: {
      mode: 'index' ,
      intersect: false,
    },
    stacked: false,
   
    scales: {
      y: {
        type: 'linear' ,
        display: true,
        position: 'right' ,
      },
    
    },
  };
  
  const labels = main.drawerData?.map((item) => item.created_at.slice(17));
  const tokensCh = main.drawerData?.map((item)=>item.amount)
  
 const data = {
    labels,
    datasets: [
      {
        label: '',
        data: tokensCh,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(19, 91, 139)',
  
        yAxisID: 'y',
      },
    
    ],
  };
  return (
    <ChartContainer>
        <ChartTitle>Использование токенов</ChartTitle>
        <Line data={data} options={options} />
    </ChartContainer>
  )
}

export default Charts