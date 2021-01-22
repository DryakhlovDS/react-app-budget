import React from 'react';
import './TotalBalance.css';

function TotalBalance({ list }) {
  const total = list.reduce((acc, item) => acc + item.cash, 0);
  const colorText = total > 0 ? 'good-balance' : total < 0 ? 'bad-balance' : '';
  return (
    <div className={['total-value', colorText].join(' ')}>
      Total balance : {total}
    </div>
  );
}

export default TotalBalance;
