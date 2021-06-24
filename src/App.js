import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { apiURL } from "./util/apiURL";

// * Pages
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// * Components
import NavBar from "./Components/NavBar";

// * Configuration
const API_BASE = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API_BASE}/transactions`, newTransaction)
      .then(
        (response) => {
          setTransactions([...transactions, newTransaction]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };


  const deleteTransaction = (index) => {
    axios
      .delete(`${API_BASE}/transactions/${index}`)
      .then(
        (response) => {
          const updateArray = [...transactions];
          updateArray.splice(index, 1);
          setTransactions(updateArray);
          return true;
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const updateTransaction = (updatedTransaction, index) => {
    console.log(API_BASE);
    axios
      .put(`${API_BASE}/transactions/${index}`, updatedTransaction)
      .then(
        (response) => {
          console.log(response.data)
          const updateArray = [...transactions];
          updateArray[index] = updatedTransaction;
          setTransactions(updateArray)
        },
        (error) => console.log(error)
      )
        .catch((c) => console.warn("catch", c));
  };

  // * Get list of transactios for this application
  // * (Kind of like a componentDidMount)
  useEffect(() => {
    axios
    .get(`${API_BASE}/transactions`)
    .then(
      (response) => {
      const { data } = response
      setTransactions(data)

      })
      .catch((c) => console.warn("catch", c));
  }, [transactions]);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/transactions">
              <Index transactions={transactions} />
            </Route>
            <Route path="/transactions/new">
              <New addTransaction={addTransaction} />
            </Route>
            <Route path="/transactions/:index/edit">
              <Edit transactions={transactions} updateTransaction={updateTransaction} />
            </Route>
            <Route path="/transactions/:index">
              <Show transactions={transactions} deleteTransaction={deleteTransaction} updateTransaction={updateTransaction}/>
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
