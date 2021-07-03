import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ( props ) => {
  const [ enteredTitle, setEnteredTitle ] = useState( "" );
  const [ enteredAmount, setEnteredAmount ] = useState( "" );
  const [ enteredDate, setEnteredDate ] = useState( "" );

  const titleChangeHandler = ( e ) => {
    setEnteredTitle( e.target.value );
  };

  const amountChangeHandler = ( e ) => {
    setEnteredAmount( e.target.value );
  };

  const dateChangeHandler = ( e ) => {
    setEnteredDate( e.target.value );
  };

  const submitHandler = ( e ) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date( enteredDate )
    };

    // This passes the data back up to the parent component "NewExpense.js"
    props.onSaveExpenseData( expenseData );
    cancelAddingExpense();
    resetForm();
  };

  const cancelAddingExpense = () => {
    props.onCancelAddingExpense();
  };

  const resetForm = () => {
    setEnteredAmount( "" );
    setEnteredDate( "" );
    setEnteredTitle( "" );
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">

          <div className="new-expense__control">
            <label>Title</label>
            <input type="text"
                   aria-label="text"
                   value={enteredTitle}
                   onChange={titleChangeHandler}/>
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number"
                   aria-label="amount"
                   min="0.01"
                   step="0.01"
                   value={enteredAmount}
                   onChange={amountChangeHandler}/>
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input type="date"
                   aria-label="date"
                   min="2019-01-01"
                   max={Date.now()}
                   value={enteredDate}
                   onChange={dateChangeHandler}/>
          </div>

        </div>

        <div className="new-expense__actions">
          <button className="cancel"
                  aria-label="cancel adding expense"
                  onClick={cancelAddingExpense}
          >
            Cancel
          </button>
          <button aria-label="add expense" type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
