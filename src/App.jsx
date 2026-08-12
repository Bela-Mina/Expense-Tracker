import ExpenseTracker from "./components/ExpenseTracker.jsx";
function App() {
    return (
        <div>
            <ExpenseTracker />
        </div>
    );
}

export default App;




// ┌─────────────────────────────────┐
// │       EXPENSE TRACKER            │
// ├─────────────────────────────────┤
// │ Today's Spending                 │
// │                                  │
// │        830 ETB                   │
// ├─────────────────────────────────┤
// │ Add Expense                      │
// │                                  │
// │ Name:     [ Lunch             ]  │
// │ Amount:   [ 150               ]  │
// │ Category: [ Food ▼            ]  │
// │ Date:     [ 2026-08-12       ]  │
// │                                  │
// │          [ Add Expense ]         │
// ├─────────────────────────────────┤
// │ Today's Expenses                 │
// │                                  │
// │ Lunch       Food       150 ETB   │
// │ Taxi        Transport  100 ETB   │
// │ Coffee      Food        80 ETB   │
// │                                  │
// │        Edit   Delete             │
// └─────────────────────────────────┘ final Project looks Must be 