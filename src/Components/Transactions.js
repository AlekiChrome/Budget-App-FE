import Transaction from "./Transaction";

function Transactions({ transactions }) {
    
    return (
        <div className="Transactions">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>From</th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => {
                            return <Transaction key={index} transaction={transaction} index={index} />
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Transactions;
