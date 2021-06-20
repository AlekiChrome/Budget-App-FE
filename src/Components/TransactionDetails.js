import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";

import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function TransactionDetails(props) {
    const { deleteTransaction } = props;
    const [transaction, setTransaction] = useState([]);
    let { index } = useParams();
    let history = useHistory();

    useEffect(() => {
        axios.get(`${API_BASE}/transactions/${index}`).then(
            (response) => {
            setTransaction(response.data);
        },
            (error) => {
                history.push(`/not-found`);
             }
        );
    }, [index, history]);
    
    const handleDelete = () => {
        return (
            <article>
                <h5>
                    {transaction.date}
                </h5>
                <h5>
                    <span>
                        <a href={transaction.name}>{transaction.name}</a>
                    </span>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h5>
                <h5>
                    {transaction.amount}
                </h5>
                <h5>
                    {transaction.from}
                </h5>
                <div className="showNavigation">
                    <div>
                        {" "}
                        <Link to={`/transactions/${index}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                    <div>
                        {" "}
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </article>
        )
    }
};

export default withRouter(TransactionDetails);
