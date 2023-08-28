import React from 'react';

function SearchComponent({ handleSearch, searchTerm, setSearchTerm }) {
      
  return (
    <div>
      <input 
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value);
                          handleSearch(e.target.value);
        }}
        
      /> 
      <button className="btn text-white bg-success" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchComponent;
