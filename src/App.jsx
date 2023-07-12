import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
  let expenses = [
    {
      id: '1',
      title: 'Car Insurance',
      amount: 326,
      date: new Date(2021, 2, 28),
    },
    {
      id: '2',
      title: 'Car Maintenance',
      amount: 100,
      date: new Date(2021, 1, 28),
    },
    { id: '3', title: 'Car EMI', amount: 56789, date: new Date(2021, 8, 28) },
  ];
  return (
    <div>
      <h2>Lets get started </h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
