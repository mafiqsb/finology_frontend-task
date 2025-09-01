import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import './SearchBar.css';

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
    <Box sx={{ mb: 2 }}>
      <Box
        component="form"
        sx={{ display: 'flex', gap: 2, mb: 2 }}
        onSubmit={(e) => {
          e.preventDefault();
          onSearchChange(searchTerm);
        }}
      >
        <TextField
          label="Search users..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          size="small"
          sx={{ flexGrow: 1 }}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          select
          label="City"
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
          SelectProps={{ native: true }}
          size="small"
          sx={{ minWidth: 120 }}
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </TextField>
        <TextField
          select
          label="Company"
          value={selectedCompany}
          onChange={(e) => onCompanyChange(e.target.value)}
          SelectProps={{ native: true }}
          size="small"
          sx={{ minWidth: 120 }}
        >
          <option value="">All Companies</option>
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </TextField>
        {hasActiveFilters && (
          <Button onClick={onClearFilters} variant="outlined" color="secondary">
            Clear Filters
          </Button>
        )}
      </Box>
      <Box sx={{ mt: 1, color: 'text.secondary' }}>
        Showing {filteredCount} of {totalUsers} users
      </Box>
    </Box>
  );
};

export default SearchBar;
