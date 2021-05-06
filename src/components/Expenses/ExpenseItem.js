import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ( props ) => {
  const [title, setTitle] = useState(props.title);
  let { date, amount } = props;

  const buttonClickHandler = ( e ) => {
    setTitle("New value");
    console.log( "Clicked" );
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
