import React from 'react'
import { Chart } from 'react-charts'
import { ChartContainer, ChartTitle } from './charts.e'

const Charts = ({chartData}) => {
       // данные
  
    // charts
    const data = [
        {
          label: 'Использование токенов',
          data: [
            {
              date: new Date(),
              stars: 23467238,
            },
            {
                date: new Date(),
                stars: 23467238,
              },
              {
                date: new Date(),
                stars: 23467238,
              },   {
                date: new Date(),
                stars: 23467238,
              },
              {
                date: new Date(),
                stars: 23467238,
              },   {
                date: new Date(),
                stars: 23467238,
              },   {
                date: new Date(),
                stars: 23467238,
              },
          ],
        },
      ]
    
      const primaryAxis = React.useMemo(
        () => ({
          getValue: datum => datum.date,
        }),
        []
      )
    
      const secondaryAxes = React.useMemo(
        () => [
          {
            getValue: datum => datum.stars,
          },
        ],
        []
      )
  return (
    <ChartContainer>
        <ChartTitle>Использование токенов</ChartTitle>
    <Chart options={{
         data,
         primaryAxis,
         secondaryAxes,
    }}    tooltip />
 </ChartContainer>
  )
}

export default Charts