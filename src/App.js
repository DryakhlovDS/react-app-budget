import React, { useState } from 'react';
import './App.css';
import FormBudget from './components/FormBudget/FormBudget';
import TotalBalance from './components/TotalBalance/TotalBalance';
import BudgetList from './components/BudgetList/BudgetList';
import { StateListArray, ChangeList } from './context';

function App() {
  const [list, setList] = React.useState({
    1: {
      type: 'Income',
      cash: 100,
      comment: 'Income comment',
      id: 1,
    },
    2: {
      type: 'Outcome',
      cash: -75,
      comment: 'Outcome comment',
      id: 2,
    },
    3: {
      type: 'Income',
      cash: 200,
      comment: 'Income comment',
      id: 3,
    },
  });
  const listArray = Object.values(list);
  let [listSorted, setListSorted] = useState(listArray);
  let [typeSort, setTypeSort] = useState('all');

  function addItemList(item) {
    const lastId = Object.keys(list).pop();
    const newId = Number(lastId) + 1 || 1;
    const newListItem = {
      ...item,
      id: newId,
    };
    newListItem.cash = Number(newListItem.cash);
    if (newListItem.type === 'Outcome') {
      newListItem.cash = 0 - newListItem.cash;
    }
    Object.assign(list, { [newListItem.id]: newListItem });
    setList({ ...list });
    sortList(typeSort);
  }

  function deleteItem(id) {
    delete list[id];
    setList({ ...list });
    sortList(typeSort);
  }

  function sortList(val) {
    if (val === 'all') {
      setListSorted(Object.values(list));
      console.log(listSorted);
      return;
    }
    setListSorted(Object.values(list).filter((item) => item.type === val));
    console.log(listSorted);
  }

  return (
    <div className='App'>
      <FormBudget addItem={addItemList} />
      <TotalBalance list={listArray} />
      <StateListArray.Provider value={{ listSorted, sortList, setTypeSort }}>
        <ChangeList.Provider value={deleteItem}>
          <BudgetList />
        </ChangeList.Provider>
      </StateListArray.Provider>
    </div>
  );
}

export default App;
