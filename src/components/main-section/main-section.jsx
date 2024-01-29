import React, { useEffect } from 'react'
import {
  MainBlockHeader,
  MainSectionBlock, Search, TablleUsers, Title, UsersBlock
} from './main-section.e'
import searchIcon from '../../assets/icons/search-circle.svg'
import editIcon from '../../assets/icons/edit.svg'
import trashIcon from '../../assets/icons/trash.svg'
import arrow from '../../assets/icons/arrow-narrow-down.svg'
import { useMain } from '../../context/main-context'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import DrawerBlock from '../drawer/drawer'
const MainSection = () => {
  const main = useMain()
  useEffect(()=>{
    main.getUsersData()
    
  },[])

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = (id) => {
      setIsOpen((prevState) => !prevState)
  }
  console.log(main.usersData)
  return (
    <>
      <MainSectionBlock className="wrapper">
        <MainBlockHeader>
          <Title>
          Моя организация
          </Title>
        </MainBlockHeader>
        <UsersBlock>
          <Title>Пользователи</Title>
        <form>
          <Search className='search' >
            <div>
              <img src={searchIcon} alt='search icon' />
            </div>
            <input placeholder='Поиск' type="text"  />
          </Search>
        </form>


        <TablleUsers>
            <thead>
              <tr>
                <td>Email</td>
                <td>Имя</td>
                <td>Роль</td>
                <td>Подписка</td>
                <td>
                  <div className='arrow_tokens'>
                    <div>
                      Токены
                    </div>
                    <button>
                      <img src={arrow} alt="arrow" />
                    </button>
                  </div>
                </td>
                <td>Действия</td>
              </tr>
            </thead>
            <tbody>
              {main.usersData?.map((item , idx)=>{
                return (
                  <tr onClick={()=>toggleDrawer(item.id)} key={idx}>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.subscription.plan.type}</td>
                  <td>{item.subscription.tokens} TKN</td>
                  <td>
                    <div>
                      <div>
                        <button>
                          <img src={editIcon} alt="edit" />
                        </button>
                      </div>
                      <div>
                        <button>
                            <img src={trashIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                )
              })}
             
            </tbody>
        </TablleUsers>
        </UsersBlock>
        <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='drawer'
            >
              <DrawerBlock close={()=>setIsOpen(false)}  />
            </Drawer>
      </MainSectionBlock>
    
    </>
    )
}

export default MainSection