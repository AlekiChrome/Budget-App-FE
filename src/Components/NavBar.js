import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>Smart Budgetter</h1>
            <h1>
                <Link to="/transactions">Transactions</Link>
            </h1>
            {/* <a class="bt more-bt" href="javascript:void(0)">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <Link to="/transactions/new">
                    <p>Add New Transaction</p>
                </Link>

            </a> */}
            <button className="new-btn">
                <Link to="/transactions/new">New Transaction</Link>
            </button>
        </nav>
    );
};
