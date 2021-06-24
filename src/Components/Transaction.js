import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
    return (
        <div className="table-container">
        <table class="table1">
		<thead>
			<tr>
				<th>Date</th>
				<th>Name</th>
				<th>Amount</th>
				<th>From</th>
				<th>Edit Transaction</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td data-label="Date">{transaction.date}</td>
                <td data-label="Name">{transaction.name}</td>
                <td data-label="Amount">{transaction.amount}</td>
                <td data-label="From">{transaction.from}</td>
                <td data-label="Edit Transaction"><Link to={`/transactions/${index}`}><img style={{maxWidth: "25px"}} alt="Lower left ballpoint pen" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f58a.svg" title="Lower left ballpoint pen" class="r-4qtqp9 r-dflpy8 r-sjv1od r-zw8f10 r-10akycc r-h9hxbl" /></Link></td>

			</tr>
		</tbody>
	</table>

        </div>

    );
};

export default Transaction;
