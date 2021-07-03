import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ( props ) => {
  const [ showExpenseForm, setShowExpenseForm ] = useState( false );

  const toggleAddExpense = () => {
    setShowExpenseForm( !showExpenseForm );
  };

  const saveExpenseDataHandler = ( enteredExpenseData ) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    console.log( expenseData );
    // We use this to pass the data to our parent component "App.js"
    props.onAddExpense( expenseData );
  };

  const addExpenseButton = () => {
    return (
      <button aria-label="add expense"
              className="new-expense add"
              type="submit"
              onClick={toggleAddExpense}
      >
        Add New Expense
      </button>
    );
  };

  const expenseForm = () => {
    return (
      <div>
        <h2>Add New Expense</h2>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                     onCancelAddingExpense ={toggleAddExpense}
        />
      </div>
    );
  };

  return (
    <div className="new-expense">
      {showExpenseForm ? expenseForm() : addExpenseButton()}
    </div>
  );
};

export default NewExpense;
