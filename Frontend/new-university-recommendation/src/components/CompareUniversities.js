import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CompareUniversities.css';

const CompareUniversities = () => {
    const location = useLocation();
    const universities = location.state?.universities || []; // Retrieves universities from the state or returns an empty array if there are no universities
    const [selectedUniversities, setSelectedUniversities] = useState([]);
    const navigate = useNavigate();

    const handleSelectUniversity = (university) => {
        setSelectedUniversities(prev => {
            if (prev.includes(university)) {
                return prev.filter(u => u !== university);
            } else if (prev.length < 2) {
                return [...prev, university];
            }
            return prev;
        });
    };

    const handleCompare = () => {
        if (selectedUniversities.length === 2) {
            navigate('/compare-results', { state: { selectedUniversities } });
        } else {
            alert('Please select exactly two universities to compare.');
        }
    };

    return (
        <div className="compare-page">
            <h1>Compare Universities</h1>
            {universities.length > 0 ? (
                <div className="universities-container">
                    {universities.map((uni, index) => {
                        // Handling incorrect or missing values
                        const ranking = uni.Ranking && !isNaN(parseInt(uni.Ranking, 10)) ? parseInt(uni.Ranking, 10) : 'N/A';

                        return (
                            <div key={index} className={`university-card ${selectedUniversities.includes(uni) ? 'selected' : ''}`} onClick={() => handleSelectUniversity(uni)}>
                                <h2>{uni.University}</h2>
                                <p>Ranking: {ranking}</p>
                                <p>City: {uni.City}</p>
                                <p>Tuition Fee: {uni.Tuition_fee}</p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>No universities found for comparison.</p>
            )}
            <button className="compare-button" onClick={handleCompare}>Compare</button>
        </div>
    );
};

export default CompareUniversities;
