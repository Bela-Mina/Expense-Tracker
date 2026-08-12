import { useState } from "react";

function ExpenseTracker() {
    const [expense, setExpense] = useState("");
    const [expenses, setExpense] = useState([]);

    function theExpense() {
        setExpense([...expenses, expense])
        setExpense("")
    }
    
    return (
        <div>
            <h1>Expense Tracker</h1>

            <input
                type="text"
                placeholder="Enter Your Expense"
                value={expense}
                onChange={(event) => setExpense(event.target.value)}
            />
                <button onClick={theExpense}>
                        Add Expense
                </button>
                
             {expense.map((expense, index)=> (
                <p key={index}>{expense}</p>
             ))
              
            }

            
        </div>
    );
}

export default ExpenseTracker;