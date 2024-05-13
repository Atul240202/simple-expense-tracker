import './style/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {
  // const clickHandler = () => {
  //   setTitle('Updated!!');
  //   console.log(title);
  // };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs. {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
