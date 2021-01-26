import React from 'react';
import { Alert, Card } from 'element-react';
import BudgetListItem from '../BudgetListItem/BudgetListItem';
import ListControl from '../ListControl/ListControl';
import './BudgetList.css';
import { StateListArray } from '../../context';

function Budgetlist() {
  let listItems;
  const { listSorted } = React.useContext(StateListArray);
  if (listSorted.length) {
    listItems = listSorted.map((item) => (
      <BudgetListItem item={item} key={item.id} />
    ));
  } else {
    listItems = (
      <Alert title='Empty list' type='info' showIcon={true} closable={false} />
    );
  }

  return (
    <Card className='box-card list-auto' header='Budget list'>
      <ListControl />
      {listItems}
    </Card>
  );
}

export default Budgetlist;
