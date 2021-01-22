import React from 'react';
import './App.css';
import FormBudget from './components/FormBudget/FormBudget';
import TotalBalance from './components/TotalBalance/TotalBalance';
import BudgetList from './components/BudgetList/BudgetList';

function App() {
  const [list, changeList] = React.useState({
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
  return (
    <div className='App'>
      <FormBudget />
      <TotalBalance list={liistArray} />
      <BudgetList list={liistArray} />
    </div>
  );
}

export default App;
