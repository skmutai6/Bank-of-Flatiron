import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState("");

  function handleSearchChange(event) {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    onSearchChange(searchTerm);
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
