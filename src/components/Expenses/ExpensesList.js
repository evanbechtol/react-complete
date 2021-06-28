import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({items}) => {
  let expensesContent = <p>No expenses found.</p>;

  if (items.length > 0) {
    expensesContent = items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return expensesContent;
}

export default ExpensesList;
