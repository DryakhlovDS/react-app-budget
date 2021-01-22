import React from 'react';
import './TotalBalance.css';

function TotalBalance({ list }) {
  const total = list.reduce((acc, item) => acc + item.cash, 0);
  return <div className='total-value'>Total balance : {total}</div>;
}

export default TotalBalance;
