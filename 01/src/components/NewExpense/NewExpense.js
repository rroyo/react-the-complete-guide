// Parent: App.js
import './NewExpense.css'
import {useState} from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      { !showForm ?
        <button onClick={showFormHandler}>Add New Expense</button> :
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler} />
      }
    </div>
  );
};

export default NewExpense;