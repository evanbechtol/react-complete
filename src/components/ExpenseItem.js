import "./ExpenseItem.css";

function ExpenseItem(props) {
    const {date, expense, amount} = props;

    return (
        <div className="expense-item">
            <div>{date}</div>
            <div className="expense-item__description">
                <h2>{expense}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;