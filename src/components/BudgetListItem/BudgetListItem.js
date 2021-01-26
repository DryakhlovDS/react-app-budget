import React from 'react';
import { Button } from 'element-react';
import './BudgetListItem.css';

function BudgetListItem({ item, delBtn }) {
  const icon = item.type === 'Income' ? 'el-icon-plus' : 'el-icon-minus';
  const colorText = item.type === 'Income' ? 'green' : 'red';
  return (
    <div className='list-item'>
      <i className={[icon, colorText].join(' ')}></i>
      <span className='budget-comment'>{item.comment}</span>
      <span className={['budget-value', colorText].join(' ')}>{item.cash}</span>
      <Button type='danger' size='small' plain onClick={() => delBtn(item.id)}>
        Delete
      </Button>
    </div>
  );
}

export default BudgetListItem;
