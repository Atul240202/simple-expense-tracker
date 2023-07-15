import ExpenseItem from './ExpenseItem';
import './style/Expenses.css';
import Card from './Card';

function Expenses(props) {
  return (
    <div>
      <Card className='expenses'>
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
