import './style/ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form action=''>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='10' step='5' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2021-01-01' max='2024-12-31' />
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
