// Parent: App.js
import {useState} from "react";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearState, setYearState] = useState(new Date().getFullYear().toString());

  const yearFilteredHandler = year => setYearState(year);

  const expenses = props.items.filter(item =>
    item.date.getFullYear().toString() === yearState
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearFiltered={yearFilteredHandler}
        yearFiltered={yearState}
      />
      <ExpensesChart expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </Card>
  );
}
export default Expenses;