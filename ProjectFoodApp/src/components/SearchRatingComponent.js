import React, { useState } from 'react';

function SearchRatingComponent({ handleSearchByRating,searchTerm, setSearchTerm}) {
  const [rating, setRating] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSearchClick = () => {
    // Convert the rating to a number (you can also validate it)
    const numericRating = parseFloat(rating);

    // Check if the numericRating is valid
    if (!isNaN(numericRating)) {
      // Call the handleSearchByRating function from the parent component
      handleSearchByRating(numericRating);
    } else {
      // Handle invalid input (e.g., show an error message)
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by rating..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value);
                         
        }}
      />
      <button onClick={handleSearchClick}>SearchRating</button>
    </div>
  );
}

export default SearchRatingComponent;
