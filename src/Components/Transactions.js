import Transaction from "./Transaction";

function Transactions({ transactions }) {

    return (
        <div className="Transactions">
            <section>
                {/* <table>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    <tbody> */}

                        {transactions.map((transaction, index) => {
                            return <Transaction key={index} transaction={transaction} index={index} />
                        })}
                    
                    {/* </tbody>
                </table> */}
            </section>
        </div>
    );
};

export default Transactions;
