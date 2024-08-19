import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>
                The University Recommendation System project was designed to help new high school graduates find the university that best suits them. After talking to several of my classmates, I noticed that many complained about not having had the opportunity to choose their university well. This is how the idea of ​​creating this recommendation system was born, collecting as much information as possible to offer a useful and accessible tool.
            </p>

            <h2>Mission and Vision</h2>
            <p><strong>Mission :</strong> Helping students find the best university options in Türkiye.</p>
            <p><strong>Vision :</strong> Become an essential reference for university advice.</p>

            <h2>Developer</h2>
            <p>
                My name is Alimata Olabissi, I am Malian and a 4th year student in the Department of Computer Engineering at Karabük Üniversitesi.
            </p>

            <h2>Our Values</h2>
            <ul>
                <li>Objectivity</li>
                <li>Accessibility</li>
            </ul>

            <h2>Contact us</h2>
            <p>
                For any questions or suggestions, you can contact us by email at <a href="mailto:alimataolabissi@gmail.com">alimataolabissi@gmail.com</a> or visit us at Karabük Üniversitesi, BİLGİ İŞLEM DAİRE BAŞKANLIĞI.
            </p>
        </div>
    );
};

export default AboutUs;
