import React, {Component} from "react";
import './App.css';
import ExpenseItem from "./components/ExpenseItem";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <ExpenseItem/>
            </div>
        );
    }
}

export default App;
