import React from 'react';
import { Button } from 'element-react';
import './BudgetListItem.css';

function BudgetListItem({ item }) {
  console.log(item);
  return (
    <div className='list-item'>
      <span className='budget-comment'>{item.comment}</span>
      <span className='budget-value'>{item.cash}</span>
      <Button type='danger' size='small' plain='true'>
        Delete
      </Button>
    </div>
  );
}

export default BudgetListItem;
