import React from 'react';
import { Card } from 'element-react';
import BudgetListItem from '../BudgetListItem/BudgetListItem';
import './BudgetList.css';

function Budgetlist({ list }) {
  const listItems = list.map((item) => (
    <BudgetListItem item={item} key={item.id} />
  ));
  return (
    <Card className='box-card list-auto' header='Budget list'>
      {listItems}
    </Card>
  );
}

export default Budgetlist;
