import React from 'react'
import { Chart } from 'react-charts'
import { HeadDrawer } from './drawer.e'
import Close from '../../assets/icons/close.svg'
import axios from 'axios'
const DrawerBlock = ({
    mail,
    close
}) => {

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
        <>
        <div>
            <HeadDrawer>
            <h2>testmail@gmail.com</h2>
            <div>
                <button onClick={close}>
                    <img src={Close} alt="close" />
                </button>
            </div>
            </HeadDrawer>
            
            <div
                style={{
                    width: '400px',
                    height: '300px',
                }}
                >
                <Chart options={{
                     data,
                     primaryAxis,
                     secondaryAxes,
                }}    tooltip />
             </div>
        </div>
        
        </>
    )
}

export default DrawerBlock