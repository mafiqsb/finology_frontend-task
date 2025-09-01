import React from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Grid,
  Chip,
  Typography,
  InputAdornment,
} from '@mui/material';
import {
  Search,
  Clear,
  LocationOn,
  Business,
} from '@mui/icons-material';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
  filterOptions: {
    cities: string[];
    companies: string[];
  };
  clearAllFilters: () => void;
  hasActiveFilters: boolean;
  totalUsers: number;
  filteredCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  selectedCity,
  setSelectedCity,
  selectedCompany,
  setSelectedCompany,
  filterOptions,
  clearAllFilters,
  hasActiveFilters,
  totalUsers,
  filteredCount,
}) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Typography variant="h6" color="primary">
          Search & Filter
        </Typography>
      </Box>

      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search by name..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>City</InputLabel>
            <Select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              label="City"
              startAdornment={
                <InputAdornment position="start">
                  <LocationOn color="action" sx={{ ml: 1 }} />
                </InputAdornment>
              }
            >
              <MenuItem value="">
                <em>All Cities</em>
              </MenuItem>
              {filterOptions.cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Company</InputLabel>
            <Select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              label="Company"
              startAdornment={
                <InputAdornment position="start">
                  <Business color="action" sx={{ ml: 1 }} />
                </InputAdornment>
              }
            >
              <MenuItem value="">
                <em>All Companies</em>
              </MenuItem>
              {filterOptions.companies.map((company) => (
                <MenuItem key={company} value={company}>
                  {company}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={clearAllFilters}
            disabled={!hasActiveFilters}
            startIcon={<Clear />}
            sx={{ height: '56px' }}
          >
            Clear All
          </Button>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {value && (
            <Chip
              label={`Search: "${value}"`}
              onDelete={() => onChange('')}
              color="primary"
              variant="outlined"
              size="small"
            />
          )}
          {selectedCity && (
            <Chip
              label={`City: ${selectedCity}`}
              onDelete={() => setSelectedCity('')}
              color="primary"
              variant="outlined"
              size="small"
            />
          )}
          {selectedCompany && (
            <Chip
              label={`Company: ${selectedCompany}`}
              onDelete={() => setSelectedCompany('')}
              color="primary"
              variant="outlined"
              size="small"
            />
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default SearchBar;
