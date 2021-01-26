import React from 'react';
import { Button } from 'element-react';
import { ChangeList } from '../../context';
import './BudgetListItem.css';

function BudgetListItem({ item }) {
  const icon = item.type === 'Income' ? 'el-icon-plus' : 'el-icon-minus';
  const colorText = item.type === 'Income' ? 'green' : 'red';
  const delBtn = React.useContext(ChangeList);
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
