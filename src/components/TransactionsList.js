import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

function TransactionsList() 
{
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then((response) => response.json())
    .then((data) => {
      setTransactions(data)
  });

  }, [])
  console.log(transactions)
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
        </tr>
        {/* render a list of <Transaction> components here */}
        {
          transactions && transactions.map((transaction) =>
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
          </tr>
        )
        }
      </tbody>
    </table>
  );
}

export default TransactionsList;
