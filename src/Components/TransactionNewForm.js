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
       <div className="wrapper">
       <div className="new-form">
           <div className="input-fields">
           <form onSubmit={handleSubmit}>

               <input
                id="date"
                className="input"
                onChange={handleTextChange}
                placeholder="Date (Month/Day/Year)"
                required
               />
               <br />

               <input
                id="name"
                className="input"
                type="text"
                onChange={handleTextChange}
                placeholder="Name"
                required
               />

               <input
                id="amount"
                className="input"
                type="number"
                onChange={handleTextChange}
                placeholder="Amount"
                required
               />

               <input
                id="from"
                className="input"
                type="text"
                onChange={handleTextChange}
                placeholder="From"
                required
               />

               <br />

            <input type="Submit" />


           </form>
           </div>
       </div>
    </div>
   );
};

export default withRouter(TransactionNewForm)
