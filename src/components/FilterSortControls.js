// src/components/FilterSortControls.js
import React from "react";

function FilterSortControls({ isGreasedOnly, setIsGreasedOnly, sortOption, setSortOption }) {
  return (
    <div className="filter-sort-controls">
      <label>
        <input
          type="checkbox"
          checked={isGreasedOnly}
          onChange={(e) => setIsGreasedOnly(e.target.checked)}
        />
        Show Greased Hogs Only
      </label>
      <label>
        Sort By:
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default FilterSortControls;
