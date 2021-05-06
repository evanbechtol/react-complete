import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return(
    <div>
      <form>
        <div className="new-expense__controls">

          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" aria-label="text" onChange={titleChangeHandler}/>
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" aria-label="amount" min="0.01" step="0.01"/>
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" aria-label="date" min="2019-01-01" max={Date.now()}/>
          </div>

        </div>

        <div className="new-expense__actions">
          <button aria-label="add expense" type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
