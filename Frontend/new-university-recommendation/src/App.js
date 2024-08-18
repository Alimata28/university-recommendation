import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UniversitySearch from './components/UniversitySearch';
import SearchResults from './components/SearchResults';
import CompareUniversities from './components/CompareUniversities';
import CompareResults from './components/CompareResults';
import AboutUs from './components/AboutUs';  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UniversitySearch />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/compare" element={<CompareUniversities />} />
        <Route path="/compare-results" element={<CompareResults />} />
        <Route path="/about-us" element={<AboutUs />} /> 
      </Routes>
    </Router>
  );
};

export default App;
