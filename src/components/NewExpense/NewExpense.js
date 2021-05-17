import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    console.log(expenseData);
    // We use this to pass the data to our parent component "App.js"
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <h2>Add New Expense</h2>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
