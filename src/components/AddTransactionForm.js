import React, { useState } from "react";

function AddTransactionForm() {
  const [transaction, setTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8001/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });
      alert("Transaction Added Successfully")


      const data = await response.json();
      console.log('Transaction added:', data);

    }
    catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const handleChecked = (event) => {
    const { name, value } = event.target;
    setTransaction({
      ...transaction,
      [name]: value,
    });
  };

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
