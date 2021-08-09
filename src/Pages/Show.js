import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {PolarArea} from "react-chartjs-2";
import axios from "axios";
import Chart from 'chart.js/auto';
import { apiURL } from "../util/apiURL";
import TransactionDetails from "../Components/TransactionDetails";

const API_BASE = apiURL();

function Show({ deleteTransaction, transactions }) {

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
        </div>
    )
};

export default Show;
