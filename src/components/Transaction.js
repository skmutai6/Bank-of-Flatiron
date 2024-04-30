import React from "react";

function transactions() {
  return (
    <tr>
      <td>{transactions.date}</td>
      <td>{transactions.description}</td>
      <td>{transactions.category}</td>
      <td>{transactions.amount}</td>
    </tr>
  );
}

export default transactions;
