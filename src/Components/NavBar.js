import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">
                <h1>Smart Budgetter</h1>
            </Link>
            <h1>
                <Link className="trans-index" to="/transactions">Transactions</Link>
            </h1>
            <a className="bt more-bt" >
                <Link to="/transactions/new">
                <span className="fl"></span><span className="sfl"></span><span className="cross"></span><i></i>
                    <p>Add New Transaction</p>
                </Link>

            </a>
        </nav>
    );
};
