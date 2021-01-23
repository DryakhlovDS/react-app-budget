import React from 'react';
import './App.css';
import FormBudget from './components/FormBudget/FormBudget';
import TotalBalance from './components/TotalBalance/TotalBalance';
import BudgetList from './components/BudgetList/BudgetList';

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
  const liistArray = Object.values(list);

  function addItemList(item) {
    console.log(item);
    const lastId = Object.keys(list).pop();
    const newId = Number(lastId) + 1;
    const newListItem = {
      ...item,
      id: newId,
    };
    newListItem.cash = Number(newListItem.cash);
    if (newListItem.type === 'Outcome') {
      newListItem.cash = 0 - newListItem.cash;
    }
    // list[newId] = newListItem;
    setList({ ...list, [newListItem.id]: newListItem });
    console.log(list);
  }

  function deleteItem(id) {
    delete list[id];
    setList({ ...list });
  }

  return (
    <div className='App'>
      <FormBudget addItem={addItemList} />
      <TotalBalance list={liistArray} />
      <BudgetList list={liistArray} delBtn={deleteItem} />
    </div>
  );
}

export default App;
