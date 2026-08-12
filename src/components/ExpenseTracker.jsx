import { useState } from "react";


function ExpenseTracker() {
    const [expense, setExpense] = useState("");
    const [expenses, setExpenses] = useState([]);

    function theExpense() {
        setExpenses([...expenses, expense])
        setExpense("")
    }
    function deleteExpense(index) {
        setExpenses(
            expenses.filter((expense, currentExpense) => currentExpense !== index)
        )
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
                
             {expenses.map((expense, index)=> (
                <div key={index}>
                    <p>{expense}<button onClick={() => deleteExpense(index)}>🗑️</button></p> 
                </div>
             ))
              
            }

        
        </div>
    );
}

export default ExpenseTracker; 


    //           React
    //             │
    //    ┌────────┼────────┐
    //    ↓        ↓        ↓
    //  item     item      item
    //  Lunch    Coffee    Taxi
    //    │        │        │
    //  key=0    key=1     key=2
    //    │        │        │
    //    ↓        ↓        ↓
    //  <p>      <p>       <p>
    //  Lunch    Coffee    Taxi

    
