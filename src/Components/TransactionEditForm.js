import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function TransactionEditForm(props) {
    let { index } = useParams();
    let history = useHistory();

    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: "",
        from: "",
    });

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateTransaction(transaction, index);
        history.push(`/transactions/${index}`);
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date:</label>
                <input
                    id="date"
                    type="text"
                    onChange={handleTextChange}
                    placeholder={transaction.date}
                    required
                />
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    onChange={handleTextChange}
                    placeholder={transaction.name}
                    required
              />
              <label htmlFor="amount">Amount:</label>
               <input
                    id="amount"
                    type="number"
                    onChange={handleTextChange}
                    placeholder={transaction.amount}
                    required
               />
               <label htmlFor="from">From:</label>
               <input
                    id="from"
                    type="text"
                    onChange={handleTextChange}
                    placeholder={transaction.from}
                    required
               />
               <br />
               <input type="submit" />
               </form>
               <Link to={`/transactions`}>
                   <button>Back</button>
               </Link>
        </div>
    );
};

export default TransactionEditForm;
