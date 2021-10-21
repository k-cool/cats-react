import React from 'react';

import './SearchBox.scss';

export const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <div className="SearchBox">
      <input
        className="search"
        type="search"
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
  );
};
