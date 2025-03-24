import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (

    <div className="mb-4 justify-end">
      <label className="mr-4 border border-gray-300 p-3"><strong className="text-blue-600">Search ></strong> </label>
      <input type="text"
        placeholder="Search by name or email"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-auto p-2 border border-gray-300 rounded "
      />
      
    </div>
  )
}

export default SearchBar;