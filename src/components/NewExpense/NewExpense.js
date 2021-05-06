import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <h2>Add New Expense</h2>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
