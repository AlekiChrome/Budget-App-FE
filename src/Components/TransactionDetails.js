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
        deleteTransaction(index)
        history.push(`/transactions/`);
    }

    return (
        <section>
            <h5>
                {transaction.date}
            </h5>
            <h5>
                {transaction.name}
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h5>
            <h5>
                <p>Monthly Budget: ${transaction.monthlyBudget}</p>

            </h5>
            <h5>
                ${transaction.amount}
            </h5>
            <h5>
                {transaction.from}
            </h5>
            <div className="showNavigation">
                <div>
                   <Link to={"/transactions"}>
                       <button class="ab"><span>Back</span></button>
                   </Link>
                </div>
                <div>
                    {" "}
                    <Link to={`/transactions/${index}/edit`}>
                        <button class="ab"><span>Edit</span></button>
                    </Link>
                </div>
                <div>
                    {" "}
                    <button class="ab" onClick={handleDelete}><span>Delete</span></button>
                </div>
            </div>
        </section>
    )
};

export default withRouter(TransactionDetails);
