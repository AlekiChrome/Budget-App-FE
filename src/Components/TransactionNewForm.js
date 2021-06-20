import { useState } from "react";
import { withRouter } from "react-router-dom";

function TransactionNewForm(props) {
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: "",
        from: "",
    });

    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value });
    };

   const handleSubmit = (event) => {
       event.preventDefault();
       props.addTransaction(transaction);
       props.history.push("/transactions");
   };

   return (
       <div className="New">
           <form onSubmit={handleSubmit}>
               <label htmlFor="name">Name:</label>
               <input
                value={transaction.name}
                type="text"
                onChange={handleTextChange}
                placeholder="Name"
                required
               />
               <label htmlFor="amount">Amount:</label>
               <input
                value={transaction.amount}
                type="number"
                onchange={handleTextChange}
                placeholder="Amount"
                required
               />
               <label htmlFor="from">From:</label>
               <input
                value={transaction.from}
                type="text"
                onchange={handleTextChange}
                placeholder="From"
                required
               />
               <br />
               <input type="submit" />
           </form>
       </div>
   );
};

export default withRouter(TransactionNewForm)
