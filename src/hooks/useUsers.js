import { useState, useEffect, useMemo } from 'react';
import { fetchUsers } from '../services/userService';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  // Fetch users on component mount
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Get unique cities and companies for filter dropdowns
  const filterOptions = useMemo(() => {
    const cities = [...new Set(users.map((user) => user.address.city))].sort();
    const companies = [
      ...new Set(users.map((user) => user.company.name)),
    ].sort();

    return { cities, companies };
  }, [users]);

  // Filter users based on search term and selected filters
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = user.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCity = !selectedCity || user.address.city === selectedCity;
      const matchesCompany =
        !selectedCompany || user.company.name === selectedCompany;

      return matchesSearch && matchesCity && matchesCompany;
    });
  }, [users, searchTerm, selectedCity, selectedCompany]);

  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedCompany('');
  };

  // Check if any filters are active
  const hasActiveFilters = searchTerm || selectedCity || selectedCompany;

  return {
    users: filteredUsers,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedCity,
    setSelectedCity,
    selectedCompany,
    setSelectedCompany,
    filterOptions,
    clearAllFilters,
    hasActiveFilters,
    totalUsers: users.length,
    filteredCount: filteredUsers.length,
  };
};
