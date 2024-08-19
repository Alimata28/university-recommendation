import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const universities = location.state?.universities || [];

    const [showFilter, setShowFilter] = useState(false);
    const [city, setCity] = useState('');
    const [tuition_fee, setTuitionFee] = useState('');
    const [filteredUniversities, setFilteredUniversities] = useState(universities);

    const cities = [
        "ADANA", "AFYON", "AGRI", "AKSARAY", "ALANYA", "AMASYA", "ANKARA", "ANTALYA", "ARDAHAN", "ARTVIN",
        "AYDIN", "BALIKESIR", "BARTIN", "BATMAN", "BAYBURT", "BILECIK", "BINGOL", "BITLIS", "BOLU", "BURDUR",
        "BURSA", "CANAKKALE", "CANKIRI", "CORUM", "DENIZLI", "DIYARBAKIR", "DUZCE", "EDIRNE", "ELAZIG", "ERZINCAN",
        "ERZURUM", "ESKISEHIR", "GAZIANTEP", "GIRESUN", "GUMUSHANE", "HAKKARI", "HATAY", "IGDIR", "INONU", "ISPARTA",
        "ISTANBUL", "IZMIR", "KAHRAMANMARAS", "KARABUK", "KARAMAN", "KARS", "KASTAMONU", "KAYSERI", "KILIS", "KIRIKKALE",
        "KIRKLARELI", "KIRSEHIR", "KOCAELI", "KONYA", "KUTAHYA", "MALATYA", "MANISA", "MARDIN", "MERSIN", "MUGLA",
        "MUS", "NEVSEHIR", "NIGDE", "ORDU", "OSMANIYE", "RIZE", "SAKARYA", "SAMSUN", "SANLIURFA", "SIRNAK",
        "SIVAS", "SIIRT", "SINOP", "TEKIRDAG", "TOKAT", "TUNCELI", "USAK", "VAN", "YOZGAT", "ZONGULDAK", "YALOVA"
    ];

    const toggleFilter = () => {
        setShowFilter(prev => !prev);
        if (showFilter) {
            setCity('');
            setTuitionFee('');
            setFilteredUniversities(universities);
        }
    };

    const handleFilter = () => {
        const result = universities.filter(uni => {
            return (
                (city === '' || uni.City.toLowerCase() === city.toLowerCase()) &&
                (tuition_fee === '' || parseInt(uni.Tuition_fee) <= parseInt(tuition_fee))
            );
        });

        setFilteredUniversities(result);
        setShowFilter(false); // Hide the filter form after applying filters
    };

    

    return (
        <div className="results-page">
            <div className="top-buttons-container">
                <button className="compare-button" onClick={() => navigate('/compare', { state: { universities: filteredUniversities } })}>Compare Universities</button>
                <div className="filter-container">
                    {!showFilter && (
                        <button className="filter-toggle-button" onClick={toggleFilter}>
                            Advanced Filtering
                        </button>
                    )}
                    {showFilter && (
                        <div className="filter-form">
                            <label>
                                City:
                                <select 
                                    value={city} 
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <option value="">Select City</option>
                                    {cities.map((cityName) => (
                                        <option key={cityName} value={cityName}>{cityName}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Tuition Fee (max):
                                <input 
                                    type="number" 
                                    value={tuition_fee} 
                                    onChange={(e) => setTuitionFee(e.target.value)} 
                                />
                            </label>
                            <button className="apply-button" onClick={handleFilter}>Apply</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="results-container">
                <h1>Search Results</h1>
                <ul className="universities-list">
                    {filteredUniversities.length > 0 ? (
                        filteredUniversities.map((uni, index) => (
                            <li key={index} className="university-card">
                                <h2>{uni.University}</h2>
                                <p>City: {uni.City}</p>
                                <p>Tuition Fee: {uni.Tuition_fee}</p>
                                <a href={uni.Website} target="_blank" rel="noopener noreferrer">Website</a>
                            </li>
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SearchResults;
