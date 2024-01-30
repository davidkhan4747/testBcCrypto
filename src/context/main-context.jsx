import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const Main = createContext()

export const useMain = () => {
    return useContext(Main)
}
const MainContext = ({children}) => {
  const API_URL = 'https://test.gefara.xyz/api/v1'
  const [usersData , setUsersData] = useState()
  const [drawerData , setDrawerData] = useState()
//   sheet code
    const [userMail , setUserMail] = useState()
    const [userType , sertUserType] = useState()
    const [userSum , setUserSum] = useState()
    const [userDate , setuserDate] = useState()
    const userDrawedata = { 
        email : userMail,
        type : userType,
        sum : userSum,
        date : userDate
    }
    const [chartId , setChartid] = useState()
  //   получение данных пользователей
  const getUsersData = () => {
    axios.get(`${API_URL}/user/list`).then((res)=>{
        setUsersData(res.data.data)
      }).catch((err)=>{
            console.log(err)
      })
  }
//  данные пользователя для chart
const getOneUserData = (id) => {
    axios.get(`${API_URL}/user/${id}/transactions`).then((res)=>{
        setDrawerData(res.data)
        console.log(res.data)
    }).catch((err)=>{
        console.error(err)
    })
}

  return (
        <>
            <Main.Provider value={{
                getUsersData,
                usersData,
                getOneUserData,
                drawerData,
                userMail , setUserMail,
                userDate ,setuserDate,
                userType , sertUserType,
                userSum , setUserSum,
                userDrawedata,
                chartId , setChartid
                
            }}>
                {children}
            </Main.Provider>
        </>
    )
}

export default MainContext