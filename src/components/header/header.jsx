import React from 'react';
import defAvatar from '../../assets/icons/default-avatar.svg';
import organisationIcon from '../../assets/icons/organization.svg';
import {
  HeaderBlock,
  Header_Nav,
  Title,
  Organization_block,
  Organization_Title,
  Header_profile,
  User_avatar,
  AdminSubs,
} from './header.e';
const Header = () => {
  return (
    <>
      <HeaderBlock className='wrapper'>
        <Header_Nav>
          <Title>BitTest</Title>
          <Organization_block>
            <div>
              <img src={organisationIcon} alt='organisation' />
            </div>
            <Organization_Title>Моя организация</Organization_Title>
          </Organization_block>
        </Header_Nav>
        <Header_profile>
          <User_avatar>
            <img src={defAvatar} alt='avatar' />
          </User_avatar>
          <AdminSubs>
            <span>Вы авторизованы</span>
            <h2>Администратор</h2>
          </AdminSubs>
        </Header_profile>
      </HeaderBlock>
    </>
  );
};

export default Header;
