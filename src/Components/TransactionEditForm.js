import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";


import { apiURL} from "../util/apiURL";

const API_BASE = apiURL();

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

    useEffect(() => {
        axios.get(`${API_BASE}/transactions/${index}`).then(
            (response) => setTransaction(response.data),
            (error) => history.push(`/not-found`)
        );
    }, [index, history]);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateTransaction(transaction, index);
        history.push(`/transactions/${index}`);
    };

    return (
        <div className="Edit">
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
               <Link to={`/transactions/${index}`}>
                   <button>Nevermind!</button>
               </Link>
        </div>
    );
};

export default TransactionEditForm;
