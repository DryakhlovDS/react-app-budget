import React, { useState } from 'react';
import { Alert, Card } from 'element-react';
import BudgetListItem from '../BudgetListItem/BudgetListItem';
import ListControl from '../ListControl/ListControl';
import './BudgetList.css';

function Budgetlist({ list, delBtn }) {
  let listItems;
  const [listSorted, setListSorted] = useState(list);
  // setListSorted(list);
  // console.log(listSorted);
  if (listSorted.length) {
    listItems = listSorted.map((item) => (
      <BudgetListItem item={item} key={item.id} delBtn={delBtn} />
    ));
  } else {
    listItems = (
      <Alert title='Empty list' type='info' showIcon={true} closable={false} />
    );
  }
  function sortList(val = 'all') {
    if (val === 'all') {
      setListSorted(list);
      return;
    }
    setListSorted(list.filter((item) => item.type === val));
  }
  return (
    <Card className='box-card list-auto' header='Budget list'>
      <ListControl sortListBtn={sortList} />
      {listItems}
    </Card>
  );
}

export default Budgetlist;
