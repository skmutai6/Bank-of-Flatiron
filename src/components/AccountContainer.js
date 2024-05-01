import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [searchTerm, setSearchTerm] = React.useState("");

  function handleSearchChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

  return (
    <div>
      <Search onSearchChange={handleSearchChange} />
      <AddTransactionForm />
      <TransactionsList searchTerm={searchTerm} />
    </div>
  );
}

export default AccountContainer;
