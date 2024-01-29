import React from 'react'
import {
  MainBlockHeader,
  MainSectionBlock, Search, TablleUsers, Title, UsersBlock
} from './main-section.e'
import searchIcon from '../../assets/icons/search-circle.svg'
import editIcon from '../../assets/icons/edit.svg'
import trashIcon from '../../assets/icons/trash.svg'
const MainSection = () => {
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
                <td>Токены</td>
                <td>Действия</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>testmail@gmail.com</td>
                <td>Эдуард</td>
                <td>USER</td>
                <td>Free</td>
                <td>97000 TKN</td>
                <td>
                  <img src={editIcon} alt="edit" />
                  <img src={trashIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td>testmail@gmail.com</td>
                <td>Эдуард</td>
                <td>USER</td>
                <td>Free</td>
                <td>97000 TKN</td>
                <td>
                  <img src={editIcon} alt="edit" />
                  <img src={trashIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td>testmail@gmail.com</td>
                <td>Эдуард</td>
                <td>USER</td>
                <td>Free</td>
                <td>97000 TKN</td>
                <td>
                  <img src={editIcon} alt="edit" />
                  <img src={trashIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td>testmail@gmail.com</td>
                <td>Эдуард</td>
                <td>USER</td>
                <td>Free</td>
                <td>97000 TKN</td>
                <td>
                  <img src={editIcon} alt="edit" />
                  <img src={trashIcon} alt="" />
                </td>
              </tr>
            </tbody>
        </TablleUsers>
        </UsersBlock>
      </MainSectionBlock>
    
    </>
    )
}

export default MainSection