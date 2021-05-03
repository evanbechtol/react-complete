import React, {Component} from "react";
import './App.css';
import ExpenseItem from "./components/ExpenseItem";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ExpenseItem amount="$294.97" expense="Car Insurance" date="May 3, 2021"/>
            </div>
        );
    }
}

export default App;
