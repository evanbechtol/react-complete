import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = ( props ) => {
  const { expenses } = props;
  const [ selectedYear, setSelectedYear ] = useState( "" );

  const filterChangedHandler = (updatedFilter) => {
    setSelectedYear(updatedFilter);
    console.log('State updated', updatedFilter);
  };

  return (
    <div>
      <ExpensesFilter onFilterChange={filterChangedHandler}/>
      <Card className="expenses">
        <ExpenseItem title={expenses[ 0 ].title}
                     amount={expenses[ 0 ].amount}
                     date={expenses[ 0 ].date}
        />
        <ExpenseItem title={expenses[ 1 ].title}
                     amount={expenses[ 1 ].amount}
                     date={expenses[ 1 ].date}
        />
        <ExpenseItem title={expenses[ 2 ].title}
                     amount={expenses[ 2 ].amount}
                     date={expenses[ 2 ].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
