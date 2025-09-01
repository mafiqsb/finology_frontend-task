import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import { useUsers } from './hooks/useUsers';

function App() {
  const {
    users,
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
    totalUsers,
    filteredCount,
  } = useUsers();

  return (
    <div className="App">
      <Header />

      <main className="main-content">
        <div className="container">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
            selectedCompany={selectedCompany}
            onCompanyChange={setSelectedCompany}
            cities={filterOptions.cities}
            companies={filterOptions.companies}
            onClearFilters={clearAllFilters}
            hasActiveFilters={hasActiveFilters}
            filteredCount={filteredCount}
            totalUsers={totalUsers}
          />

          <UserList users={users} loading={loading} error={error} />
        </div>
      </main>
    </div>
  );
}

export default App;
