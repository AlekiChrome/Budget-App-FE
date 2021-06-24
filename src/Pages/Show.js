import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {PolarArea} from "react-chartjs-2";
import axios from "axios";
import Chart from 'chart.js/auto';
import { apiURL } from "../util/apiURL";
import TransactionDetails from "../Components/TransactionDetails";

const API_BASE = apiURL();

function Show({ deleteTransaction, transactions }) {


    // const [chartData, setChartData] = useState({});

    // const chart = () => {

    //     setChartData({
    //         labels: ["amount", "monthly Budget", "Expenses"],
    //         datasets: [
    //             {
    //                 label: "Expenses",
    //                 data: [10, 20, 30],
    //                 backgroundColor: [
    //                     'Pink',
    //                     'Blue',
    //                     'Purple'
    //                 ],
    //                 borderWidth: 4
    //             }
    //         ]
    //     })
    // }

    // useEffect(() => {
    //     chart()
    // }, [])

    let { index } = useParams();
    const [transaction] = useState(transactions[index]);

    return (
        <div className="Show">
            <h2>Current Transaction</h2>
            <section>
                <TransactionDetails
                    transactions={transaction}
                    index={index}
                    deleteTransaction={deleteTransaction}
                />
            </section>
            <br />
            {/* <div className="Chart" style={{height: "600px", width: "600px"}}>
                <PolarArea data={chartData} options={{
                    responsive: true,
                    title: {text: "Expenses", display: true},
                }}/>
            </div> */}

        </div>
    )
};

export default Show;


// import { useState } from "react";
// import { useParams, Link, useHistory } from "react-router-dom";
// // import { Form, Button } from 'react-bootstrap';
// function TransactionEdit(props) {
//     const { transactions, updateTransaction } = props;
//     let { index } = useParams();
//     let history = useHistory();
//     const [ transaction, setTransaction ] = useState({
//         name: "",
//         date: "",
//         amount: "",
//         memo: ""
//     });
//     const handleInputChange = (event) => {
//         setTransaction({
//             ...transaction,
//             [event.target.id]: event.target.value
//         });
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         updateTransaction(transaction, index);
//         history.push(`/transactions`);
//     };
//     return (
//         <div className="edit-form">
//         <form onSubmit={handleSubmit}>
//             <form>
//                 <form>Name</form>
//                 <input
//                     type="text"
//                     id="name"
//                     //defaultValue={transactions[index].name}
//                     onChange={handleInputChange}
//                     required
//                 />
//             </form>
//             <form>
//                 <label>Date</label>
//                 <input
//                     type="date"
//                     id="date"
//                     //defaultValue={transactions[index].date}
//                     onChange={handleInputChange}
//                     required
//                 />
//             </form>
//             <form>
//                 <label>Amount</label>
//                 <input
//                     type="number"
//                     id="amount"
//                     //defaultValue={transactions[index].amount}
//                     onChange={handleInputChange}
//                     required
//                 />
//             </form>
//             <form>
//                 <label>Memo</label>
//                 <input
//                     type="text"
//                     id="memo"
//                     //defaultValue={transactions[index].memo}
//                     onChange={handleInputChange}
//                     required
//                 />
//             </form>
//             <button type="submit" variant="dark">Save Changes</button>
//         </form>
//         <button variant="dark-link">
//             <Link to={`/transactions/${index}`}>Cancel Editing</Link>
//         </button>
//         </div>
//     );
// };
// export default TransactionEdit;
