import Transaction from "./Transaction";

function Transactions({ transactions }) {

    return (
        <div className="Transactions">
            <section>
                        {transactions.map((transaction, index) => {
                            return <Transaction key={index} transaction={transaction} index={index} />
                        })}
            </section>
        </div>
    );
};

export default Transactions;
