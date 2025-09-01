import React from 'react';
import './SearchBar.css';

const SearchBar = ({
  searchTerm,
  onSearchChange,
  selectedCity,
  onCityChange,
  selectedCompany,
  onCompanyChange,
  cities,
  companies,
  onClearFilters,
  hasActiveFilters,
  filteredCount,
  totalUsers,
}) => {
  return (
    <div className="search-bar">
      <div className="search-controls">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-container">
          <select
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="filter-select"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <select
            value={selectedCompany}
            onChange={(e) => onCompanyChange(e.target.value)}
            className="filter-select"
          >
            <option value="">All Companies</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>

          {hasActiveFilters && (
            <button onClick={onClearFilters} className="clear-filters-btn">
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <div className="results-info">
        Showing {filteredCount} of {totalUsers} users
      </div>
    </div>
  );
};

export default SearchBar;
