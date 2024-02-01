import React from 'react';
import { HeadDrawer, CenterMail, OperationsHistory } from './drawer.e';
import Close from '../../assets/icons/close.svg';
import Charts from '../charts/charts';
import { TablleUsers } from '../main-section/main-section.e';
const DrawerBlock = ({ data, mail, close, id }) => {
  return (
    <>
      {data ? (
        <div>
          <HeadDrawer>
            <h2>{mail}</h2>
            <div>
              <button onClick={close}>
                <img src={Close} alt='close' />
              </button>
            </div>
          </HeadDrawer>

          <Charts id={id} />

          <CenterMail>{mail}</CenterMail>
          <OperationsHistory>
            <h2>История операций</h2>
            {/* стили таблицы из файла main-sectione.jsx */}
            <TablleUsers className='table-drower'>
              <thead>
                <tr>
                  <td>Тип</td>
                  <td>Сумма</td>
                  <td>Дата</td>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, idx) => {
                  return (
                    <tr className='drawer_tr' key={idx}>
                      <td>
                        {item.type === 'WRITE_OFF' ? 'Списание' : 'Пополнение'}
                      </td>
                      <td
                        className={item.type === 'WRITE_OFF' ? 'red' : 'green'}
                      >
                        {item.type === 'WRITE_OFF'
                          ? '- ' + item.amount
                          : '+' + item.amount}{' '}
                        {item.currency}
                      </td>
                      <td>{item.created_at.slice(0, -5)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </TablleUsers>
          </OperationsHistory>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default DrawerBlock;
