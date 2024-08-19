import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UniversitySearch.css';

const UniversitySearch = () => {
  const [department, setDepartment] = useState('');
  const [error, setError] = useState('');
  const [universities, setUniversities] = useState([]);
  const navigate = useNavigate();

  // Utilisation de la variable d'environnement
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    if (department) {
      const fetchUniversities = async () => {
        try {
          console.log(`Searching for universities in department: ${department}`);
          const response = await axios.get(`${backendUrl}/api/endpoint/recommend?department=${department}`);
          console.log('API response:', response.data);
          setUniversities(response.data);
          setError('');
        } catch (err) {
          console.error('Error while searching for universities:', err);
          setError('Error while searching for universities');
        }
      };
  
      fetchUniversities();
    }
  }, [department, backendUrl]);
  

  const handleSearch = () => {
    if (universities.length > 0) {
      navigate('/results', { state: { universities } });
    } else {
      setError('No universities found.');
    }
  };
  

  const goToAboutUs = () => {
    navigate('/about-us');
  };

  return (
    <div className="page-container">
      <button className="about-us-button" onClick={goToAboutUs}>About Us</button>
      <div className="welcome-message">
        <h1>Welcome to Turkey's Universities Recommendation System!</h1>
      </div>
      <div className="search-container">
        <h2>Search Universities</h2>
        <input 
          type="text" 
          value={department} 
          onChange={(e) => setDepartment(e.target.value)} 
          placeholder="Enter the name of the department"
        />
        <button onClick={handleSearch}>Search</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default UniversitySearch;
