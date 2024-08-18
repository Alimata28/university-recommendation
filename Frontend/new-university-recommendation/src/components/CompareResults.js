import React from 'react';
import { useLocation } from 'react-router-dom';
import './CompareResults.css';

const CompareResults = () => {
    const location = useLocation();
    const { selectedUniversities } = location.state || { selectedUniversities: [] };

    return (
        <div className="compare-results-page">
            <h1>Comparison Result</h1>
            <div className="comparison-container">
                {selectedUniversities.map((uni, index) => (
                    <div key={index} className="university-comparison-card">
                        <h2>{uni.University}</h2>
                        <p>Ranking: {uni.Ranking}</p> 
                        <p>City: {uni.City}</p>
                        <p>Tuition Fee: {uni.Tuition_fee}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompareResults;
