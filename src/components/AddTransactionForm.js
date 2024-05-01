import React, { useState } from "react";

function AddTransactionForm( {onAddTrans} ) {
  const [transaction, setTransaction] = useState({
    date: ' ',
    description: ' ',
    category: ' ',
    amount: ' ',
  });
  
  function handleChecked(event) {
    const name = event.target.name;
    const value = event.target.value;
    setTransaction({ ...transaction, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      date: transaction.date,
      description: transaction.description,
      category: transaction.category,
      amount: transaction.amount,
    };

    // function to fill form input
    const editFormInputs = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(`http://localhost:8001/transactions`, editFormInputs)
      .then((res) => res.json())
      .then((data) => onAddTrans(data));

    // Clear form after POST action
    setTransaction({
      date: ' ',
      description: ' ',
      category: ' ',
      amount: ' ',
    });
    alert("Transaction Added Successfully")
  }
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={transaction.date} onChange={handleChecked} required />
          <input type="text" name="description" placeholder="Description" value={transaction.description} onChange={handleChecked} required />
          <input type="text" name="category" placeholder="Category" value={transaction.category} onChange={handleChecked} required />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={transaction.amount} onChange={handleChecked} required />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
