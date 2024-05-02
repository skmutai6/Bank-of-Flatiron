import React, { useEffect, useState } from "react";

function TransactionsList({ searchTerm }) {
  const [transactions, setTransactions] = useState([]);
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    fetch('https://bank-of-flatiron-ew2l.onrender.com/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

  // console.log(transactions);

  // function to DELETE transaction 
  function handleDelete(id) {
    fetch(`https://bank-of-flatiron-ew2l.onrender.com/transactions/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setTransactions(transactions.filter(transaction => transaction.id !== id));
    })
    alert("Transaction Deleted Successfully")

  }
  useEffect(() => {
    if (searchTerm === "") {
      setTrans(transactions);
    } else {
      const filter = transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        // transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTrans(filter);
    }
  }, [searchTerm, transactions]);


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Action</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {trans && trans.map((transaction) => (
          <tr key={transaction.id}>
            <td>
              <p>{transaction.date}</p>
            </td>
            <td>
              <p>{transaction.description}</p>
            </td>
            <td>
              <p>{transaction.category}</p>
            </td>
            <td>
              <p>{transaction.amount}</p>
            </td>
            <td>
              <button className="btn btn-outline-info" onClick={() => handleDelete(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
