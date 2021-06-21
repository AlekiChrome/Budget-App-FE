import { useState, useEffect } from "react";
import Transactions from "../Components/Transactions";

function Index({ transactions }) {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        let amountSum = transactions
            .map(transaction => Number(transaction.amount))
            .reduce((a, b) => a + b, 0);
            setAmount(amountSum);
    }, [transactions]);

    return (
        <div className="Index">
            {
                amount > 1000
                ? <h2 style={{color: 'green'}}>{`Account Balance: $${amount.toLocaleString('en-US')}`}</h2>
                : <h2 style={{color: 'red'}}>{`Account Balance: $${amount.toLocaleString('en-US')}`}</h2>
            }
            
            <Transactions transactions={transactions} />
        </div>
    );
};

export default Index;
