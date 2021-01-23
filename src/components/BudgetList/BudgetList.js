import React from 'react';
import { Alert, Card } from 'element-react';
import BudgetListItem from '../BudgetListItem/BudgetListItem';
import './BudgetList.css';

function Budgetlist({ list, delBtn }) {
  let listItems;
  if (list.length) {
    listItems = list.map((item) => (
      <BudgetListItem item={item} key={item.id} delBtn={delBtn} />
    ));
  } else {
    listItems = (
      <Alert title='Empty list' type='info' showIcon={true} closable={false} />
    );
  }
  return (
    <Card className='box-card list-auto' header='Budget list'>
      {listItems}
    </Card>
  );
}

export default Budgetlist;
