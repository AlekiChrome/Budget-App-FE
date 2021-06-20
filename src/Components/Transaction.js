import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
    return (
        <tr>
            <td>
                {transaction.date}
            </td>
            <td>
                {transaction.name}
            </td>
            <td>
                {transaction.amount}
            </td>
            <td>
                <Link to={`/transaction/${index}`}>✏️</Link>
            </td>
        </tr>
    );
};

export default Transaction;
