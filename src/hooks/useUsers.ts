import { useState, useEffect } from 'react';
import { fetchUsers, User } from '../services/userService';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Filter options for dropdowns
  const filterOptions = {
    cities: Array.from(new Set(users.map((u) => u.address.city))).sort(),
    companies: Array.from(new Set(users.map((u) => u.company.name))).sort(),
  };

  // Filtered users
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCity = !selectedCity || user.address.city === selectedCity;
    const matchesCompany =
      !selectedCompany || user.company.name === selectedCompany;
    return matchesSearch && matchesCity && matchesCompany;
  });

  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedCompany('');
  };

  // Check if any filters are active
  const hasActiveFilters = !!searchTerm || !!selectedCity || !!selectedCompany;

  // Retry function for error recovery
  const retryFetch = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

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
    retryFetch,
  };
};

export default useUsers;
