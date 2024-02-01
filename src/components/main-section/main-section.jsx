import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import {
  MainBlockHeader,
  MainSectionBlock,
  Search,
  TablleUsers,
  Title,
  UsersBlock,
} from './main-section.e';
import searchIcon from '../../assets/icons/search-circle.svg';
import editIcon from '../../assets/icons/edit.svg';
import trashIcon from '../../assets/icons/trash.svg';
import arrow from '../../assets/icons/arrow-narrow-down.svg';
import arrowUp from '../../assets/icons/arrow-narrow-up.svg';
import arrowLeft from '../../assets/icons/arrow-narrow-left.svg';
import arrowRight from '../../assets/icons/arrow-narrow-right.svg';
import { useMain } from '../../context/main-context';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import DrawerBlock from '../drawer/drawer';
import Loader from '../priiloader/priiloader';

const MainSection = () => {
  const main = useMain();
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemOffset, setItemOffset] = useState(0);

  // appendQueryParam
  const appendQueryParam = (key, value) => {
    const params = new URLSearchParams(searchParams);

    params.set(key, value);

    setSearchParams(params);
  };
  // appendQueryParam

  // drawer
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'scroll';
  }

  const toggleDrawer = (id, mail) => {
    setIsOpen((prevState) => !prevState);
    main.getOneUserData(id);
    main.setUserMail(mail);
    main.setChartid(id);
  };

  // search
  const [searchData, setSearchData] = useState('');

  const searchText = (e) => {
    setSearchData(e.target.value);
  };

  const dataSearch = main?.usersData
    ?.filter((item) => {
      return item.email?.toLowerCase().includes(searchData?.toLowerCase());
    })
    .sort((a, b) => {
      const aTokens = a.subscription.tokens;
      const bTokens = b.subscription.tokens;

      return searchParams.get('sort') === 'desc'
        ? bTokens - aTokens
        : aTokens - bTokens;
    });

  const toggleSort = () => {
    const param = searchParams.get('sort');

    if (param === 'desc') {
      appendQueryParam('sort', 'asc');
    } else {
      appendQueryParam('sort', 'desc');
    }
  };

  // pagination
  const endOffset = itemOffset + 10;
  const currentItems = dataSearch?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataSearch?.length / 10);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % dataSearch?.length;
    appendQueryParam('page', event.selected);
    setItemOffset(newOffset);
  };
  // pagination

  useEffect(() => {
    main.getUsersData();
  }, []);
  return (
    <>
      <div className='main-box'>
        <div className='wrapper'>
          <MainBlockHeader>
            <Title>Моя организация</Title>
          </MainBlockHeader>
          <UsersBlock>
            <Title>Пользователи</Title>
            <form>
              <Search className='search'>
                <div>
                  <img src={searchIcon} alt='search icon' />
                </div>
                <input
                  value={searchData}
                  onChange={searchText.bind(this)}
                  placeholder='Поиск'
                  type='text'
                />
              </Search>
            </form>
          </UsersBlock>
        </div>
        <MainSectionBlock className='wrapper wrap-1'>
          <TablleUsers>
            <thead>
              <tr>
                <td>Email</td>
                <td>Имя</td>
                <td>Роль</td>
                <td>Подписка</td>
                <td>
                  <div className='arrow_tokens' onClick={toggleSort}>
                    <div>Токены</div>
                    <button>
                      <img
                        src={
                          searchParams.get('sort') === 'desc' ? arrow : arrowUp
                        }
                        alt='arrow'
                      />
                    </button>
                  </div>
                </td>
                <td>Действия</td>
              </tr>
            </thead>
            <tbody>

              {currentItems ? (
                <>
              {currentItems?.map((item, idx) => {
                return (
                  <tr
                    onClick={() => toggleDrawer(item.id, item.email)}
                    key={idx}
                  >
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                    <td>{item.subscription.plan.type}</td>
                    <td>{item.subscription.tokens} TKN</td>
                    <td>
                      <div>
                        <div>
                          <button>
                            <img src={editIcon} alt='edit' />
                          </button>
                        </div>
                        <div>
                          <button>
                            <img src={trashIcon} alt='' />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
                </>
              ):(
                <Loader/>
              )}
            </tbody>
            <tfoot>
              <td colSpan={12}>
                <ReactPaginate
                  breakLabel='....'
                  nextLabel={<img src={arrowRight} alt='' />}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel={<img src={arrowLeft} alt='' />}
                  renderOnZeroPageCount={null}
                  activeLinkClassName='pagination-active'
                  disableInitialCallback
                  initialPage={parseInt(searchParams.get('page')) || 0}
                />
              </td>
            </tfoot>
          </TablleUsers>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='drawer'
          >
            <DrawerBlock
              id={main.chartId}
              mail={main.userMail}
              data={main.drawerData}
              close={() => setIsOpen(false)}
            />
          </Drawer>
        </MainSectionBlock>
      </div>
    </>
  );
};

export default MainSection;
