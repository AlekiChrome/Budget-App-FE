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
               <label htmlFor="date">Date:</label>
               <input
                id="date"
                onChange={handleTextChange}
                placeholder="Date"
                required
               />
               <br />
               <label htmlFor="name">Name:</label>
               <input
                id="name"
                type="text"
                onChange={handleTextChange}
                placeholder="Name"
                required
               />
               <label htmlFor="amount">Amount:</label>
               <input
                id="amount"
                type="number"
                onChange={handleTextChange}
                placeholder="Amount"
                required
               />
               <label htmlFor="from">From:</label>
               <input
                id="from"
                type="text"
                onChange={handleTextChange}
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
