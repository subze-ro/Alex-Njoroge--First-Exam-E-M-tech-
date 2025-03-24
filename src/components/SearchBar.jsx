import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (

    <div className="mb-4">
      <input type="text"
        placeholder="Search by name or email"
        onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded"/>
      
    </div>
  )
}

export default SearchBar;