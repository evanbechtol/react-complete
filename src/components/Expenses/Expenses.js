import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = ( props ) => {
  const { expenses } = props;
  const [ selectedYear, setSelectedYear ] = useState( "" );

  const filterChangedHandler = ( updatedFilter ) => {
    setSelectedYear( updatedFilter );
    console.log( "State updated", updatedFilter );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangedHandler}/>
      {
        props.expenses.map( expense => {
          return <ExpenseItem key={expense.id}
                              title={expense.title}
                              amount={expense.amount}
                              date={expense.date}/>;
        } )
      }
    </Card>
  );
};

export default Expenses;
